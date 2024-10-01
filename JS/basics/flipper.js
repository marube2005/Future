const newColourBtnElement = document.getElementById(
    'new-color-button'
);

const currentColorElement = document.getElementById(
    'current-color'
);

const hexValues = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
];

function getRandomHexValue(){
    const indexRandomValues = Math.floor(
        Math.random() * hexValues.length
    );
   const randomValue = hexValues[indexRandomValues];
}

function getRandomHexString(stringLength){
   let hexString = '';
   for(let i = 0; i < stringLength; ++i){
      hexString += getRandomHexValue();
   }
   return hexString;
}

newColourBtnElement.addEventListener('click', function(event) {
    const randomHexString = '#' + getRandomHexString(6);
    
    document.boby.style.setProperty(
        'background-color', randomHexString
    
    );
    currentColorElement.textContent = randomHexString;      
});