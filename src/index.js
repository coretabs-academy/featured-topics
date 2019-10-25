let topTopics = fetchTopics("https://forums.coretabs.net/top/monthly.json").then(data => {
  // Sort Topics by pinned status then by date
  let sortedArray = sortTopics(data.topics);
  
  // Filter Topics by 12, 16 and 19 Categories
  let categorizedTopics = sortedArray.filter(function(topic) {
    return topic.category_id === 12 || topic.category_id === 16 || topic.category_id === 19
  });

  // Get First 12 Topics 
  let latestTopics = categorizedTopics.slice(0, 12);

  // Store All authors in this department to filter it out later
  let authors = data.authors;

  // Put author details in topic
  latestTopics.map(topic => {
    let author = authors.find(author => { return author.id === topic.posters[0].user_id; });
    author.avatar_url = `https://forums.coretabs.net/${author.avatar_template.replace(/{.*}/, 45)}`;
    author.profile_url = `https://forums.coretabs.net/u/${author.username}`;
    
    return topic.author = author;
  });
  
  return latestTopics;
});

async function fetchTopics(departmentUrl) {
  let response = await fetch(departmentUrl);
  let data = await response.json();
  return { topics: data.topic_list.topics, authors: data.users };
}

function sortTopics(topics) {
  return topics.sort((a, b) => {
    if(a.pinned === b.pinned) {
      return new Date(b.bumped_at) - new Date(a.bumped_at);
    } else {
      return a.pinned ? -1 : 1
    }
  });
}

function truncateString(str, num) {
  return str.length > num ? str.slice(0, num > 3 ? num - 3 : num) + "..." : str;
}

window.onload = async function() {
  let list = document.querySelector(".articles-wrapper__carousel");
  
  const topics = await topTopics;
  topics.forEach(function(article) {
    let articleItemElement = document.createElement("article");
    let articleTitle = truncateString(article.title, 60);
    let articleImage = article.tags.includes('التحدي-الأسبوعي') ?
      `https://img.freepik.com/free-vector/trophie_53876-25485.jpg?size=338&ext=jpg` :
      `https://source.unsplash.com/random/300x300?sig=${article.id}&programming`;
    
    articleItemElement.className = "article";
    articleItemElement.innerHTML = `
      <div class="article__meta">
        <a href="${article.author.profile_url}" target="_parent">
          <figure class="article__author-pic">
            <img src="${article.author.avatar_url}" alt="${article.author.name}">    
          </figure>
        </a>
      </div>
      <a href="https://forums.coretabs.net/t/${article.slug}/${article.id}" class="article__link"  target="_parent">
        <div class="article__body">
          <p class="article__title">${articleTitle}</p>
        </div>
      </a>
      <div class="article__meta">
        <span class="article__author-name">${article.author.name}</span>
      </div>
      <div class="tint">
        <img src="${articleImage}" alt="${articleTitle}"/>                
      </div>
    `;

    list.appendChild(articleItemElement);
  });
  
  new Flickity(list, {
    cellAlign: "right",
    contain: true,
    freeScroll: true,
    pageDots: false,
    rightToLeft: true
  });
};

