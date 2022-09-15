var salary=0;
var expenses=0;
function income(){
    let sal=document.getElementById('sal').value;
    salary=sal;

    alert("you added"+sal+"for salary");
    window.location.href="Project.html";
}

function expense(){
    let expenseamt=document.getElementById('amt').value;
    expense=expenseamt;
    alert("you added"+expenseamt+"for expenses");
    window.location.href="Project.html";
}


function display(){
    
    let savings=salary-expenses;
    document.getElementById('savings').innerHTML=savings;
}
