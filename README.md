# Open source javascript library

## Strava stats

### Creation

1. Create a github repository
2. Install node
3. Create an account on NPM (https://www.npmjs.com/), NPM commands
  * npm set init-author-name 'Quentin Monmert'
  * npm set init-author-email 'quentin.monmert@gmail.com'
  * npm set init-licence 'MIT'
  * npm set save-exact true
  * npm adduser
  * npm init (package.json is created)
4. Create src/index.js
5. Test
  * $ node
    * > var lib = require('./src/index.js');
    * > lib.athlete
    * > lib.activities
6. Push on github
7. Publishing to NPM
  * npm publish
  * npm info strava-stats
8. Test
  * Create a new folder
  * > npm install strava-stats (create node_modules)
  * > vim index.js
```javascript
var stravaStats = require('strava-stats');
console.log(stravaStats.athlete);
```    
  * > node index.js
9. Releasing a version to github
  * > git tag 1.0.0  
  * > git push --tags
  * Attach this tag to a release on github
10. Releasing a new version to npm
  * Update activities.json
  * Update package.json (version 1.1.0)
  * > git tag 1.1.0
  * > git push --tags
  * > npm publish
  * > npm info strava-stats
11. Testing with mocha and chai
  * > npm install mocha chai --save-dev
  * Create index.test.js
  * Change package.json (test)
  * > npm test
     
