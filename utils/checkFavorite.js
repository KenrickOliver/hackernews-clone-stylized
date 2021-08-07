export default function checkFavorite(favorites, story) {
    //.some method checks to see if a condition is true and returns true or false if not
    return favorites.some(favorite => favorite.id === story.id);
}