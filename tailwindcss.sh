
npm install tailwindcss -D
npm install @angular-builders/custom-webpack -D
npm install postcss-scss -D
npm install postcss-import -D
npm install postcss-loader -D
npm install postcss-less -D
npm install autoprefixer -D

ng config projects.tailwindcss-angular-app.architect.build.builder @angular-builders/custom-webpack:browser
ng config projects.tailwindcss-angular-app.architect.build.options.customWebpackConfig.path webpack.config.js
ng config projects.tailwindcss-angular-app.architect.serve.builder @angular-builders/custom-webpack:dev-server
ng config projects.tailwindcss-angular-app.architect.serve.options.customWebpackConfig.path webpack.config.js

npm install tailwindcss postcss autoprefixer
NODE_ENV=production npx tailwindcss-cli@latest build ./src/tailwind.css -o ./src/tailwind.build.css
