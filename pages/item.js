
import { viewPath, viewCont } from '../utils/view.js';
import Story from '../components/Story.js';
import Comment from '../components/Comment.js';


export default async function Item() {
  let story = null;
  let hasComments = false;  
  let hasError = false;
  const path = '/item'
    try { 
        story = await getStory();  
        hasComments = story.comments.length > 0;
    } catch(error) {
        hasError = true; 
        console.error(error);
    } 
    
    if (hasError) {
        viewCont.innerHTML = `<div class="error-text">Error fetching story</div>`;
    }


    viewPath.innerHTML = ` ${path}`;
    viewCont.innerHTML = `
        <div>
            ${Story(story)}
        </div>
        <hr />
        <h2 class="comment-heading">Comments: </h2>
        ${hasComments ? story.comments.map(comment => Comment(comment)).join('') : 'No comments'}
    `;
}

async function getStory() {
    const storyId = window.location.hash.split('?id=')[1];
    const response = await fetch(`https://node-hnapi.herokuapp.com/item/${storyId}`);
    const story = await response.json();
    return story;
  }

