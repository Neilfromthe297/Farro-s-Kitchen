/* =========================================================
   TRANSLATIONS: English (en), Spanish (es), Aruban Papiamento (pap)

   To fix a translation, change the text after the colon.
   Keep the {curly} words as they are: they are filled in automatically
   (for example {name} becomes the customer's name).
   ========================================================= */
const LANGUAGES = { en: "EN", es: "ES", pap: "PAP" };

const TRANSLATIONS = {
  en: {
    nav_menu: "Menu", nav_about: "About", cart: "Cart", language: "Language",
    hero_title: "Grilled fresh. Ready when you are.",
    hero_sub: "Order online, choose your pickup time, and we'll have it hot and waiting.",
    hero_cta: "Start your order",
    open_now: "Open now · until {time}", closed_opens: "Closed · opens {when}", soon: "soon",
    when_today: "today at {time}", when_tomorrow: "tomorrow at {time}", when_day: "{day} at {time}",
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    tab_all: "All",
    cat_platters: "Platters", cat_seafood: "Seafood", cat_sandwiches: "Sandwiches",
    cat_sides: "Side Orders", cat_salads: "Salads", cat_family: "Family Meals",
    note_platters: "Served with 2 side orders of your choice: rice, onion potatoes, french fries or salad.",
    note_sandwiches: "Served with french fries.",
    note_family: "Each family meal serves 4 persons.",
    add: "+ Add", added: "✓ Added", call_for_price: "Call for price", call_to_order: "Call to order",
    size_Small: "Small", size_Large: "Large", size_short_Small: "S", size_short_Large: "L",
    side_Rice: "Rice", "side_Onion Potatoes": "Onion Potatoes", "side_French Fries": "French Fries", side_Salad: "Salad",
    about_kicker: "About", about_title: "The story behind our dishes",
    about_h1: "What makes us stand out",
    about_p1: "At the heart of La Granja is a fusion of authentic Peruvian heritage and the warmth of a family-friendly dining experience. Our dedication to bringing genuine Latin American flavors is evident in every dish we serve. We pride ourselves on not just cooking food but on crafting an authentic culinary experience that celebrates our roots.",
    about_p2: "What truly distinguishes us is our commitment to creating a welcoming atmosphere that feels like home. La Granja is more than a dining spot; it’s a place where families and friends come together, fostering connections in every meal. Our journey began right here in Aruba, and we remain proudly rooted in Oranjestad. We continually evolve to meet our customers’ diverse tastes while staying true to our Latin American roots.",
    about_h2: "Our mission statement",
    about_p3: "Our mission is to quickly serve our customers homestyle food. We are dedicated to preparing and serving high-quality, flavorful Latin American flavors in a welcoming environment, where every meal is an opportunity to celebrate culture. Our commitment extends beyond the plate, as we strive to be a positive, contributing member of every community we serve.",
    about_cta: "Order online",
    info_location: "Location", info_directions: "Get directions", info_hours: "Hours",
    info_every_day: "Every day", info_call: "Call us",
    find_kicker: "Visit us", find_title: "Find La Granja in Oranjestad", view_on_maps: "View on Google Maps",
    privacy_link: "Privacy policy", privacy_note: "We only use your details for your order.", back_to_menu: "← Back to the menu",
    countdown_title: "We open in", cd_hours: "hours", cd_minutes: "minutes", cd_seconds: "seconds",
    view_order: "View order",
    footer_tagline: "Homestyle Latin American food, served fast.", footer_icons: "Icons by",
    footer_pickup: "Pickup only. Pay when you pick up.", footer_photos: "Food photos from",
    cart_title: "Your Order", close: "Close", cart_empty: "Your cart is empty. Add something tasty!",
    total: "Total", each: "{price} each", sides_list: "Sides: {list}",
    remove_one: "Remove one", add_one: "Add one",
    pickup_details: "Pickup details", f_name: "Your name", f_phone: "Phone number",
    f_phone_title: "Please enter a real phone number (at least 7 digits)",
    f_email: "Email (for your receipt)", how_pickup: "How will you pick up?",
    pickup_inside: "Pickup inside", pickup_inside_sub: "At the counter",
    drive_thru: "Drive-thru", drive_thru_sub: "Stay in your car",
    car_label: "Your car (optional)", car_ph: "e.g. White Toyota Yaris",
    pickup_in: "I'll pick up in…", minutes: "{n} minutes", hour_1: "1 hour", hour_1_30: "1 hour 30 minutes",
    after_closing: "(after closing)",
    notes_label: "Special instructions (optional)", notes_ph: "Allergies, extra sauce, etc.",
    form_note: "We may call to confirm your order. Large orders are confirmed by phone before we start cooking.",
    place_order: "Place order", sending: "Sending…",
    opt_size: "Choose a size", opt_sides: "Choose {n} sides", opt_count: "({c} of {n})",
    opt_cancel: "Cancel", opt_add: "Add to order", opt_err: "Please choose exactly {n} sides.",
    toast_limit: "Online orders are limited to {max} of each item. For large orders please call us at {phone}.",
    err_empty: "Please add at least one item to your order.",
    err_max: "Orders over {max} must be placed by phone. Please call us at {phone}.",
    err_phone: "Please enter a real phone number (at least 7 digits) so we can reach you.",
    err_after_close: "That pickup time is after closing time. Please choose an earlier time.",
    closed_msg: "We're closed right now, so online ordering is paused.", open_at: " We open {when}.",
    closing_soon: "We're about to close, so online ordering is paused. Please call us at {phone}.",
    ok_large: "Thank you, {name}! Because this is a large order, we'll call you at {phone} to confirm before we start cooking.",
    ok_ready: "Thank you, {name}! Your order will be ready around {time}.",
    ok_inside: "Collect it at the counter.",
    ok_drive: "Just drive up to the drive-thru window and give your name.",
    err_failed: "Sorry, your order didn't go through. Please call us at {phone}.",
  },

  es: {
    nav_menu: "Menú", nav_about: "Nosotros", cart: "Carrito", language: "Idioma",
    hero_title: "Recién hecho a la parrilla. Listo cuando tú lo estés.",
    hero_sub: "Ordena en línea, elige tu hora de recogida y lo tendremos calientito esperándote.",
    hero_cta: "Empieza tu orden",
    open_now: "Abierto ahora · hasta las {time}", closed_opens: "Cerrado · abre {when}", soon: "pronto",
    when_today: "hoy a las {time}", when_tomorrow: "mañana a las {time}", when_day: "el {day} a las {time}",
    days: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
    tab_all: "Todo",
    cat_platters: "Platos", cat_seafood: "Mariscos", cat_sandwiches: "Sándwiches",
    cat_sides: "Acompañantes", cat_salads: "Ensaladas", cat_family: "Comidas Familiares",
    note_platters: "Servidos con 2 acompañantes a tu elección: arroz, papas con cebolla, papas fritas o ensalada.",
    note_sandwiches: "Servidos con papas fritas.",
    note_family: "Cada comida familiar es para 4 personas.",
    add: "+ Agregar", added: "✓ Agregado", call_for_price: "Llama para el precio", call_to_order: "Llama para ordenar",
    size_Small: "Pequeño", size_Large: "Grande", size_short_Small: "P", size_short_Large: "G",
    side_Rice: "Arroz", "side_Onion Potatoes": "Papas con cebolla", "side_French Fries": "Papas fritas", side_Salad: "Ensalada",
    about_kicker: "Nosotros", about_title: "La historia detrás de nuestros platos",
    about_h1: "Lo que nos distingue",
    about_p1: "En el corazón de La Granja está la fusión de una auténtica herencia peruana y la calidez de una experiencia familiar. Nuestra dedicación a ofrecer genuinos sabores latinoamericanos se refleja en cada plato que servimos. Nos enorgullece no solo cocinar, sino crear una auténtica experiencia culinaria que celebra nuestras raíces.",
    about_p2: "Lo que realmente nos distingue es nuestro compromiso de crear un ambiente acogedor que se siente como en casa. La Granja es más que un lugar para comer; es un lugar donde familias y amigos se reúnen y crean lazos en cada comida. Nuestra historia comenzó aquí mismo en Aruba, y seguimos orgullosamente arraigados en Oranjestad. Evolucionamos constantemente para satisfacer los distintos gustos de nuestros clientes, siempre fieles a nuestras raíces latinoamericanas.",
    about_h2: "Nuestra misión",
    about_p3: "Nuestra misión es servir rápidamente comida casera a nuestros clientes. Nos dedicamos a preparar y servir auténticos sabores latinoamericanos de alta calidad en un ambiente acogedor, donde cada comida es una oportunidad para celebrar la cultura. Nuestro compromiso va más allá del plato: buscamos ser un miembro positivo y activo de cada comunidad a la que servimos.",
    about_cta: "Ordenar en línea",
    info_location: "Ubicación", info_directions: "Cómo llegar", info_hours: "Horario",
    info_every_day: "Todos los días", info_call: "Llámanos",
    find_kicker: "Visítanos", find_title: "Encuentra La Granja en Oranjestad", view_on_maps: "Ver en Google Maps",
    privacy_link: "Política de privacidad", privacy_note: "Solo usamos tus datos para tu orden.", back_to_menu: "← Volver al menú",
    countdown_title: "Abrimos en", cd_hours: "horas", cd_minutes: "minutos", cd_seconds: "segundos",
    view_order: "Ver mi orden",
    footer_tagline: "Comida casera latinoamericana, servida rápido.", footer_icons: "Íconos de",
    footer_pickup: "Solo para recoger. Paga al recoger.", footer_photos: "Fotos de comida de",
    cart_title: "Tu orden", close: "Cerrar", cart_empty: "Tu carrito está vacío. ¡Agrega algo rico!",
    total: "Total", each: "{price} c/u", sides_list: "Acompañantes: {list}",
    remove_one: "Quitar uno", add_one: "Agregar uno",
    pickup_details: "Datos de recogida", f_name: "Tu nombre", f_phone: "Número de teléfono",
    f_phone_title: "Ingresa un número de teléfono real (al menos 7 dígitos)",
    f_email: "Correo electrónico (para tu recibo)", how_pickup: "¿Cómo vas a recoger?",
    pickup_inside: "Recoger adentro", pickup_inside_sub: "En el mostrador",
    drive_thru: "Drive-thru", drive_thru_sub: "Quédate en tu carro",
    car_label: "Tu carro (opcional)", car_ph: "ej. Toyota Yaris blanco",
    pickup_in: "Recogeré en…", minutes: "{n} minutos", hour_1: "1 hora", hour_1_30: "1 hora 30 minutos",
    after_closing: "(después del cierre)",
    notes_label: "Instrucciones especiales (opcional)", notes_ph: "Alergias, salsa extra, etc.",
    form_note: "Es posible que te llamemos para confirmar tu orden. Las órdenes grandes se confirman por teléfono antes de empezar a cocinar.",
    place_order: "Hacer pedido", sending: "Enviando…",
    opt_size: "Elige un tamaño", opt_sides: "Elige {n} acompañantes", opt_count: "({c} de {n})",
    opt_cancel: "Cancelar", opt_add: "Agregar a la orden", opt_err: "Por favor elige exactamente {n} acompañantes.",
    toast_limit: "Las órdenes en línea están limitadas a {max} de cada producto. Para órdenes grandes, llámanos al {phone}.",
    err_empty: "Por favor agrega al menos un producto a tu orden.",
    err_max: "Las órdenes de más de {max} deben hacerse por teléfono. Llámanos al {phone}.",
    err_phone: "Por favor ingresa un número de teléfono real (al menos 7 dígitos) para poder contactarte.",
    err_after_close: "Esa hora de recogida es después del cierre. Por favor elige una hora más temprano.",
    closed_msg: "Estamos cerrados ahora, así que los pedidos en línea están en pausa.", open_at: " Abrimos {when}.",
    closing_soon: "Estamos por cerrar, así que los pedidos en línea están en pausa. Llámanos al {phone}.",
    ok_large: "¡Gracias, {name}! Como es una orden grande, te llamaremos al {phone} para confirmarla antes de empezar a cocinar.",
    ok_ready: "¡Gracias, {name}! Tu orden estará lista alrededor de las {time}.",
    ok_inside: "Recógela en el mostrador.",
    ok_drive: "Solo pasa por la ventanilla del drive-thru y da tu nombre.",
    err_failed: "Lo sentimos, tu orden no se pudo enviar. Llámanos al {phone}.",
  },

  // Aruban Papiamento (Aruba spelling). Please have a native speaker review.
  pap: {
    nav_menu: "Menu", nav_about: "Tocante nos", cart: "Order", language: "Idioma",
    hero_title: "Fresco for di parilla. Cla ora bo ta cla.",
    hero_sub: "Haci bo order online, scoge ki ora bo ta bin busca, y nos lo tene'le cayente ta warda bo.",
    hero_cta: "Cuminsa bo order",
    open_now: "Habri awor · te {time}", closed_opens: "Cera · ta habri {when}", soon: "pronto",
    when_today: "awe {time}", when_tomorrow: "mañan {time}", when_day: "{day} {time}",
    days: ["diadomingo", "dialuna", "diamars", "diarazon", "diaweps", "diabierna", "diasabra"],
    tab_all: "Tur",
    cat_platters: "Plato", cat_seafood: "Cuminda di lama", cat_sandwiches: "Sandwich",
    cat_sides: "Acompañamento", cat_salads: "Ensalada", cat_family: "Cuminda pa Famia",
    note_platters: "Ta bin cu 2 acompañamento di bo eleccion: aroz, batata cu cebolla, batata frita of ensalada.",
    note_sandwiches: "Ta bin cu batata frita.",
    note_family: "Cada cuminda pa famia ta pa 4 persona.",
    add: "+ Agrega", added: "✓ Agrega", call_for_price: "Yama pa e prijs", call_to_order: "Yama pa order",
    size_Small: "Chikito", size_Large: "Grandi", size_short_Small: "Ch", size_short_Large: "G",
    side_Rice: "Aroz", "side_Onion Potatoes": "Batata cu cebolla", "side_French Fries": "Batata frita", side_Salad: "Ensalada",
    about_kicker: "Tocante nos", about_title: "E historia tras di nos cuminda",
    about_h1: "Loque ta haci nos diferente",
    about_p1: "Na e curason di La Granja tin un combinacion di herencia autentico Peruano y e calor di un ambiente pa henter famia. Nos dedicacion pa trece sabor Latino-Americano berdadero ta bisto den cada plato cu nos ta sirbi. Nos ta orguyoso di no solamente cushina, pero di crea un experiencia culinario autentico cu ta celebra nos raiznan.",
    about_p2: "Loque realmente ta distingui nos ta nos compromiso pa crea un ambiente caluroso cu ta sinti manera cas. La Granja ta mas cu un lugar pa come; ta un lugar unda famia y amigo ta bin huntu y ta fortalece nan conexion cu cada cuminda. Nos caminda a cuminsa aki mes na Aruba, y nos ta keda orguyosamente ranca na Oranjestad. Nos ta sigui evoluciona pa cumpli cu e gustonan diferente di nos clientenan, sin lubida nos raiznan Latino-Americano.",
    about_h2: "Nos mision",
    about_p3: "Nos mision ta pa sirbi nos clientenan cuminda di cas, rapido. Nos ta dedica na prepara y sirbi sabor Latino-Americano di alta calidad den un ambiente caluroso, unda cada cuminda ta un oportunidad pa celebra cultura. Nos compromiso ta bay mas leu cu e plato: nos ta purba di ta un miembro positivo y contribuyente di cada comunidad cu nos ta sirbi.",
    about_cta: "Haci bo order online",
    info_location: "Unda nos ta", info_directions: "Mira e ruta", info_hours: "Orario",
    info_every_day: "Tur dia", info_call: "Yama nos",
    find_kicker: "Bin bishita nos", find_title: "Haya La Granja na Oranjestad", view_on_maps: "Mira riba Google Maps",
    privacy_link: "Maneho di privacidad", privacy_note: "Nos ta usa bo informacion solamente pa bo order.", back_to_menu: "← Bay bek na e menu",
    countdown_title: "Nos ta habri den", cd_hours: "ora", cd_minutes: "minuut", cd_seconds: "segundo",
    view_order: "Mira bo order",
    footer_tagline: "Cuminda di cas Latino-Americano, sirbi rapido.", footer_icons: "Icon di",
    footer_pickup: "Solamente pa bin busca. Paga ora bo bin busca.", footer_photos: "Potret di cuminda di",
    cart_title: "Bo order", close: "Cera", cart_empty: "Bo order ta bashi. Agrega algo sabroso!",
    total: "Total", each: "{price} pa un", sides_list: "Acompañamento: {list}",
    remove_one: "Kita un", add_one: "Agrega un",
    pickup_details: "Detaye pa bin busca", f_name: "Bo nomber", f_phone: "Number di telefon",
    f_phone_title: "Por fabor yena un number di telefon berdadero (por lo menos 7 cifra)",
    f_email: "Email (pa bo recibo)", how_pickup: "Con bo ta bin busca?",
    pickup_inside: "Busca paden", pickup_inside_sub: "Na e toonbank",
    drive_thru: "Drive-thru", drive_thru_sub: "Keda den bo auto",
    car_label: "Bo auto (opcional)", car_ph: "p.e. Toyota Yaris blanco",
    pickup_in: "Lo mi bin busca den…", minutes: "{n} minuut", hour_1: "1 ora", hour_1_30: "1 ora y mei",
    after_closing: "(despues cu nos cera)",
    notes_label: "Instruccion especial (opcional)", notes_ph: "Alergia, saus extra, etc.",
    form_note: "Nos por yama bo pa confirma bo order. Order grandi ta wordo confirma pa telefon prome cu nos cuminsa cushina.",
    place_order: "Manda order", sending: "Ta manda…",
    opt_size: "Scoge un tamaño", opt_sides: "Scoge {n} acompañamento", opt_count: "({c} di {n})",
    opt_cancel: "Cancela", opt_add: "Agrega na order", opt_err: "Por fabor scoge exactamente {n} acompañamento.",
    toast_limit: "Order online ta limita na {max} di cada producto. Pa order grandi, yama nos na {phone}.",
    err_empty: "Por fabor agrega por lo menos un producto na bo order.",
    err_max: "Order di mas cu {max} mester wordo haci pa telefon. Yama nos na {phone}.",
    err_phone: "Por fabor yena un number di telefon berdadero (por lo menos 7 cifra) pa nos por contacta bo.",
    err_after_close: "E ora ei ta despues cu nos cera. Por fabor scoge un ora mas trempan.",
    closed_msg: "Nos ta cera awor, p'esey order online ta pausa.", open_at: " Nos ta habri {when}.",
    closing_soon: "Nos ta cerca di cera, p'esey order online ta pausa. Por fabor yama nos na {phone}.",
    ok_large: "Danki, {name}! Pasobra esaki ta un order grandi, nos lo yama bo na {phone} pa confirma prome cu nos cuminsa cushina.",
    ok_ready: "Danki, {name}! Bo order lo ta cla rond di {time}.",
    ok_inside: "Bin busc'e na e toonbank.",
    ok_drive: "Djis bin na e bentana di drive-thru y duna bo nomber.",
    err_failed: "Sorry, bo order no a bay. Por fabor yama nos na {phone}.",
  },
};

/* Dish names and descriptions in Spanish and Papiamento.
   Dishes not listed here keep their English name. */
const MENU_TRANSLATIONS = {
  es: {
    p1: { name: "1/2 Pollo" }, p2: { name: "1 Pollo Entero" },
    p3: { name: "1/2 Lb. de Bistec" }, p4: { name: "1 Lb. de Bistec" },
    p5: { name: "Bistec Encebollado (1/2 Lb)", sub: "Onion Steak" },
    p6: { name: "Chuleta de Cerdo (1/2 Lb)" }, p7: { name: "Chuleta de Cerdo (1 Lb)" },
    p8: { name: "Pechuga Deshuesada" },
    p9: { name: "Lomo Saltado", sub: "Sauteed Beef" }, p10: { name: "Pollo Saltado", sub: "Sauteed Chicken" },
    p11: { name: "1/2 Pollo Solo", desc: "Sin acompañantes." },
    p12: { name: "1 Pollo Entero Solo", desc: "Sin acompañantes." },
    p13: { name: "Alitas de Pollo" }, p14: { name: "Costillas de Cerdo" },
    sf1: { name: "Arroz con Mariscos", sub: "Seafood Rice" },
    sf2: { name: "Arroz Frito con Mariscos", sub: "Seafood Fried Rice" },
    sf3: { name: "Arroz con Camarones", sub: "Rice with Shrimps" },
    sf4: { name: "Chupe de Camarones", sub: "Shrimp Soup" },
    sf5: { name: "Chupe de Pescado", sub: "Fish Soup" },
    sf6: { name: "Chupe de Mariscos", sub: "Seafood Soup" },
    sf7: { name: "Jalea de Camarones", sub: "Shrimps Jelly" },
    sf8: { name: "Jalea de Pescado", sub: "Fish Jelly" },
    sf9: { name: "Pescado al Ajo" }, sf10: { name: "Pescado al Ajo con Camarones" },
    sf11: { name: "Pescado a lo Criollo" }, sf12: { name: "Pescado a lo Criollo con Camarones" },
    sf13: { name: "Pescado Mahi Mahi" }, sf14: { name: "Mahi Mahi (2 personas)" },
    sf15: { name: "Mahi Mahi Encebollado", sub: "Onion Mahi Mahi" },
    sf16: { name: "Mahi Mahi con Camarones" },
    sf17: { name: "Espagueti en Salsa de Camarones" }, sf18: { name: "Espagueti con Mariscos" },
    sf19: { name: "Espagueti Alfredo con Costillas" }, sf20: { name: "Espagueti con Lomito" },
    sf21: { name: "Espagueti con Pollo" },
    sw1: { name: "Sándwich de Pollo" }, sw2: { name: "Sándwich de Bistec" },
    sw3: { name: "Sándwich de Cerdo" }, sw4: { name: "Sándwich de Pescado" },
    sd1: { name: "Arroz" }, sd2: { name: "Papas con Cebolla" }, sd3: { name: "Papas Fritas" },
    sd4: { name: "Yuca Frita" }, sd5: { name: "Arroz Frito" }, sd6: { name: "Plátano" },
    sl1: { name: "Lechuga" }, sl2: { name: "Ensalada de Repollo (Coleslaw)" },
    sl3: { name: "Ensalada de Papa" }, sl4: { name: "Ensalada Mixta" },
    fm1: { name: "Comida Familiar 1",
      desc: "1 pollo entero, 1/2 lb. de bistec a la parrilla, 1/2 lb. de cerdo a la parrilla y 1 costillas de cerdo. Servida con 1 arroz grande, papas grandes, Coca-Cola de 2L y salsa de cebolla." },
    fm2: { name: "Comida Familiar 2", desc: "Servida con 1 arroz grande, 1 papas fritas grandes y Coca-Cola de 2L." },
  },
  pap: {
    p11: { desc: "Sin acompañamento." }, p12: { desc: "Sin acompañamento." },
    sd1: { name: "Aroz" }, sd2: { name: "Batata cu Cebolla" }, sd3: { name: "Batata Frita" },
    sd4: { name: "Yuca Frita" }, sd5: { name: "Aroz Frita" }, sd6: { name: "Banana" },
    sl1: { name: "Ensalada di Lechuga" }, sl2: { name: "Coleslaw" },
    sl3: { name: "Ensalada di Batata" }, sl4: { name: "Ensalada Mixto" },
    fm1: { name: "Cuminda pa Famia 1",
      desc: "1 galiña completo, 1/2 lb. bistek na parilla, 1/2 lb. carni di porco na parilla y 1 ribs di porco. Ta bin cu 1 aroz grandi, batata grandi, 2L Coca-Cola y saus di cebolla." },
    fm2: { name: "Cuminda pa Famia 2", desc: "Ta bin cu 1 aroz grandi, 1 batata frita grandi y 2L Coca-Cola." },
  },
};

/* ---------- Language helpers (no need to change) ---------- */
let currentLang = (() => {
  try {
    const saved = localStorage.getItem("lang");
    if (saved && TRANSLATIONS[saved]) return saved;
  } catch (e) { /* storage blocked: use default */ }
  return (navigator.language || "").toLowerCase().startsWith("es") ? "es" : "en";
})();

// t("key", {name: "Maria"}) → translated text with {name} filled in
function t(key, vars = {}) {
  const text = TRANSLATIONS[currentLang][key] ?? TRANSLATIONS.en[key] ?? key;
  if (typeof text !== "string") return text;
  return text.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? vars[k] : m));
}

function applyStaticTranslations() {
  document.documentElement.lang = currentLang === "pap" ? "pap" : currentLang;
  document.querySelectorAll("[data-i18n]").forEach((el) => (el.textContent = t(el.dataset.i18n)));
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => (el.placeholder = t(el.dataset.i18nPlaceholder)));
  document.querySelectorAll("[data-i18n-title]").forEach((el) => (el.title = t(el.dataset.i18nTitle)));
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => el.setAttribute("aria-label", t(el.dataset.i18nAria)));
  document.querySelectorAll(".lang-switch button").forEach((b) =>
    b.setAttribute("aria-pressed", String(b.dataset.lang === currentLang)));
}

function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) return;
  currentLang = lang;
  try { localStorage.setItem("lang", lang); } catch (e) { /* ignore */ }
  applyStaticTranslations();
  document.dispatchEvent(new Event("languagechange"));
}
