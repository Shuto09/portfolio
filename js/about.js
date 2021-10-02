'use strict';

document.getElementById('getpf').onclick = function (event) {
    console.log(event);
    let next = event.target.nextElementSibling;//div(hidden)
    console.log('next', next);
    $(event.target).addClass('hidden');
    $(next).fadeIn(1500);
}