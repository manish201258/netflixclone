document.querySelectorAll('.qn-an-1').forEach((faq, index) => {
    const plusClick = faq.querySelector('.click');
    const answerSection = faq.querySelector('.an1');
    const icon = faq.querySelector('#img1');

    plusClick.addEventListener('click', () => {
        if (answerSection.classList.contains('onclickchange2')) {
            answerSection.classList.remove('onclickchange2');
            answerSection.classList.add('onclickchange1')
            icon.src = "./icons8-plus-24.png";
        } else {
            answerSection.classList.add('onclickchange2');
            answerSection.classList.remove('onclickchange1');
            icon.src = "./icons8-cross-24.png";
        }
    });
});
