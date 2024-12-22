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

