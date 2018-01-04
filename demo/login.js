var request = require("superagent");
var md5 = require('md5');
var gm = require("gm");
var tesseract = require("node-tesseract");
var d = new Date().getTime();

// var headers = {
//   Host: "www.iyingdi.cn",
//   Connection: "keep-alive",
//   "Content-Length": "186",
//   Accept:
//     "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
//   Origin: "http://www.iyingdi.cn",
//   "X-Requested-With": "XMLHttpRequest",
//   "User-Agent":
//     "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.108 Safari/537.36",
//   "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
//   Referer: "http://www.iyingdi.cn/",
//   "Accept-Encoding": "gzip, deflate",
//   "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,zh-TW;q=0.7"
// };

// var getCode = function() {
//   return new Promise((resolve, reject) => {
//     gm("http://www.iyingdi.cn/code?v=" + d).write("img/1.jpg", err => {
//       if (err) reject(err);
//     });
//     let options = { psm: 7 };
//     let code;
//     tesseract.process("img/1.jpg", options, (err, text) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(text);
//       }
//     });
//   });
// };

// var login = function(code) {
//   return new Promise((resolve, reject) => {
//     request
//       .get("http://www.iyingdi.cn/user/login/v2")
//       .set(headers)
//       .set({
//         "username":"1062887235",
//         "password":"19C44C10A4BD147354A892EDD43F4D36",
//         "code":code,
//         "system":"web",
//         "appKey":"appKey:e5Q5dMa32s1kyi87o5g1D3Fg1ku5O4RT",
//         "timestamp":new Date().getTime(),
//         "signature":"83FAE58904B319C55B0C7DBDD0529732"
//       })
//       .end(function(res) {
//         if (res) {
//           resolve(res);
//         } else {
//           reject(res);
//         }
//       });
//   });
// };
// getCode()
//   .then(login)
//   .then(text => {
//     console.log(text);
//   })
//   .catch(err => {
//     console.log(err);
//   });

console.log(md5('huyueb').toUpperCase())