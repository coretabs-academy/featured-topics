let articles = [
    {
        id: 1,
        title: 'ما هو هدفك من البرمجة؟',
        pic: 'https://source.unsplash.com/random/300x300?sig=1&abstract',
        link: 'https://forums.coretabs.net/t/ما-هو-هدفك-من-البرمجة؟/2927/4',
        author: {
            name: 'Makhloufi Smail',
            profile_url: 'https://forums.coretabs.net/u/makhlouf',
            avatar_url: 'https://forums.coretabs.net/user_avatar/forums.coretabs.net/makhlouf/45/1545_2.png'
        }
    },
    {
        id: 2,
        title: '5 قصص نجاح ستبين لك أن الوقت ليس متأخرا أبدا',
        pic: 'https://source.unsplash.com/random/300x300?sig=2&abstract',
        link: 'https://forums.coretabs.net/t/5-قصص-نجاح-ستبين-لك-أن-الوقت-ليس-متأخرا-أبدا-من-أجل-بداية-جديدة/1785',
        author: {
            name: 'Hichem Ahmed',
            profile_url: 'https://forums.coretabs.net/u/hichem2h',
            avatar_url: 'https://forums.coretabs.net/user_avatar/forums.coretabs.net/hichem2h/45/2008_2.png'
        }
    },
    {
        id: 3,
        title: 'كيف قمت ببناء متجري الالكتروني بجانقو',
        pic: 'https://source.unsplash.com/random/300x300?sig=3&abstract',
        link: 'https://forums.coretabs.net/t/%D9%85%D8%AA%D8%AC%D8%B1%D9%8A-%D8%A7%D9%84%D8%A7%D9%88%D9%84/2740',
        author: {
            name: 'Asmaa Salih',
            profile_url: 'https://forums.coretabs.net/u/asmaa_salih',
            avatar_url: 'https://forums.coretabs.net/user_avatar/forums.coretabs.net/asmaa_salih/45/1657_2.png'
        }
    },
    {
        id: 4,
        title: 'كيف تقوم بعمل Template للمواقع',
        pic: 'https://source.unsplash.com/random/300x300?sig=4&abstract',
        link: 'https://forums.coretabs.net/t/سلسلة-template/2916',
        author: {
            name: 'Tarek Amro',
            profile_url: 'https://forums.coretabs.net/u/tarekamro',
            avatar_url: 'https://forums.coretabs.net/user_avatar/forums.coretabs.net/tarekamro/120/1991_2.png'
        }
    },
    {
        id: 5,
        title: 'أنظمة التعرف على الكلام',
        pic: 'https://source.unsplash.com/random/300x300?sig=5&abstract',
        link: 'https://forums.coretabs.net/t/أنظمة-التعرف-على-الكلام/2821',
        author: {
            name: 'Makhloufi Smail',
            profile_url: 'https://forums.coretabs.net/u/makhlouf',
            avatar_url: 'https://forums.coretabs.net/user_avatar/forums.coretabs.net/makhlouf/45/1545_2.png'
        }
    },
    {
        id: 6,
        title: 'أودو، إطار عمل رائع',
        pic: 'https://source.unsplash.com/random/300x300?sig=6&abstract',
        link: 'https://forums.coretabs.net/t/%D8%A3%D9%88%D8%AF%D9%88%D8%8C-%D8%A5%D8%B7%D8%A7%D8%B1-%D8%B9%D9%85%D9%84-%D8%B1%D8%A7%D8%A6%D8%B9/2816',
        author: {
            name: 'Makhloufi Smail',
            profile_url: 'https://forums.coretabs.net/u/makhlouf',
            avatar_url: 'https://forums.coretabs.net/user_avatar/forums.coretabs.net/makhlouf/45/1545_2.png'
        }
    },
    {
        id: 7,
        title: '4 إطارات عمل frameworks يجب عليك معرفتها في 2019',
        pic: 'https://source.unsplash.com/random/300x300?sig=7&abstract',
        link: 'https://forums.coretabs.net/t/4-إطارات-عمل-frameworks-يجب-عليك-معرفتها-في-2019/1663',
        author: {
            name: 'Yaser AlNajjar',
            profile_url: 'https://forums.coretabs.net/u/YaserAlnajjar',
            avatar_url: 'https://forums.coretabs.net/user_avatar/forums.coretabs.net/yaseralnajjar/45/1862_2.png'
        }
    },
    {
        id: 8,
        title: 'العملاء والعمل الحر',
        pic: 'https://source.unsplash.com/random/300x300?sig=8&abstract',
        link: 'https://forums.coretabs.net/t/%D8%A7%D9%84%D8%B9%D9%85%D9%84%D8%A7%D8%A1-%D9%88%D8%A7%D9%84%D8%B9%D9%85%D9%84-%D8%A7%D9%84%D8%AD%D8%B1/2789',
        author: {
            name: 'Hussein Arasi',
            profile_url: 'https://forums.coretabs.net/u/Hussien',
            avatar_url: 'https://forums.coretabs.net/user_avatar/forums.coretabs.net/hussien/45/1525_2.png'
        }
    },
    {
        id: 9,
        title: 'خطوتك الاولى لبناء مشروعك',
        pic: 'https://source.unsplash.com/random/300x300?sig=9&abstract',
        link: 'https://forums.coretabs.net/t/%D8%AE%D8%B7%D9%88%D8%AA%D9%83-%D8%A7%D9%84%D8%A7%D9%88%D9%84%D9%89-%D9%84%D8%A8%D9%86%D8%A7%D8%A1-%D9%85%D8%B4%D8%B1%D9%88%D8%B9%D9%83/2733',
        author: {
            name: 'Malek Salem',
            profile_url: 'https://forums.coretabs.net/u/malek.salem',
            avatar_url: 'https://forums.coretabs.net/user_avatar/forums.coretabs.net/malek.salem/45/1764_2.png'
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
            <a href="${article.author.profile_url}" target="_parent">
                <figure class="article__author-pic">
                    <img src="${article.author.avatar_url}" alt="${article.author.name}">    
                </figure>
            </a>
        </div>

        <a href="${article.link}" class="article__link"  target="_parent">
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

var elem = document.querySelector('.articles-wrapper__carousel');
var flkty = new Flickity(elem, {
  // options
  cellAlign: 'right',
  contain: true,
  freeScroll: true,
  pageDots: false,
  rightToLeft: true
});
