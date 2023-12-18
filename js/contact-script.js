document.addEventListener('DOMContentLoaded', function () {
    // Sélectionnez le formulaire
    var form = document.getElementById('contactForm');

    // Ajoutez un écouteur d'événements au formulaire
    form.addEventListener('submit', function (e) {
        // Empêchez l'envoi du formulaire par défaut
        e.preventDefault();

        // Récupérez les données du formulaire
        var formData = new FormData(form);

        // Envoyez les données du formulaire à Formsprée
        fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
            .then(response => {
                // Vérifiez si la requête a réussi
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                // Effacez le contenu du formulaire si la requête a réussi
                form.reset();
                alert('Message envoyé avec succès!');
            })
            .catch(error => {
                // Gérez les erreurs de requête
                console.error('There was a problem with the fetch operation:', error);
                alert('Erreur lors de l\'envoi du message. Veuillez réessayer plus tard.');
            });
    });
});
