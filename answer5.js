/*
Using ```.splice()``` :

```js
  var years = [1990, 2015, 1066, 43, 90, 1607]

  ans => [1990, 2015, 1607]

  var movies = ['The Great Escape', 'Love Actually', 'Blade Runner', 'Indiana Jones and the Last Crusade']

  ans => ['The Great Escape', 'Blade Runner', 'Indiana Jones and the Last Crusade']
*/
var years = [1990, 2015, 1066, 43, 90, 1607]

years.splice(2, 3)

console.log(years);

var movies = ['The Great Escape', 'Love Actually', 'Blade Runner', 'Indiana Jones and the Last Crusade']

movies.splice(1, 1);

console.log(movies);
