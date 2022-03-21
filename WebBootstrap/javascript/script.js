(function () {
    'use strict';
    window.addEventListener('load', function () {
        let forms = document.getElementsByClassName('needs-validation');
        let validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                console.log("checked");
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);

    window.addEventListener("load", function () {
        let element_autohide = document.getElementById('customscrollablenavbar');

        let navbar_height = document.getElementById('customscrollablenavbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';

        if (element_autohide) {
            var last_scroll_top = 0;
            window.addEventListener('scroll', function () {
                let scroll_top = window.scrollY;
                if (scroll_top < last_scroll_top) {
                    document.getElementById('customscrollablenavbar').classList.remove('scrolled-down');
                    document.getElementById('customscrollablenavbar').classList.add('scrolled-up');
                }
                else {
                    document.getElementById('customscrollablenavbar').classList.remove('scrolled-up');
                    document.getElementById('customscrollablenavbar').classList.add('scrolled-down');
                }
                last_scroll_top = scroll_top;
            });
        }
    });
})();