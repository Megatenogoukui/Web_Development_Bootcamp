
// Holds all the colors
var buttonColors = ["red" , "blue" , "green" , "yellow" ];

// The pattern which game creates 
var gamePattern = [];

// The pattern which user creates 
var userClickedPattern = [];

// initiating the level to 0
var level = 0;

// initiating the started to false
var started = false;

// If any keypress happens and the started is false then we will call the nextSequence function and change the heading and change the value of started to true
$(document).keydown(function(){
    if (!started){
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});

// Checking if the button is clicked
$(".btn").click(function(){

    // Will give the id of the button clicked
    var userChosenColor = $(this).attr("id");

    // Adding the clicked button in the userClickePattern
    userClickedPattern.push(userChosenColor);

    // calling the sound function
    playSound(userChosenColor);

    // calling the animate function
    animatePress(userChosenColor);

    // checking answer
    checkAnswer(userClickedPattern.length - 1)
});

function nextSequence(){
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    // Generating random number from 1 to 3
    randomNumber = Math.floor(Math.random() * 4) ;

    // Selecting a random color from button colors
    var randomChosenColor = buttonColors[randomNumber];

    // Adding the randommchosen colore to game pattern
    gamePattern.push(randomChosenColor);

    // Creating a blink animation
    $("#" + randomChosenColor ).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColor);
    animatePress(randomChosenColor);
    
}

function checkAnswer(currentLevel){
    // Checking if the user clicked color is same as that of the gamepattern
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        console.log("Success");
        // If the pattern is correct then after a 1sec delay again call the nextSequence function
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence()
            },1000);
        }

    }
    else{
        // if the pattern is wrong then display that the answer is wrong and restarting the game by resetting the value of level and started
        console.log("Wrong");
        sound = new Audio("sounds/wrong.mp3");
        sound.play();

        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        $("#level-title").text("Game Over, Press Any Key to Restart");

        // calling the start over function
        startOver();
        
    }
    
}




// Adding sounds to the random chosen color
function playSound(name){
    var sound = new Audio("sounds/" + name + ".mp3");
    sound.play();
}

// Adding animations to the random chosen color
function animatePress(currentColor){
    $("." + currentColor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
      }, 100);
}


// This function restarts the level ,started ,gamepatternvalue to the initial value
function startOver(){
    level = 0;
    started = false;
    gamePattern = [];
}



