console.log('javascript file has loaded');

// get the color from the color picker
// SETUP - First, there's some setup. Here we establish some variables, setting up a variable that contains the color we'll set the color well to when we first load up, and then setting up a load handler to do the main startup work once the page is fully loaded.
var colorPicker;
var defaultColor = "#A626D3";
var hexNumber = "FBF3A3";

window.addEventListener("load", startup, false);

// INITIALIZATION - Once the page is loaded, our load event handler, startup(), is called:
function startup() {
  colorPicker = document.querySelector("#colorPicker");
  colorPicker.value = defaultColor;
  colorPicker.addEventListener("input", updateFirst, false);
  colorPicker.addEventListener("change", updateAll, false);
  colorPicker.select();
}

// We provide two functions that deal with color changes. The updateFirst() function is called in response to the input event. It changes the color of the first paragraph element in the document to match the new value of the color input. Since input events are fired every time an adjustment is made to the value (for example, if the brightness of the color is increased), these will happen repeatedly as the color picker is used.
function updateFirst(event) {
  console.log("the event target value is:", event.target.value);

  let str = event.target.value;
  hexNumber = str.slice(1,7);
  console.log("the hexNumber value is:", hexNumber);
}

// When the color picker is dismissed, indicating that the value will not be changing again (unless the user re-opens the color picker), a change event is sent to the element. We handle that event using the updateAll() function, using Event.target.value to obtain the final selected color:
 function updateAll(event) {
  let str = event.target.value;
  hexNumber = str.slice(1,7);
  console.log("the final hexNumber value is:", hexNumber);
 }


// get the mode from the modeSelector dropdown menu
// activate button to retrive API data
console.log(hexNumber);
fetch(`https://www.thecolorapi.com/id?hex=${hexNumber}`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });

/*
  fetch("https://www.thecolorapi.com/id?hex=0000ff")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
 */