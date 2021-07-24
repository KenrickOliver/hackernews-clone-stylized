

export default function Story(story) {
    console.log(story)
    return `
        <div id="posts-container" class="post">
            <div class="number">${story.index}</div>
            <div class="post-info">
                <span class="upvote">▲</span>
                <h2 class="post-title"><a href="${story.url}">${story.title}</a></h2>
                <span>(${story.domain})</span>
                <p class="post-body"></p>
            </div>
            <div class="gray">
                ${story.points} points by ${story.user} ${story.time_ago}
                |
                <a href="#/item?id=${story.id}">
                ${story.comments_count} comments
                </a>
                |
                <span class="favorite">
                <img class="heart" src="">
                Add To Favorites
            </span>
            </div>
        </div>
    `;
}