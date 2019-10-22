const ARTICLES_DEP = 'https://forums.coretabs.net/c/D8A7D984D985D982D8A7D984D8A7D8AA-D988D8A7D984D986D982D8A7D8B4D8A7D8AA/l/top/weekly.json';
const QUESTIONS_DEP = 'https://forums.coretabs.net/c/D8A7D984D8A3D8B3D8A6D984D8A9-D988D8A7D984D8A7D8B3D8AAD981D8B3D8A7D8B1D8A7D8AA/l/top/weekly.json';

var elem = document.querySelector('.articles-wrapper__carousel');
var flkty = new Flickity(elem, {
// options
cellAlign: 'right',
contain: true,
freeScroll: true,
pageDots: false,
rightToLeft: true
});

function truncateString(str, num) {
    return str.length > num ? str.slice(0, num > 3 ? num - 3 : num) + '...' : str;
}

async function fetchTopics(departmentUrl) {
    let response = await fetch(departmentUrl);
    let data = await response.json();

    return {topics: data.topic_list.topics, authors: data.users};
}

function sortTopics(topics) {
    return topics.sort((a,b) => {
        return new Date(b.bumped_at) - new Date(a.bumped_at);
    });
}

let topics = [];

let articles = fetchTopics(ARTICLES_DEP)
                .then(data => {
                    let sortedArray = sortTopics(data.topics);
                    let articlesTopics = sortedArray.slice(0, 10);

                    // Store All authors in this department to filter it out later
                    let authors = data.authors;

                    // Put author details in topic
                    articlesTopics.map((topic, index) => {
                        return topic.author = authors.filter(author => {
                            return author.id === topic.posters[0].user_id;
                        })[0];
                    });

                    // Merge previous & new topics together and sort them
                    topics = sortTopics([...topics, ...articlesTopics]);

                });

let questions = fetchTopics(QUESTIONS_DEP)
                .then(data => {
                    let sortedArray = sortTopics(data.topics);
                    let qustionsTopics = sortedArray.slice(0, 5);
                    
                    // Store All authors in this department to filter it out later
                    let authors = data.authors;

                    // Put author details in topic
                    qustionsTopics.map((topic, index) => {
                        return topic.author = authors.filter(author => {
                            return author.id === topic.posters[0].user_id;
                        })[0];
                    });

                    // Merge previous & new topics together and sort them
                    topics = sortTopics([...topics, ...qustionsTopics]);

                });


Promise.all([articles, questions]).then(() => {
    let newTopics = [...topics];

    for (let [index, topic] of topics.entries()) {
        let topicUrl = `https://forums.coretabs.net/t/${topic.slug}/${topic.id}`
        
        newTopics[index].title = topic.title;
        newTopics[index].topic_url = topicUrl;
        newTopics[index].pic = `https://source.unsplash.com/random/300x300?sig=${index}&programming`;
    
        // make avatar url from avatar template
        // change {size} to real size (eg, 45)
        newTopics[index].author = Object.assign({}, topic.author)
        newTopics[index].author.avatar_url = `https://forums.coretabs.net/${topic.author.avatar_template.replace(/{.*}/, 45)}`;
        newTopics[index].author.profile_url = `https://forums.coretabs.net/u/${newTopics[index].author.username}`;
        delete newTopics[index].author.avatar_template;

    }

    let list = document.querySelector('.articles-wrapper__carousel');
    (function renderTopics() {
        
        for (let topic of newTopics) {
            let articleItemElement = document.createElement('article');
            articleItemElement.className = 'article';
    
            let topicTitle = truncateString(topic.title, 60);

            articleItemElement.innerHTML = `
                <div class="article__meta">
                    <a href="${topic.author.profile_url}" target="_parent">
                        <figure class="article__author-pic">
                            <img src="${topic.author.avatar_url}" alt="${topic.author.name}">    
                        </figure>
                    </a>
                </div>
    
                <a href="${topic.topic_url}" class="article__link"  target="_parent">
                    <div class="article__body">
                        <p class="article__title">${topicTitle}</p>
                    </div>
                </a>
    
                <div class="article__meta">
                    <span class="article__author-name">${topic.author.name}</span>
                </div>
                
                <div class="tint">
                    <img src="${topic.pic}" alt="${topicTitle}"/>                
                </div>
            `;
    
            list.appendChild(articleItemElement);
        }
    })();
});