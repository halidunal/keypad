function insert(num) {
    document.form.password.value = document.form.password.value + num;
}

function mix(){
    for(i = 0; i < 10; i++){
        var b = Math.floor(10 * Math.random());
        var x = document.getElementById(i);
        var y = document.getElementById(b);
        var temp = x.value;

        x.value = y.value;
        y.value = temp;
    }
}password

function del() {
    var exp = document.form.password.value;
    document.form.password.value = exp.substring(0,exp.length-1);
}

function showHide() {
    var x = document.getElementById("input");
    if (x.type === "password") {
        x.type = "text";
    }else {
        x.type = "password";
    }
}