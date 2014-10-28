$(function (){
    //initialize context object for drawing on canvas
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d');
    var h = canvas.height,
        w = canvas.width;

    //set intial statistics
    var correct = 0, wrong = 0, missed = 0; 

    var chars = [];
    var increment = 100; //for increasing speed

    // styling the drawing objects in canvas
    context.font = "40px Century Gothic";
    context.fillStyle = "#333";

    //generate 10 charater objects
    function genChar() {
        for (var i = 0; i < 10; i++) {
            chars.push(new Characters());
        }
    }

    // create class Characters with attributes
    function Characters() {
        // basic Latin: 33(!)-126(~)
        this.letter = String.fromCharCode(randomInt(33,126));
        // coordinates x, y
        this.x = Math.random() * (w - 60) + 20;
        this.y = 40;
        // falling speed
        this.speed =  Math.random() * increment;
    }

    //draw letters on the canvas
    function drawing() {
        context.clearRect(0,0,w,h); //clears the specified pixels within a given rectangle
                                    //context.clearRect(x,y,width,height);
        _.each(chars, function (charObj,i) {
            //draws filled text on the canvas. The default color of the text is black
            //context.fillText(text,x,y,maxWidth);
            //x,y coordinates where to start painting the text (relative to the canvas)
            context.fillText(charObj.letter,charObj.x, charObj.y);

            //remove the char falling to the end of the page by a new char
            if (charObj.y + charObj.speed > h + 40) {
                missed++;
                updateStat('Missed', missed);
                chars[i] = new Characters();
            }
            //y-coordinate increases by speed
            charObj.y += charObj.speed;
        }); 
            //missed <= 20, continue creating more chars, old chars move to new y
            if (missed > 20) {
                context.clearRect(0,0,w,h);
                gameover();
            } else {
                setTimeout(drawing, 20);
            }
    }

    //update statistics according to id and new score
    function updateStat(id, score){
        $('#' + id).text(id + ': ' + score);
    }

    //showing gameover modals
    function gameover() {
        var decimal = (correct / (correct + wrong + missed)*100);
        var percent = Math.round((decimal)*Math.pow(10,2))/Math.pow(10,2)
        var gameover = $( "<div>", {
            "class": "gameover",
            })
        gameover.appendTo('body');
        gameover.insertAfter('.begin');
        $('<h1>Game Over</h1>').appendTo('.gameover');
        $('<h2 class="score">' + percent + '%</h2>').appendTo('.gameover');
        if (wrong == 1) {
            $('<h2>You got ' + correct + ' right with ' + wrong + ' error.</h2>').appendTo('.gameover');
        } else {
            $('<h2>You got ' + correct + ' right with ' + wrong + ' errors.</h2>').appendTo('.gameover');
            }
    }

    setTimeout(function () {
        $('.begin').fadeOut(1000);
        genChar();
        drawing();
        $(document).on('keypress', function (key) {
            //key is object, use keyChar to store its character
            var keyChar = String.fromCharCode(key.charCode);
            var isWrong = true; //to update when the key-in character was wrong
            //loop through the chars list to clear the correct characters has been pressed
            //and generate new char objects
            _.each(chars, function (charObj, i) {
                if( keyChar == charObj.letter) {
                    correct++;
                    updateStat('Correct', correct);
                    chars[i] = new Characters();
                    isWrong = false;
                }
                //do not use else here, it will update the wrong status up to 10 times
            });
            if( isWrong) {
                wrong++;
                updateStat('Wrong', wrong);
            }
        });
    }, 2500);
});


// generate random integers
function randomInt(max,min) {
    return Math.floor((Math.random() * (max - min + 1) + min));
}

