// --entry ./source/index.js -o ./public/index_bundle.js

const path = require("path");

module.exports = {
  mode: "development",
  entry: "./source/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "index.bundle.js",
    // __dirname : 현재 이 웹팩이 webpack.config.js 위치하고있는 경로를 알려주는 약속된 변수
    // "public": 하위 경로에 우리의 최종적인 결과물을 갔다놓기위한 폴더
  }
}