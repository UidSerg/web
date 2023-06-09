let name = prompt("Введите Ваше имя:");
 
function privet(username) {
    username = username[0].toUpperCase() + username.slice(1);
    let mess = 'Привет, '+username;
    alert(mess);
}
privet(name);