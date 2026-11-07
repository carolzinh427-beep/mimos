// Catálogo Mimo Íntimo - Produtos com Sessões, Fotos Reais e Valores
const initialProducts = [
  // --- FEMININO ---
  {
    id: "fem-1",
    name: "Conjunto Rendado Sublime",
    category: "Feminino",
    detail: "Renda antialérgica com suporte suave e caimento impecável",
    price: 129.90,
    image: "images/conjunto-rendado.jpg",
    tag: "Destaque"
  },
  {
    id: "fem-2",
    name: "Camisola Charlize em Liganete",
    category: "Feminino",
    detail: "Toque de seda geladinho com renda delicada no decote",
    price: 139.90,
    image: "images/camisola-charlize.jpg",
    tag: "Queridinho"
  },
  {
    id: "fem-3",
    name: "Calça Legging Conforto Sem Costura",
    category: "Feminino",
    detail: "Cintura alta modeladora, compressão ideal e toque macio aveludado",
    price: 119.90,
    image: "images/calca-legging.jpg",
    tag: "Novo"
  },
  {
    id: "fem-4",
    name: "Shortdoll Pérola em Cetim",
    category: "Feminino",
    detail: "Alças reguláveis, leveza e acabamento acetinado de alto padrão",
    price: 109.90,
    image: "images/shortdoll-cetim.jpg",
    tag: "Luxo"
  },
  {
    id: "fem-5",
    name: "Sutiã Comfort Sem Costura",
    category: "Feminino",
    detail: "Liberdade sem aros e máxima sustentação anatômica",
    price: 79.90,
    image: "images/sutia-sem-costura.jpg",
    tag: "Essencial"
  },
  {
    id: "fem-6",
    name: "Robe Luxo em Viscose com Renda",
    category: "Feminino",
    detail: "Manga flare fluída com faixa para amarração delicada",
    price: 169.90,
    image: "images/robe-luxo.jpg",
    tag: "Exclusivo"
  },
  {
    id: "fem-7",
    name: "Kit 3 Calcinhas Invisíveis Corte a Laser",
    category: "Feminino",
    detail: "Não marca sob vestidos e calças finas, toque segunda pele",
    price: 74.90,
    image: "images/kit-calcinhas.jpg",
    tag: "Mais Vendido"
  },

  // --- MASCULINO ---
  {
    id: "masc-1",
    name: "Kit 3 Cuecas Boxer Cotton Premium",
    category: "Masculino",
    detail: "Algodão com elastano, forro duplo e elástico macio",
    price: 89.90,
    image: "images/cuecas-boxer.jpg",
    tag: "Mais Vendido"
  },
  {
    id: "masc-2",
    name: "Pijama Americano Masculino Curto",
    category: "Masculino",
    detail: "Gola colarinho com botões frontais e cós elástico com cordão",
    price: 139.90,
    image: "images/pijama-americano.jpg",
    tag: "Novo"
  },
  {
    id: "masc-3",
    name: "Pijama Longo Classic Confort",
    category: "Masculino",
    detail: "Algodão premium respirável, caimento solto e térmico",
    price: 159.90,
    image: "images/pijama-longo-masculino.jpg",
    tag: "Destaque"
  },
  {
    id: "masc-4",
    name: "Camiseta Loungewear Conforto",
    category: "Masculino",
    detail: "Perfeita para relaxar em casa com elegância e frescor",
    price: 79.90,
    image: "images/camiseta-loungewear.jpg",
    tag: "Básico"
  },

  // --- INFANTIL ---
  {
    id: "inf-1",
    name: "Pijama Infantil Algodão Doce",
    category: "Infantil",
    detail: "100% algodão hipoalergênico com estampa delicada",
    price: 79.90,
    image: "images/pijama-infantil.jpg",
    tag: "Destaque"
  },
  {
    id: "inf-2",
    name: "Shortdoll Juvenil Estrelas",
    category: "Infantil",
    detail: "Tecido levinho, super macio para noites de descanso feliz",
    price: 69.90,
    image: "images/shortdoll-juvenil.jpg",
    tag: "Queridinho"
  },
  {
    id: "inf-3",
    name: "Macacão Pijama Plush Conforto",
    category: "Infantil",
    detail: "Proteção térmica aconchegante com zíper protegido",
    price: 94.90,
    image: "images/macacao-infantil.jpg",
    tag: "Novo"
  },
  {
    id: "inf-4",
    name: "Kit 4 Peças Íntimas Kids",
    category: "Infantil",
    detail: "Elásticos delicados que não marcam e garantem liberdade",
    price: 59.90,
    image: "images/pecas-intimas-kids.jpg",
    tag: "Essencial"
  },

  // --- MODA PRAIA ---
  {
    id: "praia-1",
    name: "Biquíni Cortininha Textura Canelada",
    category: "Moda Praia",
    detail: "Tecido texturizado com proteção solar UV50+ e forro duplo",
    price: 149.90,
    image: "images/biquini-cortininha.jpg",
    tag: "Destaque"
  },
  {
    id: "praia-2",
    name: "Maiô Decote V Transpassado",
    category: "Moda Praia",
    detail: "Efeito modelador elegante que também pode ser usado como body",
    price: 179.90,
    image: "images/maio-transpassado.jpg",
    tag: "Exclusivo"
  },
  {
    id: "praia-3",
    name: "Saída de Praia em Laise Fluída",
    category: "Moda Praia",
    detail: "Caimento arejado e sofisticado com amarração na cintura",
    price: 139.90,
    image: "images/saida-praia.jpg",
    tag: "Novo"
  },
  {
    id: "praia-4",
    name: "Sunga Boxer Beachwear",
    category: "Moda Praia",
    detail: "Secagem ultra rápida, forro anatômico e cordão interno",
    price: 89.90,
    image: "images/sunga-boxer.jpg",
    tag: "Verão 2026"
  }
];

// Disponibiliza produtos iniciais globalmente
window.defaultProducts = initialProducts;

// Carrega produtos (localStorage > fallback inicial atualizado)
const CATALOG_VERSION = "v3-exact-images";
const savedVersion = localStorage.getItem("mimo_catalog_version");
let savedProducts = null;

if (savedVersion === CATALOG_VERSION) {
  try {
    savedProducts = JSON.parse(localStorage.getItem("mimo_custom_products") || "null");
  } catch (e) {}
}

let products = (savedProducts && savedProducts.length > 0) ? savedProducts : [...initialProducts];
localStorage.setItem("mimo_catalog_version", CATALOG_VERSION);
localStorage.setItem("mimo_custom_products", JSON.stringify(products));

const WHATSAPP_PHONE = "5561982378130";

// Elementos do DOM do Catálogo (presentes apenas em index.html)
const grid = document.querySelector("#product-grid");
const count = document.querySelector("#result-count");
const search = document.querySelector("#search");
const chips = [...document.querySelectorAll(".chip")];
const loadMoreBtn = document.querySelector("#load-more");
const categoryCards = [...document.querySelectorAll(".category-card")];

// Elementos da Gaveta de Favoritos
const favToggle = document.querySelector("#fav-toggle");
const favBadge = document.querySelector("#fav-badge");
const favDrawer = document.querySelector("#fav-drawer");
const drawerOverlay = document.querySelector("#drawer-overlay");
const drawerClose = document.querySelector("#drawer-close");
const drawerItems = document.querySelector("#drawer-items");
const drawerCount = document.querySelector("#drawer-count");
const sendFavsWa = document.querySelector("#send-favs-wa");

let activeFilter = "Todos";
let visibleCount = 8;
let favorites = JSON.parse(localStorage.getItem("mimo_favs") || "[]");

// Formatação de Preço BRL
function formatPrice(val) {
  return Number(val).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

// Gera URL do WhatsApp para pedir um item
function getWaProductUrl(product) {
  if (product.esgotado) return "#";
  let variantsText = "";
  if (product.colors) variantsText += `\nCores de interesse: ${product.colors}`;
  if (product.sizes) variantsText += `\nTamanhos de interesse: ${product.sizes}`;
  const text = `Olá! Vi no catálogo da Mimo Íntimo e gostaria de pedir:\n*${product.name}* (${formatPrice(product.price)})\nCategoria: ${product.category}${variantsText}\nEstá disponível para entrega/retirada?`;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
}

// Renderização dos Produtos
function renderProducts() {
  if (!grid) return;

  const query = search ? search.value.trim().toLowerCase() : "";
  const filtered = products.filter((product) => {
    const matchesCategory = activeFilter === "Todos" || product.category === activeFilter;
    const matchesSearch = !query || `${product.name} ${product.detail} ${product.category} ${product.colors || ''} ${product.sizes || ''}`.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  const visible = filtered.slice(0, visibleCount);

  grid.innerHTML = visible.map((product) => {
    const isFav = favorites.includes(product.id);
    const isEsgotado = !!product.esgotado;

    // Apenas se tiver destaque especial ou esgotado
    let tagHtml = '';
    if (isEsgotado) {
      tagHtml = '<span class="product-tag tag-esgotado">ESGOTADO</span>';
    } else if (product.tag && product.tag !== 'Destaque') {
      tagHtml = `<span class="product-tag">${product.tag}</span>`;
    }

    return `
      <article class="product-card ${isEsgotado ? 'is-esgotado' : ''}" data-id="${product.id}" onclick="openProductModal('${product.id}')">
        <div class="product-image-wrap">
          <img src="${product.image}" alt="${product.name}" loading="lazy" />
          ${tagHtml}
          <button class="product-fav ${isFav ? 'is-fav' : ''}" type="button" data-id="${product.id}" aria-label="Favoritar ${product.name}" onclick="event.stopPropagation();">
            ${isFav ? '♥' : '♡'}
          </button>
        </div>
        <div class="product-info">
          <h3>${product.name}</h3>
          <div class="product-bottom">
            <div class="product-price">
              <strong style="${isEsgotado ? 'text-decoration: line-through; opacity: 0.6;' : ''}">${formatPrice(product.price)}</strong>
            </div>
            <span class="mobile-tap-hint">Ver detalhes ↗</span>
            ${!isEsgotado ? `
              <a class="product-wa-btn" href="${getWaProductUrl(product)}" target="_blank" rel="noreferrer" onclick="event.stopPropagation();">
                <span>Pedir</span>
              </a>
            ` : ''}
          </div>
        </div>
      </article>
    `;
  }).join("");

  if (count) count.textContent = `Mostrando ${visible.length} de ${filtered.length} produtos`;
  if (loadMoreBtn) loadMoreBtn.hidden = visible.length >= filtered.length;
}

// Filtro por Chips
chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    activeFilter = chip.dataset.filter;
    visibleCount = 8;
    chips.forEach((item) => item.classList.toggle("active", item === chip));
    renderProducts();
  });
});

// Função reutilizável para aplicar filtro de categoria e rolar suavemente para o catálogo
function selectCategoryFilter(cat) {
  activeFilter = cat || "Todos";
  visibleCount = 8;
  chips.forEach((item) => item.classList.toggle("active", item.dataset.filter === activeFilter));
  renderProducts();
  const catalogEl = document.querySelector("#catalogo");
  if (catalogEl) {
    catalogEl.scrollIntoView({ behavior: "smooth" });
  }
}

// Botoes do Hero Slider que filtram categorias
document.querySelectorAll(".hero-btn-cat").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const filter = btn.dataset.filter || "Todos";
    selectCategoryFilter(filter);
  });
});

// Clique nas Categorias da barra superior para filtrar direto
categoryCards.forEach((card) => {
  card.addEventListener("click", () => {
    selectCategoryFilter(card.dataset.category);
  });
});

// Barra de Pesquisa Rápida no Topo
const topSearchInput = document.getElementById("top-search-input");
if (topSearchInput) {
  topSearchInput.addEventListener("input", () => {
    if (search) search.value = topSearchInput.value;
    visibleCount = 12;
    renderProducts();
    const catalogEl = document.querySelector("#catalogo");
    if (catalogEl && topSearchInput.value.trim().length > 1) {
      catalogEl.scrollIntoView({ behavior: "smooth" });
    }
  });
}

// Clique nas Categorias em Círculos
document.querySelectorAll(".circle-cat-item").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".circle-cat-item").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    selectCategoryFilter(btn.dataset.category);
  });
});

// Filtro por Marcas Parceiras
document.querySelectorAll(".brand-chip").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".brand-chip").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const brand = btn.dataset.brand;
    if (brand === "Todas") {
      if (search) search.value = "";
    } else {
      if (search) search.value = brand;
    }
    visibleCount = 12;
    renderProducts();
    const catalogEl = document.querySelector("#catalogo");
    if (catalogEl) catalogEl.scrollIntoView({ behavior: "smooth" });
  });
});

// =================================================================
// MODAL DE DETALHES DO PRODUTO (URL PRÓPRIA #produto-ID)
// =================================================================
const detailModal = document.getElementById("product-detail-modal");
const detailCloseBtn = document.getElementById("modal-detail-close");
let currentSelectedColor = "";

function openProductModal(id, skipHash) {
  const product = products.find(p => p.id === id);
  if (!product || !detailModal) return;

  if (!skipHash) {
    history.pushState(null, "", `#produto-${id}`);
  }

  document.getElementById("modal-detail-title").textContent = product.name;
  document.getElementById("modal-detail-category").textContent = product.category;
  document.getElementById("modal-detail-desc").textContent = product.detail || "Peça de alta qualidade selecionada com carinho pela Mimo Íntimo na Asa Sul.";
  document.getElementById("modal-detail-price").textContent = formatPrice(product.price);
  
  const modalImg = document.getElementById("modal-detail-img");
  modalImg.src = product.image;
  modalImg.alt = product.name;

  // Renderizar Cores clicáveis que trocam a foto instantaneamente!
  const colorsWrap = document.getElementById("modal-colors-wrap");
  const colorsContainer = document.getElementById("modal-detail-colors");
  const colorsList = product.colors ? product.colors.split(",").map(c => c.trim()).filter(Boolean) : [];

  if (colorsList.length > 0) {
    colorsWrap.style.display = "block";
    currentSelectedColor = colorsList[0];
    colorsContainer.innerHTML = colorsList.map((color, i) => `
      <button type="button" class="modal-chip ${i === 0 ? 'selected' : ''}" style="cursor: pointer; transition: all 0.2s;" onclick="switchProductColor('${product.id}', '${color}')">
        ${color}
      </button>
    `).join("");

    // Se já tiver foto da primeira cor
    if (product.colorPhotos && product.colorPhotos[currentSelectedColor]) {
      modalImg.src = product.colorPhotos[currentSelectedColor];
    }
  } else {
    colorsWrap.style.display = "none";
    currentSelectedColor = "";
  }

  // Renderizar Tamanhos / Numeração
  const sizesWrap = document.getElementById("modal-sizes-wrap");
  const sizesContainer = document.getElementById("modal-detail-sizes");
  const sizesList = product.sizes ? product.sizes.split(",").map(s => s.trim()).filter(Boolean) : [];

  if (sizesList.length > 0) {
    sizesWrap.style.display = "block";
    sizesContainer.innerHTML = sizesList.map(size => `<span class="modal-chip">${size}</span>`).join("");
  } else {
    sizesWrap.style.display = "none";
  }

  // Botão de Pedido WhatsApp
  const waBtn = document.getElementById("modal-detail-wabtn");
  const waText = document.getElementById("modal-detail-btntext");
  if (product.esgotado) {
    waBtn.classList.add("btn-disabled");
    waBtn.removeAttribute("href");
    waText.textContent = "Peça Esgotada no Momento";
  } else {
    waBtn.classList.remove("btn-disabled");
    waText.textContent = "Pedir Peça no WhatsApp";
    updateModalWaLink(product);
  }

  detailModal.classList.add("open");
  detailModal.setAttribute("aria-hidden", "false");
}

function updateModalWaLink(product) {
  const waBtn = document.getElementById("modal-detail-wabtn");
  if (!waBtn) return;
  let variantsInfo = "";
  if (currentSelectedColor) variantsInfo += `\nCor escolhida: *${currentSelectedColor}*`;
  if (product.sizes) variantsInfo += `\nTamanhos: ${product.sizes}`;
  const text = `Olá! Vi no site da Mimo Íntimo e gostaria de reservar/pedir:\n*${product.name}* (${formatPrice(product.price)})\nCategoria: ${product.category}${variantsInfo}\nGostaria de retirar na loja da Asa Sul ou consultar envio!`;
  waBtn.href = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
}

// Troca dinâmica da foto ao clicar na cor!
window.switchProductColor = function(productId, color) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  currentSelectedColor = color;

  document.querySelectorAll("#modal-detail-colors .modal-chip").forEach(chip => {
    chip.style.borderColor = chip.textContent.trim() === color ? "var(--purple)" : "rgba(107, 59, 143, 0.2)";
    chip.style.background = chip.textContent.trim() === color ? "var(--purple-soft)" : "#faf7f8";
  });

  const modalImg = document.getElementById("modal-detail-img");
  // Se tiver foto específica cadastrada no admin para aquela cor:
  if (product.colorPhotos && product.colorPhotos[color]) {
    modalImg.src = product.colorPhotos[color];
  } else {
    // Busca inteligente com IA para a cor específica
    const colorAiUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(product.name + ' cor ' + color + ' lingerie studio product shot')}?width=800&height=1000&nologo=true`;
    modalImg.src = colorAiUrl;
  }

  updateModalWaLink(product);
};

function closeProductModal() {
  if (!detailModal) return;
  detailModal.classList.remove("open");
  detailModal.setAttribute("aria-hidden", "true");
  if (window.location.hash.startsWith("#produto-")) {
    history.pushState(null, "", window.location.pathname);
  }
}

if (detailCloseBtn) detailCloseBtn.addEventListener("click", closeProductModal);
if (detailModal) {
  detailModal.addEventListener("click", (e) => {
    if (e.target === detailModal) closeProductModal();
  });
}

// Abertura automática se a URL contiver #produto-ID
window.addEventListener("popstate", checkUrlHashProduct);
window.addEventListener("DOMContentLoaded", checkUrlHashProduct);

function checkUrlHashProduct() {
  const hash = window.location.hash;
  if (hash.startsWith("#produto-")) {
    const id = hash.replace("#produto-", "");
    openProductModal(id, true);
  }
}

// Disponibiliza função globalmente para chamadas inline dos cards
window.openProductModal = openProductModal;

// Busca e Carregar Mais
if (search) {
  search.addEventListener("input", () => {
    visibleCount = 8;
    renderProducts();
  });
}

if (loadMoreBtn) {
  loadMoreBtn.addEventListener("click", () => {
    visibleCount += 4;
    renderProducts();
  });
}

// Gerenciamento de Favoritos
function updateFavoritesUI() {
  if (!favBadge || !drawerCount || !drawerItems) return;

  localStorage.setItem("mimo_favs", JSON.stringify(favorites));
  favBadge.textContent = favorites.length;

  const favProducts = products.filter((p) => favorites.includes(p.id));
  drawerCount.textContent = `${favProducts.length} ${favProducts.length === 1 ? 'item salvo' : 'itens salvos'}`;

  if (favProducts.length === 0) {
    drawerItems.innerHTML = '<p class="drawer-empty">Você ainda não favoritou nenhuma peça. Clique no coração ♡ nos produtos para salvar seus favoritos</p>';
    if (sendFavsWa) sendFavsWa.style.display = "none";
  } else {
    if (sendFavsWa) sendFavsWa.style.display = "inline-flex";
    drawerItems.innerHTML = favProducts.map((p) => `
      <div class="drawer-item">
        <img src="${p.image}" alt="${p.name}" />
        <div class="drawer-item-info">
          <strong>${p.name}</strong>
          <span>${formatPrice(p.price)}</span>
        </div>
        <button class="drawer-item-remove" data-id="${p.id}" title="Remover dos favoritos">✕</button>
      </div>
    `).join("");

    const listText = favProducts.map((p) => `• ${p.name} (${formatPrice(p.price)})`).join("\n");
    const fullText = `Olá! Salvei os seguintes itens no catálogo da Mimo Íntimo e gostaria de consultar tamanhos e cores:\n\n${listText}\n\nComo podemos proceder?`;
    if (sendFavsWa) sendFavsWa.href = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(fullText)}`;
  }
}

// Toggle de Favoritar nos Cards
if (grid) {
  grid.addEventListener("click", (event) => {
    const btn = event.target.closest(".product-fav");
    if (!btn) return;

    const id = btn.dataset.id;
    if (favorites.includes(id)) {
      favorites = favorites.filter((favId) => favId !== id);
    } else {
      favorites.push(id);
    }
    updateFavoritesUI();
    renderProducts();
  });
}

// Remover favorito a partir da Gaveta
if (drawerItems) {
  drawerItems.addEventListener("click", (event) => {
    const removeBtn = event.target.closest(".drawer-item-remove");
    if (!removeBtn) return;
    const id = removeBtn.dataset.id;
    favorites = favorites.filter((favId) => favId !== id);
    updateFavoritesUI();
    renderProducts();
  });
}

// Abrir / Fechar Gaveta de Favoritos
function toggleDrawer(open) {
  if (!favDrawer || !drawerOverlay) return;
  favDrawer.classList.toggle("open", open);
  drawerOverlay.classList.toggle("open", open);
  favDrawer.setAttribute("aria-hidden", String(!open));
}

if (favToggle) favToggle.addEventListener("click", () => toggleDrawer(true));
if (drawerClose) drawerClose.addEventListener("click", () => toggleDrawer(false));
if (drawerOverlay) drawerOverlay.addEventListener("click", () => toggleDrawer(false));

// Menu Mobile
const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    const open = mobileMenu.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
  });

  document.querySelectorAll(".mobile-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// =================================================================
// HERO SLIDER CAROUSEL (Coleções de Verão, Novidades, Queima de Estoque)
// =================================================================
function initHeroSlider() {
  const slider = document.querySelector("#hero-slider");
  if (!slider) return;

  const slides = [...slider.querySelectorAll(".hero-slide")];
  const dots = [...document.querySelectorAll(".hero-dot")];
  const prevBtn = document.querySelector("#hero-prev");
  const nextBtn = document.querySelector("#hero-next");
  const heroWrapper = document.querySelector(".hero-slider-wrapper");

  if (slides.length <= 1) return;

  let currentSlide = 0;
  let autoSlideTimer = null;
  const SLIDE_DURATION = 5000; // 5 segundos por slide

  function showSlide(index) {
    if (index >= slides.length) currentSlide = 0;
    else if (index < 0) currentSlide = slides.length - 1;
    else currentSlide = index;

    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === currentSlide);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentSlide);
    });
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  function startAutoPlay() {
    stopAutoPlay();
    autoSlideTimer = setInterval(nextSlide, SLIDE_DURATION);
  }

  function stopAutoPlay() {
    if (autoSlideTimer) {
      clearInterval(autoSlideTimer);
      autoSlideTimer = null;
    }
  }

  // Eventos de clique nas setas
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      nextSlide();
      startAutoPlay();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      prevSlide();
      startAutoPlay();
    });
  }

  // Eventos de clique nos indicadores (dots / abas)
  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const targetIndex = parseInt(dot.dataset.slide, 10);
      if (!isNaN(targetIndex)) {
        showSlide(targetIndex);
        startAutoPlay();
      }
    });
  });

  // Pausar rotação ao passar o mouse por cima
  if (heroWrapper) {
    heroWrapper.addEventListener("mouseenter", stopAutoPlay);
    heroWrapper.addEventListener("mouseleave", startAutoPlay);
  }

  // Suporte a gestos de arrasto / swipe no celular
  let touchStartX = 0;
  let touchEndX = 0;

  slider.addEventListener("touchstart", (e) => {
    if (e.changedTouches && e.changedTouches[0]) {
      touchStartX = e.changedTouches[0].screenX;
    }
    stopAutoPlay();
  }, { passive: true });

  slider.addEventListener("touchend", (e) => {
    if (e.changedTouches && e.changedTouches[0]) {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchEndX - touchStartX;
      if (Math.abs(diff) > 40) {
        if (diff < 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
    }
    startAutoPlay();
  }, { passive: true });

  // Inicia rotação automática
  startAutoPlay();
}

// Inicialização
updateFavoritesUI();
renderProducts();
initHeroSlider();
