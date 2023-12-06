

const codes = document.querySelectorAll('.code');

// Focus on the first imput
codes[0].focus();

// If user input value more than 9, input field clear itself
codes[0].addEventListener('input', () => {
    if(codes[0].value > 9){
        codes[0].value = '';
    }
    console.log(codes[0].value);
})

// setTimeout(() => {
//     codes.forEach((code, index) => {
//         code.addEventListener('keydown', (event) => {
//             if(event.key >= 0 && event.key <= 9 ){
//                 codes[index + 1].focus();
//             }
//         });
//     })
// }, 1000);


