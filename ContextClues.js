var friends = ["Kasyn", "Will", "Brody", "Trent", "Ethan"];
var locations = ["Hogwarts", "Bessemer", "Adger", "OakGrove", "Panama", "Concord", "Corner", "Hueytown", "Hoover", "Johns"];
var weapons = ["Spear", "Dagger", "Polearm", "Claws", "Shield", "Staff", "Fists", "Hammer", "Bow", "Axe", "Mace", "Malace", "whip", "Flail", "Katana", "Greatsword", "Greataxe", "Fryingpan", "Gun", "Sword"];

document.addEventListener("DOMContentLoaded", function () {

    for (var i = 1; i <= 100; i++) {
        var $h3 = $("<h3>Accusation " + i + "</h3>");
        $($h3).appendTo("body");
        $($h3).click(getAlert(i));
    }

    function getAlert(i) {
        var friend = friends[i % 5];
        var location = locations[i % 10];
        var weapon = weapons[i % 20];
        function accuAlert() {
            alert("Accusation " + i + ": I accuse " + friend + " with the " + weapon + " in " + location + "!");
        }
        return accuAlert;
    }
});