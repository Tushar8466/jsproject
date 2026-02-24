let btn = document.getElementById("btn");
let heading  = document.getElementById("heading");

btn.addEventListener('click' , () => {
    if(document.body.style.backgroundColor === "black"){
        document.body.style.backgroundColor = "white"
        btn.style.backgroundColor = "black";
        btn.style.color = "white";
        heading.style.color = "black"
    }
    else{
        document.body.style.backgroundColor = "black";
        btn.style.backgroundColor = "white";
        btn.style.color = "black";
        heading.style.color = "white";
    }
})