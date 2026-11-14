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
| `script.js` | The menu items and prices, the cart, and sending the email | Yes: menu and the Formspree link |

---

## Step 1: Get the files onto your computer

1. Create a folder on your Desktop called `farros-kitchen`.
2. Put the 3 files (`index.html`, `style.css`, `script.js`) inside it.

## Step 2: Look at it on your computer

1. Double-click `index.html`. It opens in your browser.
2. Click **+ Add** on a few dishes, then click **🛒 Cart** at the top right.
3. If you try to place an order now, it will say *"Setup needed"*. That's expected. We'll fix it in Step 3.

> 💡 Get a free code editor: **Visual Studio Code** (code.visualstudio.com). It makes editing these files much easier than Notepad.

## Step 3: Make orders arrive in your email (Formspree, free)

Formspree is a service that takes the order form and emails it to you. You don't need a server.

1. Go to **formspree.io** and sign up with the email address where **the restaurant should receive orders**.
2. Click **+ New Form**, name it `Farro's Kitchen Orders`.
3. Formspree shows you a link like `https://formspree.io/f/abcdwxyz`. **Copy it.**
4. Open `script.js` and find this line near the top:
   ```js
   const FORMSPREE_URL = "https://formspree.io/f/YOUR_FORM_ID";
   ```
   Replace it with your link:
   ```js
   const FORMSPREE_URL = "https://formspree.io/f/abcdwxyz";
   ```
5. Save the file. Refresh the page, place a test order, and check your inbox (and spam folder).
   The first time, Formspree may ask you to confirm your email.

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

> ⚠️ Formspree's free plan has a limit on how many submissions you get per month (check their pricing page for the current number). That's enough to test and start. Upgrade when orders pick up.

## Step 4: Customize it for your restaurant

- **Menu and prices:** in `script.js`, edit the `MENU` list. Each dish looks like this:
  ```js
  { id: "c1", category: "chicken", name: "Grilled Lemon Herb Chicken", price: 14.99,
    desc: "Juicy chicken breast ..." },
  ```
  To add a dish, copy a line, give it a **new unique id** (for example `c6`), and change the name, price, and description.
  `category` must be `chicken`, `steak` or `fish`.
- **Address, hours, phone:** in `index.html`, search for `123 Main Street`, `Mon–Sat` and `(555) 123-4567`.
  Also change the phone number in `script.js` (it appears in the error message).
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
- **Customer confirmation email:** Formspree's paid plans can send an auto-reply to the customer.
- **Sales tax line** in the cart total.
- **Closed hours:** block orders when the restaurant is closed.
- **Food photos** on each menu item.
- If you outgrow this, all-in-one ordering platforms like Square Online, Toast, or Owner.com handle payments, printers, and tablets for a fee.
