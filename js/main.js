$(document).ready(function() {
    $("#para").on('click', function() {
        $(this).css("color", "black")
    });

    $("body").on('click', function() {
        $(this).css("backgorund-color", "white");
    });
});