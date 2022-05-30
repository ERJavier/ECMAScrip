const buttom = document.getElementById("btn");

buttom.addEventListener("click", async function() {
    const module = await import("./file.js");
    module.hello();
});