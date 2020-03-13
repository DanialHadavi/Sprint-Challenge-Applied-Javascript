// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
  const headerDiv = document.createElement("div"),
    dateSpan = document.createElement("span"),
    title = document.createElement("h1"),
    tem = document.createElement("span");

  headerDiv.classList.add("header");
  dateSpan.classList.add("date");
  tem.classList.add("temp");

  headerDiv.append(dateSpan, title, tem);

  dateSpan.textContent = "SMARCH 28, 2019";
  title.textContent = "Lambda Times";
  tem.textContent = "98°";
  return headerDiv;
}

const headerContainer = document.querySelector(".header-container");
headerContainer.append(Header());
