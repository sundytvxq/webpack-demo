const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
module.exports = {
  mode: "development",
  //定义打包模式
  entry: {
    index: "./src/index.js",
  },
  //入口文件
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  //出口文件
  module: {
    //定义在webpack里使用的加载器loaders
    rules: [
      //定义转化文件的规则，添加模块的配置规则,对文件的扩展名进行过滤
      {
        test: /\.scss$/,
        use: [
          "style-loader", //将js字符串生成style节点，
          "css-loader", //将css文件转化为commonjs的语法
          "sass-loader", //将scss语法转化为css语法
        ],
      },
      {
        test: /\.(jpg|png|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000, //图片大小大于8kb的时候会把图片直接输出在dist文件夹下，如果小于8kb的时候就输出为base64位编码
              name: "images/[name].[ext]",
              //图片输出在dist文件夹下的路径
            },
          },
        ],
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2)$/,
        use: "url-loader",
        //对字体图标文件进行转化
      },
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
    ],
  },

  devServer: {
    //   定义热更新
    contentBase: path.join(__dirname, "dist"), //定义热更新服务器文件夹

    hot: true, //是否启用热更新
    host: "localhost", //主机号
    port: "8080", //端口号
    compress: true, //是否对所有资源进行压缩
    progress: true, //是否显示进度
    open: true, //完成后是否自动打开浏览器
  },
  plugins: [
    new HtmlWebpackPlugin({
      //   实例化插件html-webpack-plugin
      template: "./index.html",
      //   定义模板
      filename: "index.html",
      //   定义输出的文件名字
      minify: {
        removeAttributeQuotes: true, //是否去除双引号
        collapseWhitespace: true, //是否变成一行
      },
      //   对html文件进行打包
      hash: true,
      //路径后是否需要添加hash
    }),
    new VueLoaderPlugin(),
  ],
};
