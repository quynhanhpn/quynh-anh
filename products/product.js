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


async function fetchProducts() {
  const productsCollection = collection(storage, 'products');
  const queryProducts = query(productsCollection);
  try {
      const snapshot = await getDocs(queryProducts);
      const productArray = snapshot.docs.map((doc) => {
          const product = doc.data();
          product.Id = doc.id;
          return product;
      });

      localStorage.setItem("cakes", JSON.stringify(productArray));
      return productArray;
  } catch (error) {
      console.error('Error fetching product data:', error);
      return [];
  }
}

async function run() {
  try {
      const productsData = await fetchProducts();
      renderCakes(productsData, "all");
  } catch (error) {
      console.error('Error in the run function:', error);
  }
}
run();

function renderCakes(cakes, type){
    console.log(type)
      if(type === "all"){
        document.querySelector(".cards").innerHTML = ""
          for (const cake of cakes) {
              var banh = document.createElement("a")
              banh.setAttribute("href", `detail.html?id=${cake.Id}`)
              banh.classList.add("khung")
              banh.innerHTML = `
              <div class="first-card">
              <div class="offer-col-card ">
                  <div class="img-box">
                      <img src="${cake.productImg}" alt="" class="offer-card">
                  </div>
                  <div class="content-box">
                      <a href="#" class="tiltle add-button"  data-product-id="${cake.Id}" >Thêm vào giỏ hàng</a> 
                  </div>
                 
              </div>
              <div class="first-content">
                  <p>${cake.productName}</p>
                  <p>${cake.productPrice}</p>
              </div>
          </div>
          `
          document.querySelector(".cards").appendChild(banh)
          }
      }else{
          document.querySelector(".cards").innerHTML = ""
          for (const cake of cakes) {
              if(cake.productType === type){
                console.log(cake)
                  var banh = document.createElement("a")
                  banh.setAttribute("href", `detail.html?id=${cake.Id}`)
                  banh.classList.add("khung")
                  banh.innerHTML = `
                  <div class="first-card">
                  <div class="offer-col-card " >
                      <div class="img-box">
                          <img src="${cake.productImg}" alt="" class="offer-card">
                      </div>
                      <div class="content-box">
                          <a href="#" " >Thêm vào giỏ hàng</a> 
                      </div>
                     
                  </div>
                  <div class="first-content">
                      <p>${cake.productName}</p>
                      <p>${cake.productPrice}</p>
                  </div>
              </div>
              `
              document.querySelector(".cards").appendChild(banh)
              }
          }
      }
      document.querySelectorAll('.add-button').forEach(button => {
        button.addEventListener('click', function () {
            const productId = this.getAttribute('data-product-id');
            addToCart(productId);
        });
        
    });
    
  }
  
  
  
  
 
const addToCart = (productId) => {
const cakes = JSON.parse( localStorage.getItem("cakes"))
  const item = cakes.find(x => x.Id == productId);

  if (!item) {
      console.error('Product not found:', productId);
      return;
  }
  let cart = localStorage.getItem("cart");
  cart = JSON.parse(cart) || [];
  const existingCartItem = cart.find(
      (productItem) => productItem.product.Id == item.Id && productItem.user_id === uidDefault
  );
  if (existingCartItem) {
      existingCartItem.quantity += 1;
  } else {
      cart.push({
          user_id: uidDefault,
          product: item,
          quantity: 1,
      });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
};

    
  
    document.querySelectorAll('.change-type').forEach(button => {
      button.addEventListener('click', function () {
          const data_type = this.getAttribute('data-type');
          openType(data_type);
      });
      
  });
    
  
    async function openType(type) {
      const datas =JSON.parse( localStorage.getItem("cakes"))
      renderCakes(datas, type)
    }
    
    document.getElementById("defaultOpen").click();