
//print divs to the dom
const printToDom = (string, id) => {
  document.getElementById(id).innerHTML = string;
}

//build menu choices from array
const createMenu = (array) => {
  domString ='';
  for (i=0; i < array.length; i++) {
    domString += `<li>
                  <a href="">${array[i].type}</a>
                  <ul>
                    <li><a href="#" data-business-type="${array[i].type}" data-phase="Now" class="targetMenu">Now</a></li>
                    <li><a href="#" data-business-type="${array[i].type}" data-phase="One" class="targetMenu">Phase One</a></li>
                    <li><a href="#" data-business-type="${array[i].type}" data-phase="Two" class="targetMenu">Phase Two</a></li>
                    <li><a href="#" data-business-type="${array[i].type}" data-phase="Three" class="targetMenu">Phase Three</a></li>
                    <li><a href="#" data-business-type="${array[i].type}" data-phase="Four" class="targetMenu">Phase Four</a></li>
                  </ul>
                  </li>`
  }
  printToDom(domString, "main_nav");
}

//create divs to be printed and activated
const createDivs = (type, phase) => {
  let domString = '';
  const bizObject = businesses.find(business => business.type === type);
  const phaseStatus = "phase" + phase + "Status";
  const phaseNotes = "phase" + phase + "Notes";
  domString += `<h1 id="businessName">${bizObject.type}</h1>`;
  domString += `<h3 id="openStatus">${bizObject[phaseStatus]}</h3>`;
  domString += `<p id="notes">${bizObject[phaseNotes]}</p>`;
  printToDom(domString, "container");
}

// creates EventListener of specifified element
const createListener = () => {
  const elements = document.getElementsByClassName("targetMenu");
  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', function() {
      createDivs(this.dataset.businessType, this.dataset.phase);
    }, false);
  }
}

const init = () => {
  createMenu(businesses);
  createListener();
}

init();
