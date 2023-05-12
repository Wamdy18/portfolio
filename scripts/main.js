const TOKEN = "5724321490:AAGa_DkgwAlGOaC6XyMXnjRJyjNuOvxmLwk";
const CHAT_ID = "1814820866";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

form = document.getElementById('form');
messageSentDiv = document.getElementById('messageSent');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let message = `<b>Сообщение с сайта</b>\n\n`;
    message += `<b>Отправитель:</b> ${form.name.value}\n`;
    message += `<b>Номер телефона:</b> ${form.phone.value}\n`;
    message += `<b>E-mail:</b> ${form.email.value}\n`;
    message += `<b>Цель:</b>. ${form.reason.value}\n\n`;
    message += `<b>Сообщение:</b>\n${form.message.value}`;

    axios.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
    }).then((res) => {
        form.name.value = "";
        form.phone.value = "";
        form.email.value = "";
        form.reason.value = "";
        form.message.value = "";

        messageSentDiv.style.display = 'block';
        setInterval(() => {
            messageSentDiv.style.display = 'none';
        }, 3000);
    })
})