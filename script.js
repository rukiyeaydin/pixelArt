const inputbg = document.querySelector(".inputbg");
const container = document.querySelector(".container");
const brush = document.querySelector(".brush");
const kareler = document.querySelector(".kareler");
const reset = document.querySelector(".buton");

inputbg.addEventListener("change", () => {
    newValue = inputbg.value;
    container.style.backgroundColor = newValue;
}) 

let tikla = false;

for(let i = 0; i < 20; i++){
    for(let j = 0; j < 20; j++)
    {
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");
        container.appendChild(pixel);

        pixel.addEventListener("mouseover", function(){
            if(!tikla) return
            pixel.style.backgroundColor = brush.value;
        })

        pixel.addEventListener("mousedown",function(){
            pixel.style.backgroundColor = brush.value;
        })
    }
}

kareler.addEventListener("change", () => {
    newKareValue = kareler.value;
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach((pixel) => {
      pixel.style.backgroundColor = newKareValue;
    });
});

window.addEventListener("mousedown", function(){
    tikla = true;
})

window.addEventListener("mouseup",function(){
    tikla = false;
})

reset.addEventListener("click", () => {
    container.style.backgroundColor = "black";
    inputbg.value = "black";
    brush.value = "#40C4FF";

    kareler.value = "#ffffff";
    document.querySelectorAll(".pixel").forEach((pixel) => {
        pixel.style.backgroundColor = "white";
    })
})