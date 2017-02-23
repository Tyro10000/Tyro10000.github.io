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
            $(".img_sum").html('<h2>Connect-4</h2><p>Single page Application Using html,Javascript and Phonegap</p><a href="https://connect4player.github.io" /><button class="btn mid link"><i class="fa fa-inbox" aria-hidden="true"></i> Go to Web App</button></a>');
            break;
        case 2:
            $(".img_sum").html('<h2>Connect-4</h2><p>Single page Application Using html,Javascript and Phonegap</p><a href="https://connect4player.github.io" /><button class="btn mid link"><i class="fa fa-inbox" aria-hidden="true"></i> Go to Web App</button></a>');
            break;
        case 3:
            $(".img_sum").html('<h2>Hotel Class Project</h2><p>Hotel Management System that supplies all needed functionality into a simple UI</p>');
            break;
        case 4:
            $(".img_sum").html('<h2>Hotel Class Project</h2><p>Hotel Management System that supplies all needed functionality into a simple UI</p>');
            break;


    }
}