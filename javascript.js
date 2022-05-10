function createGrid() {
    for (let i = 0; i < 256; i++) {
        var element = document.createElement("div");
        element.classList.add("grid");
        document.getElementById("container").appendChild(element);
    }
    document.querySelectorAll(".grid").forEach(item => {
        item.addEventListener("mouseenter", e => {
            item.style.backgroundColor = "gray";
        })
    });
}

function createCustomGrid(n) {
    if (n <= 100 && n > 0) {
        document.querySelectorAll(".grid").forEach(item => {
            item.remove();
        });
        for (let i = 0; i < n * n; i++) {
            var element = document.createElement("div");
            element.classList.add("grid");
            document.getElementById("container").appendChild(element);
        }
        document.getElementById("container").style.gridTemplateColumns = "repeat(" + n + ", 1fr)";
        document.getElementById("container").style.gridTemplateRows = "repeat(" + n + ", 1fr)";
        document.querySelectorAll(".grid").forEach(item => {
            item.addEventListener("mouseenter", e => {
                item.style.backgroundColor = "gray";
            })
        });
    }
}
