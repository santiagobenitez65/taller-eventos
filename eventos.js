const div = document.getElementById("div");

div.addEventListener("click", function (event) {
    if (event.target.id === "div") alert("Hola! Soy el div");
})