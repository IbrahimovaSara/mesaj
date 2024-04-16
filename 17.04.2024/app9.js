


function randomMessage() {
    var messages = ["1-cu mesaj qutusu", "2-ci mesaj qutusu", "3-cü mesaj qutusu"];
    var randomIndex = Math.floor(Math.random() * messages.length);
    var messageBox = document.createElement("div");
    messageBox.textContent = messages[randomIndex];
    messageBox.classList.add("messageBox");
    document.body.appendChild(messageBox);
    setTimeout(function() {
        document.body.removeChild(messageBox);
    }, 3000);
}

document.getElementById("randomButton").addEventListener("click", randomMessage);



