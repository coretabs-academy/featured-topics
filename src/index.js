let articles = [
    {
        id: 1,
        title: 'تجربة اجتماعية محبطة (العرب ماجستير في الإفتاء)',
        pic: 'https://source.unsplash.com/random/300x300?sig=1',
        link: 'https://forums.coretabs.net/t/2848',
        author: {
            name: 'Nasr Galal',
            profile_url: 'https://forums.coretabs.net/u/sniperadmin',
            avatar_url: 'https://forums.coretabs.net/user_avatar/forums.coretabs.net/sniperadmin/45/1166_2.png'
        }
    },
    {
        id: 2,
        title: 'أنظمة التعرف على الكلام',
        pic: 'https://source.unsplash.com/random/300x300?sig=2',
        link: 'https://forums.coretabs.net/t/أنظمة-التعرف-على-الكلام/2821',
        author: {
            name: 'Makhloufi Smail',
            profile_url: 'https://forums.coretabs.net/u/makhlouf',
            avatar_url: 'https://forums.coretabs.net/user_avatar/forums.coretabs.net/makhlouf/45/1545_2.png'
        }
    },
    {
        id: 3,
        title: 'أودو، إطار عمل رائع',
        pic: 'https://source.unsplash.com/random/300x300?sig=3',
        link: 'https://forums.coretabs.net/t/%D8%A3%D9%88%D8%AF%D9%88%D8%8C-%D8%A5%D8%B7%D8%A7%D8%B1-%D8%B9%D9%85%D9%84-%D8%B1%D8%A7%D8%A6%D8%B9/2816',
        author: {
            name: 'Makhloufi Smail',
            profile_url: 'https://forums.coretabs.net/u/makhlouf',
            avatar_url: 'https://forums.coretabs.net/user_avatar/forums.coretabs.net/makhlouf/45/1545_2.png'
        }
    },
    {
        id: 4,
        title: 'زيادة فرصك كمطور: مشاريعك في البروفايل',
        pic: 'https://source.unsplash.com/random/300x300?sig=4',
        link: 'https://forums.coretabs.net/t/%D8%B2%D9%8A%D8%A7%D8%AF%D8%A9-%D9%81%D8%B1%D8%B5%D9%83-%D9%83%D9%85%D8%B7%D9%88%D8%B1-%D9%85%D8%B4%D8%A7%D8%B1%D9%8A%D8%B9%D9%83-%D9%81%D9%8A-%D8%A7%D9%84%D8%A8%D8%B1%D9%88%D9%81%D8%A7%D9%8A%D9%84/2485',
        author: {
            name: 'Yaser AlNajjar',
            profile_url: 'https://forums.coretabs.net/u/YaserAlnajjar',
            avatar_url: 'https://forums.coretabs.net/user_avatar/forums.coretabs.net/yaseralnajjar/45/1862_2.png'
        }
    },
    {
        id: 5,
        title: 'العملاء والعمل الحر',
        pic: 'https://source.unsplash.com/random/300x300?sig=5',
        link: 'https://forums.coretabs.net/t/%D8%A7%D9%84%D8%B9%D9%85%D9%84%D8%A7%D8%A1-%D9%88%D8%A7%D9%84%D8%B9%D9%85%D9%84-%D8%A7%D9%84%D8%AD%D8%B1/2789',
        author: {
            name: 'Hussein Arasi',
            profile_url: 'https://forums.coretabs.net/u/Hussien',
            avatar_url: 'https://forums.coretabs.net/user_avatar/forums.coretabs.net/hussien/45/1525_2.png'
        }
    },
    {
        id: 6,
        title: 'خطوتك الاولى لبناء مشروعك',
        pic: 'https://source.unsplash.com/random/300x300?sig=6',
        link: 'https://forums.coretabs.net/t/%D8%AE%D8%B7%D9%88%D8%AA%D9%83-%D8%A7%D9%84%D8%A7%D9%88%D9%84%D9%89-%D9%84%D8%A8%D9%86%D8%A7%D8%A1-%D9%85%D8%B4%D8%B1%D9%88%D8%B9%D9%83/2733',
        author: {
            name: 'Malek Salem',
            profile_url: 'https://forums.coretabs.net/u/malek.salem',
            avatar_url: 'https://forums.coretabs.net/user_avatar/forums.coretabs.net/malek.salem/45/1764_2.png'
        }
    },
    {
        id: 7,
        title: 'كيف قمت ببناء متجري الالكتروني بجانقو',
        pic: 'https://source.unsplash.com/random/300x300?sig=7',
        link: 'https://forums.coretabs.net/t/%D9%85%D8%AA%D8%AC%D8%B1%D9%8A-%D8%A7%D9%84%D8%A7%D9%88%D9%84/2740',
        author: {
            name: 'Asmaa Salih',
            profile_url: 'https://forums.coretabs.net/u/asmaa_salih',
            avatar_url: 'https://forums.coretabs.net/user_avatar/forums.coretabs.net/asmaa_salih/45/1657_2.png'
        }
    },
    {
        id: 8,
        title: 'كيف تصبح المبرمج العبقري المطلوب في كل الشركات',
        pic: 'https://source.unsplash.com/random/300x300?sig=8',
        link: 'https://forums.coretabs.net/t/%D9%83%D9%8A%D9%81-%D8%AA%D8%B5%D8%A8%D8%AD-%D8%A7%D9%84%D9%85%D8%A8%D8%B1%D9%85%D8%AC-%D8%A7%D9%84%D8%B9%D8%A8%D9%82%D8%B1%D9%8A-%D8%A7%D9%84%D9%85%D8%B7%D9%84%D9%88%D8%A8-%D9%81%D9%8A-%D9%83%D9%84-%D8%A7%D9%84%D8%B4%D8%B1%D9%83%D8%A7%D8%AA/2714',
        author: {
            name: 'Hichem Ahmed',
            profile_url: 'https://forums.coretabs.net/u/hichem2h',
            avatar_url: 'https://forums.coretabs.net/user_avatar/forums.coretabs.net/hichem2h/45/2008_2.png'
        }
    },
    {
        id: 9,
        title: 'التطوع في مواقع الفريلانسر وموقع الامم المتحدة',
        pic: 'https://source.unsplash.com/random/300x300?sig=9',
        link: 'https://forums.coretabs.net/t/%D8%A7%D9%84%D8%AA%D8%B7%D9%88%D8%B9-%D9%81%D9%8A-%D9%85%D9%88%D8%A7%D9%82%D8%B9-%D8%A7%D9%84%D9%81%D8%B1%D9%8A%D9%84%D8%A7%D9%86%D8%B3%D8%B1-%D9%88%D9%85%D9%88%D9%82%D8%B9-%D8%A7%D9%84%D8%A7%D9%85%D9%85-%D8%A7%D9%84%D9%85%D8%AA%D8%AD%D8%AF%D8%A9/2737',
        author: {
            name: 'Hussein Arasi',
            profile_url: 'https://forums.coretabs.net/u/Hussien',
            avatar_url: 'https://forums.coretabs.net/user_avatar/forums.coretabs.net/hussien/45/1525_2.png'
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
