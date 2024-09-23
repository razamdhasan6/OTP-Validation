const inputsEle = document.querySelectorAll('input');
const btnEle = document.querySelector('button');

inputsEle.forEach((input, index1) => {
    input.addEventListener('keyup', (e) => {
        
        input.value = input.value.replace(/\D/g, '');

        const cuurrentInput = input,
            nextInput = input.nextElementSibling,
            previousInput = input.previousElementSibling;
            allInputFilled = [...inputsEle].every(input => input.value !== '');
        
        if (cuurrentInput.value !== '') {
            if(nextInput&&nextInput.tagName==='INPUT')
            nextInput.focus();
        }

        if (cuurrentInput.value === '') {
            if (e.key === 'Backspace' || e.key === 'Delete' || e.key === 'Tab' || e.key === 'ArrowLeft') {
                if (previousInput && previousInput.tagName === 'INPUT') {
                    previousInput.focus();
                }

            } else if (e.key === 'ArrowRight') {
                nextInput.focus();
            }
        }
        if (allInputFilled) {
            btnEle.removeAttribute('disabled')
        }
        else {
            btnEle.setAttribute('disabled','')
        }

    })
})

btnEle.addEventListener('click', () => {
    inputsEle.forEach(input => {
        input.value = '';
        inputsEle[0].focus();
        btnEle.setAttribute('disabled','')
    })

})

window.addEventListener('load', () => inputsEle[0].focus());