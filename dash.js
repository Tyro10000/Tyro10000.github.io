function expand(etc) {
    $("#" + etc).slideToggle();
    $("#point" + etc).slideToggle().delay(100);

}

function expunge() {
    $("#1").slideUp();
    $("#2").slideUp();
    $("#3").slideUp();
    $("#4").slideUp();
    $("#point1").slideUp();
    $("#point2").slideUp();
    $("#point3").slideUp();
    $("#point4").slideUp();

}

function show() {
    $(".projects_extend").slideToggle();
}
var pick = 1;

function flip(etx) {
    pick += etx;
    if (pick > 4)
        pick = 1;
    if (pick < 1)
        pick = 4;
    $("#image_holder").html('<img src="pics/pik' + pick + '.png " class="image_current " />');
    switch (pick) {
        case 1:
            document.getElementById("img_sum").innerHTML = "Connect-4";
            break;
        case 2:
            document.getElementById("img_sum").innerHTML = "Connect-4";
            break;
        case 3:
            document.getElementById("img_sum").innerHTML = "Hotel Class Project";
            break;
        case 4:
            document.getElementById("img_sum").innerHTML = "Hotel Class Project";
            break;


    }
}