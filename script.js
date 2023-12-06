

const codes = document.querySelectorAll('.code');

// Focus on the first imput
codes[0].focus();

    codes.forEach((code, index) => {
        code.addEventListener('keydown', (event) => {
            if(event.key >= 0 && event.key <= 9 ){
                setTimeout(() => {
                    codes[index + 1].focus();
                }, 10);
                // Clear input field
            } else if (event.key === 'Backspace'){
                codes[index - 1].focus();
            }

        });
    })




