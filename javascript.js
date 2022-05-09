function createGrid() {
    for (let i = 0; i < 256; i++) {
        var element = document.createElement("div");
        element.classList.add("grid");
        document.getElementById("container").appendChild(element);
    }
}