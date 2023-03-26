// Create login Function here.

function Login() {
    player_name = document.getElementById("playername").value;
    localStorage.setItem("player_name", player_name);
    window.location = "gamepage.html";
}