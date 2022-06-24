const path = require('path') // подключаем path к конфигу вебпак
const HtmlWebpackPlugin = require('html-webpack-plugin') //подключаем плагин для обработки HTML
const { CleanWebpackPlugin } = require('clean-webpack-plugin') // плагин для очистки папки dist
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // для работы с CSS

module.exports = {
  entry: { main: './src/index.js' }, // Точка входа
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '',
  },
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, './dist'), // путь, куда "смотрит" режим разработчика
    port: 8080, // порт в режиме разработки
    open: true, // автозапуск
  },
  module: {
    // массив правил
    rules: [
      {
        test: /\.js$/, // регулярное выражение, которое ищет все js файлы
        use: 'babel-loader', // при обработке этих файлов используем babel-loader
        exclude: '/node_modules', // папка исключения
      },
      {
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/, // регулярное выражение, которое ищет все файлы с такими расширениями
        type: 'asset/resource',
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { importLoaders: 1 },
          },
          'postcss-loader',
        ],
      },
    ],
  },
  plugins: [
    // Подключение плагинов
    new HtmlWebpackPlugin({
      template: './src/index.html', // путь к index.html в качестве шаблона
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
  ],
}
