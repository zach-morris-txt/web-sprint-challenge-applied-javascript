import axios from "axios"

const Card = (article) => {
  //INSTANTIATE
  const cardCard = document.createElement('div')
  const cardHeadline = document.createElement('div')
  const cardAuthor = document.createElement('div')
  const cardIMGContainer = document.createElement('div')
  const cardIMG = document.createElement('img')
  const cardAuthorName = document.createElement('span')

  cardHeadline.textContent = article.headline
  cardIMG.src = article.authorPhoto
  cardAuthorName.textContent = article.authorName

  //CSS CLASS
  cardCard.classList.add('card')
  cardHeadline.classList.add('headline')
  cardAuthor.classList.add('author')
  cardIMGContainer.classList.add('img-container')
  cardIMG.classList.add('img')
  cardAuthorName.classList.add('span')

  //HIERARCHY
  cardCard.appendChild(cardHeadline)
  cardCard.appendChild(cardAuthor)
  cardAuthor.appendChild(cardIMGContainer)
  cardAuthor.appendChild(cardAuthorName)
  cardIMGContainer.appendChild(cardIMG)

  //INTERACTIVITY
  cardIMG.addEventListener('click', (event) => {
    console.log(headline)
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
  axios
    .get('https://lambda-times-api.herokuapp.com/articles')
    .then(response => {
      const articles = response.data.articles
      //articles.forEach(Card => {
        //Card(articles)
      // })
    const myCards = Card(response.data.articles)
    const thisCardArea = document.querySelector('.card-container')
    thisCardArea.append(myCards)
    })
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
