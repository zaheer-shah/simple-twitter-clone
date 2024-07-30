const happingInput = document.getElementById('twtinput');
const showAlertButton = document.getElementById('btn');


showAlertButton.addEventListener('click', () => {
    const inputText = happingInput.value;
    alert(inputText);
});
