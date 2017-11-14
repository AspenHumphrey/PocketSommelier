# PocketSommelier

## Server-Side:  NodeJS, NodeMon, PostgreSQL, Express, Body-Parser, Sequelize
## Front-End: AngularJS, Bootstrap v3.3.7, CSS, Firebase

# About Pocket Sommelier & Problems Solved:
Pocket Sommelier is a basic wine and cheese pairing app. I am new to the world of Wine, Cheese, & Pairings and I wanted to know more. This app is made for the quick grocery store trip helping a user find the perfect pair! With hand collected data made of: 24 cheeses, 16 wines, and 85 total pairs Pocket Sommelier helps the user find their favorite Wine & Cheese Pair! 

### On Page Load
*A user may use the app without being logged into the app. The user will not have the option to save a pair to favorites without being logged in. Registration is available from the navbar on page load. The navbar is available on every page* 

When a new user sees the home page they see a navbar with all of the options: 
  - Register
  - Login
  - Pairs
  - Cheese
  - Wine.
  
When a registered or logged in user sees the home page they see a navbar with the following options: 
  - Pairs
  - Cheese
  - Wine
  - Favorites
  - Logout
  
They also see a Random Pair. This random pair is a perfect pair genorated from the database. The user has the option to keep seeing "Random Pairs" by clicking the Random Pair button OR they can see more details on the pair shown on the screen by clicking the "Pair Details" button. When the user clicks the "Play" button on the cheese or wine image: the pronunciation of that particular wine or cheese will be said.

### Pairs Page
When a user clicks on Pairs in the navbar they are taken to a page where all 85 pairs are listed and the user is able to scroll through all of them. The play button for pronunciation is on every image. If a user is logged in they are able to save a pair. 

## Cheese Page
When a user goes to the Cheese page they have all 24 available Cheese listed with the "play button" along with other details such as: Cheese Name, Type, Flavor Profile;. They are also given a button to "view pairs". This button takes the user to a view that shows the cheese they just cliked on with all available wines that pair with it. On this page they are able to save a pair (if logged in).

## Wine Page
When a user goes to the Wine page they have all 24 available Wine listed with the "play button" along with other details such as: Wine Name, Type, Flavor Profile;. They are also given a button to "view pairs". This button takes the user to a view that shows the wine they just cliked on with all available cheeses that pair with it. On this page they are able to save a pair (if logged in).

## Favorites Page
This page displays all of the saved favorites for that particular logged in user. 

# Challenges and their solutions through this Project:
  The favorites page looks to be the easiest page from the viewers standpoint BUT it was my toughest challenge through this project with the greatest reward. The Favorites page is genorated by the UserFavorites table in my database which is a join table made from the relations between the Users table and the WineCheeses table- the WineCheeses Table is also a join. I had never worked with a join table on a join before, let alone with Postgres. 
  When I was posting to the database I was hopeful in thinking that getting data back from that table would be relativly easy considering I hadn't had any issues with Postgres yet. Unfortunatly, I struggeld for a about 18 hours on getting the data back from the UserFavorites table while trying to use the Postgres method. I had a monolithic 40+ line function with loops within loops and promise alls intertwined. It was brutal. Luckily I remembered that I could do a Raw SQL query. Again I ran into another issue with raw SQL using my Postgres Database. 
  I was trying to stay away from aliases and I did not know that " double quotes " were veiwed as a identifiers and ' single quotes 'as strings. With the help of an instructor at NSS I remembered that I could test in PGAdminIII! More planning and trial & error lead to the finding of the following query which was the final answer and the most rewarding query I have written thus far. With 4 left joins I had finally broken through my barrier and met MVP. 

``` `select w."name" as "wineName", w."image" as "wineImage", c."image", c."name" 
    from "UserFavorites" f 
    left join "Users" u on u.id = f."UserId" 
    left join "WineCheeses" wc on wc.id = f."WineCheeseId" 
    left join "Wines" w on w.id = wc."WineId" 
    left join "Cheeses" c on c.id = wc."CheeseId" 
    where u.id = 1;` ```

## Helpful sites to make this app:
1. http://faberpartner.de/index.php/uebersicht.html
2. http://winefolly.com
3. http://cheese.com 

## Authentication: Token-Based Authentication
### Helpful Links for Token-Based Authentication: 
1. Jufe Brown GitHub Angular Auth: https://github.com/Jufebrown/sequelize-token-auth
2. Jufe Brown GitHub NodeJS Auth: https://github.com/Jufebrown/angular-token-auth/blob/master/app/app.js
2. NodeJS tutorial: http://mherman.org/blog/2016/10/28/token-based-authentication-with-node/#.WfnXFHVSz4g
3. AngularJS tutorial: http://mherman.org/blog/2017/01/05/token-based-authentication-with-angular/#.Wfnc-XVSz4i

# Server-Side Installations:

### NPM 
1. Run npm init -y
2. Run npm install --save -dev

## NodeJS
1. Run npm install node.js

## NodeMon 
1. Run npm install -g nodemon

## Express.js
1. Run npm install express

## Body Parser
1. Run npm install body-parser

## PostgreSQL
1. Run npm install pg

## Sequelize
1. Run npm install sequelize

## Dot Env
1. Run npm install dotenv

## BCRYPTJS
1. Run npm install bcryptjs

## MomentJS
1. Run npm install moment

## JWT-simple
1. Run npm install jwt-simple

# Front-End Installations:
## AngularJS
1. Run npm install angular
2. Add these script tags to your index.html: <script type="text/javascript" src="/node_modules/angular/angular.min.js"></script>
<script type="text/javascript" src="/node_modules/angular-route/angular-route.min.js"></script>

## Angular Route
1. Run npm install --save angular-route
2. Add this script to your index.html: "//ajax.googleapis.com/ajax/libs/angularjs/X.Y.Z/angular-route.js"

## Bootstrap v3.3.7
1. Run npm install bootstrap@3

## jQuery
1. Run npm install jquery

## Responsive Voice 
1. https://responsivevoice.org/

# Version 2 Goals:
1. User will be able to organize/rank thier favorites - [ ] 
2. Add more Cheese & Wine Pairings - [ ]
3. Add Tips & Tricks Section - [ ] 
4. Add Chocolate Pairings - [ ] 
5. Add beer to wine pairing - if you like this beer try this wine! - [ ]
6. Add recipies and desert suggestions for each wine & cheese - [ ]
7. Add a Quizes section:
  - Discover your Pallet! - [ ]
  - How well do you know wine? - [ ]
  - How well do you know cheese? - [ ]
  - What does your favorite pair say about you! - [ ]
8. Add an Introduction page: about Pocket Sommelier and how to use. - [ ]
9. The user will be able to filter Cheese/Wine by type: 
  - on cheese page filter by: soft/semi-soft/semi-hard/hard - [ ]
  - on wine page filter by: red/white - [ ]
10. The user will be able to remove pairs from their favorites - [ ]
11. Add more details to Pairs page - [x]
