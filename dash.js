function expand(etc) {
    $("#" + etc).slideToggle();
    $("#point" + etc).slideToggle().delay(100);

}

var pick = 1;

function flip(etx) {
    pick += etx;
    if (pick > 4)
        pick = 1;
    if (pick < 1)
        pick = 4;
    $("#image_holder").html('<img src="pics/pik' + pick + '.png " class="image_current " />');
}