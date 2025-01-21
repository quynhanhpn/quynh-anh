import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";
import { getAuth, signOut, onAuthStateChanged, } from 'https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js';
import { getFirestore, doc, getDoc, updateDoc, collection, query, where, getDocs, addDoc } from 'https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js';

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getFirestore(app);
var uidDefault;


onAuthStateChanged(getAuth(), function (user) {
    if (user) {
        user.providerData.forEach((profile) => {
            uidDefault = profile.uid;
        });
    }
});
// Lấy thông tin bài đăng từ Firestore và điền vào các trường chỉnh sửa
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('productId');


const editPostForm = document.querySelector('.edit-post-form');
const productImg = document.getElementById('productImg')
const productName = document.getElementById('productName')
const productPrice = document.getElementById('productPrice')
const productDesription = document.getElementById('product-desription')

const postsCollection = collection(storage, 'products');//

const postDocRef = doc(postsCollection, productId);//
getDoc(postDocRef)//
    .then((docSnapshot) => {
        if (docSnapshot.exists()) {
            //
            const productData = docSnapshot.data();
            productName.value = productData.productName;
            productPrice.value = productData.productPrice;
            productDesription.value = productData.productDesription;
            productImg.value = productData.productImg;
            renderCake(productData)
        } else {
            console.error('Bài đăng không tồn tại');
        }
    })
    .catch((error) => {
        console.error('Lỗi khi lấy dữ liệu bài đăng:', error);
    });

// Xử lý sự kiện khi người dùng lưu chỉnh sửa
editPostForm.addEventListener('submit', function (e) {
    e.preventDefault();

    //
    updateDoc(postDocRef, {
        productImg: productImg.value,
        productName: productName.value,
        productPrice: productPrice.value,
        productDesription: productDesription.value,
    })
        .then(() => {
            console.log('Chỉnh sửa bài đăng thành công');
            var productData = {
                productName: productName.value,
                productPrice: productPrice.value,
                productDesription: productDesription.value,
                productImg: productImg.value,
            };
            renderCake(productData)//
        })
        .catch((error) => {
            console.error('Lỗi khi chỉnh sửa bài đăng:', error);
        });
});

function renderCake(cake) {
    document.getElementById("content").innerHTML = "";

    var banh = document.createElement("div")

    banh.classList.add("content")
    banh.innerHTML = `
<div class="img-box">
        <img src="${cake.productImg}" alt="" class="img">
        <div class="img-wrapper">
           
        </div>
    </div>
    <div class="product-info">
        <div class="product-name">
            <h1>${cake.productName}</h1>
        </div>
        <div class="product-price">
            <p>${cake.productPrice}</p>
        </div>
        <div class="quantity">
            <button  onclick="decrement()" >-</button>
            <input  id="input_quantity" type="text" value="1" >
            <button onclick="increment()">+</button>
        </div>
        <button class="product-buttom1" onClick="">THÊM VÀO GIỎ HÀNG </button>
        <button class="product-buttom2">MUA NGAY </button>
        <div class="description">
            <h4> Miêu tả</h4>
            <p>${cake.productDesription}</p>
        </div>
    </div>
`
    document.getElementById("content").appendChild(banh)

}