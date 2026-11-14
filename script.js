/* =========================================================
   STEP 1: YOUR WEB3FORMS ACCESS KEY
   Orders are emailed to the address you used on web3forms.com
   (see README.md → "Step 3"). This key is safe to be public:
   it can only send emails to you.
   ========================================================= */
const WEB3FORMS_ACCESS_KEY = "fc8fd1ce-9ecf-439d-997d-4363f6bbb754";
const WEB3FORMS_URL = "https://api.web3forms.com/submit";


/* =========================================================
   STEP 2: YOUR MENU
   Edit names, descriptions and prices here.
   Every item needs a unique "id".
   ========================================================= */
const MENU = [
  // ---- CHICKEN ----
  { id: "c1", category: "chicken", name: "Grilled Lemon Herb Chicken", price: 14.99,
    desc: "Juicy chicken breast marinated in lemon, garlic and herbs. Served with rice and salad." },
  { id: "c2", category: "chicken", name: "Crispy Fried Chicken (3 pc)", price: 12.99,
    desc: "Golden buttermilk fried chicken with fries and coleslaw." },
  { id: "c3", category: "chicken", name: "BBQ Chicken Plate", price: 15.49,
    desc: "Smoky BBQ-glazed chicken thighs with mac & cheese and cornbread." },
  { id: "c4", category: "chicken", name: "Spicy Chicken Wings (10 pc)", price: 13.99,
    desc: "Buffalo, honey garlic or lemon pepper. Served with ranch or blue cheese." },
  { id: "c5", category: "chicken", name: "Chicken Parmesan", price: 16.99,
    desc: "Breaded chicken topped with marinara and melted mozzarella, over spaghetti." },

  // ---- STEAK ----
  { id: "s1", category: "steak", name: "Ribeye Steak (12 oz)", price: 29.99,
    desc: "Well-marbled ribeye grilled to order. Served with mashed potatoes and veggies." },
  { id: "s2", category: "steak", name: "Filet Mignon (8 oz)", price: 34.99,
    desc: "Our most tender cut, with garlic butter, asparagus and baked potato." },
  { id: "s3", category: "steak", name: "New York Strip (10 oz)", price: 26.99,
    desc: "Bold, beefy strip steak with fries and a side salad." },
  { id: "s4", category: "steak", name: "Steak Tacos (3)", price: 15.99,
    desc: "Grilled skirt steak, onions, cilantro and lime on corn tortillas." },
  { id: "s5", category: "steak", name: "Steak & Shrimp Combo", price: 32.99,
    desc: "Sirloin steak plus garlic butter shrimp, with rice and vegetables." },

  // ---- FISH ----
  { id: "f1", category: "fish", name: "Grilled Salmon", price: 22.99,
    desc: "Atlantic salmon with lemon dill sauce, quinoa and roasted vegetables." },
  { id: "f2", category: "fish", name: "Fish & Chips", price: 16.99,
    desc: "Beer-battered cod with fries, tartar sauce and lemon." },
  { id: "f3", category: "fish", name: "Blackened Tilapia", price: 17.99,
    desc: "Cajun-spiced tilapia with dirty rice and sautéed greens." },
  { id: "f4", category: "fish", name: "Fish Tacos (3)", price: 14.99,
    desc: "Crispy white fish, cabbage slaw and chipotle crema." },
  { id: "f5", category: "fish", name: "Garlic Butter Shrimp Plate", price: 19.99,
    desc: "Sautéed shrimp in garlic butter with rice and garlic bread." },
];

const CATEGORY_NAMES = { chicken: "🍗 Chicken", steak: "🥩 Steak", fish: "🐟 Fish" };


/* =========================================================
   You don't need to change anything below this line.
   ========================================================= */

let cart = {}; // { itemId: quantity }

const money = (n) => "$" + n.toFixed(2);
const findItem = (id) => MENU.find((item) => item.id === id);

// ---------- Show the menu ----------
function renderMenu(filter = "all") {
  const menuList = document.getElementById("menuList");
  menuList.innerHTML = "";

  Object.keys(CATEGORY_NAMES).forEach((cat) => {
    if (filter !== "all" && filter !== cat) return;

    const items = MENU.filter((item) => item.category === cat);
    const section = document.createElement("section");
    section.innerHTML = `<h2 class="category-title">${CATEGORY_NAMES[cat]}</h2>`;

    const grid = document.createElement("div");
    grid.className = "grid";
    items.forEach((item) => {
      grid.innerHTML += `
        <div class="item">
          <h4>${item.name}</h4>
          <p>${item.desc}</p>
          <div class="item-bottom">
            <span class="price">${money(item.price)}</span>
            <button class="add-btn" data-id="${item.id}">+ Add</button>
          </div>
        </div>`;
    });

    section.appendChild(grid);
    menuList.appendChild(section);
  });
}

// ---------- Cart ----------
function addToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  renderCart();
}

function changeQty(id, amount) {
  cart[id] += amount;
  if (cart[id] <= 0) delete cart[id];
  renderCart();
}

function cartTotal() {
  return Object.entries(cart).reduce((sum, [id, qty]) => sum + findItem(id).price * qty, 0);
}

function renderCart() {
  const box = document.getElementById("cartItems");
  const ids = Object.keys(cart);

  if (ids.length === 0) {
    box.innerHTML = `<p class="cart-empty">Your cart is empty. Add something tasty!</p>`;
  } else {
    box.innerHTML = ids.map((id) => {
      const item = findItem(id);
      return `
        <div class="cart-line">
          <div>
            <div class="cart-line-name">${item.name}</div>
            <div class="cart-line-price">${money(item.price)} each</div>
          </div>
          <div class="qty">
            <button data-id="${id}" data-change="-1" aria-label="Remove one">−</button>
            <span>${cart[id]}</span>
            <button data-id="${id}" data-change="1" aria-label="Add one">+</button>
          </div>
        </div>`;
    }).join("");
  }

  const count = Object.values(cart).reduce((a, b) => a + b, 0);
  document.getElementById("cartCount").textContent = count;
  document.getElementById("cartTotal").textContent = money(cartTotal());
}

function openCart() {
  document.getElementById("cart").classList.add("open");
  document.getElementById("overlay").classList.add("show");
}
function closeCart() {
  document.getElementById("cart").classList.remove("open");
  document.getElementById("overlay").classList.remove("show");
}

// ---------- Send the order by email ----------
async function submitOrder(event) {
  event.preventDefault();
  const form = event.target;
  const message = document.getElementById("formMessage");
  const button = document.getElementById("submitBtn");
  message.className = "form-message";

  if (Object.keys(cart).length === 0) {
    message.textContent = "Please add at least one item to your order.";
    message.classList.add("error");
    return;
  }
  if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY.includes("YOUR_ACCESS_KEY")) {
    message.textContent = "Setup needed: paste your Web3Forms access key at the top of script.js.";
    message.classList.add("error");
    return;
  }

  const data = new FormData(form);
  const minutes = Number(data.get("pickup_minutes"));
  const readyAt = new Date(Date.now() + minutes * 60000)
    .toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });

  // Build a readable order list for the email
  const orderLines = Object.entries(cart).map(([id, qty]) => {
    const item = findItem(id);
    return `${qty} x ${item.name} — ${money(item.price * qty)}`;
  }).join("\n");

  const payload = {
    access_key: WEB3FORMS_ACCESS_KEY,
    from_name: "Farro's Kitchen Website",
    subject: `NEW ORDER: ${data.get("name")} — pickup in ${minutes} min (${readyAt})`,
    customer_name: data.get("name"),
    customer_phone: data.get("phone"),
    email: data.get("email"),           // lets you hit "Reply" to answer the customer
    replyto: data.get("email"),
    pickup_in: `${minutes} minutes`,
    pickup_time: readyAt,
    order: orderLines,
    total: money(cartTotal()),
    special_instructions: data.get("notes") || "None",
  };

  button.disabled = true;
  button.textContent = "Sending…";

  try {
    const response = await fetch(WEB3FORMS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });
    const result = await response.json();
    if (!response.ok || !result.success) throw new Error(result.message || "Server said no");

    message.textContent = `✅ Thank you, ${data.get("name")}! Your order will be ready around ${readyAt}.`;
    message.classList.add("success");
    cart = {};
    renderCart();
    form.reset();
  } catch (err) {
    message.textContent = "❌ Sorry, your order didn't go through. Please call us at (555) 123-4567.";
    message.classList.add("error");
  } finally {
    button.disabled = false;
    button.textContent = "Place order";
  }
}

// ---------- Hook everything up ----------
document.getElementById("menuList").addEventListener("click", (e) => {
  const btn = e.target.closest(".add-btn");
  if (!btn) return;
  addToCart(btn.dataset.id);
  btn.textContent = "✓ Added";
  setTimeout(() => (btn.textContent = "+ Add"), 800);
});

document.getElementById("cartItems").addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-change]");
  if (btn) changeQty(btn.dataset.id, Number(btn.dataset.change));
});

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    renderMenu(tab.dataset.category);
  });
});

document.getElementById("openCart").addEventListener("click", openCart);
document.getElementById("closeCart").addEventListener("click", closeCart);
document.getElementById("overlay").addEventListener("click", closeCart);
document.getElementById("orderForm").addEventListener("submit", submitOrder);
document.getElementById("year").textContent = new Date().getFullYear();

renderMenu();
renderCart();
