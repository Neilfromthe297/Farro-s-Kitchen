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

function renderMenu() {
  const menuList = document.getElementById("menuList");
  menuList.innerHTML = CATEGORIES
    .map((cat) => {
      const rows = MENU.filter((item) => item.category === cat.key).map((item) => {
        const txt = itemText(item);
        return `
        <div class="item">
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

const cartTotal = () => cart.reduce((sum, l) => sum + l.price * l.qty, 0);

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
  document.getElementById("cartCount").textContent = cart.reduce((a, l) => a + l.qty, 0);
  document.getElementById("cartTotal").textContent = money(cartTotal());
}

// ---------- Opening hours ----------
const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const toMinutes = (hhmm) => { const [h, m] = hhmm.split(":").map(Number); return h * 60 + m; };

// Current day and minutes since midnight in Aruba, whatever the phone's time zone
function arubaNow() {
  const parts = Object.fromEntries(new Intl.DateTimeFormat("en-US", {
    timeZone: TIME_ZONE, weekday: "long", hour: "2-digit", minute: "2-digit", hourCycle: "h23",
  }).formatToParts(new Date()).map((p) => [p.type, p.value]));
  return { day: parts.weekday, minutes: Number(parts.hour) * 60 + Number(parts.minute) };
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

  const select = document.getElementById("pickupMinutes");
  let firstValid = null;
  [...select.options].forEach((o) => {
    const ok = canPickupIn(Number(o.value));
    o.disabled = !ok;
    o.textContent = minutesLabel(Number(o.value)) + (ok || !open ? "" : ` ${t("after_closing")}`);
    if (ok && firstValid === null) firstValid = o;
  });
  if (select.selectedOptions[0]?.disabled && firstValid) firstValid.selected = true;

  const canOrder = open && firstValid !== null;
  const notice = document.getElementById("closedNotice");
  notice.hidden = canOrder;
  notice.innerHTML = icon("circle-alert");
  notice.append(Object.assign(document.createElement("span"), {
    textContent: open ? t("closing_soon", { phone: PHONE }) : closedMessage(),
  }));
  document.getElementById("submitBtn").disabled = !canOrder;
}

function openCart() {
  updateOpeningStatus();
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
  setMessage(message, "", "");

  const fail = (text) => {
    setMessage(message, "error", text);
  };

  if (cart.length === 0) return fail(t("err_empty"));
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
  const minutes = Number(data.get("pickup_minutes"));
  if (!canPickupIn(minutes)) {
    updateOpeningStatus();
    return fail(isOpenNow()
      ? t("err_after_close")
      : closedMessage());
  }
  const readyAt = clockLabel(arubaNow().minutes + minutes);

  // Build a readable order list for the email
  const orderLines = cart.map((l) => {
    let text = `${l.qty} x ${lineName(l, true)} — ${money(l.price * l.qty)}`;
    if (l.sides.length) text += `\n      Sides: ${l.sides.join(", ")}`;
    return text;
  }).join("\n");

  const payload = {
    access_key: WEB3FORMS_ACCESS_KEY,
    from_name: "La Granja Website",
    subject: `${needsCall ? "⚠️ LARGE ORDER, CALL TO CONFIRM: " : ""}NEW ORDER: ${data.get("name")} — ${isDriveThru ? "🚗 DRIVE-THRU" : "pickup inside"} in ${minutes} min (${readyAt})`,
    customer_name: data.get("name"),
    customer_phone: data.get("phone"),
    email: data.get("email"),           // lets you hit "Reply" to answer the customer
    replyto: data.get("email"),
    pickup_method: isDriveThru ? `🚗 Drive-thru${car ? ` (car: ${car})` : ""}` : "Pickup inside (counter)",
    pickup_in: `${minutes} minutes`,
    pickup_time: readyAt,
    order: orderLines,
    total: money(cartTotal()),
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

    setMessage(message, "success", needsCall
      ? t("ok_large", { name: data.get("name"), phone: data.get("phone") })
      : `${t("ok_ready", { name: data.get("name"), time: readyAt })} ${t(isDriveThru ? "ok_drive" : "ok_inside")}`);
    message.scrollIntoView({ behavior: "smooth", block: "center" });
    cart = [];
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
window.addEventListener("scroll", () => requestAnimationFrame(updateActiveTabOnScroll), { passive: true });

document.getElementById("optionsBody").addEventListener("change", () => {
  const counter = document.getElementById("sideCount");
  if (!counter) return;
  const count = findCategory(optionsItem.category).sides;
  const checked = document.querySelectorAll('#optionsBody input[name="side"]:checked').length;
  counter.textContent = t("opt_count", { c: checked, n: count });
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
  if (optionsItem) closeOptions();
  renderTabs();
  renderMenu();
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
