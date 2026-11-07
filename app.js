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
    const tagDisplay = isEsgotado ? 'ESGOTADO' : (product.tag || 'Destaque');
    const tagClass = isEsgotado ? 'product-tag tag-esgotado' : 'product-tag';

    // Bloco de Variantes (Cores e Tamanhos / Numeração)
    let variantsHtml = '';
    if (product.colors || product.sizes) {
      const colorsList = product.colors ? product.colors.split(',').map(c => c.trim()).filter(Boolean) : [];
      const sizesList = product.sizes ? product.sizes.split(',').map(s => s.trim()).filter(Boolean) : [];

      variantsHtml = `
        <div class="product-variants">
          ${colorsList.length ? `
            <div class="product-variants-row">
              <span class="product-variants-label">Cores:</span>
              ${colorsList.map(c => `<span class="variant-pill">${c}</span>`).join('')}
            </div>
          ` : ''}
          ${sizesList.length ? `
            <div class="product-variants-row">
              <span class="product-variants-label">Tamanhos:</span>
              ${sizesList.map(s => `<span class="variant-pill">${s}</span>`).join('')}
            </div>
          ` : ''}
        </div>
      `;
    }

    return `
      <article class="product-card ${isEsgotado ? 'is-esgotado' : ''}" data-id="${product.id}">
        <div class="product-image-wrap">
          <img src="${product.image}" alt="${product.name}" loading="lazy" />
          <span class="${tagClass}">${tagDisplay}</span>
          <button class="product-fav ${isFav ? 'is-fav' : ''}" type="button" data-id="${product.id}" aria-label="Favoritar ${product.name}">
            ${isFav ? '♥' : '♡'}
          </button>
        </div>
        <div class="product-info">
          <div class="product-meta">
            <span class="product-category">${product.category}</span>
          </div>
          <h3>${product.name}</h3>
          <p>${product.detail || ''}</p>
          ${variantsHtml}
          <div class="product-bottom">
            <div class="product-price">
              <small>${isEsgotado ? 'Indisponível' : 'Valor'}</small>
              <strong style="${isEsgotado ? 'text-decoration: line-through; opacity: 0.6;' : ''}">${formatPrice(product.price)}</strong>
            </div>
            ${isEsgotado ? `
              <span class="product-wa-btn btn-disabled" title="Peça esgotada no momento">
                <span>Esgotado</span>
              </span>
            ` : `
              <a class="product-wa-btn" href="${getWaProductUrl(product)}" target="_blank" rel="noreferrer">
                <svg width="14" height="14" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                <span>Pedir</span>
              </a>
            `}
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
