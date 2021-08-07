import Story from '../components/Story.js';
import { viewPath, viewCont} from '../utils/view.js';
import checkFavorite from '../utils/checkFavorite.js';
import store from '../store.js';


export default async function Stories(path) {
    const { favorites } = store.getState();
    const stories = await getStories(path);
    const hasStories = stories.length > 0;

    viewPath.innerHTML = ` ${path}`;
                      
    viewCont.innerHTML = `<div>
      ${hasStories ? stories.map((story, i) => Story({ ...story, index: i + 1, isFavorite: checkFavorite(favorites, story)})).join('') : 'No stories'}
    </div>`; 
    
    //getting all the "favorites" and add an event listener to EACH one to be able to toggle to and from favs 
    document.querySelectorAll('.favorite').forEach(favoriteButton => {
      favoriteButton.addEventListener('click', async function() {
        const story = JSON.parse(this.dataset.story);  
        const isFavorited = checkFavorite(favorites, story);
        store.dispatch({ type: isFavorited ? "REMOVE_FAVORITE" : "ADD_FAVORITE", payload: { favorite: story } })  
        await Stories(path);
      }); 
   });
  }
  
  async function getStories(path) {
    const isHomeRoute = path === '/';
    const isNewRoute = path === '/new';
    if (isHomeRoute) {
      path = '/news';  
    } else if (isNewRoute) {
      path = '/newest';  
    } 
    const response = await fetch(`https://node-hnapi.herokuapp.com${path}`);
    const stories = await response.json();
    return stories;
  }