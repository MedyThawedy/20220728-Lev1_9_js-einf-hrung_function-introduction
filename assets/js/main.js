//Lev1_9_js-einführung_function-introduction
function fn_send_data(vorname, nachname, geburtsort, alter, wohnort) {

    console.log(`My name is ${vorname} ${nachname}. 
    I was born in ${geburtsort}. 
    I'm learning to code at SuperCode. 
    I am ${alter} years old. 
    I live in ${wohnort}.`);

    document.getElementById('idTextAreaOutput').style.display = 'block';

    document.getElementById('idTextAreaOutput').value = `My name is ${vorname} ${nachname}. 
    I was born in ${geburtsort}. 
    I'm learning to code at SuperCode. 
    I am ${alter} years old. 
    I live in ${wohnort}.`;

}

// Arrow 

let arrow_fn_send_data = (vorname, nachname, geburtsort, alter, wohnort) => {
    console.log(`My name is ${vorname} ${nachname}. 
    I was born in ${geburtsort}. 
    I'm learning to code at SuperCode. 
    I am ${alter} years old. 
    I live in ${wohnort}.`);

    document.getElementById('idTextAreaOutput').style.display = 'block';

    document.getElementById('idTextAreaOutput').value = `My name is ${vorname} ${nachname}. 
    I was born in ${geburtsort}. 
    I'm learning to code at SuperCode. 
    I am ${alter} years old. 
    I live in ${wohnort}.`;
}