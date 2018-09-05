
$(document).ready(function(){
    var count = 0;
    var time = 31;
    var isSelected = false;
    var timer;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;


    var question = ["It's free_______",
    "What was the name of Tim and Eric's first movie?", "What was the name of Tim's personal stylist and spiritual guru?", "At Tim's discount prices he has $6.99s for ____", "Dr. Steve Brule says 'If you can't find a date to prom__________'",
    "What amazing company can help you stay germ free", "What season of On Cinema at the Cinema are Tim and Gregg on?", "How many innocent lives were lost at Electric Sun 20?"];
    var answer = ["Real Estate", "Tim and Eric's Billion Dollar Movie", "Jim Joe Kelly", "$2.99", "Just bring your sister ya dingus", "Rio-Jenesis", "Season X", "18"];
    var firstOption = ["Real Estate", "Tim and Eric's Great Movie", "Eric Wareheim", "$3.99", "Just bring your sister ya dingus", "Schrimm", "Season 5", "25"];
    var secondOption = ["Child Clowns", "Tim and Eric go to the Zoo", "Tommy Schlaaang", "$5.99", "Just take your mom ya dingus ", "Schlaaang Corp", "Season 8", "50"];
    var thirdOption = ["Chippy", "Tim and Eric's Billion Dollar Movie", "Jim Joe Kelly", "$2.99", "Just go alone ya dingus", "Abso-lutely Studios", "Season X", "10"];
    var fourthOption = ["Schlaaang Super Seats", "Tim and Eric's Big Adventure", "Johnny Depp", "$10.00", "Just bring your imaginary friend ya dingus", "Rio-Jenesis", "Season 10", "18"];


    function showSlots() {
        $("#question-slot").show();
        $("#Option-slot-1").show();
        $("#Option-slot-2").show();
        $("#Option-slot-3").show();
        $("#Option-slot-4").show();
    }
    function hideSlots() {
        $("#question-slot").hide();
        $("#Option-slot-1").hide();
        $("#Option-slot-2").hide();
        $("#Option-slot-3").hide();
        $("#Option-slot-4").hide();
    }
    function hideResults() {
        $("#correct-slot").hide();
        $("#incorrect-slot").hide();
        $("#unanswered-slot").hide();
        $("#restart-slot").hide();
    }
    function displayQuestion () {
        hideResults();
        $("#answer-slot").hide();
        $("#image-slot").hide();
        $("#time-slot").show();
        showSlots();
        $("#question-slot").html(question[count]);
        $("#Option-slot-1").html(firstOption[count]);
        $("#Option-slot-2").html(secondOption[count]);
        $("#Option-slot-3").html(thirdOption[count]);
        $("#Option-slot-4").html(fourthOption[count]);
    
    
        $("#Option-slot-1").hover(function() {
            $(this).css("color", "gray");
        },
        function(){
            $(this).css("color", "black");
        });
        $("#Option-slot-2").hover(function() {
            $(this).css("color", "gray");
        },
        function(){
            $(this).css("color", "black");
        });
        $("#Option-slot-3").hover(function() {
            $(this).css("color", "gray");
        },
        function(){
            $(this).css("color", "black");
        });
        $("#Option-slot-4").hover(function() {
            $(this).css("color", "gray");
        },
        function(){
            $(this).css("color", "black");
        });
    }
    $("#Option-slot-1").on("click", checkAnswer) 
    $("#Option-slot-2").on("click", checkAnswer)
    $("#Option-slot-3").on("click", checkAnswer)
    $("#Option-slot-4").on("click", checkAnswer)


    function checkAnswer() {

        hideSlots();

        if($(this).text() === answer[count]) {
            stopTime();
            isSelected = true;
            $("#answer-slot").show();
            $("#answer-slot").html("Right! The answer is: " + answer[count]);
            displayImage();
            correct++;
            count++;
        }
        else {
            stopTime();
            isSelected = true;
            $("#answer-slot").show();
            $("#answer-slot").html("Wrong! The answer is: " + answer[count]);
            displayImage();
            incorrect++;
            count++;
        } 

        checkGameEnd();  
    }

    function checkGameEnd() {
        if(count === question.length) {
            $("#time-slot").hide();
            showResults();
            count = 0;
            $(".start").show();
            $(".start").on("click", function() {
                resetResults();
                startGame();
            });
        }
    }

    function resetTime() {
        time = 31;
    }

    function displayTime() {
        time--;
        $("#time-slot").html("Time remaining: " + time);
      
            if(time <= 0) {
                hideSlots();
                stopTime();
                $("#answer-slot").show();
                $("#answer-slot").html("Time is up! The answer is: " + answer[count]);
                displayImage();
                unanswered++;
                count++;
                checkGameEnd();
            }
    }

    function startTime() {
        clearInterval(timer);
        timer = setInterval(displayTime, 1000);
    }
    function stopTime() {
        clearInterval(timer);
        resetTime();
        if(count < question.length - 1) {
            setTimeout(startTime, 2000);
            setTimeout(displayQuestion, 3000);
        }
    }

    resetTime();


    function displayImage() {
        if(count === 0) {
            $("#image-slot").show();
            $("#image-slot").html('<img src="assets/images/real_estate.gif">');
        }
        else if(count === 1) {
            $("#image-slot").show();
            $("#image-slot").html('<img src="assets/images/movieposter.jpg">');
        }
        else if(count === 2) {
            $("#image-slot").show();
            $("#image-slot").html('<img src="assets/images/jimjoekelly.jpg">');
        }
        else if(count === 3) {
            $("#image-slot").show();
            $("#image-slot").html('<img src="assets/images/timsprices.jpg">');
        }
        else if(count === 4) {
            $("#image-slot").show();
            $("#image-slot").html('<img src="assets/images/steve_brule.jpg">');
        }
        else if(count === 5) {
            $("#image-slot").show();
            $("#image-slot").html('<img src="assets/images/Rio_jenesis.jpg">');
        }
        else if(count === 6) {
            $("#image-slot").show();
            $("#image-slot").html('<img src="assets/images/ocx.jpg">');
        }
        else if(count === 7) {
            $("#image-slot").show();
            $("#image-slot").html('<img src="assets/images/electric_sun.jpg">');
        }
    }


    function showResults() {
        $("#correct-slot").show();
        $("#correct-slot").html("Correct: " + correct);
        $("#incorrect-slot").show();
        $("#incorrect-slot").html("Incorrect: " + incorrect);
        $("#unanswered-slot").show();
        $("#unanswered-slot").html("Unanswered: " + unanswered);
        $("#restart-slot").show();
        $("#restart-slot").html("Click Start to play again!");
    }


    function resetResults() {
        correct = 0;
        incorrect = 0;
        unanswered = 0;
    }

    function startGame() {
        $(".start").hide();
        startTime();
        displayQuestion();
    }


  $(".start").on("click", function() {
    startGame();
  });
});