function toggleNav() {
    // Set the elements
    var elementNavbar = document.getElementById('navbar');
    var elementContent = document.getElementById('content');
    var elementContentWidth = document.getElementsByClassName('contentWidth');


    // Hide the navbar, add animation for next time
    elementNavbar.classList.toggle('hidden');
    elementNavbar.classList.add('slide-in-left');
    // And remove the margin of the rest of the body
    elementContent.classList.toggle('ul:ml-10p');
    elementContent.classList.toggle('lg:ml-1/6');
    elementContent.classList.toggle('md:ml-1/4');
    elementContent.classList.toggle('sm:ml-2/6');
    elementContent.classList.toggle('ml-2/4');

    $('.contentWidth').toggleClass('ul:w-90');
    $('.contentWidth').toggleClass('lg:w-5/6');
    $('.contentWidth').toggleClass('md:w-3/4');
    $('.contentWidth').toggleClass('sm:w-5/6');
    $('.contentWidth').toggleClass('w-2/4');
    $('.contentWidth').toggleClass('w-full');
}