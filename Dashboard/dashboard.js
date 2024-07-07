let date = new Date()
let yearChanger = document.querySelector("#yearChanger")
yearChanger.innerText = `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`

const data = JSON.parse(localStorage.getItem("userData"));
let Username = document.getElementById('name');

const showData = () => {
    const { user } = data;
    Username.innerText = user;
}
showData();

showData();