const data = [];

// Obtención de elementos
const textoIngresado = document.getElementById('textArea');
const encryptButton = document.getElementById('button1');
const decryptButton = document.getElementById('button2');
const encryptedDataDiv = document.getElementById('showEncryptedData');
const desencryptedDataDiv = document.getElementById('showDesencryptedData')
const showMessage = document.getElementById('showMessage');
const delButton1 = document.getElementById('delButton1');
const delButton2 = document.getElementById('delButton2');
const body = document.getElementById('root');
const changeTheme = document.getElementById('changeTheme');
const alertText = document.getElementsByClassName('alertText')[0];
const footer = document.getElementById('footer');
const resultUserSection = document.getElementById('resultUserSection');
const muneco = document.getElementById('muneco');
const imgHeader = document.getElementById('imgHeader');

if (changeTheme.value === 'white'){
    body.style.backgroundColor = '#272729';
    body.style.transition = '0.8s';
    textoIngresado.style.backgroundColor = '#272729';
    textoIngresado.style.transition = '0.8s';
    textoIngresado.style.color = '#F3F5FC';
    alertText.style.color = "#F3F5FC";
    alertText.style.transition = '0.8s';
    footer.style.color = '#F3F5FC';
    footer.style.transition = '0.8s';
    resultUserSection.style.backgroundColor = '#39393b';
    resultUserSection.style.boxShadow = '0px 0px 32px 0px rgba(116, 115, 115, 0.08)'
    resultUserSection.style.transition = '0.8s';
    showMessage.style.color = '#F3F5FC';
    showMessage.style.transition = '0.8s';
    muneco.src = './recursos/Muneco2.svg';
    muneco.style.transition = '0.8s';
    imgHeader.src = './recursos/Vector2.svg';
    imgHeader.style.transition = '0.9s';
    delButton1.style.backgroundColor = '#1276f0';
    delButton2.style.backgroundColor = '#1276f0';
    changeTheme.value = 'black';
} else {
    body.style.backgroundColor = '#F3F5FC';
    textoIngresado.style.backgroundColor = '#F4F5FC';
    textoIngresado.style.color = '#0A3871';
    alertText.style.color = '#495057';
    footer.style.color = '#495057';
    resultUserSection.style.backgroundColor = '#FFFFFF';
    showMessage.style.color = '#000';
    muneco.src = './recursos/Muneco.svg';
    imgHeader.src = './recursos/Vector.svg';
    changeTheme.value = 'white';
}

// Obtiene el valor del textArea
let getValue = (e) => {
    return e.value;
}

function encryptData(x){

    const vocales = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    }

    let cadena = x.toLowerCase().replace(/[eiaou]/g, i => vocales[i]);
    return cadena;
}


function decryptData(x){
    return x.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
}

function createCard() {
    showMessage.style.display = 'none';

    encryptedDataDiv.style.display = 'flex';
    encryptedDataDiv.style.height = '100%';

    const texto = document.createElement('p');
    texto.classList.add('textoCard');
    texto.style.fontWeight = '500';
    texto.style.fontSize = '1.4rem';

    texto.innerHTML = '';

    const copyButton = document.createElement('button');
    copyButton.classList.add('copyButton');
    copyButton.innerHTML = '<i class="fa-solid fa-clipboard"></i>';

    for (let i = 0; i < data.length; i++){
        texto.innerHTML = data[i];
        copyButton.addEventListener('click', function(){
            let input = document.createElement('input');
            input.value = data[i];
            encryptedDataDiv.appendChild(input);
            input.focus();
            input.select();
            document.execCommand('copy');
            encryptedDataDiv.removeChild(input);
        });
    }

    const divText = document.createElement('div');
    divText.style.backgroundColor = '#F3F5FC';
    divText.style.width = '100%';
    divText.style.borderRadius = '1rem';
    divText.classList.add('divTextCard');

    divText.appendChild(texto);
    divText.appendChild(copyButton);
    encryptedDataDiv.appendChild(divText);
}
function createDecryptCard(){
    showMessage.style.display = 'none';
    encryptedDataDiv.style.display = 'none';

    desencryptedDataDiv.style.display = 'flex';
    desencryptedDataDiv.style.height = '100%';

    const textoD = document.createElement('p');
    textoD.classList.add('textoCard');
    textoD.style.fontWeight = '500';
    textoD.style.fontSize = '1.4rem';

    textoD.innerHTML = '';

    const copyButton = document.createElement('button');
    copyButton.classList.add('copyButton');
    copyButton.innerHTML = '<i class="fa-solid fa-clipboard"></i>';

    for (let i = 0; i < data.length; i++){
        textoD.innerHTML = decryptData(data[i]);
        copyButton.addEventListener('click', function(){
            let input = document.createElement('input');
            input.value = decryptData(data[i]);
            desencryptedDataDiv.appendChild(input);
            input.focus();
            input.select();
            document.execCommand('copy');
            desencryptedDataDiv.removeChild(input);
        });
    }

    const divText = document.createElement('div');
    divText.classList.add('divTextCard');
    divText.style.backgroundColor = '#F3F5FC';
    divText.style.height = 'fit-content';
    divText.style.width = '100%';
    divText.style.borderRadius = '1rem';

    divText.appendChild(textoD);
    divText.appendChild(copyButton);
    desencryptedDataDiv.appendChild(divText);
}


function launchPopUp(x){
    const newMessage = document.createElement('div');
    newMessage.classList.add('mensajePopUp');

    const divContent = document.createElement('div');
    divContent.classList.add('divContentPopUp');

    if (changeTheme.value === 'black'){
        divContent.style.backgroundColor = '#222529';
        divContent.style.color = '#F3F5FC';
    } else {
        divContent.style.backgroundClip = '#F3F5FC';
    }

    const iconMessage = document.createElement('p');
    iconMessage.classList.add('iconPopUp');
    iconMessage.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i>'

    const textMessage = document.createElement('h2');
    textMessage.classList.add('textPopUp');
    textMessage.innerHTML = x;

    const closeButton = document.createElement('button');
    closeButton.classList.add('closeButtonPopUp');
    closeButton.innerHTML = 'Cerrar';

    closeButton.addEventListener('click', function(){
        body.removeChild(newMessage);
    });

    divContent.appendChild(iconMessage);
    divContent.appendChild(textMessage);
    divContent.appendChild(closeButton);
    newMessage.appendChild(divContent);
    body.appendChild(newMessage);
}



encryptButton.addEventListener('click', function(){

    if (getValue(textoIngresado) === ''){
        launchPopUp('Error, debes ingresar un texto para encriptar');
    } else if (/[^(a-z)|(\s)]/g.test(getValue(textoIngresado))) {
        launchPopUp('Error, no se pueden desencriptar, mayúsculas, números tildes ni carácteres especiales.');
    } else {
        desencryptedDataDiv.style.display = 'none';
        //alert('Texto diferente de cadena vacía');
        if (data.length === 0){
            data.push(encryptData(getValue(textoIngresado)));
        } else {
            data.push(encryptData(getValue(textoIngresado)));
        }
        createCard();
    }
    textoIngresado.value = '';
});


decryptButton.addEventListener('click', function(){
    if (getValue(textoIngresado) === ''){
        launchPopUp('Error, debes ingresar una palabra para desencriptar');
    } else if (/[^(a-z)|(\s)]/g.test(getValue(textoIngresado))) {
        launchPopUp('Error, no se pueden desencriptar, mayúsculas, tildes, números ni carácteres especiales.');
    } else {
        encryptedDataDiv.style.display = 'none';
        if (data.length === 0){
            data.push(getValue(textoIngresado));
        } else {
            data.push(getValue(textoIngresado));
        }
        createDecryptCard();
    }
    textoIngresado.value = '';
});

delButton1.addEventListener('click', function(){
    location.reload();
});
delButton2.addEventListener('click', function(){
    location.reload();
});

changeTheme.addEventListener('click', function(){
    if (changeTheme.value === 'white'){
        body.style.backgroundColor = '#272729';
        body.style.transition = '0.8s';
        textoIngresado.style.backgroundColor = '#272729';
        textoIngresado.style.transition = '0.8s';
        textoIngresado.style.color = '#F3F5FC';
        alertText.style.color = "#F3F5FC";
        alertText.style.transition = '0.8s';
        footer.style.color = '#F3F5FC';
        footer.style.transition = '0.8s';
        resultUserSection.style.backgroundColor = '#39393b';
        resultUserSection.style.boxShadow = '0px 0px 32px 0px rgba(116, 115, 115, 0.08)'
        resultUserSection.style.transition = '0.8s';
        showMessage.style.color = '#F3F5FC';
        showMessage.style.transition = '0.8s';
        muneco.src = './recursos/Muneco2.svg';
        muneco.style.transition = '0.8s';
        imgHeader.src = './recursos/Vector2.svg';
        imgHeader.style.transition = '0.9s';
        changeTheme.value = 'black';
    } else {
        body.style.backgroundColor = '#F3F5FC';
        textoIngresado.style.backgroundColor = '#F4F5FC';
        textoIngresado.style.color = '#0A3871';
        alertText.style.color = '#495057';
        footer.style.color = '#495057';
        resultUserSection.style.backgroundColor = '#FFFFFF';
        showMessage.style.color = '#000';
        muneco.src = './recursos/Muneco.svg';
        imgHeader.src = './recursos/Vector.svg';
        changeTheme.value = 'white';
    }
});
