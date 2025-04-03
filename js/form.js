(function () {
    'use strict';

    var forms = document.querySelectorAll('.needs-validation');

    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent default form submission

            if (!form.checkValidity()) {
                event.stopPropagation();
                form.classList.add('was-validated');
                return; // Stop the function if the form is invalid
            }

            form.classList.add('was-validated');

            // Handle Netlify Form Submission
            let formData = new FormData(form);

            fetch("/", {
                method: "POST",
                body: formData
            }).then(response => {
                if (response.ok) {
                    form.reset(); // Reset the form after successful submission
                    form.classList.remove('was-validated'); // Remove validation styles

                    // Show Thank You Message
                    let thankYouMessage = document.getElementById("thank-you-message");
                    if (thankYouMessage) {
                        thankYouMessage.style.display = "block";
                    }
                } else {
                    alert("There was a problem submitting the form. Please try again.");
                }
            }).catch(error => {
                alert("An error occurred. Please try again.");
            });

        }, false);
    });
})();