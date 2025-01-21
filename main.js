// Cấu hình Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";
import { getAuth, signOut, onAuthStateChanged, } from 'https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js';
import { getFirestore, doc, getDoc, updateDoc, collection, query, where, getDocs, addDoc, deleteDoc } from 'https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js';


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getFirestore(app);
var uidDefault;

// Kiểm tra xem người dùng đã đăng nhập hay chưa
onAuthStateChanged(getAuth(), function (user) {
 var checkuser= document.getElementById("checkuser")
 var icon_login = document.getElementById('icon-login');
 var manager_btn = document.getElementById('managa_btn');
var userinfo = document.getElementById("userinfo")
    if (user) {
        checkuser.style.display="block";
        icon_login.style.display="none";
        userinfo.textContent = user.displayName ? user.displayName : user.email;
        user.providerData.forEach((profile) => {
            console.log("Sign-in provider: " + profile.providerId);
            console.log("  Provider-specific UID: " + profile.uid);
            console.log("  Name: " + profile.displayName);
            console.log("  Email: " + profile.email);
            console.log("  Photo URL: " + profile.photoURL);
            uidDefault = profile.uid;
        });
        if (user.email=== "abc@gmail.com"){
            manager_btn.style.display="block";
        }
    } else {
        icon_login.style.display="block";

    }
});


// Lắng nghe sự kiện đăng xuất
var logoutButton = document.getElementById('logout_btn');
logoutButton.addEventListener('click', function () {
    // Đăng xuất người dùng
    signOut(getAuth())
        .then(function () {
            console.log('Đăng xuất thành công');
            // Chuyển trở lại trang đăng nhập/đăng ký
            window.location.href = "../login/login.html";
            
        })
        .catch(function (error) {
            console.error('Lỗi đăng xuất: ' + error);
        });
});







