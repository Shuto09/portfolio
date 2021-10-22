const CLASSNAME = "-visible";
const TIMEOUT = 1700;
const $target = $(".title_");

setInterval(() => {
    $target.addClass(CLASSNAME);
    setTimeout(() => {
        $target.removeClass(CLASSNAME);
    }, TIMEOUT);
}, TIMEOUT * 2);