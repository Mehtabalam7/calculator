let input = document.querySelector("#inp");
let buttons = document.querySelectorAll(".btn");

let string = "";

let arr  = Array.from(buttons);
arr.forEach(btns => {
    btns.addEventListener("click", (e) => {
        if(e.target.innerHTML  == "="){
            string = eval(string);
            input.value = string;
        }

        else if(e.target.innerHTML == "C"){
            string = "";
            input.value = string;
        }

        else if(e.target.innerHTML == "X"){
            string = string.slice(0,string.length-1);
            console.log(string);
            input.value = string;
        }

        else{
            string = string + e.target.innerHTML;
            input.value = string;
        }
    })
})

