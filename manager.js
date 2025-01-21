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
    var checkuser = document.getElementById("checkuser")
    var icon_login = document.getElementById('icon-login');
    var managa_btn = document.getElementById('managa_btn');

    if (user) {
        checkuser.style.display = "block";
        user.providerData.forEach((profile) => {
            uidDefault = profile.uid;
        });
        if (user.email === "abc@gmail.com") {
            managa_btn.style.display = "block";
        }
        displayProducts()

    } else {
        icon_login.style.display = "block";
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
            window.location.href = "http://127.0.0.1:5501/login/login.html";
        })
        .catch(function (error) {
            console.error('Lỗi đăng xuất: ' + error);
        });
});


const productForm = document.getElementById('product-form');
productForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const productImg = document.getElementById('productImg').value;
    const productName = document.getElementById('productName').value;
    const productPrice = document.getElementById('productPrice').value;
    const productDesription = document.getElementById('product-desription').value;
    const productType = document.getElementById('product-type').value;
    // Lưu bài đăng với user_id vào Firestore
    const productsCollection = collection(storage, 'products');
    addDoc(productsCollection, {
        productImg: productImg,
        productName: productName,
        productPrice: productPrice,
        productDesription: productDesription,
        productType: productType,
        user_id: uidDefault, // Thêm trường user_id
    })
        .then((docRef) => {
            console.log('Đã đăng bài thành công');
            displayProducts()
        })
        .catch((error) => {
            console.error('Lỗi khi đăng bài:', error);
        });
});

function displayProducts() {
    const renderProduct = document.getElementById('products');
    renderProduct.innerHTML = `   <tr>
    <th class="th1">STT</th>
    <th class="th2">Tên sản phẩm</th>
    <th class="th3">Ảnh</th>
    <th >Giá </th>
    <th >Loai </th>
    <th >Chỉnh sửa</th>
    <th >Xóa</th>
  </tr>`;

    const productsCollection = collection(storage, 'products');
    const queryProducts = query(productsCollection);
    var stt = 1;
    var product_array = [];
    getDocs(queryProducts)
        .then((items) => {
            items.forEach((item) => {
                const product = item.data();
                product.Id = item.id;
                product_array.push(product)
            });
            for (var product of product_array) {
                let card = document.createElement("tr");
                card.innerHTML = `

        
            <td>${stt}</td>
                <td>${product.productName}</td>
                <td><img class="product_img" src="${product.productImg}" alt=""></td>
                <td>${product.productPrice}</td>
                <td>${product.productType}</td>
                <td ><button  class="edit-button" data-product-id="${product.Id}">edit</button></td>
                <td><button class="delete-button" data-product-id="${product.Id}">deleted</button></td>
              `;
                renderProduct.appendChild(card);
                stt++;
            }

            // Add event listeners for dynamically created buttons
            document.querySelectorAll('.edit-button').forEach(button => {
                button.addEventListener('click', function () {
                    const productId = this.getAttribute('data-product-id');
                    editProduct(productId);
                });
            });
            
            document.querySelectorAll('.delete-button').forEach(button => {
                button.addEventListener('click', function () {
                    const productId = this.getAttribute('data-product-id');
                    deleteProduct(productId);
                });
            });
        })
        .catch((error) => {
            console.error('Lỗi khi lấy dữ liệu bài đăng:', error);
        });
} 
function deleteProduct(productId) {
    const productsCollection = collection(storage, 'products');


    deleteDoc(doc(productsCollection, productId))
        .then(() => {
            console.log('Đã xoá sản phẩm thành công');
            displayProducts();
        })
        .catch((error) => {
            console.error('Lỗi khi xoá sản phẩm :', error);
        });
}
function editProduct(productId) {
    window.location.href = `editproduct.html?productId=${productId}`;
}

