
//print divs to the dom
const printToDom = (string, id) => {
  document.getElementById(id).innerHTML = string;
}

//build menu choices from array
const createMenu = (array) => {
  domString ='';
  for (i=0; i < array.length; i++) {
    domString += `<li><a href="">${array[i].type}</a>
                    <ul class="submenu">
                      <li><a href="#" data-business-type="${array[i].type}" data-phase="Now" class="targetMenu">Now</a></li>
                      <li><a href="#" data-business-type="${array[i].type}" data-phase="One" class="targetMenu">Phase One</a></li>
                      <li><a href="#" data-business-type="${array[i].type}" data-phase="Two" class="targetMenu">Phase Two</a></li>
                      <li><a href="#" data-business-type="${array[i].type}" data-phase="Three" class="targetMenu">Phase Three</a></li>
                      <li><a href="#" data-business-type="${array[i].type}" data-phase="Four" class="targetMenu">Phase Four</a></li>
                    </ul>
                  </li>`
  }
  printToDom(domString, "mainmenu");
}

//create divs to be printed and activated
const createDivs = (event) => {
  console.log(event);
  let domString = '';
  const bizObject = businesses.find(business => business.type === event.target.dataset.businessType);
  const phaseStatus = "phase" + event.target.dataset.phase + "Status";
  const phaseNotes = "phase" + event.target.dataset.phase + "Notes";
  domString += `<h1 id="businessName">${bizObject.type}</h1>
                <h3 id="openStatus">${bizObject[phaseStatus]}</h3>
                <ul id="notes">`;
  for (let i=0; i < bizObject[phaseNotes].length; i++) {
    domString += `<li>${bizObject[phaseNotes][i]}</li>`;
  }        
  domString += `<ul>`;
  printToDom(domString, "container");
}

// creates EventListener of specifified element
const createListener = () => {
  const elements = document.getElementsByClassName("targetMenu");
  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', createDivs);
  }
}

const init = () => {
  createMenu(businesses);
  createListener();
}

init();
