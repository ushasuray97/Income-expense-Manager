
let salary=localStorage.getItem("salary"); 
document.write("salary is",sal);
function display(){
    var resetvalue=0;
    localStorage.setItem("salary",resetvalue);
    let expense=document.getElementById('expense').value;
    let savings=sal-expense;
    document.getElementById('savings').innerHTML=savings;
}
