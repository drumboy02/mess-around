const para1 = document.querySelector(".para-1");
const btn1 = document.querySelector(".btn-1");

const in1 = document.querySelector("#in-1");
const lbl1 = document.querySelector(".div-1-2 label");

const in2 = document.querySelector("#in-2");
const lbl2 = document.querySelector(".div-1-3 label");

const in3 = document.querySelector("#in-3");
const in4 = document.querySelector("#in-4");
const lbl3 = document.querySelector("#radio-1");
const lbl4 = document.querySelector("#radio-2");

const sel1 = document.querySelector(".sel-1");
const para2 = document.querySelector(".para-2");

const rng1 = document.querySelector("#range");
const lbl5 = document.querySelector("#rng-1");

btn1.addEventListener("click", () => {
    if (btn1.innerText === "Reset") {
        para1.innerText = "This is a test";
        para1.style.color = "snow";
        btn1.innerText = "Push";
        return;
    } else {
        console.log("btn1 testing");
        btn1.innerText = "Reset";
        para1.style.color = "green";
        para1.innerText = "Test Succesful!";
    }
})

in1.addEventListener("change", () => {
    if (in1.checked) {
        console.log("in1 checked");
        lbl1.style.color = "green";
        lbl1.innerText = "Uncheck box";
    } else {
        console.log("in1 unchecked");
        lbl1.style.color = "snow";
        lbl1.innerText = "Check box";
    }
})

in2.addEventListener("change", () => {
    if (in2.value < 1 || in2.value > 99) {
        lbl2.style.color = "snow";
        lbl2.innerText = "Pick a number";
    } else {
        console.log(in2.value);
        lbl2.style.color = "green";
        lbl2.innerText = "Your number: " + in2.value;
    }
})

in3.addEventListener("change", () => {
    if (in3.checked) {
        console.log("in3 checked");
        lbl3.style.color = "green";
        lbl3.innerText = "Selected"
        lbl4.style.color = "snow";
        lbl4.innerText = "Unselected";
    } 
})

in4.addEventListener("change", () => {
    if (in4.checked) {
        console.log("in4 checked");
        lbl4.style.color = "green";
        lbl4.innerText = "Selected"
        lbl3.style.color = "snow";
        lbl3.innerText = "Unselected";
    }
})

sel1.addEventListener("change", () =>{
    console.log("changed " + sel1.value);
    if (sel1.value === "select") {
        para2.innerText = "";
        return;
    }

    para2.style.color = "green";
    para2.innerText = "Your option:"

    if (sel1.value === "opt-1") {
        para2.innerText += " 1";
    } else if (sel1.value === "opt-2") {
        para2.innerText += " 2";
    } else if (sel1.value === "opt-3") {
        para2.innerText += " 3";
    }
})

rng1.addEventListener("change", () => {
    console.log(rng1.value);
    lbl5.style.color = "green";
    lbl5.innerText = "Range:";
    lbl5.innerText += ` ${rng1.value}`;
    if (rng1.value === "0") {
        lbl5.style.color = "snow";
        lbl5.innerText = "Range: 0-255"
    }
})

console.log(rng1.value)
console.log(lbl5.innerText)