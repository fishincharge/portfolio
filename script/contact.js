const buttonContactInstagram = document.getElementById('button-contact-instagram');
buttonContactInstagram.addEventListener('click', function(){
    window.open('https://www.instagram.com/hendyrahardja/', '_blank', 'noopener,noreferrer');
});

const buttonContactLinkedin = document.getElementById('button-contact-linkedin');
buttonContactLinkedin.addEventListener('click', function(){
    window.open('https://www.linkedin.com/in/hendy-rahardja-1872481bb/', '_blank', 'noopener,noreferrer');
});

const buttonContactWhatsapp = document.getElementById('button-contact-whatsapp');
buttonContactWhatsapp.addEventListener('click', function(){
    const encodedMessage = encodeURIComponent('Hello Hendy!');
    window.open(`https://wa.me/087887189008?text=${encodedMessage}`, '_blank', 'noopener,noreferrer');
});

const buttonContactEmail = document.getElementById('button-contact-email');
buttonContactEmail.addEventListener('click', function(){
    const email = 'hendyr@protonmail.com'; 
    const subject = encodeURIComponent('Work Proposal');
    const body = encodeURIComponent('Hello, I would like to contact you about...'); 
    
    window.open(`mailto:${email}?subject=${subject}&body=${body}`, '_blank', 'noopener,noreferrer');
});