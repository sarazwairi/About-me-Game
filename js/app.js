/* eslint-disable semi */
'use strict';

let result = 0;
let useName = prompt('Hello my name is Sara, welcome to my page,what is you name!');
alert('hello ' + useName);


let play = prompt('Do you like to play!please answer yes/y or no/n ?');
function queplay() {
  play = play.toLowerCase();
  if (play === 'yes' || play === 'y') {
    alert('We will have fun');
    console.log('they like to play so true');
  } else if (play === 'no' || play === 'n') {
    alert('will take 2 min ,try it');
    //console.log('they will try even its false');//
  }

}
queplay();

alert('we will play :How well do you know me!!');
// we add function lab 4


let season = prompt('Do expect that i love summer?please answer yes/y or no/n?');
function queSeason() {

  season = season.toLowerCase();
  if (season === 'yes' || season === 'y') {
    alert('no,I love to play under the rain');
    console.log('your answer if i like summer is false');
  } else if (season === 'no' || season === 'n') {
    alert('yes,you are right,winter is my favorite season');
    result++
    //console.log('your answer is true that i dont like summer');//
  } else {
    alert('please choose yes/y or no/n.')
  }
  console.log(result);
  return (result);
}
queSeason();



let vacation = prompt('Do i love to spend my vacation on the beach?please answer yes/y or no/n?');
function quevacation() {
  vacation = vacation.toLowerCase();
  if (vacation === 'yes' || vacation === 'y') {
    alert('you are absolutely right,i like winter but the beach my love ');
    console.log('your answer if i like beach is true');
    result++
  } else if (vacation === 'no' || vacation === 'n') {
    alert('you thought i like winter i will not love spend my time next to the beach right !!you are wrong ');
    //console.log('your answer is false that i dont like beach');//
  } else {
    alert('please choose yes/y or no/n.')

  }
  console.log(result);
  return (result);
}
quevacation();

let age = prompt('What about my age !! if you think am yonger than 30 type yes/y if not no/n.');

function queage(){
age = age.toLowerCase();
if (age === 'yes' || age === 'y') {
  alert('you are so sweet , but am 33years old');
  console.log('your answer is yes will be false');
} else if (age === 'no' || age === 'n') {
  alert('yes,you are right,am 33 years old');
  result++
  //console.log('your answer is true that am looking older than 30');//
} else {
  alert('please choose yes/y or no/n.');
}
console.log(result);
return(result);
}

queage();

let animals = prompt('Do you think i like animals?please answer yes/y or no/n?');
function queanimals (){
animals = animals.toLowerCase();
if (animals === 'yes' || animals === 'y') {
  alert('yes , i love animals');
  console.log('your answer if i like animals is true');
  result++
} else if (animals === 'no' || animals === 'n') {
  alert('noooo, they are cute');
  //console.log('your answer is false that i dont like animals');//
} else {
  alert('please choose yes/y or no/n.')
}
console.log(result);
return(result);
}

queanimals();

let cooking = prompt('Do expect that i know how to cook?please answer yes/y or no/n?')
function quecooking(){
cooking = cooking.toLowerCase();
if (cooking === 'yes' || cooking === 'y') {
  alert('yes,I like to feed people');
  console.log('your answer is true about that i know how to cook');
  result++
} else if (cooking === 'no' || cooking === 'n') {
  alert('why do you think that lol , am a gd cooker');
  //console.log('your answer is false that i dont know how to cook');//
} else {
  alert('please choose yes/y or no/n.')
}
console.log(result);
return(result);
}
quecooking();
//lab03 question6//

function quekids (){
// eslint-disable-next-line no-unused-vars
let kids = 0;
for (let i = 4; i > 0; i--) {
  let kids = prompt('How many child i have?\nplease answer with a number \n you have ' + i + ' chances')
  kids = parseInt(kids);
  console.log(kids);

  if (kids === 1) {
    alert('you are right ');
    console.log('your answer i have one kid is true');
    result++;
    break;
  }
  else if (kids > 1) {
    alert('no ,less ');
    console.log('your answer i have one kid is false');
  }
  else if (kids === 0) {
    alert('no ,higher');
    console.log('your answer i have one kid is false');
  }
  else if (kids < 0) {
    alert('please insert a positive number');
  }
  if (i === 1) {
    alert('the correct answer is 1');
  }
}
console.log(result);
return(result);
}
 quekids();


//lab3 question7//
let k = 0;
function quecountries(){

let countries = ['Sri lanka', 'Spain', 'Thailand', 'Netherland'];
// eslint-disable-next-line no-unused-vars
while (k < 6) {
  let question7 = prompt('What are my favorite countries for vacations?');

  for (let j = 0; j < countries.length; j++) {
    if (question7.toLowerCase() === countries[j].toLowerCase()) {
      alert('You are absolutely right');
      console.log('you are correct' + countries);
      k = 6
      result++
      break;
    }
  } k++;
  if (k < 6) {
    alert('plz try again');
  }
}
console.log(result);
return(result);
}

quecountries();

//lab3 results of  total correct answers//
if (result < 4) {
  alert('thank you ' + useName + 'to tray you got ' + result + '/7,you can know me more');
}
else {
  alert('thank you ' + useName + 'to tray you got ' + result + '/7,you know me very well');
}
