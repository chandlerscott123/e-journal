/* 
entry contains: title, body, option for image?

Entry -> object
method: 
- word count: returns number of words 
- vowelCount: uses regular expression to return number of vowels
- numConsonants: riff on vowelCount, returns number of consonants
- preview: returns first sentence up to 8 words length
*/

export function Entry (title, text){
  this.title=title;
  this.text = text;
  this.date = new Date();
}


//accessor functions
Entry.prototype.getText =function(){
  return this.text;
};

Entry.prototype.getTitle = function(){
  return this.title;
};



// counts words through splitting entry into an array
// with whitespace as a delimiter
Entry.prototype.wordCount = function(){
  
  const wordsArray = this.text.split(/\s+/);
  const count = wordsArray.length;
  
  return count;
};

//returns total number of vowels found in entry
Entry.prototype.vowelCount =  function(){
  const regex = /[aeiou]/gi;
  const matches = this.text.match(regex);

  return matches ? matches.length : 0; 

};

Entry.prototype.consonantCount =  function(){
  //removes non-alphanum characters and vowels from entry
  const regex = /[aeiou.?!,"' ]/gi;
  const consonantStr = this.text.replaceAll(regex, "");
  
  //returns new length
  return consonantStr.length;
};


Entry.prototype.preview =  function(){

  const firstEightWords = this.text.match(/(?:\w+\W+){0,7}\w+/);
  return firstEightWords ? firstEightWords[0] : "";

};

//in lieu of a database, key-val pairs of entry objects
export function Journal()
{
  this.entries={};
  this.currentEntryId = 0;
}

//ensures every entry has a unique id
Journal.prototype.assignId=function(){
  this.currentEntryId+=1;
  return this.currentEntryId;
};

//access entry through passing its id in bracket notation
Journal.prototype.addEntry= function(entry){
  entry.id = this.assignId();
  this.entries[entry.id] = entry;
  
};


//returns entry object with matching id by accessing entries in Journal
Journal.prototype.findEntry = function(id){
  if(this.entries[id]!==undefined){
    return this.entries[id];
  }
  return false;
};


//
Journal.prototype.deleteEntry = function(id){
  if (this.entries[id]===undefined){
    return false;
  }
  delete this.entries[id];
  return true;
};

