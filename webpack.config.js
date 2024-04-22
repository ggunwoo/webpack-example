// --entry ./source/index.js -o ./public/index_bundle.js

// npx webpack 으로 실행 명령

const path = require("path");

module.exports = {
  mode: "development",
  entry: "./source/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "index_bundle.js",
    // __dirname: 현재 이 웹팩이 webpack.config.js 위치하고있는 경로를 알려주는 약속된 변수
    // "public": 하위 경로에 우리의 최종적인 결과물을 갔다놓기위한 폴더
  },
  module: {
    rules: [
      {
        test: /\.css$/, // webpack을 통해서 가공하는 여러가지 데이터 중에서 확장자가 css인 파일을 알려줄땐 test
        use: ["style-loader", "css-loader"], //
        // css-loader: css파일을 읽어와서 webpack으로 가져오는 녀석
        // style-loader: 그렇게 가져온 css코드를 웹페이지안에 style태그로 주입해주는 녀석
      },
    ],
  },
};
