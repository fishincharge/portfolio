document.querySelectorAll('.button-certification-detail').forEach(card => {
    card.addEventListener('click', function(){
        const cardBody = this.closest('.card-certification');

        const cardCertificationLink = cardBody.dataset.certificationLink;

        window.open(cardCertificationLink, '_blank', 'noopener,noreferrer');
    });
});