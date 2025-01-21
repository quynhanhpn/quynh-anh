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
    if (user) {
        user.providerData.forEach((profile) => {
            uidDefault = profile.uid;
        });
    } 
});

const search = window.location.search;
console.log(search);
const params = new URLSearchParams(search);
console.log(params);
let id = params.get("id");
console.log(id);

const cakes = JSON.parse( localStorage.getItem("cakes"))
function renderCake(cake) {
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
        <button class="product-buttom1" id="btn-add" data-product-id="${cake.Id}">THÊM VÀO GIỎ HÀNG </button>
        <button class="product-buttom2">MUA NGAY </button>
        <div class="description">
            <h4> Miêu tả</h4>
            <p>${cake.productDesription}</p>
        </div>
    </div>
`
    document.getElementById("content").appendChild(banh)

document.getElementById('btn-add').addEventListener('click', function () {
      const productId = this.getAttribute('data-product-id');
      addToCart(productId);
  });
}



const addToCart = (productId) => {
  const item = cakes.find(x => x.Id == productId);

  if (!item) {
      console.error('Product not found:', productId);
      return;
  }

  const inputQuantity = parseInt(document.getElementById("input_quantity").value);
  if (isNaN(inputQuantity) || inputQuantity <= 0) {
      console.error('Invalid quantity:', inputQuantity);
      return;
  }

  let cart = localStorage.getItem("cart");
  cart = JSON.parse(cart) || [];
  const existingCartItem = cart.find(
      (productItem) => productItem.product.Id == item.Id && productItem.user_id === uidDefault
  );
  if (existingCartItem) {
      existingCartItem.quantity += inputQuantity;
  } else {
      cart.push({
          user_id: uidDefault,
          product: item,
          quantity: inputQuantity,
      });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
};



console.log(cakes)
function run() {
    const cake = cakes.find(x => x.Id === id)
    renderCake(cake)
}
run()