// var buttonColors = ["red", "blue", "green", "yellow" ];

// var gamePattern = [];
// var userClickedPattern = [];

// var started = false;
// var level = 0;

// $(document).keypress(function(){
//    if(!started){
//       $("#level-title").text("level "+level);
//       nextSequence();
//       started = true;
//    }
// });


// $(".btn").click(function(){
//    var userChosenColour =  $(this).attr("id");
//  //   console.log(userChosenColour);
//    userClickedPattern.push(userChosenColour);
//  //   console.log(userClickedPattern);
//    playSound(userChosenColour);
//    animatePress(userChosenColour);
//    checkAnswer(userClickedPattern.length - 1);
//  });



//  function checkAnswer(currentLevel){
// if(gamePattern[currentLevel]===userClickedPattern[currentLevel])
// {
//  console.log("success");
//  if(userClickedPattern.length===gamePattern.length)
//  {
//     setTimeout(function(){ 
//        nextSequence();
//     },1000);
//  }
// }

// else{
//  console.log("failure");
//  var audio = new Audio("/projects/Simon Game Challenge Starting Files/sounds/wrong.mp3")
//  audio.play();
//  $("body").addClass("game-over");

//  setTimeout(function(){
//   $("body").removeClass("game-over");
//  },300);


//  $("h1").text("Game over press any key to restart the game.");


//  startedOver();


// }
//  }


// function nextSequence ()
// {

//    userClickedPattern = [];
//    level ++ ; 
//    $("#level-title").text("level "+level);
//    var randomNumber = Math.floor(Math.random()*4);
//    var randomChosenColor = buttonColors[randomNumber];
//    gamePattern.push(randomChosenColor);

//    $("#"+randomChosenColor).fadeOut(300).fadeIn(300);
//    playSound(randomChosenColor);
// }



//    function playSound(name){
//       var audio = new Audio("/projects/Simon Game Challenge Starting Files/sounds/" + name + ".mp3")
//       audio.play();

//    }


//    function animatePress(currentColor)
//    {
//     $("."+currentColor).addClass("pressed");

//      setTimeout(function(){
//       $("#"+currentColor).removeClass("pressed");
//      },100);

//    }

//    function startedOver(){
//     level = 0;
//     gamePattern = [];
//     started =false;

//    }
// JOY PATEL


var colors = ["red", "blue", "green", "yellow"];
var userArray = [];
var computerArray = [];
var level = 0;
var start = false;

// keypress : first step



$(document).keypress(function () {
   if (!start) {
      random();
      start = true;
   }
})


// random number function
function random() {
   userArray = [];
   level++
   var randomNumber = Math.floor(Math.random() * 4);
   var randomColor = colors[randomNumber];
   console.log(randomColor);
   computerArray.push(randomColor);
   userArray.push(randomColor);
   playSound(randomColor);
   animation(randomColor);
   $("h1").text("LEVEL = " + level);
   console.log(colors.length);


}

// game logic
function gameLogic(event) {
   if (userArray[event] === computerArray[event]) {
      console.log("success");
      if(userArray.length===computerArray.length)
      {
      console.log("success 01");

         setTimeout(function(){
            random();
         },500);

      }
      else
      {
         console.log("failure");
      }
      console.log("failure");
   }
}

                       




// click function , choose color to form user array

$(".btn").click(function () {
   var user = $(this).attr("id");
   // console.log(userChosenColour);
   userArray.push(user);
   console.log(userArray);

   gameLogic(userArray.length - 1);

   animation(user);

   playSound(user);
});




// sound section 


function playSound(key) {
   var audio = new Audio("/projects/Simon Game Challenge Starting Files/sounds/" + key + ".mp3");
   audio.play();
}


// animation section    

function animation(key) {
   $("." + key).fadeOut(300);
   setTimeout(function () {
      $("." + key).fadeIn(300);
   }, 300)
}                                            