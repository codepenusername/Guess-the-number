var y = Math.floor(Math.random()*10 + 1);
playername = localStorage.getItem("player_name");
var guess = 1;
function playAgain()
{
    y = Math.floor(Math.random() * 10 + 1);
   // document.getElementById("guessField").reset();
}
function submit()
{ 
    var x = document.getElementById("guessField").value;
    if (x == y) {
    alert("CONGRATULATIONS!! " + playername + " YOU GUESSED IT RIGHT IN" +"  "+ guess +"  "+"GUESS" );
    guess = 1;
}
else if(x > y) 
{
    guess++;
    alert("OOPS SORRY!! TRY A SMALLER NUMBER");
}
else
{
    guess++;
    alert("OOPS SORRY!! TRY A GREATER NUMBER")
}
}