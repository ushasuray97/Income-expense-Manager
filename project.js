function income(){
    let sal=document.getElementById('sal').value;
    localStorage.setItem("salary", sal);

    alert("you added"+sal+"for salary");
    window.location.href="Project.html";
}

function expense(){
    let expenseamt=document.getElementById('amt').value;
    alert("you added"+expenseamt+"for expenses");
    window.location.href="Project.html";
}


function display(){
    var resetvalue=0;
    localStorage.setItem("salary",resetvalue);
    let expense=document.getElementById('expense').value;
    let savings=sal-expense;
    document.getElementById('savings').innerHTML=savings;
}
