// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function newTab(array) {
  const divTab = document.createElement("div");
  divTab.classList.add("tab");
  divTab.textContent = array;

  return divTab;
}

axios
  .get(`https://lambda-times-backend.herokuapp.com/topics`)
  .then(response => {
    console.log(response);
    const myInfo = response.data.topics;
    myInfo.forEach(item => {
      const topics = document.querySelector(".topics");
      const tabInfo = newTab(item);
      console.log(tabInfo);
      topics.appendChild(tabInfo);
    });
  })
  .catch(error => {
    console.log("there is an error", error);
  });
