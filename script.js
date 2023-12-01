const elMainForm = document.querySelector(".main-form");
const elInput = document.querySelector(".input");
const elMainList = document.querySelector(".main-list");



elMainForm.addEventListener ("submit", evt => {
    evt.preventDefault();

    const newItem = document.createElement("li");
    newItem.className = "box";
    elMainList.appendChild(newItem);  
    let inputVal = Number(elInput.value);

    const result = setInterval(() => {
        if(inputVal > 0) {
            newItem.textContent = inputVal;
            --inputVal;
        }else {
            clearInterval(result);
            newItem.style.display = "none";
        }
    }, 1000)
    
})