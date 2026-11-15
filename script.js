/* =========================================================
   STEP 1: YOUR WEB3FORMS ACCESS KEY
   Orders are emailed to the address you used on web3forms.com
   (see README.md → "Step 3"). This key is safe to be public:
   it can only send emails to you.
   ========================================================= */
const WEB3FORMS_ACCESS_KEY = "fc8fd1ce-9ecf-439d-997d-4363f6bbb754";
const WEB3FORMS_URL = "https://api.web3forms.com/submit";

// Restaurant phone (used for "Call to order" buttons and error messages)
const PHONE = "+297 582 2065";

// Currency shown in front of every price
const CURRENCY = "Afl.";

/* ---------- OPENING HOURS (Aruba time) ----------
   One line per day: [opens, closes] in 24-hour time, or null if closed.
   Orders are only accepted while open, and the pickup time must be
   no later than closing time. */
const TIME_ZONE = "America/Aruba";
const OPENING_HOURS = {
  Monday:    ["11:00", "21:00"],
  Tuesday:   ["11:00", "21:00"],
  Wednesday: ["11:00", "21:00"],
  Thursday:  ["11:00", "21:00"],
  Friday:    ["11:00", "21:00"],
  Saturday:  ["11:00", "21:00"],
  Sunday:    ["11:00", "21:00"],
};

/* ---------- FAKE-ORDER PROTECTION (amounts in florins) ---------- */
// Most of one dish (same options) a customer can order online
const MAX_QTY_PER_ITEM = 10;
// Orders above this total can't be placed online: customer must call
const MAX_ORDER_TOTAL = 300;
// Orders at or above this total are marked "CALL TO CONFIRM" in your email
const CONFIRM_CALL_ABOVE = 150;

/* ---------- PICKUP TIMES ---------- */
// While open: "pick up in ..." choices (minutes from now)
const PICKUP_MINUTES = [15, 20, 30, 45, 60];
// While closed: pre-order choices (minutes after opening time); earliest = 20 min after opening
const PREORDER_AFTER_OPENING = [20, 30, 45, 60];

/* ---------- PROMO CODES ----------
   Codes are stored as a scrambled fingerprint (SHA-256), never as plain text,
   so nobody can find them by reading the website's code.
   To add or change a code, ask Claude (or see README.md). */
const PROMO_CODES = [
  { hash: "4f035064318612a518e5bc6f575a77951bc04ce99e8316fc7bb522161d16de92", percent: 25 },
];


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
  { key: "platters", title: "Platters", icon: "drumstick", sides: 2,
    note: "Served with 2 side orders of your choice: rice, onion potatoes, french fries or salad." },
  { key: "seafood", title: "Seafood", icon: "fish" },
  { key: "sandwiches", title: "Sandwiches", icon: "sandwich", note: "Served with french fries." },
  { key: "sides", title: "Side Orders", icon: "cooking-pot" },
  { key: "salads", title: "Salads", icon: "salad" },
  { key: "family", title: "Family Meals", icon: "users", note: "Each family meal serves 4 persons." },
  { key: "drinks", title: "Drinks", icon: "cup-soda" },
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

  // ---- DRINKS ----
  { id: "dr1", img: "images/drink-coca-cola.jpg", category: "drinks", name: "Coca-Cola", price: 3.50 },
  { id: "dr2", img: "images/drink-coca-cola-zero.jpg", category: "drinks", name: "Coca-Cola Zero", price: 3.50 },
  { id: "dr3", img: "images/drink-sprite.jpg", category: "drinks", name: "Sprite", price: 3.50 },
  { id: "dr4", img: "images/drink-sprite-zero.jpg", category: "drinks", name: "Sprite Zero", price: 3.50 },
  { id: "dr5", img: "images/drink-orange-juice.jpg", category: "drinks", name: "Orange Juice", price: 3.50 },
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

// Dish name / second name / description in the chosen language (see i18n.js)
function itemText(item) {
  const tr = MENU_TRANSLATIONS[currentLang]?.[item.id];
  return {
    name: tr?.name ?? item.name,
    sub: tr ? (tr.sub ?? (tr.name ? null : item.sub)) : item.sub,
    desc: tr?.desc ?? item.desc,
  };
}
const catTitle = (cat) => t(`cat_${cat.key}`);
const catNote = (cat) => (cat.note ? t(`note_${cat.key}`) : "");

function priceLabel(item) {
  if (item.callToOrder) return t("call_for_price");
  if (item.sizes) return Object.entries(item.sizes).map(([s, p]) => `${t(`size_short_${s}`)} ${money(p)}`).join(" · ");
  return money(item.price);
}

// forEmail = true: always English, so the kitchen gets the same wording
function lineName(line, forEmail = false) {
  const item = findItem(line.id);
  let name = forEmail ? item.name : itemText(item).name;
  if (line.size) name += ` (${forEmail ? line.size : t(`size_${line.size}`)})`;
  return name;
}

// ---------- Tabs & menu ----------
// Icon from the icon set at the top of index.html
const icon = (name) => `<svg class="icon" aria-hidden="true"><use href="#i-${name}"/></svg>`;

// Show a message with an icon (type: "success" | "error" | "")
function setMessage(el, type, text) {
  el.className = `form-message${type ? " " + type : ""}`;
  el.replaceChildren();
  if (!text) return;
  if (type) el.insertAdjacentHTML("beforeend", icon(type === "success" ? "circle-check" : "circle-x"));
  const span = document.createElement("span");
  span.textContent = text;
  el.append(span);
}

// ---------- Sticky category bar ----------
// Tapping a category scrolls to it; the bar highlights the section on screen.
let activeCategory = CATEGORIES[0].key;

function renderTabs() {
  const tabs = document.getElementById("menu");
  tabs.innerHTML = CATEGORIES.map((c) =>
    `<button class="tab${c.key === activeCategory ? " active" : ""}" data-category="${c.key}">${icon(c.icon)} ${catTitle(c)}</button>`
  ).join("");
}

function highlightTab(key) {
  if (key === activeCategory) return;
  activeCategory = key;
  document.querySelectorAll(".tab").forEach((el) => {
    const on = el.dataset.category === key;
    el.classList.toggle("active", on);
    if (on) {
      // Slide the bar sideways so the active tab is visible (never scrolls the page)
      const bar = el.parentElement;
      bar.scrollTo({ left: el.offsetLeft - (bar.clientWidth - el.offsetWidth) / 2, behavior: "smooth" });
    }
  });
}

// Which menu section is just below the sticky bars?
function updateActiveTabOnScroll() {
  const offset = document.getElementById("menu").getBoundingClientRect().bottom + 40;
  let current = CATEGORIES[0].key;
  document.querySelectorAll(".menu-section").forEach((sec) => {
    if (sec.getBoundingClientRect().top <= offset) current = sec.dataset.category;
  });
  highlightTab(current);
}

// ---------- Menu search ----------
// Searches dish names in English, Spanish and Papiamento at once, ignoring accents and capitals
const normalize = (text) => String(text || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
function searchText(item, cat) {
  const parts = [item.name, item.sub, item.desc];
  for (const lang of Object.keys(MENU_TRANSLATIONS)) {
    const tr = MENU_TRANSLATIONS[lang][item.id];
    if (tr) parts.push(tr.name, tr.sub, tr.desc);
  }
  for (const lang of Object.keys(TRANSLATIONS)) parts.push(TRANSLATIONS[lang][`cat_${cat.key}`]);
  return normalize(parts.filter(Boolean).join(" ")).replace(/"/g, "");
}

function applySearch() {
  const input = document.getElementById("menuSearch");
  const words = normalize(input.value).split(/\s+/).filter(Boolean);
  document.getElementById("searchClear").hidden = words.length === 0;
  let found = 0;
  document.querySelectorAll(".menu-section").forEach((sec) => {
    let inSection = 0;
    sec.querySelectorAll(".item").forEach((it) => {
      const match = words.every((w) => it.dataset.search.includes(w));
      it.hidden = !match;
      if (match) inSection++;
    });
    sec.hidden = inSection === 0;
    found += inSection;
  });
  const empty = document.getElementById("searchEmpty");
  empty.hidden = found > 0;
  empty.textContent = found > 0 ? "" : t("search_none", { q: input.value.trim() });
  document.querySelectorAll(".tab").forEach((tab) => {
    const sec = document.getElementById(`cat-${tab.dataset.category}`);
    tab.hidden = Boolean(sec && sec.hidden);
  });
}

function renderMenu() {
  const menuList = document.getElementById("menuList");
  menuList.innerHTML = CATEGORIES
    .map((cat) => {
      const rows = MENU.filter((item) => item.category === cat.key).map((item) => {
        const txt = itemText(item);
        return `
        <div class="item" data-search="${searchText(item, cat)}">
          ${item.img
            ? `<img class="item-photo" src="${item.img}" alt="${txt.name}" loading="lazy">`
            : `<div class="item-photo item-photo-empty" aria-hidden="true">${icon(cat.icon)}</div>`}
          <div class="item-info">
            <h4>${txt.name}</h4>
            ${txt.sub ? `<div class="item-sub">${txt.sub}</div>` : ""}
            ${txt.desc ? `<p>${txt.desc}</p>` : ""}
            <div class="item-bottom">
              <span class="price">${priceLabel(item)}</span>
              ${item.callToOrder
                ? `<a class="add-btn call-btn" href="tel:${PHONE.replace(/[^\d+]/g, "")}">${icon("phone")} ${t("call_to_order")}</a>`
                : `<button class="add-btn" data-id="${item.id}">${t("add")}</button>`}
            </div>
          </div>
        </div>`;
      }).join("");
      return `<section class="menu-section" id="cat-${cat.key}" data-category="${cat.key}">
        <h2 class="category-title">${icon(cat.icon)} ${catTitle(cat)}</h2>
        ${catNote(cat) ? `<p class="category-note">${catNote(cat)}</p>` : ""}
        <div class="grid">${rows}</div>
      </section>`;
    }).join("");
}

// ---------- Options popup (size / choose 2 sides) ----------
let optionsItem = null;

function openOptions(item) {
  optionsItem = item;
  const body = document.getElementById("optionsBody");
  let html = `<h3>${itemText(item).name}</h3>`;
  if (item.sizes) {
    html += `<fieldset><legend>${t("opt_size")}</legend>` +
      Object.entries(item.sizes).map(([size, p], i) => `
        <label class="choice"><input type="radio" name="size" value="${size}" ${i === 0 ? "checked" : ""}>
          <span>${t(`size_${size}`)}</span><span class="choice-price">${money(p)}</span></label>`).join("") +
      `</fieldset>`;
  }
  if (needsSides(item)) {
    const count = findCategory(item.category).sides;
    html += `<fieldset><legend>${t("opt_sides", { n: count })} <span id="sideCount">${t("opt_count", { c: 0, n: count })}</span></legend>` +
      PLATTER_SIDES.map((s) => `
        <label class="choice"><input type="checkbox" name="side" value="${s}"><span>${t(`side_${s}`)}</span></label>`).join("") +
      `</fieldset>`;
  }
  body.innerHTML = html;
  document.getElementById("optionsError").textContent = "";
  document.getElementById("options").classList.add("open");
  document.getElementById("overlay").classList.add("show");
  pushPanel("options");
  updateScrollLock();
}

function closeOptions(fromBackButton = false) {
  if (!optionsItem) return;
  document.getElementById("options").classList.remove("open");
  if (!isCartOpen()) document.getElementById("overlay").classList.remove("show");
  optionsItem = null;
  if (!fromBackButton) popPanel("options");
  updateScrollLock();
}

// ---------- Order number & on-screen receipt ----------
// Short, easy-to-read order number like "LG-7KQ4" (no 0/O or 1/I to avoid mix-ups)
function makeOrderNumber() {
  const chars = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ";
  let code = "";
  for (let i = 0; i < 4; i++) code += chars[Math.floor(Math.random() * chars.length)];
  return `LG-${code}`;
}

const RECEIPT_HOURS = 12;      // how long the last receipt stays available
let lastOrder = loadLastOrder();

function saveLastOrder(order) {
  lastOrder = order;
  try { localStorage.setItem("lastOrder", JSON.stringify(order)); } catch (e) { /* ignore */ }
}
function loadLastOrder() {
  try {
    const o = JSON.parse(localStorage.getItem("lastOrder") || "null");
    if (o && Date.now() - o.savedAt < RECEIPT_HOURS * 3600 * 1000) return o;
    localStorage.removeItem("lastOrder");
  } catch (e) { /* ignore */ }
  return null;
}
function clearLastOrder() {
  lastOrder = null;
  try { localStorage.removeItem("lastOrder"); } catch (e) { /* ignore */ }
}

// Shows the receipt in the cart when the last order was placed and the cart is empty
function renderReceipt() {
  const cartEl = document.getElementById("cart");
  const box = document.getElementById("receipt");
  const show = Boolean(lastOrder) && cart.length === 0;
  cartEl.classList.toggle("showing-receipt", show);
  box.hidden = !show;
  if (!show) return;
  const o = lastOrder;
  const esc = (v) => String(v).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const lines = o.lines.map((l) => `
    <li>
      <span class="rc-qty">${l.qty}×</span>
      <span class="rc-name">${lineName(l)}${l.sides.length ? `<small>${t("sides_list", { list: l.sides.map((s) => t(`side_${s}`)).join(", ") })}</small>` : ""}</span>
      <span class="rc-price">${money(l.price * l.qty)}</span>
    </li>`).join("");
  box.innerHTML = `
    <div class="rc-head">
      ${icon("circle-check")}
      <h3>${t("rc_title")}</h3>
      <p>${esc(t("rc_thanks", { name: o.name }))}</p>
    </div>
    <div class="rc-number">
      <small>${t("rc_number_label")}</small>
      <strong>#${o.number}</strong>
    </div>
    <p class="rc-hint">${t("rc_show")}</p>
    <dl class="rc-facts">
      <div><dt>${icon("clock")} ${t(o.preorder ? "rc_ready_pre" : "rc_ready")}</dt><dd>${o.readyAt}</dd></div>
      <div><dt>${icon(o.driveThru ? "car" : "house")} ${t("rc_pickup")}</dt>
        <dd>${t(o.driveThru ? "drive_thru" : "pickup_inside")}${o.driveThru && o.car ? ` · ${esc(o.car)}` : ""}</dd></div>
      <div><dt>${icon("map-pin")} ${t("rc_where")}</dt><dd>Zandstraat 2, Oranjestad</dd></div>
    </dl>
    ${o.preorder ? `<p class="rc-call">${icon("clock")} ${esc(t("rc_preorder"))}</p>` : ""}
    ${o.needsCall ? `<p class="rc-call">${icon("phone")} ${esc(t("rc_call", { phone: o.phone }))}</p>` : ""}
    <ul class="rc-lines">${lines}</ul>
    ${o.discount ? `<div class="rc-sub"><span>${t("subtotal")}</span><span>${money(o.subtotal)}</span></div>
    <div class="rc-sub rc-discount"><span>${t("discount", { percent: o.promoPercent })}</span><span>− ${money(o.discount)}</span></div>` : ""}
    <div class="rc-total"><span>${t("total")}</span><strong>${money(o.total)}</strong></div>
    <p class="rc-pay">${t("rc_pay")}</p>
    <p class="rc-help">${t("rc_help")} <a href="tel:${PHONE.replace(/[^\d+]/g, "")}">${PHONE}</a></p>
    ${isInstalled() ? "" : `<button type="button" class="install-btn install-btn-light" data-install>${icon("smartphone")} ${t("install_receipt")}</button>`}
    <button type="button" class="btn btn-full" id="newOrderBtn">${t("rc_new")}</button>`;
}

// ---------- "Would you like a drink?" at checkout ----------
let drinkQuestion = "open";   // "open" → ask, "answered" → don't ask again for this order
const hasDrink = () => cart.some((l) => findItem(l.id).category === "drinks");
const DRINKS = () => MENU.filter((i) => i.category === "drinks");

function renderDrinkAsk() {
  const box = document.getElementById("drinkAsk");
  const show = cart.length > 0 && !hasDrink() && drinkQuestion !== "answered";
  box.hidden = !show;
  if (!show) return;
  box.innerHTML = `
    <div class="drink-ask-head">${icon("cup-soda")}<div><strong>${t("drink_q")}</strong><span>${t("drink_sub")}</span></div></div>
    <div class="drink-chips">
      ${DRINKS().map((d) => `<button type="button" class="drink-chip" data-drink="${d.id}">+ ${itemText(d).name} <small>${money(d.price)}</small></button>`).join("")}
    </div>
    <button type="button" class="drink-no" id="drinkNo">${t("drink_no")}</button>`;
}

document.getElementById("drinkAsk").addEventListener("click", (e) => {
  const chip = e.target.closest("[data-drink]");
  if (chip) {
    addToCart(findItem(chip.dataset.drink));
    drinkQuestion = "answered";
    renderDrinkAsk();
    return;
  }
  if (e.target.closest("#drinkNo")) {
    drinkQuestion = "answered";
    renderDrinkAsk();
  }
});

// ---------- "Add to home screen" ----------
let installPrompt = null;               // Android/Chrome's own install prompt, when offered
const isInstalled = () => window.matchMedia("(display-mode: standalone)").matches || navigator.standalone === true;
const isIOS = () => /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

function updateInstallButtons() {
  document.querySelectorAll("[data-install]").forEach((b) => (b.hidden = isInstalled()));
}
window.addEventListener("beforeinstallprompt", (e) => { e.preventDefault(); installPrompt = e; updateInstallButtons(); });
window.addEventListener("appinstalled", () => { installPrompt = null; updateInstallButtons(); });

async function startInstall() {
  if (installPrompt) {                   // Android / Chrome: show the phone's own "Install" window
    installPrompt.prompt();
    await installPrompt.userChoice.catch(() => null);
    installPrompt = null;
    return;
  }
  const steps = isIOS()
    ? [t("install_ios_1"), t("install_ios_2"), t("install_ios_3")]
    : [t("install_and_1"), t("install_and_2"), t("install_and_3")];
  const icons = isIOS() ? ["share", "square-plus", "plus"] : ["ellipsis-vertical", "smartphone", "plus"];
  document.getElementById("installSteps").innerHTML =
    steps.map((s, i) => `<li>${icon(icons[i])}<span>${s}</span></li>`).join("");
  document.getElementById("installSheet").hidden = false;
  pushPanel("install");
}
function closeInstall(fromBackButton = false) {
  const sheet = document.getElementById("installSheet");
  if (sheet.hidden) return;
  sheet.hidden = true;
  if (!fromBackButton) popPanel("install");
}
document.addEventListener("click", (e) => { if (e.target.closest("[data-install]")) startInstall(); });
document.getElementById("installClose").addEventListener("click", () => closeInstall());
document.getElementById("installSheet").addEventListener("click", (e) => {
  if (e.target.id === "installSheet") closeInstall();
});

// ---------- Phone helpers ----------
const isCartOpen = () => document.getElementById("cart").classList.contains("open");

// Stop the page behind the cart / popup from scrolling
function updateScrollLock() {
  document.body.classList.toggle("no-scroll", isCartOpen() || Boolean(optionsItem));
}

// The phone's back button closes the cart or popup instead of leaving the site
function pushPanel(name) {
  if (history.state?.panel !== name) history.pushState({ panel: name }, "");
}
function popPanel(name) {
  if (history.state?.panel === name) history.back();
}
window.addEventListener("popstate", () => {
  if (!document.getElementById("installSheet").hidden) closeInstall(true);
  else if (optionsItem) closeOptions(true);
  else if (isCartOpen()) closeCart(true);
});

function confirmOptions() {
  const item = optionsItem;
  const body = document.getElementById("optionsBody");
  let size = null, sides = [];
  if (item.sizes) size = body.querySelector('input[name="size"]:checked').value;
  if (needsSides(item)) {
    const count = findCategory(item.category).sides;
    sides = [...body.querySelectorAll('input[name="side"]:checked')].map((i) => i.value);
    // 1 side or up to `count` sides; the price stays the same
    if (sides.length < 1 || sides.length > count) {
      document.getElementById("optionsError").textContent = t("opt_err", { n: count });
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
  bumpCart();
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
  toast.textContent = t("toast_limit", { max: MAX_QTY_PER_ITEM, phone: PHONE });
  toast.classList.add("show");
  clearTimeout(showLimitNotice.timer);
  showLimitNotice.timer = setTimeout(() => toast.classList.remove("show"), 4000);
}

const cartTotal = () => cart.reduce((sum, l) => sum + l.price * l.qty, 0);   // before discount

// ---------- Promo codes ----------
let appliedPromo = null;          // { code, percent } once a valid code is applied
const round2 = (n) => Math.round(n * 100) / 100;
const discountAmount = () => (appliedPromo ? round2(cartTotal() * appliedPromo.percent / 100) : 0);
const payTotal = () => round2(cartTotal() - discountAmount());

async function sha256(text) {
  const bytes = new TextEncoder().encode(text);
  const hash = await crypto.subtle.digest("SHA-256", bytes);
  return [...new Uint8Array(hash)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

function showPromoMessage(type, text, withRemove = false) {
  const msg = document.getElementById("promoMsg");
  msg.className = `promo-msg ${type}`;
  msg.replaceChildren(Object.assign(document.createElement("span"), { textContent: text }));
  if (withRemove) {
    const btn = Object.assign(document.createElement("button"), { type: "button", className: "promo-remove", textContent: t("promo_remove") });
    btn.addEventListener("click", removePromo);
    msg.append(btn);
  }
}

async function applyPromo() {
  const input = document.getElementById("promoInput");
  const code = input.value.trim().toUpperCase();
  if (!code) return showPromoMessage("error", t("promo_empty"));
  let hash = "";
  try { hash = await sha256(code); } catch (e) { /* very old browser */ }
  const match = PROMO_CODES.find((p) => p.hash === hash);
  if (!match) {
    appliedPromo = null;
    renderCart();
    return showPromoMessage("error", t("promo_bad"));
  }
  appliedPromo = { code, percent: match.percent };
  input.value = code;
  renderCart();
  showPromoMessage("success", t("promo_ok", { percent: match.percent }), true);
}

function removePromo() {
  appliedPromo = null;
  document.getElementById("promoInput").value = "";
  document.getElementById("promoMsg").replaceChildren();
  document.getElementById("promoMsg").className = "promo-msg";
  renderCart();
}

function renderTotals() {
  const hasPromo = Boolean(appliedPromo) && cart.length > 0;
  document.getElementById("subtotalLine").hidden = !hasPromo;
  document.getElementById("discountLine").hidden = !hasPromo;
  if (hasPromo) {
    document.getElementById("cartSubtotal").textContent = money(cartTotal());
    document.getElementById("discountLabel").textContent = t("discount", { percent: appliedPromo.percent });
    document.getElementById("cartDiscount").textContent = `− ${money(discountAmount())}`;
  }
  document.getElementById("cartTotal").textContent = money(payTotal());
}

function renderCart() {
  const box = document.getElementById("cartItems");
  if (cart.length === 0) {
    box.innerHTML = `<p class="cart-empty">${t("cart_empty")}</p>`;
  } else {
    box.innerHTML = cart.map((l) => `
      <div class="cart-line">
        <div>
          <div class="cart-line-name">${lineName(l)}</div>
          ${l.sides.length ? `<div class="cart-line-price">${t("sides_list", { list: l.sides.map((s) => t(`side_${s}`)).join(", ") })}</div>` : ""}
          <div class="cart-line-price">${t("each", { price: money(l.price) })}</div>
        </div>
        <div class="qty">
          <button data-key="${l.key}" data-change="-1" aria-label="${t("remove_one")}">−</button>
          <span>${l.qty}</span>
          <button data-key="${l.key}" data-change="1" aria-label="${t("add_one")}">+</button>
        </div>
      </div>`).join("");
  }
  const count = cart.reduce((a, l) => a + l.qty, 0);
  document.getElementById("cartCount").textContent = count;
  renderTotals();
  renderDrinkAsk();
  updateOrderBar();
  renderReceipt();
}

// "View order" bar at the bottom of the screen once the cart has items
function updateOrderBar() {
  const count = cart.reduce((a, l) => a + l.qty, 0);
  const bar = document.getElementById("orderBar");
  bar.hidden = count === 0 || isCartOpen();
  document.body.classList.toggle("has-order-bar", count > 0);
  document.getElementById("orderBarCount").textContent = count;
  document.getElementById("orderBarTotal").textContent = money(payTotal());
}

// Small bounce on the cart so customers see something was added
function bumpCart() {
  ["openCart", "orderBar"].forEach((id) => {
    const el = document.getElementById(id);
    el.classList.remove("bump");
    void el.offsetWidth;          // restart the animation
    el.classList.add("bump");
  });
}

// ---------- Opening hours ----------
const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const toMinutes = (hhmm) => { const [h, m] = hhmm.split(":").map(Number); return h * 60 + m; };

// Current day and minutes since midnight in Aruba, whatever the phone's time zone
function arubaNow() {
  const parts = Object.fromEntries(new Intl.DateTimeFormat("en-US", {
    timeZone: TIME_ZONE, weekday: "long", hour: "2-digit", minute: "2-digit", second: "2-digit", hourCycle: "h23",
  }).formatToParts(new Date()).map((p) => [p.type, p.value]));
  const minutes = Number(parts.hour) * 60 + Number(parts.minute);
  return { day: parts.weekday, minutes, seconds: minutes * 60 + Number(parts.second) };
}

// Seconds from now until the restaurant next opens (null if no opening hours are set)
function secondsUntilOpen() {
  const now = arubaNow();
  const startIndex = DAYS.indexOf(now.day);
  for (let i = 0; i < 8; i++) {
    const h = todaysHours(DAYS[(startIndex + i) % 7]);
    if (!h) continue;
    if (i === 0 && now.minutes >= h.open) continue;
    return i * 86400 + h.open * 60 - now.seconds;
  }
  return null;
}

// ---------- Countdown to opening (top of the page, only while closed) ----------
let countdownWasRunning = false;
function updateCountdown() {
  const box = document.getElementById("countdown");
  const secs = isOpenNow() ? null : secondsUntilOpen();
  if (secs === null || secs <= 0) {
    box.hidden = true;
    if (countdownWasRunning) {          // just reached opening time
      countdownWasRunning = false;
      updateOpeningStatus();
    }
    return;
  }
  countdownWasRunning = true;
  box.hidden = false;
  const pad = (n) => String(n).padStart(2, "0");
  document.getElementById("cdH").textContent = pad(Math.floor(secs / 3600));
  document.getElementById("cdM").textContent = pad(Math.floor((secs % 3600) / 60));
  document.getElementById("cdS").textContent = pad(secs % 60);
}

function clockLabel(totalMinutes) {
  const m = ((totalMinutes % 1440) + 1440) % 1440;
  const h = Math.floor(m / 60), min = m % 60;
  return `${h % 12 || 12}:${String(min).padStart(2, "0")} ${h < 12 ? "AM" : "PM"}`;
}

function todaysHours(day = arubaNow().day) {
  const h = OPENING_HOURS[day];
  return h ? { open: toMinutes(h[0]), close: toMinutes(h[1]) } : null;
}

function isOpenNow() {
  const now = arubaNow(), h = todaysHours(now.day);
  return Boolean(h) && now.minutes >= h.open && now.minutes < h.close;
}

// Can an order placed now be picked up in `minutes` minutes, before closing?
function canPickupIn(minutes) {
  const now = arubaNow(), h = todaysHours(now.day);
  return isOpenNow() && now.minutes + minutes <= h.close;
}

// Next opening: { i: days from today, day, open: minutes after midnight }
function nextOpeningInfo() {
  const now = arubaNow();
  const startIndex = DAYS.indexOf(now.day);
  for (let i = 0; i < 8; i++) {
    const day = DAYS[(startIndex + i) % 7], h = todaysHours(day);
    if (!h) continue;
    if (i === 0 && now.minutes >= h.open) continue;
    return { i, day, open: h.open, close: h.close };
  }
  return null;
}

// "today at 11:20 AM" / "tomorrow at 11:20 AM" / "Monday at 11:20 AM"
function whenLabel(info, minuteOfDay, lang = currentLang) {
  const time = clockLabel(minuteOfDay);
  const tr = (key, vars) => (lang === currentLang ? t(key, vars) : tIn(lang, key, vars));
  if (info.i === 0) return tr("when_today", { time });
  if (info.i === 1) return tr("when_tomorrow", { time });
  const days = lang === currentLang ? t("days") : TRANSLATIONS[lang].days;
  return tr("when_day", { day: days[DAYS.indexOf(info.day)], time });
}
const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
function tIn(lang, key, vars = {}) {
  const text = TRANSLATIONS[lang][key] ?? key;
  return text.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? vars[k] : m));
}

// The pickup choices that are possible right now
function pickupChoices() {
  const now = arubaNow();
  const nowChoices = isOpenNow()
    ? PICKUP_MINUTES.filter((m) => canPickupIn(m)).map((m) => ({
        value: `now:${m}`, label: minutesLabel(m),
        readyAt: clockLabel(now.minutes + m), readyAtEn: clockLabel(now.minutes + m), preorder: false, minutes: m,
      }))
    : [];
  if (nowChoices.length) return { mode: "now", choices: nowChoices };
  const info = nextOpeningInfo();
  if (!info) return { mode: "none", choices: [] };
  const pre = PREORDER_AFTER_OPENING.filter((a) => info.open + a <= info.close).map((a) => ({
    value: `pre:${a}`, label: capitalize(whenLabel(info, info.open + a)),
    readyAt: whenLabel(info, info.open + a), readyAtEn: whenLabel(info, info.open + a, "en"), preorder: true, minutes: a,
  }));
  return { mode: pre.length ? "pre" : "none", choices: pre, info };
}

// "We open today at 11:00 AM" / "We open Monday at 11:00 AM"
function nextOpening() {
  const now = arubaNow();
  const startIndex = DAYS.indexOf(now.day);
  for (let i = 0; i < 8; i++) {
    const day = DAYS[(startIndex + i) % 7], h = todaysHours(day);
    if (!h) continue;
    if (i === 0 && now.minutes >= h.open) continue;
    const time = clockLabel(h.open);
    if (i === 0) return t("when_today", { time });
    if (i === 1) return t("when_tomorrow", { time });
    return t("when_day", { day: t("days")[DAYS.indexOf(day)], time });
  }
  return null;
}

function minutesLabel(n) {
  if (n === 60) return t("hour_1");
  if (n === 90) return t("hour_1_30");
  return t("minutes", { n });
}

function closedMessage() {
  const next = nextOpening();
  return t("closed_msg") + (next ? t("open_at", { when: next }) : "");
}

// Updates the open/closed badge, pickup time choices and the order button
function updateOpeningStatus() {
  const open = isOpenNow();
  const h = todaysHours();
  const status = document.getElementById("openStatus");
  status.textContent = open
    ? t("open_now", { time: clockLabel(h.close) })
    : t("closed_opens", { when: nextOpening() || t("soon") });
  status.className = `open-status ${open ? "is-open" : "is-closed"}`;

  // Pickup time choices: "in 15–60 minutes" while open, or a pre-order after opening while closed
  const select = document.getElementById("pickupMinutes");
  const { mode, choices } = pickupChoices();
  const previous = select.value;
  // Default choice (also used when the form is cleared after an order): 30 minutes, or the earliest time
  const fallback = choices.some((c) => c.value === "now:30") ? "now:30" : choices[0]?.value;
  select.replaceChildren(...choices.map((c) => new Option(c.label, c.value, c.value === fallback, false)));
  select.value = choices.some((c) => c.value === previous) ? previous : (fallback || "");
  document.getElementById("pickupLabel").textContent = t(mode === "pre" ? "pickup_when" : "pickup_in");

  const notice = document.getElementById("closedNotice");
  notice.hidden = mode === "now";
  notice.classList.toggle("is-info", mode === "pre");
  notice.innerHTML = icon(mode === "pre" ? "clock" : "circle-alert");
  notice.append(Object.assign(document.createElement("span"), {
    textContent: mode === "pre" ? t("preorder_notice", { when: choices[0].readyAt }) : closedMessage(),
  }));
  document.getElementById("submitBtn").disabled = mode === "none";
}

function openCart() {
  updateOpeningStatus();
  document.getElementById("cart").classList.add("open");
  document.getElementById("overlay").classList.add("show");
  pushPanel("cart");
  updateOrderBar();
  updateScrollLock();
}
function closeCart(fromBackButton = false) {
  if (!isCartOpen()) return;
  document.getElementById("cart").classList.remove("open");
  document.getElementById("overlay").classList.remove("show");
  if (!fromBackButton) popPanel("cart");
  updateOrderBar();
  updateScrollLock();
}

// ---------- Send the order by email ----------
async function submitOrder(event) {
  event.preventDefault();
  const form = event.target;
  const message = document.getElementById("formMessage");
  const button = document.getElementById("submitBtn");
  message.className = "form-message";
  setMessage(message, "", "");

  const fail = (text) => {
    setMessage(message, "error", text);
  };

  if (cart.length === 0) return fail(t("err_empty"));
  if (!hasDrink() && drinkQuestion === "open") {
    // Ask one more time before sending the order
    drinkQuestion = "asked-again";
    const box = document.getElementById("drinkAsk");
    box.hidden = false;
    box.classList.remove("nudge"); void box.offsetWidth; box.classList.add("nudge");
    box.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }
  if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY.includes("YOUR_ACCESS_KEY")) {
    return fail("Setup needed: paste your Web3Forms access key at the top of script.js.");
  }
  if (cartTotal() > MAX_ORDER_TOTAL) {
    return fail(t("err_max", { max: money(MAX_ORDER_TOTAL), phone: PHONE }));
  }

  const data = new FormData(form);
  const phoneDigits = String(data.get("phone")).replace(/\D/g, "");
  if (phoneDigits.length < 7 || /[^0-9+()\-\s]/.test(data.get("phone"))) {
    return fail(t("err_phone"));
  }

  const needsCall = cartTotal() >= CONFIRM_CALL_ABOVE;
  const pickupMethod = data.get("pickup_method") || "Pickup inside";
  const isDriveThru = pickupMethod === "Drive-thru";
  const car = String(data.get("car") || "").trim();
  const slot = pickupChoices().choices.find((c) => c.value === data.get("pickup_minutes"));
  if (!slot) {
    updateOpeningStatus();
    return fail(t("err_pickup_again"));
  }
  const minutes = slot.minutes;
  const readyAt = slot.readyAt;
  const orderNumber = makeOrderNumber();

  // Build a readable order list for the email
  const orderLines = cart.map((l) => {
    let text = `${l.qty} x ${lineName(l, true)} — ${money(l.price * l.qty)}`;
    if (l.sides.length) text += `\n      Sides: ${l.sides.join(", ")}`;
    return text;
  }).join("\n");

  const payload = {
    access_key: WEB3FORMS_ACCESS_KEY,
    from_name: "La Granja Website",
    subject: `${needsCall ? "⚠️ LARGE ORDER, CALL TO CONFIRM: " : ""}${slot.preorder ? "📅 PRE-ORDER: " : ""}#${orderNumber} NEW ORDER: ${data.get("name")} — ${isDriveThru ? "🚗 DRIVE-THRU" : "pickup inside"} ${slot.preorder ? slot.readyAtEn : `in ${minutes} min (${readyAt})`}`,
    order_number: `#${orderNumber}`,
    customer_name: data.get("name"),
    customer_phone: data.get("phone"),
    email: data.get("email"),           // lets you hit "Reply" to answer the customer
    replyto: data.get("email"),
    pickup_method: isDriveThru ? `🚗 Drive-thru${car ? ` (car: ${car})` : ""}` : "Pickup inside (counter)",
    pickup_in: slot.preorder ? `PRE-ORDER placed while closed: start cooking after opening` : `${minutes} minutes`,
    pickup_time: slot.readyAtEn,
    order: orderLines,
    ...(appliedPromo ? {
      subtotal: money(cartTotal()),
      promo_code: `${appliedPromo.code} (${appliedPromo.percent}% off)`,
      discount: `- ${money(discountAmount())}`,
    } : {}),
    total: `${money(payTotal())}${appliedPromo ? " (after discount)" : ""}`,
    special_instructions: data.get("notes") || "None",
    customer_language: { en: "English", es: "Spanish", pap: "Papiamento" }[currentLang],
  };
  if (needsCall) payload.important = "Large order: call the customer to confirm BEFORE you start cooking.";
  // Hidden "botcheck" box: real people never see it, spam robots tick it.
  // Web3Forms automatically rejects the order when it's ticked.
  if (data.get("botcheck")) payload.botcheck = true;

  button.disabled = true;
  button.textContent = t("sending");

  try {
    const response = await fetch(WEB3FORMS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });
    const result = await response.json();
    if (!response.ok || !result.success) throw new Error(result.message || "Server said no");

    // Keep a copy of the order to show as an on-screen receipt
    saveLastOrder({
      number: orderNumber, name: String(data.get("name")), phone: String(data.get("phone")),
      lines: cart.map((l) => ({ id: l.id, size: l.size, sides: l.sides, price: l.price, qty: l.qty })),
      total: payTotal(), subtotal: cartTotal(), discount: discountAmount(),
      promoPercent: appliedPromo ? appliedPromo.percent : 0, preorder: slot.preorder,
      readyAt, driveThru: isDriveThru, car, needsCall, savedAt: Date.now(),
    });
    setMessage(message, "", "");
    cart = [];
    drinkQuestion = "open";
    removePromo();
    renderCart();
    form.reset();
  } catch (err) {
    fail(t("err_failed", { phone: PHONE }));
  } finally {
    button.textContent = t("place_order");
    updateOpeningStatus();
  }
}

// ---------- Hook everything up ----------
document.getElementById("menuList").addEventListener("click", (e) => {
  const btn = e.target.closest("button.add-btn");
  if (!btn) return;
  const item = findItem(btn.dataset.id);
  if (hasOptions(item)) return openOptions(item);
  addToCart(item);
  btn.textContent = t("added");
  setTimeout(() => (btn.textContent = t("add")), 800);
});

document.getElementById("menu").addEventListener("click", (e) => {
  const tab = e.target.closest(".tab");
  if (!tab) return;
  highlightTab(tab.dataset.category);
  document.getElementById(`cat-${tab.dataset.category}`).scrollIntoView({ behavior: "smooth" });
});
// Big logo at the top of the page, smaller once the visitor scrolls
function updateHeaderSize() {
  const y = window.scrollY;
  if (y > 80) document.body.classList.add("scrolled");
  else if (y < 10) document.body.classList.remove("scrolled");
}
window.addEventListener("scroll", () => requestAnimationFrame(() => {
  updateHeaderSize();
  updateActiveTabOnScroll();
}), { passive: true });
updateHeaderSize();

document.getElementById("optionsBody").addEventListener("change", () => {
  document.getElementById("optionsError").textContent = "";
  const counter = document.getElementById("sideCount");
  if (!counter) return;
  const count = findCategory(optionsItem.category).sides;
  const checked = document.querySelectorAll('#optionsBody input[name="side"]:checked').length;
  counter.textContent = t("opt_count", { c: checked, n: count });
  // Once the maximum is chosen, the other sides can't be ticked
  document.querySelectorAll('#optionsBody input[name="side"]').forEach((box) => {
    box.disabled = !box.checked && checked >= count;
    box.closest(".choice").classList.toggle("is-disabled", box.disabled);
  });
});

document.getElementById("cartItems").addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-change]");
  if (btn) changeQty(btn.dataset.key, Number(btn.dataset.change));
});

document.getElementById("openCart").addEventListener("click", openCart);
document.getElementById("closeCart").addEventListener("click", closeCart);
document.getElementById("overlay").addEventListener("click", () => (optionsItem ? closeOptions() : closeCart()));
document.getElementById("orderBar").addEventListener("click", openCart);
document.getElementById("promoApply").addEventListener("click", applyPromo);
document.getElementById("menuSearch").addEventListener("input", applySearch);
document.getElementById("menuSearch").addEventListener("keydown", (e) => {
  if (e.key === "Enter") { e.preventDefault(); e.target.blur(); document.getElementById("menu").scrollIntoView({ behavior: "smooth" }); }
});
document.getElementById("searchClear").addEventListener("click", () => {
  const input = document.getElementById("menuSearch");
  input.value = "";
  applySearch();
  input.focus();
});
updateInstallButtons();
document.getElementById("promoInput").addEventListener("keydown", (e) => {
  if (e.key === "Enter") { e.preventDefault(); applyPromo(); }
});

// ---------- Chicken animation in the logo ----------
// The chicken moves for 10 seconds, then stays still; this repeats every minute.
const CHICKEN_MOVES_FOR = 10 * 1000;
const CHICKEN_EVERY = 60 * 1000;
function animateChicken() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const logo = document.getElementById("logoAnim");
  logo.classList.remove("chicken-on");
  void logo.offsetWidth;                 // restart the animation
  logo.classList.add("chicken-on");
  setTimeout(() => logo.classList.remove("chicken-on"), CHICKEN_MOVES_FOR);
}
setTimeout(animateChicken, 1500);        // first time shortly after the page opens
setInterval(animateChicken, CHICKEN_EVERY);

// Tapping the logo refreshes the page and starts at the top.
// Works the same in every browser (Safari, Chrome, Samsung Internet...):
// 1. remove "#menu" / "#about" from the address so the browser doesn't jump there,
// 2. leave a note so the reloaded page forces itself to the very top.
document.getElementById("logoLink").addEventListener("click", (e) => {
  e.preventDefault();
  try { sessionStorage.setItem("logoRefresh", "1"); } catch (err) { /* ignore */ }
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  history.replaceState(null, "", location.pathname + location.search);
  location.reload();
});

// After a logo refresh: start at the top, even if the browser remembered a position
(function startAtTopAfterLogoRefresh() {
  let fromLogo = false;
  try {
    fromLogo = sessionStorage.getItem("logoRefresh") === "1";
    sessionStorage.removeItem("logoRefresh");
  } catch (err) { /* ignore */ }
  if (!fromLogo) return;
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  const toTop = () => window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  toTop();
  requestAnimationFrame(toTop);
  window.addEventListener("load", () => { toTop(); setTimeout(toTop, 100); }, { once: true });
})();
document.getElementById("receipt").addEventListener("click", (e) => {
  if (!e.target.closest("#newOrderBtn")) return;
  clearLastOrder();
  renderReceipt();
  closeCart();
  document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("optionsAdd").addEventListener("click", confirmOptions);
document.getElementById("optionsCancel").addEventListener("click", closeOptions);
document.getElementById("orderForm").addEventListener("submit", submitOrder);
// Show the car field only for drive-thru
document.getElementById("orderForm").addEventListener("change", (e) => {
  if (e.target.name !== "pickup_method") return;
  document.getElementById("carField").hidden = e.target.value !== "Drive-thru";
});
document.getElementById("orderForm").addEventListener("reset", () => {
  document.getElementById("carField").hidden = true;
});
document.getElementById("year").textContent = new Date().getFullYear();

// Language switch (EN / ES / PAP)
document.querySelectorAll(".lang-switch button").forEach((b) =>
  b.addEventListener("click", () => setLanguage(b.dataset.lang)));
document.addEventListener("languagechange", () => {
  if (appliedPromo) showPromoMessage("success", t("promo_ok", { percent: appliedPromo.percent }), true);
  if (optionsItem) closeOptions();
  renderTabs();
  renderMenu();
  applySearch();
  renderCart();
  updateOpeningStatus();
  const btn = document.getElementById("submitBtn");
  if (!btn.disabled) btn.textContent = t("place_order");
});

applyStaticTranslations();
renderTabs();
renderMenu();
renderCart();
updateOpeningStatus();
setInterval(updateOpeningStatus, 60 * 1000);
updateCountdown();
setInterval(updateCountdown, 1000);
