var gm = require("gm");
var tesseract = require("node-tesseract");
var d = new Date().getTime();
gm("http://www.iyingdi.cn/code?v=" + d)
  .write("img/1.jpg", err => {
    if (err) console.log(err);
  });
let options = { psm: 7 };
tesseract.process("img/1.jpg", options, (err, text) => {
  if (err) {
    console.log(err);
  } else {
    console.log(text);
  }
});
