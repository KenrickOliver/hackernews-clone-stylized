import { viewPath, viewCont} from '../utils/view.js';

export default function Favorites() {
    viewPath.innerHTML = '/favorites'
    viewCont.innerHTML = `<div>Favorites go here</div>`  
  }