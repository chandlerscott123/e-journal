/* 
entry contains: title, body, option for image?

Entry -> object
method: 
- word count
- numVowels
- numConsonants
- getTeaser -> first sentence up to 8 words
*/

export default function Entry (title, text, containsImg){
  this.title=title;
  this.text = text;
  this.containsImg=containsImg;
}