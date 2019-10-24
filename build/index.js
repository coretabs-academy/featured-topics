"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var ARTICLES_DEP = "https://forums.coretabs.net/c/articles/l/top/monthly.json";
var QUESTIONS_DEP = "https://forums.coretabs.net/c/questions/l/top/monthly.json";
var topics = [];
var articlePosts = fetchTopics(ARTICLES_DEP).then(function (data) {
  var sortedArray = sortTopics(data.topics);
  var articlesTopics = sortedArray.slice(0, 10); // Store All authors in this department to filter it out later

  var authors = data.authors; // Put author details in topic

  articlesTopics.map(function (topic, index) {
    return topic.author = authors.filter(function (author) {
      return author.id === topic.posters[0].user_id;
    })[0];
  }); // Merge previous & new topics together and sort them

  return articlesTopics;
});
var questions = fetchTopics(QUESTIONS_DEP).then(function (data) {
  var sortedArray = sortTopics(data.topics);
  var qustionsTopics = sortedArray.slice(0, 5); // Store All authors in this department to filter it out later

  var authors = data.authors; // Put author details in topic

  qustionsTopics.map(function (topic, index) {
    return topic.author = authors.filter(function (author) {
      return author.id === topic.posters[0].user_id;
    })[0];
  }); // Merge previous & new topics together and sort them

  return qustionsTopics;
});

function fetchTopics(_x) {
  return _fetchTopics.apply(this, arguments);
}

function _fetchTopics() {
  _fetchTopics = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(departmentUrl) {
    var response, data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(departmentUrl);

          case 2:
            response = _context.sent;
            _context.next = 5;
            return response.json();

          case 5:
            data = _context.sent;
            return _context.abrupt("return", {
              topics: data.topic_list.topics,
              authors: data.users
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fetchTopics.apply(this, arguments);
}

function sortTopics(topics) {
  return topics.sort(function (a, b) {
    return new Date(b.bumped_at) - new Date(a.bumped_at);
  });
}

Promise.all([articlePosts, questions]).then(function (topics) {
  topics = topics[0].concat(topics[1]);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = topics[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var topic = _step.value;
      var topicUrl = "https://forums.coretabs.net/t/".concat(topic.slug, "/").concat(topic.id);
      topic.title = topic.title;
      topic.topic_url = topicUrl;
      topic.pic = "https://source.unsplash.com/random/300x300?sig=".concat(topic.id, "&programming");
      topic.author = Object.assign({}, topic.author);
      topic.author.avatar_url = "https://forums.coretabs.net/".concat(topic.author.avatar_template.replace(/{.*}/, 45));
      topic.author.profile_url = "https://forums.coretabs.net/u/".concat(topic.author.username);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return topics;
}).then(function (articles) {
  var list = document.querySelector(".articles-wrapper__carousel");

  var truncateString = function truncateString(str, num) {
    return str.length > num ? str.slice(0, num > 3 ? num - 3 : num) + "..." : str;
  };

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = articles[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var article = _step2.value;
      var articleItemElement = document.createElement("article");
      articleItemElement.className = "article";
      var articleTitle = truncateString(article.title, 60);
      var avatar_url = article.author.avatar_url;
      articleItemElement.innerHTML = "\n            <div class=\"article__meta\">\n                <a href=\"".concat(article.author.profile_url, "\" target=\"_parent\">\n                    <figure class=\"article__author-pic\">\n                        <img src=\"").concat(article.author.avatar_url, "\" alt=\"").concat(article.author.name, "\">    \n                    </figure>\n                </a>\n            </div>\n            <a href=\"").concat(article.topic_url, "\" class=\"article__link\"  target=\"_parent\">\n                <div class=\"article__body\">\n                    <p class=\"article__title\">").concat(articleTitle, "</p>\n                </div>\n            </a>\n            <div class=\"article__meta\">\n                <span class=\"article__author-name\">").concat(article.author.name, "</span>\n            </div>\n            <div class=\"tint\">\n                <img src=\"").concat(article.pic, "\" alt=\"").concat(articleTitle, "\"/>                \n            </div>\n        ");
      list.appendChild(articleItemElement);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
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