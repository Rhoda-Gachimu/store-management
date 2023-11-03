const inputBox = document.getElementById("inputbox");
const list = document.getElementById("list");

function addProduct(){
    if (inputBox.value ===''){
        alert('You must type something here!');
    } else{
        let li = document.createElement("li");
        li.innerHTML= inputBox.value;
        list.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span);


    }
    inputBox.value = "";
    saveData()
    }

    