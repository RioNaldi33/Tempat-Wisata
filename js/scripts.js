$(document).ready(function() {
    $('#contactForm').on('submit', function(event) {
        event.preventDefault();
        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();

        if (name && email && message) {
            alert('Pesan Anda telah terkirim!');
            $('#contactForm')[0].reset();
        } else {
            alert('Harap isi semua bidang!');
        }
    });
});
