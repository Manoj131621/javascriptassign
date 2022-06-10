function calculate() {
    var val;
    val = document.getElementById('opt').value; 
    var inp = document.getElementById('field1').value; 
    if (val == 0) 
    { var op = inp * 60; 
        document.getElementById('field2').value = op " minutes"; 
    } else if (val == 1) {
        var op = inp * 3600;
        document.getElementById('field2').value = op " Seconds";
    } else if (val == 2) {
        var op = inp / 60; var op1 = formatNumber(op, 4);
        document.getElementById('field2').value = op1 " Hours";
    } else if (val == 3) {
        var op = inp * 60;
        document.getElementById('field2').value = op " Seconds";
    } else if (val == 4) {
        var op = inp / 3600; var op1 = formatNumber(op, 4);
        document.getElementById('field2').value = op1 " Hours";
    } else if (val == 5) {
        var op = inp / 60; var op1 = formatNumber(op, 4);
        document.getElementById('field2').value = op1 " Minutes";
    } 
    function formatNumber(myNum, numOfDec) {
        var decimal = 1; for (i = 1; i <= numOfDec; i
        )decimal = decimal * 10var myFormattedNum = (Math.round(myNum * decimal) / decimal).toFixed(numOfDec)
        return (myFormattedNum);
    }
} 
function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCodeif(charCode > 31 && (charCode < 48 || charCode > 57))
    { 
        alert("Enter only numbers"); 
        return false; 
    } 
    return true;
} 
function stop() 
{ 
    alert("please provide your input in the input field"); 
    return false; 
}
