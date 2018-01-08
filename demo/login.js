var request = require("superagent");
var md5 = require("md5");
var gm = require("gm");
var tesseract = require("node-tesseract");
var d_;

var headers = {
  "User-Agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.108 Safari/537.36"
};

var getCode = function() {
  return new Promise((resolve, reject) => {
    var d = new Date().getTime();
    d_ = d;
    gm("http://www.iyingdi.cn/code?v=" + d).write("img/1.jpg", err => {
      if (err) reject(err);
    });
    let options = {
      psm: 7,
      lang: 'eng'
    };
    let code;
    tesseract.process("img/1.jpg", options, (err, text) => {
      if (err) {
        reject(err);
      } else {
        resolve(text);
      }
    });
  });
};

var login = function(code) {
  return new Promise((resolve, reject) => {
    var time = new Date().getTime();
    var d = parseInt(time/1000);
    if(time>d_){
      console.log(time)
      console.log('==================================')
      console.log(d_)
    }
    console.log(code);
    console.log("password: "+md5("sutUsdflweD"+md5('huyue3315591120').toUpperCase()+"Djklet5").toUpperCase());
    console.log("timestamp: "+d);
    console.log("signature: "+md5("e5Q5dMa32s1kyi87o5g1D3Fg1ku5O4RTW15Jyt87GH1m12rYUki4Fip87s5z142g1Ad4Ut64sR8t4JS54iYu87O7ps5RQ12g"+(d % 111111 + d % 654321) + "1062887235").toUpperCase());


    request
      .post("http://www.iyingdi.cn/user/login/v2")
      .set(headers)
      .field("username","1062887235")
      .field("password",md5("sutUsdflweD"+md5('3315591120')+"Djklet5").toUpperCase())
      .field("system","web")
      .field("appKey","e5Q5dMa32s1kyi87o5g1D3Fg1ku5O4RT")
      .field("timestamp",d)
      .field("code","qx8g")
      .field("signature",md5("e5Q5dMa32s1kyi87o5g1D3Fg1ku5O4RTW15Jyt87GH1m12rYUki4Fip87s5z142g1Ad4Ut64sR8t4JS54iYu87O7ps5RQ12g"+(d % 111111 + d % 654321) + "1062887235").toUpperCase())
      .redirects(0)
      .end(function(err,res) {
        if (res) {
          resolve(res);
        } else {
          reject(err);
        }
      });
  });
};
getCode()
  .then(login)
  .then(text => {
    console.log(text);
  })
  .catch(err => {
    console.log(err.res);
  });
  // login()
  // .then(text => {
  //   console.log(text);
  // })
  // .catch(err => {
  //   console.log(err.res);
  // });

// console.log(md5('huyueb').toUpperCase())
// "username=1062887235&password=xxxx&code=code&system=web&appKey=e5Q5dMa32s1kyi87o5g1D3Fg1ku5O4RT&timestamp=d&signature=xx"
