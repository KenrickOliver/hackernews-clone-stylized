import { viewPath, viewCont} from '../utils/view.js';
import store from '../store.js';
import Story from '../components/Story.js';
import checkFavorite from '../utils/checkFavorite.js';

export default function Favorites() {
    const { favorites } = store.getState();
    const hasFavorites = favorites.length > 0;
    viewPath.innerHTML = '/favorites'
    viewCont.innerHTML = `<div>
    ${hasFavorites ? favorites.map(story => Story({
        ...story,
        isFavorite: checkFavorite(favorites, story)
    })).join('') : "<span class='default-fav'>You have no favorites yet, Add some favorites!</span>"}
  </div>`  
  
   document.querySelectorAll('.favorite').forEach(favoriteButton => {
     favoriteButton.addEventListener('click', function() {
       const story = JSON.parse(this.dataset.story);  
       const isFavorited = checkFavorite(favorites, story);
       store.dispatch({ type: isFavorited ? "REMOVE_FAVORITE" : "ADD_FAVORITE", payload: { favorite: story } })  
       Favorites();
     }); 
  });  
  }