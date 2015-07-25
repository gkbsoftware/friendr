1. Create express app
      express friender
2. Install dependencies
      npm install
3. created readme.md
4. add nodemon
      "scripts": {
        "start": "nodemon ./bin/www"
      },
5. add react
      npm install express-react-views react --save
6. change jade views to jsx and set up view engine in app.js
      app.set('views', __dirname + '/views');
      app.set('view engine', 'jsx');
      app.engine('jsx', require('express-react-views').createEngine());
7. 
