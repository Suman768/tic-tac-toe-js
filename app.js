// DECLARING GLOBAL VARIABLES
var input = "X";
var reset = false;
var ting = new Audio("ting.mp3");
var game_over_audio = new Audio("game_over.mp3");
var no_win = new Audio("no_win.mp3");
var voice_suman = new Audio("voice.mp3");


var b1 = document.getElementById("box1");
var b2 = document.getElementById("box2");
var b3 = document.getElementById("box3");
var b4 = document.getElementById("box4");
var b5 = document.getElementById("box5");
var b6 = document.getElementById("box6");
var b7 = document.getElementById("box7");
var b8 = document.getElementById("box8");
var b9 = document.getElementById("box9");


// HANDLING EVENT OF BOX CLICKING
var boxtext = document.getElementsByClassName("box");
Array.from(boxtext).forEach(Element => {    //CONVERTING HTMLCollections TO Array
    Element.addEventListener("click", box_click);
})


// TRIGGER THIS FUNCTION EACH TIME THE BOX CLICKING
function box_click(e) {
    var current_box = e.target.id;     //FETCHING THE CURRENT BOX ID

    //CHECKING IF THE GAME IS NOT OVER OR THE RESET BUTTON IS CLICKED
    if (!game_over() || reset === true) {   
        reset = false;  //DISABLING RESET BUTTON AND SET VAR reset = FALSE
        if (document.getElementById(current_box).innerHTML === "") {
            document.getElementById(current_box).innerHTML = input; //WRITE THE INPUT
            if (!game_over()) {     //AGAIN CHECKING GAME IS OVER OR NOT
                ting.play();    //PLAYING THE TING SOUND
                change_input(); //TOGGLING THE INPUT
            }
        }
    }
    else {
        alert("GAME ALREADY OVER !! PLEASE RESET THE GAME");    //GAME OVER CONDITION
    }


    //CONDITION WHEN NO ONE WINS
    if (!game_over() && b1.innerHTML != "" && b2.innerHTML != "" && b3.innerHTML != "" && b4.innerHTML != "" && b5.innerHTML != "" && b6.innerHTML != "" && b7.innerHTML != "" && b8.innerHTML != "" && b9.innerHTML != "") {
        
        document.getElementById("win_msg").innerHTML = "<b>OOPS !! NO ONE WINS</b>"
        document.getElementById("win_msg").style.color="tomato";
        document.getElementById("win_msg").style.display = "block"
        document.getElementById("reset_btn").style.display = "block"
        no_win.play()

    }

}


//CHANGE INPUT LOGIC
function change_input() {
    input === "X" ? input = "O" : input = "X";  //TERNARY OPERATOR TO TOGGLE INPUT
    console.log(input);
    
    document.getElementById("turn_msg").innerHTML=("TURN FOR <strong>"+input+"<strong>");
}


// HANDLING CLICK EVENT OF RESET BUTTON
var reset = document.getElementById("reset_btn");
reset.addEventListener("click", () => {
    Array.from(boxtext).forEach(Element => {
        Element.innerHTML = "";
    })
    reset = true;
    document.getElementById("win_msg").style.display = "none"
    document.getElementById("reset_btn").style.display = "none"
    document.getElementById("turn_msg").style.display="block";
    document.getElementById("turn_msg").innerHTML=(" START THE GAME <strong>PLAYER X</strong>");
})


//WIN AND GAME OVER LOGIC
function game_over() {
    var b1 = document.getElementById("box1");
    var b2 = document.getElementById("box2");
    var b3 = document.getElementById("box3");
    var b4 = document.getElementById("box4");
    var b5 = document.getElementById("box5");
    var b6 = document.getElementById("box6");
    var b7 = document.getElementById("box7");
    var b8 = document.getElementById("box8");
    var b9 = document.getElementById("box9");

    // ROWS MATCH-------------------------------------------------------------------------
    if (b1.innerHTML === b2.innerHTML && b2.innerHTML === b3.innerHTML && b1.innerHTML === b3.innerHTML && b1.innerHTML != "" && b2.innerHTML != "" && b3.innerHTML != "") {
        // alert("over R1");
        if (b1.innerHTML === "X" && b2.innerHTML === "X" && b3.innerHTML === "X") {
            document.getElementById("win_msg").innerHTML = "GAME OVER !! <b>PLAYER X</b> WINS";
        }
        else {
            document.getElementById("win_msg").innerHTML = "GAME OVER !! <b>PLAYER O</b> WINS";
        }
        win_show();
        return true;
    }

    else if (b4.innerHTML === b5.innerHTML && b5.innerHTML === b6.innerHTML && b4.innerHTML === b6.innerHTML && b4.innerHTML != "" && b5.innerHTML != "" && b6.innerHTML != "") {
        // alert("over R2");
        if (b4.innerHTML === "X" && b5.innerHTML === "X" && b6.innerHTML === "X") {
            document.getElementById("win_msg").innerHTML = "GAME OVER !! <b>PLAYER X</b> WINS";
        }
        else {
            document.getElementById("win_msg").innerHTML = "GAME OVER !! <b>PLAYER O</b> WINS";
        }
        win_show();
        return true;
    }

    else if (b7.innerHTML === b8.innerHTML && b8.innerHTML === b9.innerHTML && b7.innerHTML === b9.innerHTML && b7.innerHTML != "" && b8.innerHTML != "" && b9.innerHTML != "") {
        // alert("over R3");
        if (b7.innerHTML === "X" && b8.innerHTML === "X" && b9.innerHTML === "X") {
            document.getElementById("win_msg").innerHTML = "GAME OVER !! <b>PLAYER X</b> WINS";
        }
        else {
            document.getElementById("win_msg").innerHTML = "GAME OVER !! <b>PLAYER O</b> WINS";
        }
        win_show();
        return true;
    }

    // COLUMNS MATCH-----------------------------------------------------------------------
    else if (b1.innerHTML === b4.innerHTML && b4.innerHTML === b7.innerHTML && b1.innerHTML === b7.innerHTML && b1.innerHTML != "" && b4.innerHTML != "" && b7.innerHTML != "") {
        // alert("over C1");
        if (b1.innerHTML === "X" && b4.innerHTML === "X" && b7.innerHTML === "X") {
            document.getElementById("win_msg").innerHTML = "GAME OVER !! <b>PLAYER X</b> WINS";
        }
        else {
            document.getElementById("win_msg").innerHTML = "GAME OVER !! <b>PLAYER O</b> WINS";
        }
        win_show();
        return true;
    }

    else if (b2.innerHTML === b5.innerHTML && b5.innerHTML === b8.innerHTML && b2.innerHTML === b8.innerHTML && b2.innerHTML != "" && b5.innerHTML != "" && b8.innerHTML != "") {
        // alert("over C2");
        if (b2.innerHTML === "X" && b5.innerHTML === "X" && b8.innerHTML === "X") {
            document.getElementById("win_msg").innerHTML = "GAME OVER !! <b>PLAYER X</b> WINS";
        }
        else {
            document.getElementById("win_msg").innerHTML = "GAME OVER !! <b>PLAYER O</b> WINS";
        }
        win_show();
        return true;
    }

    else if (b3.innerHTML === b6.innerHTML && b6.innerHTML === b9.innerHTML && b3.innerHTML === b9.innerHTML && b3.innerHTML != "" && b6.innerHTML != "" && b9.innerHTML != "") {
        // alert("over C3");
        if (b3.innerHTML === "X" && b6.innerHTML === "X" && b9.innerHTML === "X") {
            document.getElementById("win_msg").innerHTML = "GAME OVER !! <b>PLAYER X</b> WINS";
        }
        else {
            document.getElementById("win_msg").innerHTML = "GAME OVER !! <b>PLAYER O</b> WINS";
        }
        win_show();
        return true;
    }

    // DIAGONAL MATCH----------------------------------------------------------------------
    else if (b1.innerHTML === b5.innerHTML && b5.innerHTML === b9.innerHTML && b1.innerHTML === b9.innerHTML && b1.innerHTML != "" && b5.innerHTML != "" && b9.innerHTML != "") {
        // alert("over D1");
        if (b1.innerHTML === "X" && b5.innerHTML === "X" && b9.innerHTML === "X") {
            document.getElementById("win_msg").innerHTML = "GAME OVER !! <b>PLAYER X</b> WINS";
        }
        else {
            document.getElementById("win_msg").innerHTML = "GAME OVER !! <b>PLAYER O</b> WINS";
        }
        win_show();
        return true;
    }

    else if (b3.innerHTML === b5.innerHTML && b5.innerHTML === b7.innerHTML && b3.innerHTML === b7.innerHTML && b3.innerHTML != "" && b5.innerHTML != "" && b7.innerHTML != "") {
        // alert("over D2");
        if (b3.innerHTML === "X" && b5.innerHTML === "X" && b7.innerHTML === "X") {
            document.getElementById("win_msg").innerHTML = "GAME OVER !! <b>PLAYER X</b> WINS";
        }
        else {
            document.getElementById("win_msg").innerHTML = "GAME OVER !! <b>PLAYER O</b> WINS";
        }
        win_show();
        return true;
    }

    function win_show(){
        document.getElementById("win_msg").style.display = "block"
        document.getElementById("reset_btn").style.display = "block"
        document.getElementById("turn_msg").style.display="none";
        game_over_audio.play();
    }
}
