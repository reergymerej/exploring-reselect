just playing with reselect

yarn to install

./index.js to run

./node_modules/.bin/nodemon to run in watch mode


## Result

```
getFiltered - calculates each time
⚠️  calculating getFiltered
[ 1, 3, 5 ]
⚠️  calculating getFiltered
[ 1, 3, 5 ]
⚠️  calculating getFiltered
[ 1, 3, 5 ]

changing state
⚠️  calculating getFiltered
[ 2, 4, 6, 8 ]
⚠️  calculating getFiltered
[ 2, 4, 6, 8 ]
⚠️  calculating getFiltered
[ 2, 4, 6, 8 ]

memoizedGetFiltered - only recalcs when inputs change
⚠️  calculating getFiltered
[ 2, 4, 6, 8 ]
[ 2, 4, 6, 8 ]
[ 2, 4, 6, 8 ]

changing state
⚠️  calculating getFiltered
[ 1, 3 ]
[ 1, 3 ]
[ 1, 3 ]
```
