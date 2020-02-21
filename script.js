//TODO-LIST

//1) use beforeArray and afterArray to order after each guess
//2) only increment & add on words that exist / sanitize input
//3) random selection of words (target is currently hard-coded)

var app = new Vue({
  el: '#app',
  data: {
    message: 'Enter a word',
    beforeArray: [],
    afterArray: [],
    counter: 0,
    target: 'chungus'
  },
  methods: {
    buttonClick,
    checkWord,
    insertBefore,
    insertAfter,
    resetInput  
  }

});

var clickCounter = 0;
var input = document.getElementById('guessInput');
var button = document.getElementById('inputButton');
input.addEventListener("keyup", function(event){
  if (event.keyCode === 13){
    event.preventDefault();
    button.click();
  }
});

function buttonClick(){
  console.log('chungus');
  this.counter += 1;
  
  this.checkWord(input.value);

  this.resetInput();
}

function checkWord(word){
  if (word < this.target){
    this.insertBefore(word);
  }
  if (word > this.target){
    this.insertAfter(word);
  }
}

function insertBefore(word){
  var table = document.getElementById('beforeTable');
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  cell1.innerHTML = word;
}

function insertAfter(word){
  var table = document.getElementById('afterTable');
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  cell1.innerHTML = word;
}

function resetInput(){
  
  input.value = '';
}