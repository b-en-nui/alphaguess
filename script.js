//TODO-LIST

//1) only increment & add on words that exist (create trie!) / sanitize input

var app = new Vue({
  el: '#app',
  data: {
    message: 'Enter a word',
    beforeArray: [],
    afterArray: [],
    counter: 0,
    target: 'undefined'
  },
  methods: {
    buttonClick,
    checkWord,
    getWord,
    initialize,
    insertBefore,
    insertAfter,
    resetInput,
    success
  },
  mounted(){
    setTimeout(() => {
      this.initialize();
    }, 0);
  }

});

var clickCounter = 0;
var input = document.getElementById('guessInput');
var button = document.getElementById('inputButton');
var possibleTargets = ['abate','emulate','abstain','empathy','adversity','exemplary',
  'arid','florid','benevolent','fortitude','bias','fortuitous','brazen','foster',
  'collaborate','frugal','compassion','inconsequential','compromise','longevity',
  'condescending','mundane','conformist','nonchalant','convergence','procrastinate',
  'diligent','prosperity','discredit','prudent','disdain','restrained','divergent',
  'reverence','aesthetic','intrepid','amicable','intuitive','boisterous','lobbyist',
  'brusque','opulent','camaraderie','orator','canny','parched','clairvoyant','pragmatic',
  'conditional','pretentious','demagogue','provocative','digression','reclusive','fraught',
  'reconciliation','haughty','renovation','hypothesis','sagacity','inevitable',
  'scrutinize','inspect','spontaneous','aberration','hackneyed','abdicate','hedonist',
  'abhor','impetuous','anachronistic','impute','anomaly','jubilation','apex',
  'melodramatic','asylum','null','capacious','ostentatious','capitulate','perfidious',
  'corroborate','precocious','deleterious','querulous','demur','rancorous','enervate',
  'spurious','entail','substantiate','ephemeral','superfluous','evanescent',
  'surreptitious','extenuating','venerable','forbearance','venerable'];

input.addEventListener("keyup", function(event){
  if (event.keyCode === 13){
    event.preventDefault();
    button.click();
  }
});

function buttonClick(){
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
  if (word == this.target){
    this.success(word, this.counter);
  }
}

function getWord(){
  var index = Math.floor((Math.random() * possibleTargets.length));
  this.target = possibleTargets[index];
}

function initialize(){
  this.getWord();
}

function insertBefore(word){
  this.beforeArray.push(word);
  this.beforeArray.sort();

  var html = '<table>';

  for (var i=0; i<this.beforeArray.length; i++){
    html += '<tr><td>' + this.beforeArray[i] + '</td></tr>';
  }

  html += '</table>';

  document.getElementById('beforeTable').innerHTML = html;
}


function insertAfter(word){
  this.afterArray.push(word);
  this.afterArray.sort();

  var html = '<table>';

  for (var i=0; i<this.afterArray.length; i++){
    html += '<tr><td>' + this.afterArray[i] + '</td></tr>';
  }

  html += '</table>';

  document.getElementById('afterTable').innerHTML = html;
}

function resetInput(){
  input.value = '';
}

function success(word, counter){
  document.getElementById('sub').innerHTML = '✨✨ You did it! You guessed <i>' + 
    word + '</i> in <i>' + counter + '</i> guesses ✨✨';

  input.disabled = true;
  button.disabled = true;
}