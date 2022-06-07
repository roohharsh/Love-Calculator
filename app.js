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

    if ((name1 == "harsh" && name2 != "yogita") ||
        (name2 == "harsh" && name1 != "yogita") ||
        (name1 != "harsh" && name2 == "yogita") ||
        (name2 != "harsh" && name1 == "yogita")) {
        var x = 0;
    }

    else if (name1 == "harsh" || name1 == "yogita" || name1 == "harshu" ||
        name1 == "chingu" || name1 == "kumbhkaran" || name1 == "yaanchi" ||
        name1 == "yanchi" || name1 == "chinki" || name1 == "yogi" ||
        name1 == "yaanu" || name1 == "bhutni" || name1 == "chotu")
        var x = 100;

    else {
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