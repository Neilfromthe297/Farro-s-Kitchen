/* =========================================================
   STEP 1: YOUR WEB3FORMS ACCESS KEY
   Orders are emailed to the address you used on web3forms.com
   (see README.md → "Step 3"). This key is safe to be public:
   it can only send emails to you.
   ========================================================= */
const WEB3FORMS_ACCESS_KEY = "fc8fd1ce-9ecf-439d-997d-4363f6bbb754";
const WEB3FORMS_URL = "https://api.web3forms.com/submit";

// Restaurant WhatsApp: every order opens WhatsApp with the order typed out
// to this number (an email copy is also sent as a backup)
const WHATSAPP_NUMBER = "+297 569 1341";

// Restaurant phone (used for "Call to order" buttons and error messages)
const PHONE = "(555) 123-4567";

// Currency shown in front of every price
const CURRENCY = "Afl.";

/* ---------- FAKE-ORDER PROTECTION (amounts in florins) ---------- */
// Most of one dish (same options) a customer can order online
const MAX_QTY_PER_ITEM = 10;
// Orders above this total can't be placed online: customer must call
const MAX_ORDER_TOTAL = 300;
// Orders at or above this total are marked "CALL TO CONFIRM" in your email
const CONFIRM_CALL_ABOVE = 150;


/* =========================================================
   STEP 2: YOUR MENU
   Each dish can have:
     id       unique short name (no spaces)
     name     dish name
     sub      optional second name (e.g. Spanish), shown smaller
     desc     optional description
     img      photo in the images folder (optional: without it an icon shows)
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
  { id: "p5", img: "images/onion-steak.jpg",  category: "platters", name: "1/2 Lb Onion Steak", sub: "Encebollado", price: 28.75 },
  { id: "p6",  category: "platters", name: "1/2 Lb Pork Chop", price: 24.75, img: "images/porkchop.jpg" },
  { id: "p7",  category: "platters", name: "1 Lb Pork Chop", price: 37.25, img: "images/porkchop.jpg" },
  { id: "p8",  category: "platters", name: "Boneless Breast", price: 26.25, img: "images/chicken-breast.jpg" },
  { id: "p9", img: "images/lomo-saltado.jpg",  category: "platters", name: "Sauteed Beef", sub: "Lomo Saltado", price: 35.50 },
  { id: "p10", img: "images/pollo-saltado.jpg", category: "platters", name: "Sauteed Chicken", sub: "Pollo Saltado", price: 31.50 },
  { id: "p11", category: "platters", name: "1/2 Chicken Only", desc: "No sides.", price: 16.50, noSides: true, img: "images/chicken.jpg" },
  { id: "p12", category: "platters", name: "1 Whole Chicken Only", desc: "No sides.", price: 22.50, noSides: true, img: "images/chicken.jpg" },
  { id: "p13", category: "platters", name: "Chicken Wings", price: 24.50, img: "images/wings.jpg" },
  { id: "p14", category: "platters", name: "Pork Ribs", price: 24.50, img: "images/hero.jpg" },
  { id: "p15", img: "images/sancocho.jpg", category: "platters", name: "Sancocho Rabo di Baca", price: 19.50 },

  // ---- SEAFOOD ----
  { id: "sf1", img: "images/seafood-rice.jpg",  category: "seafood", name: "Seafood Rice", sub: "Arroz con Mariscos", price: 36.50 },
  { id: "sf2", img: "images/seafood-fried-rice.jpg",  category: "seafood", name: "Seafood Fried Rice", sub: "Arroz Frito con Mariscos", price: 36.50 },
  { id: "sf3", img: "images/rice-shrimps.jpg",  category: "seafood", name: "Rice with Shrimps", sub: "Arroz con Camarones", price: 36.50 },
  { id: "sf4",  category: "seafood", name: "Shrimp Soup", sub: "Chupe de Camarones", price: 22.50, img: "images/shrimpsoup.jpg" },
  { id: "sf5", img: "images/fish-soup.jpg",  category: "seafood", name: "Fish Soup", sub: "Chupe de Pescado", price: 20.00 },
  { id: "sf6", img: "images/seafood-soup.jpg",  category: "seafood", name: "Seafood Soup", sub: "Chupe de Mariscos", price: 22.50 },
  { id: "sf7", img: "images/shrimp-jalea.jpg",  category: "seafood", name: "Shrimps Jelly", sub: "Jalea de Camarones", price: 37.50 },
  { id: "sf8", img: "images/fish-jalea.jpg",  category: "seafood", name: "Fish Jelly", sub: "Jalea de Pescado", price: 36.50 },
  { id: "sf9", img: "images/garlic-fish.jpg",  category: "seafood", name: "Garlic Fish", price: 32.50 },
  { id: "sf10", img: "images/garlic-fish-shrimps.jpg", category: "seafood", name: "Garlic Fish with Shrimps", price: 35.50 },
  { id: "sf11", category: "seafood", name: "Criollo Fish", price: 32.50, img: "images/criollo-fish.jpg" },
  { id: "sf12", img: "images/criollo-fish.jpg", category: "seafood", name: "Criollo Fish with Shrimps", price: 37.50 },
  { id: "sf13", img: "images/mahi-mahi.jpg", category: "seafood", name: "Mahi Mahi Fish", price: 25.50 },
  { id: "sf14", img: "images/mahi-mahi.jpg", category: "seafood", name: "Mahi Mahi Fish (2 persons)", price: 42.50 },
  { id: "sf15", img: "images/onion-mahi.jpg", category: "seafood", name: "Onion Mahi Mahi", sub: "Encebollado", price: 26.50 },
  { id: "sf16", img: "images/garlic-fish-shrimps.jpg", category: "seafood", name: "Fish Mahi Mahi with Shrimps", price: 35.50 },
  { id: "sf17", img: "images/spaghetti-shrimp.jpg", category: "seafood", name: "Spaguetti Shrimps Sauce", sub: "Spg. Salsa de Camarones", price: 37.50 },
  { id: "sf18", img: "images/spaghetti-seafood.jpg", category: "seafood", name: "Spaguetti with Seafood Mix", sub: "Spg. con Mariscos", price: 37.50 },
  { id: "sf19", img: "images/spaghetti-alfredo.jpg", category: "seafood", name: "Spaguetti Alfredo with Ribs", price: 25.50 },
  { id: "sf20", img: "images/spaghetti-beef.jpg", category: "seafood", name: "Spaguetti Beef", sub: "Spg. con Lomito", price: 35.50 },
  { id: "sf21", img: "images/spaghetti-chicken.jpg", category: "seafood", name: "Spaguetti Chicken", sub: "Spg. con Pollo", price: 31.50 },

  // ---- SANDWICHES ----
  { id: "sw1", img: "images/sandwich-chicken.jpg", category: "sandwiches", name: "Chicken Sandwich", price: 16.75 },
  { id: "sw2", img: "images/sandwich-steak.jpg", category: "sandwiches", name: "Steak Sandwich", price: 16.75 },
  { id: "sw3", img: "images/sandwich-pork.jpg", category: "sandwiches", name: "Pork Sandwich", price: 16.75 },
  { id: "sw4", img: "images/sandwich-fish.jpg", category: "sandwiches", name: "Fish Sandwich", price: 16.75 },

  // ---- SIDE ORDERS ----
  { id: "sd1", img: "images/rice.jpg", category: "sides", name: "Rice", sizes: { Small: 7.25, Large: 12.00 } },
  { id: "sd2", img: "images/potatoes.jpg", category: "sides", name: "Onion Potatoes", sizes: { Small: 8.75, Large: 13.50 } },
  { id: "sd3", img: "images/fries.jpg", category: "sides", name: "French Fries", sizes: { Small: 7.25, Large: 12.00 } },
  { id: "sd4", img: "images/yuca.jpg", category: "sides", name: "Fried Yuca", sizes: { Small: 8.75, Large: 12.50 } },
  { id: "sd5", img: "images/fried-rice.jpg", category: "sides", name: "Fried Rice", sizes: { Small: 9.25, Large: 13.25 } },
  { id: "sd6", img: "images/banana.jpg", category: "sides", name: "Banana", sizes: { Small: 7.50, Large: 12.25 } },

  // ---- SALADS ----
  { id: "sl1", img: "images/salad-green.jpg", category: "salads", name: "Lettuce", sizes: { Small: 8.75, Large: 13.50 } },
  { id: "sl2", img: "images/coleslaw.jpg", category: "salads", name: "Coleslaw", sizes: { Small: 8.75, Large: 13.50 } },
  { id: "sl3", img: "images/potatoes.jpg", category: "salads", name: "Potato Salad", sizes: { Small: 8.75, Large: 13.50 } },
  { id: "sl4", img: "images/salad-mix.jpg", category: "salads", name: "Mix Salad", sizes: { Small: 8.75, Large: 13.50 } },

  // ---- FAMILY MEALS (no price yet: add "price: 00.00" and remove callToOrder to sell online) ----
  { id: "fm1", img: "images/family-chicken.jpg", category: "family", name: "Family Meal 1", callToOrder: true,
    desc: "1 whole chicken, 1/2 lb. grilled steak, 1/2 lb. grilled pork, 1 pork ribs. Served with 1 large rice, large potatoes, 2L Coca-Colas and onion sauce." },
  { id: "fm2", img: "images/family-lomito.jpg", category: "family", name: "Family Meal 2", sub: "Bandeja Familiar (Lomito)", callToOrder: true,
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
  if (existing && existing.qty >= MAX_QTY_PER_ITEM) return showLimitNotice();
  if (existing) existing.qty += 1;
  else cart.push({ key, id: item.id, size, sides, price: size ? item.sizes[size] : item.price, qty: 1 });
  renderCart();
}

function changeQty(key, amount) {
  const line = cart.find((l) => l.key === key);
  if (amount > 0 && line.qty >= MAX_QTY_PER_ITEM) return showLimitNotice();
  line.qty += amount;
  if (line.qty <= 0) cart = cart.filter((l) => l !== line);
  renderCart();
}

function showLimitNotice() {
  const toast = document.getElementById("toast");
  toast.textContent = `Online orders are limited to ${MAX_QTY_PER_ITEM} of each item. For large orders please call us at ${PHONE}.`;
  toast.classList.add("show");
  clearTimeout(showLimitNotice.timer);
  showLimitNotice.timer = setTimeout(() => toast.classList.remove("show"), 4000);
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

// ---------- Send the order (WhatsApp + email copy) ----------
// The green button is a REAL link to WhatsApp. Phones always let a tapped
// link open WhatsApp (automatic pop-ups get blocked), so when it's tapped we:
//   1. check the order, 2. put the order text into the link,
//   3. send the email copy in the background, 4. let the link open WhatsApp.
function sendOrder(event) {
  const form = document.getElementById("orderForm");
  const link = document.getElementById("submitBtn");
  const message = document.getElementById("formMessage");
  message.className = "form-message";
  message.textContent = "";

  const fail = (text) => {
    event.preventDefault();               // stop the link: don't open WhatsApp
    if (text) {
      message.textContent = text;
      message.classList.add("error");
    }
  };

  if (cart.length === 0) return fail("Please add at least one item to your order.");
  if (cartTotal() > MAX_ORDER_TOTAL) {
    return fail(`Orders over ${money(MAX_ORDER_TOTAL)} must be placed by phone. Please call us at ${PHONE}.`);
  }
  if (!form.reportValidity()) return fail();   // browser shows which field is missing

  const data = new FormData(form);
  const phoneDigits = String(data.get("phone")).replace(/\D/g, "");
  if (phoneDigits.length < 7 || /[^0-9+()\-\s]/.test(data.get("phone"))) {
    return fail("Please enter a real phone number (at least 7 digits) so we can reach you.");
  }

  const needsCall = cartTotal() >= CONFIRM_CALL_ABOVE;
  const minutes = Number(data.get("pickup_minutes"));
  const readyAt = new Date(Date.now() + minutes * 60000)
    .toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
  const isBot = Boolean(data.get("botcheck"));

  // 2. Put the order into the WhatsApp link (the tap then opens it)
  const waUrl = whatsappLink(buildWhatsAppText({
    name: data.get("name"), phone: data.get("phone"), minutes, readyAt,
    notes: data.get("notes"), needsCall,
  }));
  link.href = waUrl;

  // 3. Email copy (backup). "keepalive" lets it finish even if the page is left.
  sendEmailCopy(data, { minutes, readyAt, needsCall, isBot });

  if (isBot) return fail();   // robots: email is dropped by Web3Forms, no WhatsApp

  // 4. The link opens WhatsApp now. Show what to do next and empty the cart.
  showWhatsAppConfirmation(message, {
    name: data.get("name"), phone: data.get("phone"), readyAt, needsCall, waUrl,
  });
  cart = [];
  renderCart();
  form.reset();
  setTimeout(() => (link.href = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}`), 1000);
}

function sendEmailCopy(data, { minutes, readyAt, needsCall, isBot }) {
  if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY.includes("YOUR_ACCESS_KEY")) return;
  const orderLines = cart.map((l) => {
    let text = `${l.qty} x ${lineName(l)} — ${money(l.price * l.qty)}`;
    if (l.sides.length) text += `\n      Sides: ${l.sides.join(", ")}`;
    return text;
  }).join("\n");

  const payload = {
    access_key: WEB3FORMS_ACCESS_KEY,
    from_name: "Farro's Kitchen Website",
    subject: `${needsCall ? "⚠️ LARGE ORDER, CALL TO CONFIRM: " : ""}NEW ORDER: ${data.get("name")} — pickup in ${minutes} min (${readyAt})`,
    customer_name: data.get("name"),
    customer_phone: data.get("phone"),
    email: data.get("email"),           // lets you hit "Reply" to answer the customer
    replyto: data.get("email"),
    pickup_in: `${minutes} minutes`,
    pickup_time: readyAt,
    order: orderLines,
    total: money(cartTotal()),
    special_instructions: data.get("notes") || "None",
    sent_on_whatsapp: "Customer was sent to WhatsApp to send this order. If no WhatsApp message arrives, call them.",
  };
  if (needsCall) payload.important = "Large order: call the customer to confirm BEFORE you start cooking.";
  // Hidden "botcheck" box: real people never see it, spam robots tick it.
  // Web3Forms automatically rejects the order when it's ticked.
  if (isBot) payload.botcheck = true;

  fetch(WEB3FORMS_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(payload),
    keepalive: true,
  }).catch(() => { /* backup only: WhatsApp is the main way orders arrive */ });
}

// ---------- WhatsApp helpers ----------
function whatsappLink(text) {
  return `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}?text=${encodeURIComponent(text)}`;
}

function buildWhatsAppText({ name, phone, minutes, readyAt, notes, needsCall }) {
  const lines = cart.map((l) => {
    let text = `${l.qty} x ${lineName(l)} - ${money(l.price * l.qty)}`;
    if (l.sides.length) text += `\n    Sides: ${l.sides.join(", ")}`;
    return text;
  });
  return [
    `*NEW ORDER - Farro's Kitchen*`,
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Pickup: in ${minutes} minutes (around ${readyAt})`,
    ``,
    ...lines,
    ``,
    `*TOTAL: ${money(cartTotal())}* (pay at pickup)`,
    notes ? `Notes: ${notes}` : null,
    needsCall ? `\n⚠️ Large order: please call me to confirm.` : null,
  ].filter((l) => l !== null).join("\n");
}

function showWhatsAppConfirmation(box, { name, phone, readyAt, needsCall, waUrl }) {
  box.className = "form-message success";
  box.replaceChildren();
  const title = document.createElement("strong");
  title.textContent = `Almost done, ${name}!`;
  const text = document.createElement("span");
  text.textContent = " WhatsApp is opening with your order. Tap Send in WhatsApp to send it to us.";
  const extra = document.createElement("span");
  extra.className = "form-message-extra";
  extra.textContent = needsCall
    ? `Because this is a large order, we'll call you at ${phone} to confirm before we start cooking.`
    : `Your order will be ready around ${readyAt}.`;
  const link = document.createElement("a");
  link.className = "btn btn-whatsapp btn-full";
  link.href = waUrl;
  link.target = "_blank";
  link.rel = "noopener";
  link.textContent = "WhatsApp didn't open? Tap here";
  box.append(title, text, extra, link);
  box.scrollIntoView({ behavior: "smooth", block: "center" });
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
document.getElementById("submitBtn").addEventListener("click", sendOrder);
document.getElementById("year").textContent = new Date().getFullYear();

renderTabs();
renderMenu();
renderCart();
