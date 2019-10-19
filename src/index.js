let articles = [
    {
        id: 1,
        title: 'سلسلة التحدي الأسبوعي - التحدي 1',
        pic: 'https://img.freepik.com/free-vector/trophie_53876-25485.jpg?size=338&ext=jpg',
        link: 'https://forums.coretabs.net/t/سلسلة-التحدي-الأسبوعي-التحدي-1/3151/3',
        author: {
            name: 'مجتمع كورتابز',
            profile_url: 'https://coretabs.net',
            avatar_url: 'https://forums.coretabs.net/uploads/default/original/1X/7aff4233bdc45b6505ba9ea00ef45e323b569e6d.png'
        }
    },
    {
        id: 2,
        pic: 'https://source.unsplash.com/random/300x300?sig=1&programming',
        title: 'تطبيقي Vue-commerce (متجر الكتروني) + الروابط',
        link: 'https://forums.coretabs.net/t/تطبيقي-vue-commerce-متجر-الكتروني-الروابط/3060',
        author: {
            name: 'Nasr Galal',
            profile_url: 'https://forums.coretabs.net/u/sniperadmin',
            avatar_url: 'https://forums.coretabs.net/user_avatar/forums.coretabs.net/sniperadmin/120/2258_2.png'
        }
    },
    {
        id: 3,
        title: 'مميزات قد لا تعرفها عن css (الدرس الاول)',
        pic: 'https://source.unsplash.com/random/300x300?sig=3&programming',
        link: 'https://forums.coretabs.net/t/مميزات-قد-لا-تعرفها-عن-css-الدرس-الاول/3053',
        author: {
            name: 'ahmed alakbari',
            profile_url: 'https://forums.coretabs.net/u/ahmed-alakbari',
            avatar_url: 'https://forums.coretabs.net/user_avatar/forums.coretabs.net/ahmed-alakbari/120/549_2.png'
        }
    },
    {
        id: 4,
        title: 'ما هو الـ access token؟',
        pic: 'https://source.unsplash.com/random/300x300?sig=4&programming',
        link: 'https://forums.coretabs.net/t/ما-هو-الـ-access-token؟/3035',
        author: {
            name: 'sohep alslamat',
            profile_url: 'https://forums.coretabs.net/u/sohep',
            avatar_url: 'https://forums.coretabs.net/user_avatar/forums.coretabs.net/sohep/120/1282_2.png'
        }
    },
    {
        id: 5,
        title: 'عندما يتحول المبرمج إلى روائي',
        pic: 'https://source.unsplash.com/random/300x300?sig=5&programming',
        link: 'https://forums.coretabs.net/t/عندما-يتحول-المبرمج-إلى-روائي/3033',
        author: {
            name: 'Makhloufi Smail',
            profile_url: 'https://forums.coretabs.net/u/makhlouf',
            avatar_url: 'https://forums.coretabs.net/user_avatar/forums.coretabs.net/makhlouf/45/1545_2.png'
        }
    },
    {
        id: 6,
        title: 'متى نستعمل cookies و local storage؟',
        pic: 'https://source.unsplash.com/random/300x300?sig=6&programming',
        link: 'https://forums.coretabs.net/t/متى-نستعمل-cookies-و-local-storage؟/3066',
        author: {
            name: 'Nasr Galal',
            profile_url: 'https://forums.coretabs.net/u/sniperadmin',
            avatar_url: 'https://forums.coretabs.net/user_avatar/forums.coretabs.net/sniperadmin/120/2258_2.png'
        }
    },
    {
        id: 7,
        title: 'ماهي التقنيات التي يستعملها موقع renderforest.com ؟',
        pic: 'https://source.unsplash.com/random/300x300?sig=7&programming',
        link: 'https://forums.coretabs.net/t/ماهي-التقنيات-التي-يستعملها-موقع-renderforestcom-؟/3056',
        author: {
            name: 'Mahmoud Abu Amsha',
            profile_url: 'https://forums.coretabs.net/u/mahmoudamsha',
            avatar_url: 'https://cdn4.vectorstock.com/i/1000x1000/88/93/user-avatar-anonymous-sign-dark-vector-9548893.jpg'
        }
    },
    {
        id: 8,
        title: 'هل ال cookies يغني عن استخدام vuex ؟',
        pic: 'https://source.unsplash.com/random/300x300?sig=8&programming',
        link: 'https://forums.coretabs.net/t/هل-ال-cookies-يغني-عن-استخدام-vuex-؟/3063/4',
        author: {
            name: 'sohep alslamat',
            profile_url: 'https://forums.coretabs.net/u/sohep',
            avatar_url: 'https://forums.coretabs.net/user_avatar/forums.coretabs.net/sohep/120/1282_2.png'
        }
    },
    {
        id: 9,
        title: 'مكتبة scikit-learn لتعليم الآلة',
        pic: 'https://source.unsplash.com/random/300x300?sig=9&programming',
        link: 'https://forums.coretabs.net/t/مكتبة-scikit-learn-لتعليم-الآلة/3036/',
        author: {
            name: 'Makhloufi Smail',
            profile_url: 'https://forums.coretabs.net/u/makhlouf',
            avatar_url: 'https://forums.coretabs.net/user_avatar/forums.coretabs.net/makhlouf/45/1545_2.png'
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
