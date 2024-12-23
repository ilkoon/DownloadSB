document.addEventListener('DOMContentLoaded', function() {
    console.log('Page Loaded and Ready!');
});

function copyCommand() {
    const command = document.getElementById('command').textContent;
    navigator.clipboard.writeText(command).then(() => {
        alert('Команда скопирована!');
    }).catch(err => {
        console.error('Ошибка при копировании: ', err);
    });
}

function copyToClipboard() {
    const text = document.getElementById('copyText').textContent;
    navigator.clipboard.writeText(text).then(() => {
        alert('Текст скопирован в буфер обмена!');
    }).catch(err => {
        console.error('Ошибка при копировании: ', err);
    });
}


function copyToClipboard1() {
    const text = document.getElementById('copyText1').textContent;
    navigator.clipboard.writeText(text).then(() => {
        alert('Текст скопирован в буфер обмена!');
    }).catch(err => {
        console.error('Ошибка при копировании: ', err);
    });
}

function copyToClipboard2() {
    const text = document.getElementById('copyText2').textContent;
    navigator.clipboard.writeText(text).then(() => {
        alert('Текст скопирован в буфер обмена!');
    }).catch(err => {
        console.error('Ошибка при копировании: ', err);
    });
}

function copyToClipboard3() {
    const text = document.getElementById('copyText3').textContent;
    navigator.clipboard.writeText(text).then(() => {
        alert('Текст скопирован в буфер обмена!');
    }).catch(err => {
        console.error('Ошибка при копировании: ', err);
    });
}


function copyToClipboard4() {
    const text = document.getElementById('copyText4').textContent;
    navigator.clipboard.writeText(text).then(() => {
        alert('Текст скопирован в буфер обмена!');
    }).catch(err => {
        console.error('Ошибка при копировании: ', err);
    });
}

function copyToClipboard5() {
    const text = document.getElementById('copyText5').textContent;
    navigator.clipboard.writeText(text).then(() => {
        alert('Текст скопирован в буфер обмена!');
    }).catch(err => {
        console.error('Ошибка при копировании: ', err);
    });
}

function copyToClipboard6() {
    const text = document.getElementById('copyText6').textContent;
    navigator.clipboard.writeText(text).then(() => {
        alert('Текст скопирован в буфер обмена!');
    }).catch(err => {
        console.error('Ошибка при копировании: ', err);
    });
}

function copyToClipboard7() {
    const text = document.getElementById('copyText7').textContent;
    navigator.clipboard.writeText(text).then(() => {
        alert('Текст скопирован в буфер обмена!');
    }).catch(err => {
        console.error('Ошибка при копировании: ', err);
    });
}
