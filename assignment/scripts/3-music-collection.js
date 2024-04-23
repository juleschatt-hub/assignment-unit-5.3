console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

//Declaring my empty collection array
let myCollection = []

function addToCollection(collection, title, artist, yearPublished) {
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  }

  collection.push(album);
  return album;
} //end addToCollection


//populating "myCollections" array with six albums
addToCollection(myCollection, 'Coloring Book', 'Chance the Rapper', 2016);
addToCollection(myCollection, 'ADHD', 'Joyner Lucas', 2020);
addToCollection(myCollection, 'Twistin the Night Away', 'Sam Cooke', 1962);
addToCollection(myCollection, 'Steal Your Face', 'Grateful Dead', 1976);
addToCollection(myCollection, 'Blood Sugar Sex Magik', 'Red Hot Chilli Peppers', 1991);
addToCollection(myCollection, 'Ready to Die', 'Notorious BIG', 1994);

//testing array population with console.log()
console.log(myCollection);

function showCollection(collection) {
  for(let album of collection) {
    console.log('TITLE: ' + album.title + ' ' + 'ARTIST: ' + album.artist + ' ' + 'PUBLISHED: ' + album.yearPublished);
  }
} //end showCollection

showCollection(myCollection);

function findByArtist(collection, artist) {
  let match = [];
  for(let album of collection) {
    if(artist === album.artist) {
      match.push(album);
    }
  }
  console.log('Match Array:', match);
  return match;
} //end findByArtist

//test with match
findByArtist(myCollection, 'Red Hot Chilli Peppers');
//test without match
findByArtist(myCollection, 'No Match');












// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
