const Card = (article) => {
  //Creating Elements
  const card = document.createElement("div");
  const newHeadline = document.createElement("div");
  const newAuthor = document.createElement("div");
  const newImgContainer = document.createElement("div");
  const newImg = document.createElement("img");
  const newAuthorName = document.createElement("span");
  //Element Hierarchy
  card.appendChild(newHeadline);
  card.appendChild(newAuthor);
  newAuthor.appendChild(newImgContainer);
  newAuthor.appendChild(newAuthorName);
  newImgContainer.appendChild(newImg);
  //Text Content
  newHeadline.textContent = headline;
  newImg.textContent = authorPhoto;
  newAuthorName.textContent = `By ${authorName}`;
  //Event Listener
  card.addEventListener("click", (event) => {
    console.log(headline);
  })


  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
