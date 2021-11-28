
import $ from "jquery"

$(document).ready(function () {
    $('.nav-link').on('click', function () {
        $('.nav-link').removeClass('active')
        $(this).addClass('active')
    })
})


$(window).on("scroll", function () {
    if ($(window).scrollTop() > 70) {
        $('.navbar').addClass('show')
    } else {
        $('.navbar').removeClass('show')
    }

})