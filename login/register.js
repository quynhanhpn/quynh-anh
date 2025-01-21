  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth();
  var signupForm = document.getElementById('signup-form');
  signupForm.addEventListener('submit', function (e) {
      e.preventDefault();
      let email = document.getElementById('signup-email').value;
      let password = document.getElementById('signup-password').value;
      let errorMessage = document.getElementById('error-message');
      
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          console.log('Đăng ký thành công: ' + user.email);
              window.location.href = 'login.html'; // Chuyển hướng sau khi đăng ký
      })
      .catch((error) => {
         // Xử lý lỗi đăng ký
         var errorCode = error.code;
              var errorMessage = error.message;
              console.log('Lỗi đăng ký: ' + errorMessage);
              errorMessage.textContent = errorMessage;
          // ..
      });
  });