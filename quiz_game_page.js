function send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = ""; 
    document.getElementById("number2").value = ""; 
}
question_number = "<h4>" + number1 + " X "+ number2 +"</h4>";
input_box = "<br>Answer : <input type='text' id='input_check_box'>";
check_button = "<br><br><button class='tn btn-info' onclick='check()'>Check</button>";
row = question_number + input_box + check_button ;

questiion_turn = "player1";
answer_turn = "player2";

function check() 
{
    get_answer = document.getElementsById("input_check_box").value;
    if(get_answer == actual_answer)
    {
        if(answer_turn == "player1")
        {

            player1_score =          +1;

            document.getElementById("player1_score").innerHTML =     ;
        }
        else
        {
            player2_score = player2_score +1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    if(questiion_turn == "player")
    {
        questiion_turn = "palyer2"
        document.getElementById("player_question").innerHTML = "question Turn - " + player2_name ;
    }
    else
    {

        questiion_turn = " ";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
    }
}    
