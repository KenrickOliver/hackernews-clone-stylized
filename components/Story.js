

export default function Story(story) {
    return `
        <div id="posts-container" class="post">
            <div class="number">${story.index || '0'}</div>
            <div class="post-info">
                <h2 class="post-title"><a href="${story.url}">${story.title}</a></h2>
                <span class="post-url">(${story.domain})</span>
                <p class="post-body"></p>
            </div>
            <div class="gray">
                <span class="upvote">▲</span>
                ${story.points || '0'} points by ${story.user || 'unknown'} ${story.time_ago}
                |
                <a href="#/item?id=${story.id}">
                ${story.comments_count || '0'} comments
                </a>
                |
                <span class="favorite" data-story='${JSON.stringify(story)}'>
                ${story.isFavorite ? "Remove From Favorites <i class='bx bxs-heart'></i>"  : "Add To Favorites <i class='bx bx-heart'></i>"} 
                </span>
            </div>
        </div>
    `;
}