let button=document.getElementById(`submit`);

function createTable(data){
    // let table=document.getElementById(`table`);
    let values="";
    for(let temp of data){
        if(!(temp[0]=="" || temp[1]==0 || temp[2]==0)){
            values=values+`<tr><td class="data">${temp[0]} </td><td class="data">${temp[1]}</td><td class="data">${temp[2]}</td></tr>`;
        }
    }
    document.getElementById(`table`).innerHTML=values;
    
}


function add(){
    let data=document.getElementById(`table`).innerText.split("\n");
    data=data.map(n=>n.split("\t").map(cell => cell.toUpperCase()));
    flag=true;
    var name = document.getElementById(`name`).value.toUpperCase();
    var age = document.getElementById(`age`).value.toUpperCase();
    var number = document.getElementById(`number`).value.toUpperCase();
    for(var i = 0 ;i<data.length;i++){
        if(data[i][0]==name){
            data[i][1]=age;
            data[i][2]=number;
            flag=false;
            break;
        }
    }
    if(flag){
        data.push([name,Number(age),Number(number)]);
    }
    createTable(data)
    document.getElementById(`name`).value="";
    document.getElementById(`age`).value="";
    document.getElementById(`number`).value="";
}
button.addEventListener("click",()=>{console.log(add())});

