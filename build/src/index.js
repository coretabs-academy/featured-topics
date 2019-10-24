const ARTICLES_DEP =
  "https://forums.coretabs.net/c/articles/l/top/monthly.json";
const QUESTIONS_DEP =
  "https://forums.coretabs.net/c/questions/l/top/monthly.json";

let topics = [];

let articlePosts = fetchTopics(ARTICLES_DEP).then(data => {
  let sortedArray = sortTopics(data.topics);
  let articlesTopics = sortedArray.slice(0, 10);

  // Store All authors in this department to filter it out later
  let authors = data.authors;

  // Put author details in topic
  articlesTopics.map((topic, index) => {
    return (topic.author = authors.filter(author => {
      return author.id === topic.posters[0].user_id;
    })[0]);
  });

  // Merge previous & new topics together and sort them
  return articlesTopics;
});

let questions = fetchTopics(QUESTIONS_DEP).then(data => {
  let sortedArray = sortTopics(data.topics);
  let qustionsTopics = sortedArray.slice(0, 5);
  // Store All authors in this department to filter it out later
  let authors = data.authors;
  // Put author details in topic
  qustionsTopics.map((topic, index) => {
    return (topic.author = authors.filter(author => {
      return author.id === topic.posters[0].user_id;
    })[0]);
  });
  // Merge previous & new topics together and sort them
  return qustionsTopics;
});

async function fetchTopics(departmentUrl) {
  let response = await fetch(departmentUrl);
  let data = await response.json();
  return { topics: data.topic_list.topics, authors: data.users };
}

function sortTopics(topics) {
  return topics.sort((a, b) => {
    return new Date(b.bumped_at) - new Date(a.bumped_at);
  });
}

Promise.all([articlePosts, questions])
  .then(topics => {
    topics = topics[0].concat(topics[1]);
    for (let topic of topics) {
      let topicUrl = `https://forums.coretabs.net/t/${topic.slug}/${topic.id}`;
      topic.title = topic.title;
      topic.topic_url = topicUrl;
      topic.pic = `https://source.unsplash.com/random/300x300?sig=${topic.id}&programming`;
      topic.author = Object.assign({}, topic.author);
      topic.author.avatar_url = `https://forums.coretabs.net/${topic.author.avatar_template.replace(
        /{.*}/,
        45
      )}`;
      topic.author.profile_url = `https://forums.coretabs.net/u/${topic.author.username}`;
    }
    return topics;
  })
  .then(articles => {
    let list = document.querySelector(".articles-wrapper__carousel");
    const truncateString = (str, num) =>
      str.length > num ? str.slice(0, num > 3 ? num - 3 : num) + "..." : str;
    for (let article of articles) {
      let articleItemElement = document.createElement("article");
      articleItemElement.className = "article";
      let articleTitle = truncateString(article.title, 60);
      let avatar_url = article.author.avatar_url;
      articleItemElement.innerHTML = `
            <div class="article__meta">
                <a href="${article.author.profile_url}" target="_parent">
                    <figure class="article__author-pic">
                        <img src="${article.author.avatar_url}" alt="${article.author.name}">    
                    </figure>
                </a>
            </div>
            <a href="${article.topic_url}" class="article__link"  target="_parent">
                <div class="article__body">
                    <p class="article__title">${articleTitle}</p>
                </div>
            </a>
            <div class="article__meta">
                <span class="article__author-name">${article.author.name}</span>
            </div>
            <div class="tint">
                <img src="${article.pic}" alt="${articleTitle}"/>                
            </div>
        `;
      list.appendChild(articleItemElement);
    }
    var elem = document.querySelector(".articles-wrapper__carousel");
    var flkty = new Flickity(elem, {
      // options
      cellAlign: "right",
      contain: true,
      freeScroll: true,
      pageDots: false,
      rightToLeft: true
    });
  });
