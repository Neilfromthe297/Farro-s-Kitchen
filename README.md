# Farro's Kitchen: Online Ordering Website

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
Subject: NEW ORDER: Jane Smith — pickup in 30 min (6:45 PM)

customer_name:        Jane Smith
customer_phone:       (555) 555-5555
email:                jane@example.com
pickup_in:            30 minutes
pickup_time:          6:45 PM
order:                2 x Ribeye Steak (12 oz) — $59.98
                      1 x Fish & Chips — $16.99
total:                $76.97
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
  - Platters automatically ask the customer to choose 2 sides. Add `noSides: true` to skip that.
  - `callToOrder: true` shows a "Call to order" button instead of "+ Add" (used for the family meals until they have prices).
  - `img` is optional. Without it, the dish shows an icon instead of a photo.
- **Address, hours, phone:** in `index.html`, search for `123 Main Street`, `Mon–Sat` and `(555) 123-4567`.
  Also change `PHONE` near the top of `script.js` (used for the "Call to order" buttons and the error message).
- **Pickup time choices:** in `index.html`, edit the `<option>` lines under "I'll pick up in…".
- **Colors:** at the top of `style.css`, change `--brand` (for example `#15803d` for green).
- **Big top photo:** in `style.css`, replace the `url("https://images.unsplash.com/...")` with your own photo.

## Step 5: Put it on the internet (free)

The easiest option is **Netlify Drop**:
1. Go to **app.netlify.com/drop** and create a free account.
2. Drag your whole `farros-kitchen` folder onto the page.
3. After a few seconds you get a live link like `https://farros-kitchen-123.netlify.app`. Share it!
4. To update the site later, drag the folder again on your site's **Deploys** page.

Other free options: **GitHub Pages** or **Cloudflare Pages**.

## Step 6 (optional): Get your own domain

1. Buy a domain like `farroskitchen.com` (about $10–20 a year) from Namecheap, Cloudflare, Porkbun, or a similar registrar.
2. In Netlify go to **Domain settings → Add custom domain** and follow the instructions.

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
