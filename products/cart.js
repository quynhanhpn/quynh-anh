// Cấu hình Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";
import {
  getAuth,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
import {
  getFirestore,
  doc,
  getDoc,
  updateDoc,
  collection,
  query,
  where,
  getDocs,
  addDoc,
  deleteDoc,
} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";

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
    run();
  }
});
function run() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const filteredCart = cart.filter((item) => item.user_id === uidDefault);
  renderItems(filteredCart);
}

function renderItems(cart) {
  let total_price = 0;

  // Clear the existing content before rendering
  document.getElementById("carts").innerHTML = "";

  for (const item of cart) {
    if (item) {
      const item_div = document.createElement("div");
      item_div.classList.add("cart-item");

      // Convert productPrice to a number (remove ₫ and commas, then convert to float)
      const productPrice = parseFloat(
        item.product.productPrice.replace(/[₫,]/g, "")
      );

      let price = productPrice * item.quantity * 1000;
      total_price = total_price + price;

      item_div.innerHTML = `
                <div class="item-img"><img src="${
                  item.product.productImg
                }" alt=""></div>
                <div class="item-title continue">
                    ${item.product.productName}
                    <button type="button" class="btn-deleted" data-key="${
                      item.product.Id
                    }">Bỏ</button>
                    <div>Số lượng ${item.quantity}</div>
                </div>
                <div class="item-price price">${item.product.productPrice}</div>
                <div class="item-total total">${price.toLocaleString("vi", {
                  style: "currency",
                  currency: "VND",
                })}</div>
            `;

      document.getElementById("carts").appendChild(item_div);
    }
  }

  document.getElementById("total-price").innerHTML = total_price.toLocaleString(
    "vi",
    { style: "currency", currency: "VND" }
  );
  document.querySelectorAll(".btn-deleted").forEach(function (ele, key) {
    ele.addEventListener("click", function (e) {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const data_key = ele.getAttribute("data-key");
      const updatedCart = cart.filter((item) => item.product.Id !== data_key);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      ele.closest(".cart-item").remove();
      location.reload();
    });
  });

  document.getElementById("pay-btn").addEventListener('click', function () {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = cart.filter(item => item.user_id !== uidDefault);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    document.querySelectorAll('.cart-item').forEach(function (item) {
        const dataKey = item.querySelector('.btn-deleted').getAttribute('data-key');
        const cartItemUserId = cart.find(cartItem => cartItem.product.Id === dataKey)?.user_id;

        if (cartItemUserId === uidDefault) {
            item.remove();
        }
    });
    location.reload();
});

}
