const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: 'postcss-loader',
        options: {
          ident: 'postcss',
          syntax: 'postcss-scss',
          plugins: () => [
            require('postcss-import'),
            require('tailwindcss'),
            require('autoprefixer'),
          ]
        }
      },
      /*{
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "less-loader",
            options: {
              lessOptions: {
              },
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                  ],
                ],
              },
            },
          },
        ],
      },*/
      /*{
        test: /\.less$/,
        loader: 'postcss-loader',
        options: {
          lessOptions: {
            ident: 'postcss',
            syntax: 'postcss-less',
            plugins: [
              require('postcss-import'),
              require('tailwindcss'),
              require('autoprefixer'),
            ],
          },
        },
        // options: {
        //   ident: 'postcss',
        //   syntax: 'postcss-less',
        //   plugins: () => [
        //     require('postcss-import'),
        //     require('tailwindcss'),
        //     require('autoprefixer'),
        //   ]
        // }
      },*/
      // {
      //   test: /\.less$/,
      //   use: ExtractTextPlugin.extract({
      //     fallback: 'style-loader',
      //     use: ['css-loader', {
      //       loader: 'postcss-loader',
      //       options: {
      //         plugins: [
      //           require('postcss-import'),
      //           require('tailwindcss'),
      //           require('autoprefixer')({
      //             browsers: ['last 5 versions']
      //           })
      //         ]
      //       }
      //     },
      //       {loader: 'less-loader'},
      //     ]
      //   })
      // }
    ]
  }
};
