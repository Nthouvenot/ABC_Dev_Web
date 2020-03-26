var paragraphe = document.getElementsByTagName('p');
paragraphe[0].onmouseover = changeParagraphe;
paragraphe[0].onmouseout = origineParagraphe;
paragraphe[0].style = 'width: 500px;'

function changeParagraphe() {
    paragraphe[0].style.fontFamily = 'Verdana';
    paragraphe[0].style.fontSize = '2em';
    paragraphe[0].style.fontStyle = ''
}

function origineParagraphe() {
    paragraphe[0].style.fontFamily = 'SansSerif';
    paragraphe[0].style.fontSize = '1em';
}