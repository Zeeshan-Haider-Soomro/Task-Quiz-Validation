let date = new Date()
let yearChanger = document.querySelector("#yearChanger")
yearChanger.innerText = `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`

const data = JSON.parse(localStorage.getItem("userData"));
let Username = document.getElementById('name');
let showImages = document.getElementById("showImages")

const showData = () => {
    const { user, userProfile } = data;
    Username.innerText = user;
    showImages.src = userProfile
}
showData();

const logOut = () => {
    localStorage.clear();
    window.location.href = "../index.html";
}


