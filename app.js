
function createParagraph(){
  var wordOne= document.getElementById('noun1').value;
  var wordTwo= document.getElementById('food1').value;
  var wordThree= document.getElementById('plural-noun1').value;
  var wordFour= document.getElementById('plural-noun2').value;
  var wordFive= document.getElementById('plural-noun3').value;
  var wordSix= document.getElementById('adjective1').value;
  var wordSeven= document.getElementById('adjective2').value;
  var wordEight= document.getElementById('noun2').value;
  var wordNine= document.getElementById('plural-noun4').value;
  var wordTen= document.getElementById('body-part-1').value;
  var wordEleven= document.getElementById('personin-the-room1').value;
  var wordTwelve= document.getElementById('animal1').value;
  var wordThirteen= document.getElementById('plural-noun5').value;
  var wordFourteen= document.getElementById('body-part2').value;
  var wordFifteen= document.getElementById('plural-noun6').value;
  var wordSixteen= document.getElementById('adverb1').value;
  var wordSeventeen= document.getElementById('plural-noun7').value;
  var wordEighteen= document.getElementById('noun3').value;


 
var madLibsArr = "Throughout last night's " + wordOne 
+ " the cheering for the performance of Pearl " + wordTwo + " was so deafening, you had to hold your " + wordThree + " over your " + wordFour + ". Many well-known " + wordFive + " are calling it the " + wordSix + " concert of the decade. For their opening number, the band played their hit song, " + wordSeven + " followed by their " + wordEight + " rendition of 'I Can't Get No " + wordNine + "'. Then, as a tribute to the Beatles,they played several " + wordTen + " from the hit album, Sergeant Pepper's Lonely " + wordEleven + " Club Band. Unfortunately, throughout the performance,lead singer " + wordTwelve + " moved about the stage like a caged " + wordThirteen + ", singing at the top of his/her " + wordFourteen + ", giving this critic a terrible " + wordFifteen + " ache. However, the concert ended with the audience standing on their " + wordSixteen + ",forcing the group to come back for three " + wordSeventeen + " before the " + wordEighteen + " finally came down."
 document.getElementById('answer').innerHTML = madLibsArr
}
