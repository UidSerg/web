let name = prompt("Введите Ваше имя:");

function greeting(username) {
    username = username.trim();
    username = username[0].toUpperCase() + username.slice(1);
    let mess = 'Привет, '+username;
    //alert(mess);
    console.log(mess); // выводим в консоль
}

greeting(name);