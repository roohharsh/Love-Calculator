var button = document.getElementById("btn");
var result = document.getElementById("percentage");
var message = document.getElementById("statement");

button.addEventListener("click", () => {
    result.style.visibility = "visible";
    message.style.visibility = "visible";
    var name1 = document.getElementById("name1").value;
    name1 = name1.toLowerCase();
    var name2 = document.getElementById("name2").value;
    name2 = name2.toLowerCase();

    let me = ["harsh", "chotu", "chingu", "kumbhkaran", "babii", "harshu"];
    let you = ["yogita", "yanchi", "yaanchi", "yogi", "chingi","gadhi", "babii",
     "bhutni", "moti", "gubbara", "pagal", "chuhuiya", "bhaish"];

    let check1=0;
    let check2=0;

    for(let i=0;i<me.length;i++){
        if(name1===me[i]){
            check1=1;
        }
    }
    for(let i=0;i<you.length;i++){
        if(name1===you[i]){
            check1=2;
        }
    }
    for(let i=0;i<me.length;i++){
        if(name2===me[i]){
            check2=1;
        }
    }
    for(let i=0;i<you.length;i++){
        if(name2===you[i]){
            check2=2;
        }
    }

    if((check1==1 && check2==2) || (check1==2 && check2==1)){
        var x = 100;
    }
    else if((check1==1 && check2!=2) || (check1==2 && check2!=1) || (check2==1 && check1!=2) || (check2==2 && check1!=1)){
        var x = 0;
    }
    else{
        var x = Math.random() * 100;
        x = Math.floor(x);
        x++;
    }

    document.getElementById("percentage").innerHTML = x + "%";
    if (x >= 85) {
        document.getElementById("statement").innerHTML = "Best Couples";
    }
    if (x > 60 && x < 85) {
        document.getElementById("statement").innerHTML = "Lage rah bhai tujhe jarur milegi";
    }
    if (x >= 40 && x <= 60) {
        document.getElementById("statement").innerHTML = "Loves You, but as a friend";
    }
    if (x >= 20 && x < 40) {
        document.getElementById("statement").innerHTML = "TERA to KATEGA";
    }
    if (x < 20) {
        document.getElementById("statement").innerHTML = "Tumse na ho payega";
    }
})