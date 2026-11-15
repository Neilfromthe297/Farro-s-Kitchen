# La Granja: Online Ordering Website

A simple website where customers:
1. Browse the menu (Chicken, Steak, Fish)
2. Add items to their cart
3. Enter their name, phone, and email, and choose **how many minutes until pickup**
4. Click **Place order**, and **the restaurant receives an email** with the full order

No coding experience needed to launch it. Follow the steps below in order.

---

## What's in this folder

| File | What it does | Will you edit it? |
|---|---|---|
| `index.html` | The structure of the page (header, menu area, cart, order form) | Yes: address, hours, phone |
| `style.css` | Colors, fonts, layout | Optional: change colors at the top |
| `script.js` | The menu items and prices, the cart, and sending the email | Yes: menu and prices |

---

## Step 1: Get the files onto your computer

1. Create a folder on your Desktop called `farros-kitchen`.
2. Put the 3 files (`index.html`, `style.css`, `script.js`) inside it.

## Step 2: Look at it on your computer

1. Double-click `index.html`. It opens in your browser.
2. Click **+ Add** on a few dishes, then click **🛒 Cart** at the top right.
3. Placing an order from here sends a real email (see Step 3), so test with your own details.

> 💡 Get a free code editor: **Visual Studio Code** (code.visualstudio.com). It makes editing these files much easier than Notepad.

**After any change to `script.js` or `style.css`,** raise the `?v=` number in `index.html` (for example from `?v=15` to `?v=16`, in all three places) so customers' phones load the new version right away instead of an old saved copy.

## Step 3: Make orders arrive in your email (Web3Forms, free) ✅ done

Web3Forms is a free service that takes the order form and emails it to you (250 orders/month free). You don't need a server.

This is already set up: the access key is at the top of `script.js`:
```js
const WEB3FORMS_ACCESS_KEY = "fc8fd1ce-9ecf-439d-997d-4363f6bbb754";
```
Orders go to the email address used to create that key on **web3forms.com**.

**To change which email receives orders:** create a new key on web3forms.com with the new email, and replace the key in `script.js`.

**What the email looks like:**
```
Subject: NEW ORDER: Maria Croes — pickup in 30 min (6:45 PM)

customer_name:        Maria Croes
customer_phone:       +297 560 1234
email:                maria@example.com
pickup_in:            30 minutes
pickup_time:          6:45 PM
order:                2 x 1/2 Chicken — Afl. 47.00
                            Sides: Rice, French Fries
                      1 x Fried Yuca (Large) — Afl. 12.50
total:                Afl. 59.50
special_instructions: No onions please
```
You can hit **Reply** in your email to answer the customer directly.

> ⚠️ The Web3Forms free plan allows 250 orders per month. Check web3forms.com/pricing if you need more.

## Step 4: Customize it for your restaurant

- **Menu and prices:** in `script.js`, edit the `MENU` list. Prices are in florins (Afl.). A dish looks like this:
  ```js
  { id: "p1", category: "platters", name: "1/2 Chicken", price: 23.50, img: "images/chicken.jpg" },
  ```
  - To add a dish, copy a line and give it a **new unique id** (for example `p16`).
  - `category` must be one of: `platters`, `seafood`, `sandwiches`, `sides`, `salads`, `family`.
  - `sub: "Lomo Saltado"` adds a smaller second name under the dish.
  - For Small/Large choices use `sizes: { Small: 7.25, Large: 12.00 }` instead of `price`.
  - Platters ask the customer to choose 1 or 2 sides (same price). Add `noSides: true` to skip that.
  - `callToOrder: true` shows a "Call to order" button instead of "+ Add" (used for the family meals until they have prices).
  - `img` is optional. Without it, the dish shows an icon instead of a photo.
- **Address, hours, phone:** in `index.html`, search for `Zandstraat 2`, `Every day` and `+297 582 2065` (also `PHONE` at the top of `script.js`). The map location is in the "MAP" section of `index.html`.
- **Opening hours for ordering:** edit `OPENING_HOURS` at the top of `script.js` (24-hour time, Aruba time). Use `null` for a day you're closed, e.g. `Sunday: null,`. Online ordering is paused outside these hours, and customers can only pick a pickup time before closing.
  Also change `PHONE` near the top of `script.js` (used for the "Call to order" buttons and the error message).
- **Pickup time choices:** in `index.html`, edit the `<option>` lines under "I'll pick up in…".
- **Colors:** at the top of `style.css`, change `--brand` (for example `#15803d` for green).
- **Big top photo:** in `style.css`, replace the `url("https://images.unsplash.com/...")` with your own photo.

## Step 5: Where the website lives (hosting)

The site is hosted for free on **Cloudflare**, connected to this GitHub repository:

**Live site: https://lagranja-aruba.neil-j-farro.workers.dev**

- Every change saved to the `main` branch on GitHub goes live on Cloudflare automatically within a minute or two.
- Changes on other branches (drafts, like `payment-demo`) do **not** go live.
- To see deploys or settings: **dash.cloudflare.com → Workers & Pages → lagranja-aruba**.
- Cloudflare shortens page addresses: `privacy.html` is served as `/privacy`. Links with `.html` still work.

## Step 6 (optional): Get your own domain

1. Buy a domain, for example `lagranja.aw` (Aruba's own .aw ending, bought in Aruba) or a `.com` (Cloudflare itself sells domains at cost).
2. In Cloudflare go to **Workers & Pages → lagranja-aruba → Settings → Domains & Routes → Add → Custom domain**, and follow the instructions. HTTPS is included.
3. Register the domain **in the restaurant's name**.

## Languages: English, Spanish, Papiamento

Customers switch language with the **EN | ES | PAP** buttons at the top. Their choice is remembered on their phone. Phones set to Spanish start in Spanish.

All translations are in **`i18n.js`**:
- `TRANSLATIONS`: every sentence on the site, in `en`, `es` and `pap`. Change the text after the colon; keep `{curly}` words as they are.
- `MENU_TRANSLATIONS`: dish names and descriptions in Spanish and Papiamento. A dish that isn't listed keeps its English name.

The order email to the restaurant is always in English, with a `customer_language` line showing which language the customer used.

**The Papiamento text should be checked by a native Aruban speaker** before you rely on it.

## Privacy policy

`privacy.html` explains what personal details the site collects and why, in English, Spanish and Papiamento. It's linked from the footer and the checkout. **If anything changes** (for example online card payment, a new email address, or a different host), update the policy too, and change the "Last updated" date in all three languages.

## Drinks, search and "Add to home screen"

- **Drinks** are a normal menu section (`category: "drinks"` in `script.js`). If an order has no drink, checkout asks "Would you like a drink?" with one-tap buttons, and asks once more when the customer taps Place order.
- **Search** (above the menu) finds dishes by name in English, Spanish and Papiamento.
- **Add to home screen:** `manifest.webmanifest` and the `images/icon-*.png` files make the site installable like an app. The button in the footer and on the receipt shows the steps for iPhone or Android.

## Pickup times and pre-orders

Set at the top of `script.js`:
- `PICKUP_MINUTES` (while open): customers choose to pick up in 15, 20, 30, 45 or 60 minutes. Times after closing are not offered.
- `PREORDER_AFTER_OPENING` (while closed): customers can **pre-order** for pickup 20, 30, 45 or 60 minutes after the next opening (earliest: 20 minutes after opening).

Pre-orders arrive with **📅 PRE-ORDER** at the start of the email subject and the pickup day and time, e.g. "tomorrow at 11:20 AM". Start cooking after opening.

## Promo codes

Customers can enter a promo code at checkout. There is currently one code, giving **25% off**. **Never write the codes themselves in this file**: this README is public on GitHub and on the website.

- Codes are stored in `PROMO_CODES` in `script.js` as a scrambled fingerprint (SHA-256), not as the code itself, so people can't find the code by looking at the website's code.
- The order email shows the subtotal, the promo code used, the discount and the total to pay.
- To add, change or remove a code, ask Claude, or create the SHA-256 fingerprint of the code in CAPITAL letters and add a line like `{ hash: "...", percent: 10 },`.
- Note: someone very determined could still guess short codes by trying many combinations. Longer codes are harder to guess, and staff can always check the code in the order email.

## Fake-order protection

The website has these protections built in. Change the numbers at the top of `script.js`:

| Setting | Default | What it does |
|---|---|---|
| `MAX_QTY_PER_ITEM` | 10 | The most of one dish someone can order online |
| `MAX_ORDER_TOTAL` | 300 | Orders above Afl. 300 can't be placed online; the customer is asked to call |
| `CONFIRM_CALL_ABOVE` | 150 | Orders of Afl. 150 or more arrive with **"⚠️ LARGE ORDER, CALL TO CONFIRM"** in the email subject |

It also checks the phone number has at least 7 digits, and has a hidden spam trap that blocks robots.

**Your rule in the kitchen:** for any order marked LARGE ORDER, or from a phone number you don't recognize, call the customer **before** you start cooking. If nobody answers, don't cook it.

## Step 7: Before going live, a checklist

- [ ] Placed a test order and received the email
- [ ] Real menu, prices, address, hours, and phone number
- [ ] Tested on your phone (most customers order from phones)
- [ ] Someone at the restaurant checks the email inbox during open hours.
      **Tip:** turn on phone notifications for that inbox, or set up an email filter for subjects starting with "NEW ORDER".

---

## Ideas for later, once you're comfortable

- **Online payment:** add a Stripe or Square payment link. Right now customers pay at pickup.
- **Customer confirmation email:** Web3Forms' paid plan can send an auto-reply to the customer.
- **Sales tax line** in the cart total.
- **Closed hours:** block orders when the restaurant is closed.
- **Food photos** on each menu item.
- If you outgrow this, all-in-one ordering platforms like Square Online, Toast, or Owner.com handle payments, printers, and tablets for a fee.
