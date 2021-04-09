import axios from "axios"

const Tabs = (topics) => {
  //Instantiate
  const tabTopics = document.createElement('div')
  //CSS CLASS
  tabTopics.classList.add('topics')




    console.log(topics)
     //INSTANTIATE TAB
    const tabTab = document.createElement('div')
    //VALUE SET TAB
    tabTab.textContent = topics
    //CSS CLASS TAB
    tabTab.classList.add('tab')
    //HIERARCHY TAB
    tabTopics.appendChild(tabTab)
    console.log(topics)
    //return tabTab
  return tabTopics

  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
}

const tabsAppender = (selector) => {
  axios
  .get('https://lambda-times-api.herokuapp.com/topics')
  .then(response => {
    const myTopics = Tabs(response.data)
    const thisTabArea = document.querySelector('.tabs-container')
    thisTabArea.append(myTopics)
  })
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
}

export { Tabs, tabsAppender }
