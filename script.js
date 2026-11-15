/* =========================================================
   STEP 1: YOUR WEB3FORMS ACCESS KEY
   Orders are emailed to the address you used on web3forms.com
   (see README.md → "Step 3"). This key is safe to be public:
   it can only send emails to you.
   ========================================================= */
const WEB3FORMS_ACCESS_KEY = "fc8fd1ce-9ecf-439d-997d-4363f6bbb754";
const WEB3FORMS_URL = "https://api.web3forms.com/submit";

// Restaurant phone (used for "Call to order" buttons and error messages)
const PHONE = "(555) 123-4567";

// Currency shown in front of every price
const CURRENCY = "Afl.";


/* =========================================================
   STEP 2: YOUR MENU
   Each dish can have:
     id       unique short name (no spaces)
     name     dish name
     sub      optional second name (e.g. Spanish), shown smaller
     desc     optional description
     img      optional photo in the images folder
     price    one price, OR
     sizes    { Small: 7.25, Large: 12.00 } for size choices, OR
     callToOrder: true   (no price online, shows a "Call to order" button)
   Categories with "sides: 2" make the customer choose 2 sides.
   ========================================================= */
const PLATTER_SIDES = ["Rice", "Onion Potatoes", "French Fries", "Salad"];

const CATEGORIES = [
  { key: "platters", title: "Platters", icon: "🍗", sides: 2,
    note: "Served with 2 side orders of your choice: rice, onion potatoes, french fries or salad." },
  { key: "seafood", title: "Seafood", icon: "🦐" },
  { key: "sandwiches", title: "Sandwiches", icon: "🥪", note: "Served with french fries." },
  { key: "sides", title: "Side Orders", icon: "🍟" },
  { key: "salads", title: "Salads", icon: "🥗" },
  { key: "family", title: "Family Meals", icon: "👨‍👩‍👧‍👦", note: "Each family meal serves 4 persons." },
];

const MENU = [
  // ---- PLATTERS ----
  { id: "p1",  category: "platters", name: "1/2 Chicken", price: 23.50, img: "images/chicken.jpg" },
  { id: "p2",  category: "platters", name: "1 Whole Chicken", price: 34.50, img: "images/chicken.jpg" },
  { id: "p3",  category: "platters", name: "1/2 Lb. Steak", price: 29.00, img: "images/steak-fries.jpg" },
  { id: "p4",  category: "platters", name: "1 Lb. Steak", price: 38.50, img: "images/steak-pan.jpg" },
  { id: "p5",  category: "platters", name: "1/2 Lb Onion Steak", sub: "Encebollado", price: 28.75 },
  { id: "p6",  category: "platters", name: "1/2 Lb Pork Chop", price: 24.75, img: "images/porkchop.jpg" },
  { id: "p7",  category: "platters", name: "1 Lb Pork Chop", price: 37.25, img: "images/porkchop.jpg" },
  { id: "p8",  category: "platters", name: "Boneless Breast", price: 26.25, img: "images/chicken-breast.jpg" },
  { id: "p9",  category: "platters", name: "Sauteed Beef", sub: "Lomo Saltado", price: 35.50 },
  { id: "p10", category: "platters", name: "Sauteed Chicken", sub: "Pollo Saltado", price: 31.50 },
  { id: "p11", category: "platters", name: "1/2 Chicken Only", desc: "No sides.", price: 16.50, noSides: true, img: "images/chicken.jpg" },
  { id: "p12", category: "platters", name: "1 Whole Chicken Only", desc: "No sides.", price: 22.50, noSides: true, img: "images/chicken.jpg" },
  { id: "p13", category: "platters", name: "Chicken Wings", price: 24.50, img: "images/wings.jpg" },
  { id: "p14", category: "platters", name: "Pork Ribs", price: 24.50, img: "images/hero.jpg" },
  { id: "p15", category: "platters", name: "Sancocho Rabo di Baca", price: 19.50 },

  // ---- SEAFOOD ----
  { id: "sf1",  category: "seafood", name: "Seafood Rice", sub: "Arroz con Mariscos", price: 36.50 },
  { id: "sf2",  category: "seafood", name: "Seafood Fried Rice", sub: "Arroz Frito con Mariscos", price: 36.50 },
  { id: "sf3",  category: "seafood", name: "Rice with Shrimps", sub: "Arroz con Camarones", price: 36.50 },
  { id: "sf4",  category: "seafood", name: "Shrimp Soup", sub: "Chupe de Camarones", price: 22.50, img: "images/shrimpsoup.jpg" },
  { id: "sf5",  category: "seafood", name: "Fish Soup", sub: "Chupe de Pescado", price: 20.00 },
  { id: "sf6",  category: "seafood", name: "Seafood Soup", sub: "Chupe de Mariscos", price: 22.50 },
  { id: "sf7",  category: "seafood", name: "Shrimps Jelly", sub: "Jalea de Camarones", price: 37.50 },
  { id: "sf8",  category: "seafood", name: "Fish Jelly", sub: "Jalea de Pescado", price: 36.50 },
  { id: "sf9",  category: "seafood", name: "Garlic Fish", price: 32.50 },
  { id: "sf10", category: "seafood", name: "Garlic Fish with Shrimps", price: 35.50 },
  { id: "sf11", category: "seafood", name: "Criollo Fish", price: 32.50, img: "images/criollo-fish.jpg" },
  { id: "sf12", category: "seafood", name: "Criollo Fish with Shrimps", price: 37.50 },
  { id: "sf13", category: "seafood", name: "Mahi Mahi Fish", price: 25.50 },
  { id: "sf14", category: "seafood", name: "Mahi Mahi Fish (2 persons)", price: 42.50 },
  { id: "sf15", category: "seafood", name: "Onion Mahi Mahi", sub: "Encebollado", price: 26.50 },
  { id: "sf16", category: "seafood", name: "Fish Mahi Mahi with Shrimps", price: 35.50 },
  { id: "sf17", category: "seafood", name: "Spaguetti Shrimps Sauce", sub: "Spg. Salsa de Camarones", price: 37.50 },
  { id: "sf18", category: "seafood", name: "Spaguetti with Seafood Mix", sub: "Spg. con Mariscos", price: 37.50 },
  { id: "sf19", category: "seafood", name: "Spaguetti Alfredo with Ribs", price: 25.50 },
  { id: "sf20", category: "seafood", name: "Spaguetti Beef", sub: "Spg. con Lomito", price: 35.50 },
  { id: "sf21", category: "seafood", name: "Spaguetti Chicken", sub: "Spg. con Pollo", price: 31.50 },

  // ---- SANDWICHES ----
  { id: "sw1", category: "sandwiches", name: "Chicken Sandwich", price: 16.75 },
  { id: "sw2", category: "sandwiches", name: "Steak Sandwich", price: 16.75 },
  { id: "sw3", category: "sandwiches", name: "Pork Sandwich", price: 16.75 },
  { id: "sw4", category: "sandwiches", name: "Fish Sandwich", price: 16.75 },

  // ---- SIDE ORDERS ----
  { id: "sd1", category: "sides", name: "Rice", sizes: { Small: 7.25, Large: 12.00 } },
  { id: "sd2", category: "sides", name: "Onion Potatoes", sizes: { Small: 8.75, Large: 13.50 } },
  { id: "sd3", category: "sides", name: "French Fries", sizes: { Small: 7.25, Large: 12.00 } },
  { id: "sd4", category: "sides", name: "Fried Yuca", sizes: { Small: 8.75, Large: 12.50 } },
  { id: "sd5", category: "sides", name: "Fried Rice", sizes: { Small: 9.25, Large: 13.25 } },
  { id: "sd6", category: "sides", name: "Banana", sizes: { Small: 7.50, Large: 12.25 } },

  // ---- SALADS ----
  { id: "sl1", category: "salads", name: "Lettuce", sizes: { Small: 8.75, Large: 13.50 } },
  { id: "sl2", category: "salads", name: "Coleslaw", sizes: { Small: 8.75, Large: 13.50 } },
  { id: "sl3", category: "salads", name: "Potato Salad", sizes: { Small: 8.75, Large: 13.50 } },
  { id: "sl4", category: "salads", name: "Mix Salad", sizes: { Small: 8.75, Large: 13.50 } },

  // ---- FAMILY MEALS (no price yet: add "price: 00.00" and remove callToOrder to sell online) ----
  { id: "fm1", category: "family", name: "Family Meal 1", callToOrder: true,
    desc: "1 whole chicken, 1/2 lb. grilled steak, 1/2 lb. grilled pork, 1 pork ribs. Served with 1 large rice, large potatoes, 2L Coca-Colas and onion sauce." },
  { id: "fm2", category: "family", name: "Family Meal 2", sub: "Bandeja Familiar (Lomito)", callToOrder: true,
    desc: "Served with 1 large rice, 1 large french fries and 2L Coca-Colas." },
];


/* =========================================================
   You don't need to change anything below this line.
   ========================================================= */

// Each cart line: { key, id, size, sides: [], price, qty }
let cart = [];

const money = (n) => `${CURRENCY} ${n.toFixed(2)}`;
const findItem = (id) => MENU.find((item) => item.id === id);
const findCategory = (key) => CATEGORIES.find((c) => c.key === key);
const needsSides = (item) => findCategory(item.category).sides && !item.noSides;
const hasOptions = (item) => item.sizes || needsSides(item);

function priceLabel(item) {
  if (item.callToOrder) return "Call for price";
  if (item.sizes) return Object.entries(item.sizes).map(([s, p]) => `${s[0]} ${money(p)}`).join(" · ");
  return money(item.price);
}

function lineName(line) {
  const item = findItem(line.id);
  let name = item.name;
  if (line.size) name += ` (${line.size})`;
  return name;
}

// ---------- Tabs & menu ----------
function renderTabs() {
  const tabs = document.getElementById("menu");
  tabs.innerHTML = `<button class="tab active" data-category="all">All</button>` +
    CATEGORIES.map((c) => `<button class="tab" data-category="${c.key}">${c.icon} ${c.title}</button>`).join("");
}

function renderMenu(filter = "all") {
  const menuList = document.getElementById("menuList");
  menuList.innerHTML = CATEGORIES
    .filter((c) => filter === "all" || filter === c.key)
    .map((cat) => {
      const rows = MENU.filter((item) => item.category === cat.key).map((item) => `
        <div class="item">
          ${item.img
            ? `<img class="item-photo" src="${item.img}" alt="${item.name}" loading="lazy">`
            : `<div class="item-photo item-photo-empty" aria-hidden="true">${cat.icon}</div>`}
          <div class="item-info">
            <h4>${item.name}</h4>
            ${item.sub ? `<div class="item-sub">${item.sub}</div>` : ""}
            ${item.desc ? `<p>${item.desc}</p>` : ""}
            <div class="item-bottom">
              <span class="price">${priceLabel(item)}</span>
              ${item.callToOrder
                ? `<a class="add-btn call-btn" href="tel:${PHONE.replace(/[^\d+]/g, "")}">📞 Call to order</a>`
                : `<button class="add-btn" data-id="${item.id}">+ Add</button>`}
            </div>
          </div>
        </div>`).join("");
      return `<section>
        <h2 class="category-title">${cat.icon} ${cat.title}</h2>
        ${cat.note ? `<p class="category-note">${cat.note}</p>` : ""}
        <div class="grid">${rows}</div>
      </section>`;
    }).join("");
}

// ---------- Options popup (size / choose 2 sides) ----------
let optionsItem = null;

function openOptions(item) {
  optionsItem = item;
  const body = document.getElementById("optionsBody");
  let html = `<h3>${item.name}</h3>`;
  if (item.sizes) {
    html += `<fieldset><legend>Choose a size</legend>` +
      Object.entries(item.sizes).map(([size, p], i) => `
        <label class="choice"><input type="radio" name="size" value="${size}" ${i === 0 ? "checked" : ""}>
          <span>${size}</span><span class="choice-price">${money(p)}</span></label>`).join("") +
      `</fieldset>`;
  }
  if (needsSides(item)) {
    const count = findCategory(item.category).sides;
    html += `<fieldset><legend>Choose ${count} sides <span id="sideCount">(0 of ${count})</span></legend>` +
      PLATTER_SIDES.map((s) => `
        <label class="choice"><input type="checkbox" name="side" value="${s}"><span>${s}</span></label>`).join("") +
      `</fieldset>`;
  }
  body.innerHTML = html;
  document.getElementById("optionsError").textContent = "";
  document.getElementById("options").classList.add("open");
  document.getElementById("overlay").classList.add("show");
}

function closeOptions() {
  document.getElementById("options").classList.remove("open");
  if (!document.getElementById("cart").classList.contains("open")) {
    document.getElementById("overlay").classList.remove("show");
  }
  optionsItem = null;
}

function confirmOptions() {
  const item = optionsItem;
  const body = document.getElementById("optionsBody");
  let size = null, sides = [];
  if (item.sizes) size = body.querySelector('input[name="size"]:checked').value;
  if (needsSides(item)) {
    const count = findCategory(item.category).sides;
    sides = [...body.querySelectorAll('input[name="side"]:checked')].map((i) => i.value);
    if (sides.length !== count) {
      document.getElementById("optionsError").textContent = `Please choose exactly ${count} sides.`;
      return;
    }
  }
  addToCart(item, size, sides);
  closeOptions();
}

// ---------- Cart ----------
function addToCart(item, size = null, sides = []) {
  const key = [item.id, size, sides.join("+")].join("|");
  const existing = cart.find((l) => l.key === key);
  if (existing) existing.qty += 1;
  else cart.push({ key, id: item.id, size, sides, price: size ? item.sizes[size] : item.price, qty: 1 });
  renderCart();
}

function changeQty(key, amount) {
  const line = cart.find((l) => l.key === key);
  line.qty += amount;
  if (line.qty <= 0) cart = cart.filter((l) => l !== line);
  renderCart();
}

const cartTotal = () => cart.reduce((sum, l) => sum + l.price * l.qty, 0);

function renderCart() {
  const box = document.getElementById("cartItems");
  if (cart.length === 0) {
    box.innerHTML = `<p class="cart-empty">Your cart is empty. Add something tasty!</p>`;
  } else {
    box.innerHTML = cart.map((l) => `
      <div class="cart-line">
        <div>
          <div class="cart-line-name">${lineName(l)}</div>
          ${l.sides.length ? `<div class="cart-line-price">Sides: ${l.sides.join(", ")}</div>` : ""}
          <div class="cart-line-price">${money(l.price)} each</div>
        </div>
        <div class="qty">
          <button data-key="${l.key}" data-change="-1" aria-label="Remove one">−</button>
          <span>${l.qty}</span>
          <button data-key="${l.key}" data-change="1" aria-label="Add one">+</button>
        </div>
      </div>`).join("");
  }
  document.getElementById("cartCount").textContent = cart.reduce((a, l) => a + l.qty, 0);
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

  if (cart.length === 0) {
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
  const orderLines = cart.map((l) => {
    let text = `${l.qty} x ${lineName(l)} — ${money(l.price * l.qty)}`;
    if (l.sides.length) text += `\n      Sides: ${l.sides.join(", ")}`;
    return text;
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
    cart = [];
    renderCart();
    form.reset();
  } catch (err) {
    message.textContent = `❌ Sorry, your order didn't go through. Please call us at ${PHONE}.`;
    message.classList.add("error");
  } finally {
    button.disabled = false;
    button.textContent = "Place order";
  }
}

// ---------- Hook everything up ----------
document.getElementById("menuList").addEventListener("click", (e) => {
  const btn = e.target.closest("button.add-btn");
  if (!btn) return;
  const item = findItem(btn.dataset.id);
  if (hasOptions(item)) return openOptions(item);
  addToCart(item);
  btn.textContent = "✓ Added";
  setTimeout(() => (btn.textContent = "+ Add"), 800);
});

document.getElementById("menu").addEventListener("click", (e) => {
  const tab = e.target.closest(".tab");
  if (!tab) return;
  document.querySelectorAll(".tab").forEach((t) => t.classList.remove("active"));
  tab.classList.add("active");
  renderMenu(tab.dataset.category);
});

document.getElementById("optionsBody").addEventListener("change", () => {
  const counter = document.getElementById("sideCount");
  if (!counter) return;
  const count = findCategory(optionsItem.category).sides;
  const checked = document.querySelectorAll('#optionsBody input[name="side"]:checked').length;
  counter.textContent = `(${checked} of ${count})`;
});

document.getElementById("cartItems").addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-change]");
  if (btn) changeQty(btn.dataset.key, Number(btn.dataset.change));
});

document.getElementById("openCart").addEventListener("click", openCart);
document.getElementById("closeCart").addEventListener("click", closeCart);
document.getElementById("overlay").addEventListener("click", () => { closeOptions(); closeCart(); });
document.getElementById("optionsAdd").addEventListener("click", confirmOptions);
document.getElementById("optionsCancel").addEventListener("click", closeOptions);
document.getElementById("orderForm").addEventListener("submit", submitOrder);
document.getElementById("year").textContent = new Date().getFullYear();

renderTabs();
renderMenu();
renderCart();
