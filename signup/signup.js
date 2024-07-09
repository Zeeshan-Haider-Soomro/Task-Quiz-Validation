let formFeild = document.querySelectorAll("form input");

const [userName, userEmail, userPassword, userPic] = formFeild;

console.log(userName, userEmail, userPassword, userPic);

let imgUrl;
const signup = () => {
    event.preventDefault();
    if (userName.value !== "" && userEmail.value !== '' && userPassword.value !== '') {
        let obj = {
            signUpEmail: userEmail.value,
            signupPassword: userPassword.value,
            user: userName.value,
            userProfile: imgUrl

        }
        localStorage.setItem("userData", JSON.stringify(obj));
        window.location.href = '../Login/login.html'

    }
    else {
        Swal.fire("First Fill All The Field !");
    }
}

console.log(window.location.href)

const uploadImage = () => {
    let img = userPic.files[0];
    let fileRead = new FileReader()
    console.log(fileRead);
    fileRead.onload = () => {
        imgUrl = fileRead.result
    }
    fileRead.readAsDataURL(img)
    console.log(fileRead);
}


