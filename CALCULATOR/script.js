function append_data(path){
    const nums = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const operation = ["+","-","x","/"];
    //empty
    if(document.getElementById(`result`).innerText ===""){
        document.getElementById(`result`).innerText = document.getElementById(`${path}`).innerText;
    }
    //end is operation and number
    else if(operation.includes(document.getElementById(`result`).innerText.at(-1)) && nums.includes(document.getElementById(`${path}`).innerText)){
        document.getElementById(`result`).innerText = document.getElementById(`result`).innerText + document.getElementById(`${path}`).innerText;
    }
    //end is operation and operation
    else if(operation.includes(document.getElementById(`result`).innerText.at(-1))){
        document.getElementById(`result`).innerText = document.getElementById(`result`).innerText.slice(0, -1) + document.getElementById(`${path}`).innerText;
    }
    //ends with number and is operation
    else if(nums.includes(document.getElementById(`result`).innerText.at(-1)) && operation.includes(document.getElementById(`${path}`).innerText) && operation.some(op => document.getElementById(`result`).innerText.includes(op))){
        check(path);
    }
    else{
        document.getElementById(`result`).innerText=document.getElementById(`result`).innerText+document.getElementById(`${path}`).innerText;
    }
}
function result(path){
    let temp = document.getElementById(`result`).innerText;
    if (temp.includes("+")){
        let temp1 = temp.split("+");
        temp=Number(temp1[0]) + Number(temp1[1]);
        if(path===""){
            document.getElementById(`result`).innerText=temp;
        }else{
            document.getElementById(`result`).innerText=temp + document.getElementById(`${path}`).innerText;
        }
    }
    if (temp.includes("-")){
        let temp1 = temp.split("-");
        temp=Number(temp1[0]) - Number(temp1[1]);
        if(path===""){
            document.getElementById(`result`).innerText=temp;
        }else{
            document.getElementById(`result`).innerText=temp + document.getElementById(`${path}`).innerText;
        }
    }
    if (temp.includes("x")){
        let temp1 = temp.split("x");
        temp=Number(temp1[0]) * Number(temp1[1]);
        if(path===""){
            document.getElementById(`result`).innerText=temp;
        }else{
            document.getElementById(`result`).innerText=temp + document.getElementById(`${path}`).innerText;
        }
    }
    if (temp.includes("/")){
        let temp1 = temp.split("/");
        temp=Number(temp1[0]) / Number(temp1[1]);
        if(path===""){
            document.getElementById(`result`).innerText=temp;
        }else{
            document.getElementById(`result`).innerText=temp + document.getElementById(`${path}`).innerText;
        }
    }
}
function check(path){
    let temp = document.getElementById(`result`).innerText;
    if(temp.includes("+") || temp.includes("x") || temp.includes("-") || temp.includes("/")){
        result(path);
    }
}
document.getElementById(`0`).addEventListener("click",() => append_data(`0`))
document.getElementById(`1`).addEventListener("click",() => append_data(`1`))
document.getElementById(`2`).addEventListener("click",() => append_data(`2`))
document.getElementById(`3`).addEventListener("click",() => append_data(`3`))
document.getElementById(`4`).addEventListener("click",() => append_data(`4`))
document.getElementById(`5`).addEventListener("click",() => append_data(`5`))
document.getElementById(`6`).addEventListener("click",() => append_data(`6`))
document.getElementById(`7`).addEventListener("click",() => append_data(`7`))
document.getElementById(`8`).addEventListener("click",() => append_data(`8`))
document.getElementById(`9`).addEventListener("click",() => append_data(`9`))
document.getElementById(`add`).addEventListener("click",() => append_data(`add`))
document.getElementById(`sub`).addEventListener("click",() => append_data(`sub`))
document.getElementById(`mul`).addEventListener("click",() => append_data(`mul`))
document.getElementById(`div`).addEventListener("click",() => append_data(`div`))
document.getElementById(`submit`).addEventListener("click",() => check(""))


