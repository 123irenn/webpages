function addIt() {
  var list = document.getElementById("list"); //used to grab the parent level "list"
  var li = document.createElement("li"); //creates a "li" in the document
  var userTxt = document.getElementById("myInput"); //used to grab the user text input "product"
  var childText = userTxt.value; //returns the userTxt value and sets it equal to childText
  var childTextNode = document.createTextNode(childText); //creates a textNode in the document based on what the user entered in the "product" text field
  var chkBox = document.createElement("input"); //creates a new input based on the user input
  chkBox.type = "checkbox"; //creates a checkbox next to the user input from "product"
                                  

  chkBox.name = 'food';
  //form the relationship
  li.appendChild(chkBox); //
  li.appendChild(childTextNode); //
  //attach to the parent element
  list.appendChild(li); //
  inputText.value = "";
  inputText.focus();
  reset();
}
function deleteIt(){
  var food = document.getElementsByName('food'); // get the checkbox
  for (i=0; i<food.length; i++) // loop through it
  {
  // if the current state is checked, unchecked and vice-versa
          if (food[i].checked) // if its checked
          {
          var remElm = food[i];   // element to be removed
      var list=document.getElementById("list"); // also li to be removed           
      food[i].nextSibling.nodeValue = ''; // Text value set to 
      remElm.parentNode.removeChild(remElm);
      ul = document.getElementsByTagName('ul')[0];
      li = ul.getElementsByTagName('li');
      ul.removeChild(li[i]);
          } else {       
          }
  }
}
;