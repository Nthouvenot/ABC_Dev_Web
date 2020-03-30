var paragraphe = document.getElementsByTagName('p');
paragraphe[0].onmouseover = changeParagraphe;
paragraphe[0].onmouseout = origineParagraphe;
paragraphe[0].style.fontFamily = 'Verdana';

function changeParagraphe() {
    var text='', tmp='';
    var array1=[];
    text = paragraphe[0].innerHTML;
    array1 = text.split(' ');
    for (i = 0; i < array1.length; i++) {
        array1[i] = array1[i].charAt(0).toUpperCase();
    }
    paragraphe[0].style.fontSize = '2em';
    paragraphe[0].style.textDecoration = 'line-through'
   
}

function origineParagraphe() {
    paragraphe[0].style.fontSize = '1em';
    paragraphe[0].style.textDecoration = 'none';

}