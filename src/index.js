let articles = [
    {
        id: 1,
        title: 'زيادة فرصك كمطور: مشاريعك في البروفايل',
        pic: 'http://source.unsplash.com/random/300x300',
        link: 'http://google.com',
        author: {
            name: 'Yaser AlNajjar',
            profile_url: 'http://facebook.com',
            avatar_url: 'http://source.unsplash.com/random/100x100'
        }
    },
    {
        id: 2,
        title: 'كيفية ترجمة المواقع باستخدام مكتبة jQuery-Localize',
        pic: 'http://source.unsplash.com/random/300x300',
        link: 'http://google.com',
        author: {
            name: 'Nasr Galal',
            profile_url: 'http://facebook.com',
            avatar_url: 'http://source.unsplash.com/random/100x100'
        }
    },
    {
        id: 3,
        title: 'خطوتك الاولى لبناء مشروعك',
        pic: 'http://source.unsplash.com/random/300x300',
        link: 'http://google.com',
        author: {
            name: 'Malek Salem',
            profile_url: 'http://facebook.com',
            avatar_url: 'http://source.unsplash.com/random/100x100'
        }
    },
    {
        id: 4,
        title: 'إطارات عمل frameworks يجب عليك معرفتها في 2019',
        pic: 'http://source.unsplash.com/random/300x300',
        link: 'http://google.com',
        author: {
            name: 'Yaser AlNajjar',
            profile_url: 'http://facebook.com',
            avatar_url: 'http://source.unsplash.com/random/100x100'
        }
    },
    {
        id: 5,
        title: 'كيف تصبح المبرمج العبقري المطلوب في كل الشركات',
        pic: 'http://source.unsplash.com/random/300x300',
        link: 'http://google.com',
        author: {
            name: 'Hichem Ahmed',
            profile_url: 'http://facebook.com',
            avatar_url: 'http://source.unsplash.com/random/100x100'
        }
    },
    {
        id: 6,
        title: 'التطوع في مواقع الفريلانسر وموقع الامم المتحدة',
        pic: 'http://source.unsplash.com/random/300x300',
        link: 'http://google.com',
        author: {
            name: 'Hussein Arasi',
            profile_url: 'http://facebook.com',
            avatar_url: 'http://source.unsplash.com/random/100x100'
        }
    },
];

let list = document.querySelector('.articles-wrapper__carousel');

const truncateString = (str, num) =>
    str.length > num ? str.slice(0, num > 3 ? num - 3 : num) + '...' : str;

for (let article of articles) {
    let articleItemElement = document.createElement('article');
    articleItemElement.className = 'article';

    let articleTitle = truncateString(article.title, 60);

    articleItemElement.innerHTML = `
        <div class="article__meta">
            <a href="${article.author.profile_url}">
                <figure class="article__author-pic">
                    <img src="${article.author.avatar_url}" alt="${article.author.name}">    
                </figure>
                <span class="article__author-name">${article.author.name}</span>
            </a>
        </div>

        <a href="${article.link}" class="article__link">
            <div class="article__body">
                <p class="article__title">${articleTitle}</p>
            </div>
        </a>

        <div class="tint">
            <img src="${article.pic}" alt="${articleTitle}"/>                
        </div>
    `;

    list.appendChild(articleItemElement);
}

var elem = document.querySelector('.articles-wrapper__carousel');
var flkty = new Flickity(elem, {
  // options
  cellAlign: 'right',
  contain: true,
  freeScroll: true,
  pageDots: false,
  rightToLeft: true
});
