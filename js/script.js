/* ==============================================
   WEDDING SITE — Ana Vanessa & João Pedro
   js/script.js
   ============================================== */

/* ===================== CONFIGURAÇÕES =====================
   Edite apenas estas constantes para personalizar o site.
   ======================================================= */

const PIX_KEY          = "66.004.012/0001-00";
const PIX_OWNER        = "Ana Vanessa";
const GOOGLE_SCRIPT_URL = "COLE_AQUI_A_URL_DO_APPS_SCRIPT";   // URL do Web App do Apps Script
const WEDDING_DATE     = new Date("2026-06-05T16:00:00");      // Data e hora da cerimônia

/* ===================== LISTA DE PRESENTES ===================== */

/* Imagens via Unsplash CDN (gratuito, sem API key).
   Se uma imagem não carregar, o emoji é exibido como fallback. */
const IMG = (id) => `https://images.unsplash.com/photo-${id}?w=400&h=400&fit=crop&auto=format&q=80`;

const gifts = [
  { id: 1,  name: "1 ano de academia do noivo",                      emoji: "🏋️‍♂️", price: 600,  image: IMG("1534438327276-14e5300c3a48") },
  { id: 2,  name: "1 semana de pistache da noiva",                   emoji: "💚",   price: 120,  image: "https://baciodilatte.com.br/wp-content/themes/baciodilatte/assets/images/img-content_banner-il-pistacchio-mobile.png" },
  { id: 3,  name: "1 date no sushi",                                 emoji: "🍣",   price: 220,  image: IMG("1579871494447-9811cf80d66c") },
  { id: 4,  name: "2 pizzas de sexta-feira",                         emoji: "🍕",   price: 140,  image: IMG("1565299624946-b28f40a0ae38") },
  { id: 5,  name: "1 cafézinho pós culto",                           emoji: "☕",   price: 90,   image: IMG("1509042239860-f550ce710b93") },
  { id: 6,  name: "1 ida da noiva à Sephora",                        emoji: "😅",   price: 350,  image: IMG("1522335789203-aabd1fc54bc9") },
  { id: 7,  name: "1 reposição de whey do noivo",                    emoji: "💪",   price: 180,  image: IMG("1571019613454-1cb2f99b2d8b") },
  { id: 8,  name: "1 final de semana sem cozinhar com iFood incluso",emoji: "🙏",   price: 300,  image: IMG("1601050690597-df0568f70950") },
  { id: 9,  name: "1 sessão de cinema com combo gigante",            emoji: "🍿",   price: 130,  image: IMG("1517604931442-7e0c8ed2963c") },
  { id: 10, name: "1 tanque de gasolina para visitas à sogra",       emoji: "🚗",   price: 280,  image: IMG("1494976388531-d1058494cdd8") },
  { id: 11, name: "1 compra no mercantil do casal",                  emoji: "🛒",   price: 450,  image: IMG("1542838132-92c53300491e") },
  { id: 12, name: "1 sobremesa depois do almoço porque merecemos",   emoji: "🍰",   price: 95,   image: IMG("1488477181946-6428a0291777") },
  { id: 13, name: "1 litrão de energético para edição de vídeos",    emoji: "😭",   price: 110,  image: "https://cdn.awsli.com.br/2500x2500/2612/2612972/produto/374013833/whatsapp-image-2025-10-02-at-18-26-02-52p48f79nq.jpeg" },
  { id: 14, name: "1 noite de hambúrguer artesanal",                 emoji: "🍔",   price: 160,  image: IMG("1568901346375-23c9450c58cd") },
  { id: 15, name: "1 skincare da noiva",                             emoji: "✨",   price: 250,  image: IMG("1556228578-8c89e6adf883") },
  { id: 16, name: "1 corte de cabelo do noivo",                      emoji: "💈",   price: 90,   image: IMG("1503951914875-452162b0f3f1") },
  { id: 17, name: "1 açaí de recompensa depois de um dia cansativo", emoji: "🥹",   price: 100,  image: IMG("1512621776951-a57141f2eefd") },
  { id: 18, name: "1 rodízio para comemorar a vida de casados",      emoji: "🍣",   price: 260,  image: IMG("1569050467447-ce54b3bbc37d") },
  { id: 19, name: "1 café da manhã chique em casa",                  emoji: "🥐",   price: 180,  image: IMG("1484723091739-30a097e8f929") },
  { id: 20, name: "1 reposição de maquiagem da noiva",               emoji: "💄",   price: 300,  image: IMG("1512496015851-a90fb38ba796") },
  { id: 21, name: "1 assinatura de streaming para as noites juntos", emoji: "📺",   price: 120,  image: IMG("1522869635100-9f4c5e86aa37") },
  { id: 22, name: "1 passeio aleatório sem destino",                 emoji: "🚙",   price: 220,  image: IMG("1532298229144-0ec0c57515c7") },
  { id: 23, name: "1 dia de folga mental patrocinado por vocês",     emoji: "😭",   price: 200,  image: IMG("1544161515-4ab6ce6db874") },
  { id: 24, name: "1 compra de besteirinhas na Americanas",          emoji: "🛍️",  price: 150,  image: IMG("1607082348824-0a96f2a4b9da") },
  { id: 25, name: "1 combo de pipoca e refrigerante",                emoji: "🍿",   price: 90,   image: IMG("1585647347483-22b66260dfff") },
  { id: 26, name: "1 estoque de Coca Zero do noivo",                 emoji: "😂",   price: 130,  image: IMG("1554866585-cd94860890b7") },
  { id: 27, name: "1 brunch de domingo",                             emoji: "☀️",   price: 210,  image: IMG("1504754524776-8f4f37790ca0") },
  { id: 28, name: "1 jantar romântico sem lavar louça depois",       emoji: "🙏",   price: 320,  image: IMG("1414235077428-338989a2e8c0") },
  { id: 29, name: "1 mimo inesperado para a noiva",                  emoji: "🎀",   price: 170,  image: IMG("1513201099705-a9746e1e201f") },
  { id: 30, name: "1 noite gamer/filme do noivo",                    emoji: "🎮",   price: 190,  image: IMG("1550745165-9bc0b252726f") },
];

/* ===================== UTILITÁRIOS ===================== */

function formatPrice(value) {
  return "R$ " + value.toFixed(2).replace(".", ",");
}

function pad(n) {
  return String(n).padStart(2, "0");
}

/* Fallback: se a imagem Unsplash não carregar, exibe o emoji */
function handleGiftImgError(img) {
  const emoji = img.dataset.emoji;
  img.parentElement.innerHTML = `<span class="gift-emoji-img" aria-hidden="true">${emoji}</span>`;
}

/* ===================== CONTAGEM REGRESSIVA ===================== */

function updateCountdown() {
  const diff = WEDDING_DATE - new Date();

  if (diff <= 0) {
    ["cd-days", "cd-hours", "cd-minutes", "cd-seconds"].forEach(id => {
      document.getElementById(id).textContent = "00";
    });
    return;
  }

  const days    = Math.floor(diff / 86400000);
  const hours   = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000)  / 60000);
  const seconds = Math.floor((diff % 60000)    / 1000);

  document.getElementById("cd-days").textContent    = pad(days);
  document.getElementById("cd-hours").textContent   = pad(hours);
  document.getElementById("cd-minutes").textContent = pad(minutes);
  document.getElementById("cd-seconds").textContent = pad(seconds);
}

/* ===================== RENDER DE PRESENTES ===================== */

function renderGifts() {
  const grid = document.getElementById("gifts-grid");
  if (!grid) return;

  grid.innerHTML = gifts.map(gift => {
    const imageContent = gift.image
      ? `<img src="${gift.image}" alt="${gift.name}" loading="lazy" data-emoji="${gift.emoji}" onerror="handleGiftImgError(this)" />`
      : `<span class="gift-emoji-img" aria-hidden="true">${gift.emoji}</span>`;

    return `
      <div class="gift-card" role="listitem">
        <div class="gift-image-area">${imageContent}</div>
        <div class="gift-info">
          <p class="gift-name">${gift.name}</p>
          <p class="gift-price">${formatPrice(gift.price)}</p>
          <button
            class="gift-btn"
            onclick="openModal(${gift.id})"
            aria-label="Presentear: ${gift.name.replace(/"/g, "&quot;")} — ${formatPrice(gift.price)}"
          >Presentear</button>
        </div>
      </div>`;
  }).join("");
}

/* ===================== MODAL ===================== */

let currentGift = null;

function openModal(id) {
  currentGift = gifts.find(g => g.id === id);
  if (!currentGift) return;

  // Popula dados
  document.getElementById("modal-emoji").textContent      = currentGift.emoji;
  document.getElementById("modal-gift-name").textContent  = currentGift.name;
  document.getElementById("modal-price").textContent      = formatPrice(currentGift.price);
  document.getElementById("pix-owner").textContent        = PIX_OWNER;
  document.getElementById("pix-key-display").textContent  = PIX_KEY;

  // Reset visual
  resetModal();

  // Abre
  const overlay = document.getElementById("modal-overlay");
  overlay.classList.add("active");
  overlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  // Foco acessível
  setTimeout(() => {
    const firstInput = document.getElementById("guest-name");
    if (firstInput) firstInput.focus();
  }, 350);
}

function closeModal() {
  const overlay = document.getElementById("modal-overlay");
  overlay.classList.remove("active");
  overlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  currentGift = null;
}

function resetModal() {
  const form = document.getElementById("modal-form");
  form.reset();
  form.style.display = "flex";

  document.getElementById("modal-success").classList.remove("active");

  clearErrors();

  const btn = document.getElementById("btn-submit");
  btn.disabled = false;
  btn.textContent = "Confirmar presente";

  const copyBtn = document.getElementById("btn-copy");
  copyBtn.textContent = "Copiar";
  copyBtn.classList.remove("copied");
}

function clearErrors() {
  document.getElementById("error-name").textContent  = "";
  document.getElementById("error-phone").textContent = "";
  document.getElementById("guest-name").classList.remove("input-error");
  document.getElementById("guest-phone").classList.remove("input-error");
}

/* ===================== COPIAR CHAVE PIX ===================== */

document.getElementById("btn-copy").addEventListener("click", function () {
  const key = PIX_KEY;
  const btn = this;

  const done = () => {
    btn.textContent = "Copiado! ✓";
    btn.classList.add("copied");
    setTimeout(() => {
      btn.textContent = "Copiar";
      btn.classList.remove("copied");
    }, 2500);
  };

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(key).then(done).catch(() => fallbackCopy(key, done));
  } else {
    fallbackCopy(key, done);
  }
});

function fallbackCopy(text, callback) {
  const el = document.createElement("textarea");
  el.value = text;
  el.style.cssText = "position:fixed;top:-9999px;left:-9999px;";
  document.body.appendChild(el);
  el.focus();
  el.select();
  try {
    document.execCommand("copy");
    callback();
  } catch (e) {
    console.warn("Não foi possível copiar a chave Pix.");
  }
  document.body.removeChild(el);
}

/* ===================== ENVIO DO FORMULÁRIO ===================== */

document.getElementById("modal-form").addEventListener("submit", async function (e) {
  e.preventDefault();
  clearErrors();

  const name    = document.getElementById("guest-name").value.trim();
  const phone   = document.getElementById("guest-phone").value.trim();
  const message = document.getElementById("guest-message").value.trim();

  let valid = true;

  if (!name) {
    document.getElementById("error-name").textContent = "Por favor, informe seu nome completo.";
    document.getElementById("guest-name").classList.add("input-error");
    document.getElementById("guest-name").focus();
    valid = false;
  }

  if (!phone) {
    document.getElementById("error-phone").textContent = "Por favor, informe seu telefone.";
    document.getElementById("guest-phone").classList.add("input-error");
    if (valid) document.getElementById("guest-phone").focus();
    valid = false;
  }

  if (!valid) return;

  const btn = document.getElementById("btn-submit");
  btn.disabled    = true;
  btn.textContent = "Enviando...";

  const payload = {
    dataHora:      new Date().toLocaleString("pt-BR"),
    nomeConvidado: name,
    telefone:      phone,
    mensagem:      message,
    presente:      currentGift.name,
    valor:         formatPrice(currentGift.price),
  };

  // Envia para Google Sheets se a URL estiver configurada
  if (GOOGLE_SCRIPT_URL !== "COLE_AQUI_A_URL_DO_APPS_SCRIPT") {
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method:  "POST",
        mode:    "no-cors",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(payload),
      });
    } catch (err) {
      // no-cors não permite ler resposta — continuamos de qualquer forma
      console.warn("Erro ao enviar para Google Sheets:", err);
    }
  }

  // Exibe sucesso
  document.getElementById("modal-form").style.display = "none";
  document.getElementById("success-name").textContent = name;
  document.getElementById("modal-success").classList.add("active");

  btn.disabled    = false;
  btn.textContent = "Confirmar presente";
});

/* ===================== FECHAR MODAL ===================== */

document.getElementById("modal-close").addEventListener("click", closeModal);

document.getElementById("btn-close-success").addEventListener("click", closeModal);

document.getElementById("modal-overlay").addEventListener("click", function (e) {
  if (e.target === this) closeModal();
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closeModal();
});

/* ===================== HEADER AO ROLAR ===================== */

const header = document.getElementById("site-header");

function onScroll() {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}

window.addEventListener("scroll", onScroll, { passive: true });

/* ===================== MENU MOBILE ===================== */

const navToggle = document.getElementById("nav-toggle");
const navLinks  = document.getElementById("nav-links");

navToggle.addEventListener("click", function () {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.classList.toggle("open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

// Fecha o menu ao clicar em um link
navLinks.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("open");
    navToggle.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// Fecha o menu ao clicar fora
document.addEventListener("click", function (e) {
  if (navLinks.classList.contains("open") &&
      !navLinks.contains(e.target) &&
      !navToggle.contains(e.target)) {
    navLinks.classList.remove("open");
    navToggle.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

/* ===================== HERO — ANIMAÇÃO DE ENTRADA ===================== */

// Dispara animação Ken Burns após carregamento
setTimeout(function () {
  const heroBg = document.querySelector(".hero-bg");
  if (heroBg) heroBg.classList.add("loaded");
}, 200);

/* ===================== INICIALIZAÇÃO ===================== */

renderGifts();
updateCountdown();
setInterval(updateCountdown, 1000);
onScroll(); // aplica estado inicial do header
