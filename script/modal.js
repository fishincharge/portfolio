document.querySelectorAll('.button-detail').forEach(card => {
    card.addEventListener('click', function() {
        const cardBody = this.closest('.card-experience');

        const imgSrc = cardBody.querySelector('.card-img-top').src;
        const cardCompanyName = cardBody.dataset.companyName;
        const cardTitle = cardBody.querySelector('.card-title').textContent;
        const cardSubtitle = cardBody.querySelector('.card-subtitle').textContent;
        const cardText = cardBody.querySelector('.card-text').textContent;

        document.getElementById('id-company-logo').src = imgSrc;
        document.getElementById('id-modal-title').textContent = cardCompanyName;
        document.getElementById('id-modal-subtitle').textContent = cardTitle;
        document.getElementById('id-modal-description-tag').textContent = "Work Experience:";
        document.getElementById('id-modal-second-subtitle').textContent = cardSubtitle;
        document.getElementById('id-modal-description').textContent = cardText;

        buttonWebsiteVisit.classList.remove('button-show');

    });
});

var websiteLink = "";

document.querySelectorAll('.button-project-detail').forEach(card => {
    card.addEventListener('click', function() {
        const cardBody = this.closest('.card-experience');

        const imgSrc = cardBody.querySelector('.card-img-top').src;
        const cardCompanyName = cardBody.dataset.companyName;
        // const cardTitle = cardBody.querySelector('.card-title').textContent;
        const cardSubtitle = cardBody.querySelector('.card-subtitle').textContent;
        const cardText = cardBody.querySelector('.card-text').textContent;

        document.getElementById('id-company-logo').src = imgSrc;
        document.getElementById('id-modal-title').textContent = cardCompanyName;
        document.getElementById('id-modal-subtitle').textContent = cardSubtitle;
        document.getElementById('id-modal-description-tag').textContent = "Project Detail:";
        document.getElementById('id-modal-second-subtitle').textContent = "";
        document.getElementById('id-modal-description').textContent = cardText;

        buttonWebsiteVisit.classList.add('button-show');
        websiteLink = cardBody.dataset.websiteLink;
    });
});

function visitSite(websiteLink){
    window.open(websiteLink, '_blank', 'noopener,noreferrer');
};

var buttonWebsiteVisit = document.getElementById('id-button-visit');
buttonWebsiteVisit.addEventListener('click', function() {

    visitSite(websiteLink);
});

