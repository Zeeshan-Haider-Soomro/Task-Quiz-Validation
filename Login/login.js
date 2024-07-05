let formFeild = document.querySelectorAll("form input");

const [loginEmail, loginPassword] = formFeild;


const data = JSON.parse(localStorage.getItem("userData"));

let loader = document.getElementById('loader');
const login = () => {
    event.preventDefault();
    const { signUpEmail, signupPassword } = data;

    if ((signUpEmail === loginEmail.value) &&
        signupPassword === loginPassword.value) {

        setTimeout(() => {
            window.location.href = '../Dashboard/dashboard.html'
        }, 2000)

    }
    else {
        Swal.fire("Invalid Credentils");
    }
}


