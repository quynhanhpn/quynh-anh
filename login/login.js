// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
 var loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var email = document.getElementById('login-email').value;
    var password = document.getElementById('login-password').value;
    var errorMessage = document.getElementById('error-message');

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log('Đăng nhập thành công: ' + user.email);
        
        window.location.href = 'http://127.0.0.1:5502/index.html';
    })
    .catch((error) => {
        var errorCode = error.code;
            var errorMessage = error.message;
            console.log('Lỗi đăng nhập: ' + errorMessage);
            errorMessage.textContent = errorMessage;
    });
});