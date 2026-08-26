const ratingForm = document.querySelector('form');
const success = document.querySelector('.success');
const number = document.querySelector('span');
const heading = document.querySelector('.success-heading');

ratingForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    const formData = new FormData(ratingForm);
    const ratingValue = formData.get('rating');

    if(ratingValue){
        ratingForm.classList.add('hidden');
        success.style.display = 'block';
    }

    number.textContent = `${ratingValue}`;

    heading.focus();
});
