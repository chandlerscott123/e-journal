
import {Entry, Journal} from "./entry.js";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';


let journal = new Journal();


//iterates through journal's key-value pairs in Journal.entries
function listEntries(journalToDisplay){
  const entryListDiv = document.getElementById("entry-list");
  
  let titleHead, dateHead, preview, seeMore, emphasis, idText;
  

  Object.keys(journalToDisplay.entries).forEach(function(key) {
    const entry = journal.findEntry(key);
    const newEntryDiv= document.createElement("div");
    newEntryDiv.classList.add("entry-item");

    //new elements correspond to structure in index.html
    titleHead = document.createElement("h2");
    titleHead.append(entry.title);
    dateHead=document.createElement("h5");
    dateHead.append(entry.date);
    preview = document.createElement("p");
    preview.append(entry.preview());

    seeMore = document.createElement("span");
    seeMore.classList.add("expand"); // Add the "expand" class instead of an id
    emphasis = document.createElement("strong");
    seeMore.append(emphasis);
    seeMore.append("See More");
    

    newEntryDiv.append(titleHead);
    newEntryDiv.append(dateHead);
    newEntryDiv.append(preview);
    newEntryDiv.append(seeMore);
    idText = "entry"+entry.id;
    console.log("ID: "+ idText);
    newEntryDiv.setAttribute("id", idText);
    entryListDiv.prepend(newEntryDiv);

  });

  
  
}


function displayFullEntry(event) {
  const target = event.target;

  // Check if the clicked target has the "expand" class
  if (target.classList.contains('expand')) {
    const entryItemDiv = target.closest('.entry-item');
    const entryId = entryItemDiv.id.replace('entry', '');
    const toDisplay = journal.findEntry(entryId);

    if (toDisplay) {
      const previewText = entryItemDiv.querySelector('p');

      // Toggle the full text or preview text based on the current content
      if (previewText.innerText === toDisplay.preview()) {
        previewText.innerText = toDisplay.getText();
      } else {
        previewText.innerText = toDisplay.preview();
      }
    }
  }
}


function addEntry(title, text){

  //store user input in var then initialize new entry object
  const newEntry =  new Entry(title, text);
  journal.addEntry(newEntry);
  listEntries(journal);
}

function handleEntryForm(event){
  //store user input and add to DOM
  event.preventDefault();
  const entryText = document.querySelector("textarea#entry-text").value;
  const entryTitle = document.querySelector("input#entry-title").value;
  addEntry(entryTitle, entryText);

  //clear input fields
  document.querySelector("textarea#entry-text").value = null;
  document.querySelector("input#entry-title").value = null;

  
}

//event listeners added on page load
window.addEventListener("load", function() {
  document.querySelector("form#entry").addEventListener("submit", handleEntryForm);
  document.querySelector("div#entry-list").addEventListener("click", displayFullEntry);
});