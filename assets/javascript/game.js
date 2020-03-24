//Final Fantasy 7
$(document).ready(function () {

    // Character object & stats

  var characters = {
    "Cloud Strife":{
       name: "Cloud Strife",
       healthPoints: 130,
       attackPower: 8,
       counterAttackPower: 15,
       imageUrl: "./assets/images/0.png.png"
    },
    "Barret Wallace":{
      name: "Barret Wallace",
      healthPoints: 150,
      attackPower: 6,
      counterAttackPower: 13,
      imageUrl: "./assets/images/1.png.png"
    },
    "Tifa Lockhart":{
      name: "Tifa Lockhart ",
      healthPoints: 100,
      attackPower: 5,
      counterAttackPower: 10,
      imageUrl: "./assets/images/2.png"
    },
    "Sephiroth":{
      name: "Sephiroth ",
      healthPoints: 180,
      attackPower: 7,
      counterAttackPower: 25,
      imageUrl: "./assets/images/4.png.png"
    }

  };
  var currentChar;
  var fighters = [];
  var currentEnemy;
  
  //  this function will show the characters
  var showOne = function(characters, showArea, charStatus ) {
      var charDiv = $("<div class='character' data-name = '" + characters.name + "'>");
      var charName = $("<div class='character-name'>").text(characters.name);
      var charImage = $("<img alt='image' class='character-image'>").attr("src", characters.imageUrl);
      var charHp = $("<div class= 'character-health'>").text(characters.healthPoints);
      charDiv.append(charName).append(charImage).append(charHp);
      $(showArea).append(charDiv);

      if (charStatus === "enemy"){
        $(charDiv).addClass("enemy");
      }
      else if (charStatus === "enemy"){

        currentEnemy = characters;
        $(charDiv).addClass("target-enemy");
      }
  }
      //this function will render the characters to the screen
  var showChar = function(charObj, showArea) {

    //charcter section is where your chars begin
    //if true shows all characters in the starting area 
      if (showArea === "#character-section") {
         $(showArea).empty();
         //loop through chars and call the showOne function
         for (var key in charObj) {
              if (charObj.hasOwnProperty(key)) {
                showOne(charObj[key], showArea, "");

             }
         }
      }

      //selected-character is where our selected character will appear
      //and if its true it will show the selected players char here
      if (showArea === "#select-char");
      showOne(charObj,showArea, " ");
     

   if(showArea === "#chosen-enemy"){

        for (var i = 0; i<charObj.length; i++){
        showOne(charObj[i], showArea, "enemy");
      }

      $(document).on("click", ".enemy", function(){
          var name = ($(this).attr("data-name"));
         
            if($("#enemy").children().length === 0){
              showChar(name, "#enemy");
              $(this).hide();
            }
      });
   }

      if(showArea === "#enemy") {
        $(showArea).empty();
          for(var i = 0; i< fighters.length; i++){
              if(fighters[i].name === charObj){
                showOne(fighters[i], showArea, "#enemy");
              }
          }
      }

  }

    showChar(characters, "#character-section");
    
    $(document).on("click", ".character", function() {
      var name = $(this).attr("data-name");
    
      //if play has not been chosen
     if (!currentChar){
       // populate currentChar with the selected character
       currentChar =characters[name];

        for(var key in characters){
          if (key !== name){
            fighters.push(characters[key]);
          }
        }
        console.log(fighters);
        //hide  character select div
        $("#character-section").hide();

        showChar(currentChar, "#select-char");
        showChar(fighters, "#chosen-enemy");
     }
    });
        $("attack-button").on("click", function(){
          if($("#enemy").children().length !== 0){
             currentEnemy.healthPoints -= (currentChar.attackPower = turnCounter);
              
             // check if enemy has health left
             if(currentEnemy.healthPoints>0){
               
             }
          }
           turnCounter++; 
    });
});
 














