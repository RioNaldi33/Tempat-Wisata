$(document).ready(function () {
    $('#contactForm').on('submit', function (e) {
        e.preventDefault();
        $('#confirmationMessage').removeClass('d-none');
        this.reset();
    });
});
