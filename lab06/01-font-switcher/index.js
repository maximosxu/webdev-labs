let headerSize = 2;
let contentSize = 1.4;

const makeBigger = () => {
   headerSize += 0.1;
   contentSize += 0.1;
   document.querySelector('h1').style.fontSize = `${headerSize}em`;
   document.querySelector('.content').style.fontSize = `${contentSize}em`;
};

const makeSmaller = () => {
   headerSize -= 0.1;
   contentSize -= 0.1;
   document.querySelector('h1').style.fontSize = `${headerSize}em`;
   document.querySelector('.content').style.fontSize = `${contentSize}em`;
};


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

