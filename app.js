// Catálogo Mimo Íntimo - Produtos com Sessões, Fotos Reais e Valores
// Carrega produtos (localStorage > fallback inicial atualizado)
const CATALOG_VERSION = "v10-official-lupo-loba-2026";
const savedVersion = localStorage.getItem("mimo_catalog_version");
let savedProducts = null;

if (savedVersion === CATALOG_VERSION) {
  try {
    const parsed = JSON.parse(localStorage.getItem("mimo_custom_products") || "null");
    if (Array.isArray(parsed) && parsed.length >= 60) {
      savedProducts = parsed;
    }
  } catch (e) {}
}

const defaultList = (typeof window !== "undefined" && window.defaultProducts) ? window.defaultProducts : [];
let products = (savedProducts && savedProducts.length > 0) ? savedProducts : [...defaultList];
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

let activeFilter = "Novidades";
let visibleCount = 12;
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
  const text = `Olá! Vi no catálogo da Mimo Íntimo e gostaria de pedir:\n*${product.name}* (${formatPrice(product.price)})\nCategoria: ${product.category}${product.brand ? ` (Marca: ${product.brand})` : ''}${variantsText}\nEstá disponível para entrega/retirada?`;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
}

// Gera o HTML padrão de um card de produto
function createProductCardHtml(product) {
  const isFav = favorites.includes(product.id);
  const isEsgotado = !!product.esgotado;

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
}

// Renderização dos Produtos e Alternância de Telas (Novidades vs Catálogo Completo)
function renderProducts() {
  const novidadesView = document.querySelector("#catalog-novidades-view");
  const fullView = document.querySelector("#catalog-full-view");
  const fullTitle = document.querySelector("#full-catalog-title");
  const femGrid = document.querySelector("#novidades-fem-grid");
  const mascGrid = document.querySelector("#novidades-masc-grid");
  const infGrid = document.querySelector("#novidades-inf-grid");

  const query = (search && search.value ? search.value.trim().toLowerCase() : "") || 
                (topSearchInput && topSearchInput.value ? topSearchInput.value.trim().toLowerCase() : "");

  // Se o filtro for 'Novidades' e não houver pesquisa textual, exibe a curadoria organizada
  if (activeFilter === "Novidades" && !query && novidadesView && fullView) {
    novidadesView.style.display = "flex";
    fullView.style.display = "none";

    // 3 de Mulher / Feminino
    if (femGrid) {
      const femItems = products.filter(p => p.category === "Feminino").slice(0, 3);
      femGrid.innerHTML = femItems.map(createProductCardHtml).join("");
    }

    // 3 de Homem / Masculino
    if (mascGrid) {
      const mascItems = products.filter(p => p.category === "Masculino").slice(0, 3);
      mascGrid.innerHTML = mascItems.map(createProductCardHtml).join("");
    }

    // 3 de Kids / Crianças / Infantil
    if (infGrid) {
      const infItems = products.filter(p => p.category === "Infantil").slice(0, 3);
      infGrid.innerHTML = infItems.map(createProductCardHtml).join("");
    }
    return;
  }

  // Caso contrário, exibe o Catálogo Completo filtrado
  if (novidadesView && fullView) {
    novidadesView.style.display = "none";
    fullView.style.display = "block";
  }

  if (fullTitle) {
    if (query) {
      fullTitle.textContent = `Resultados para "${query}"`;
    } else if (activeFilter === "Todos") {
      fullTitle.textContent = "Catálogo Completo (Todas as Peças)";
    } else {
      fullTitle.textContent = `Categoria: ${activeFilter}`;
    }
  }

  const filtered = products.filter((product) => {
    let matchesCategory = false;
    const filter = activeFilter;
    if (filter === "Todos" || filter === "Novidades") {
      matchesCategory = true;
    } else if (filter === "Lupo") {
      matchesCategory = (product.brand === "Lupo") || (product.name && product.name.toLowerCase().includes("lupo"));
    } else if (filter === "Loba") {
      matchesCategory = (product.brand === "Loba") || (product.name && product.name.toLowerCase().includes("loba"));
    } else if (filter === "Lobinha") {
      matchesCategory = (product.brand === "Lobinha") || (product.name && product.name.toLowerCase().includes("lobinha"));
    } else {
      matchesCategory = product.category === filter;
    }

    const matchesSearch = !query || `${product.name} ${product.detail} ${product.category} ${product.brand || ''} ${product.colors || ''} ${product.sizes || ''}`.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  const visible = filtered.slice(0, visibleCount);
  if (grid) {
    if (visible.length === 0) {
      grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--muted); font-size: 15px;">Nenhum produto encontrado. Tente buscar por outro termo ou categoria.</div>`;
    } else {
      grid.innerHTML = visible.map(createProductCardHtml).join("");
    }
  }

  if (count) count.textContent = `Mostrando ${visible.length} de ${filtered.length} produtos`;
  if (loadMoreBtn) loadMoreBtn.hidden = visible.length >= filtered.length;
}

// Funções globais de alternância
window.showFullCatalog = function() {
  selectCategoryFilter("Todos");
};

window.showNovidadesView = function() {
  selectCategoryFilter("Novidades");
};

// Filtro por Chips do Catálogo
document.querySelectorAll(".chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    selectCategoryFilter(chip.dataset.filter);
  });
});

// Função reutilizável para aplicar filtro de categoria e rolar suavemente para o catálogo
function selectCategoryFilter(cat) {
  activeFilter = cat || "Novidades";
  visibleCount = 12;

  document.querySelectorAll(".chip").forEach((item) => {
    item.classList.toggle("active", item.dataset.filter === activeFilter);
  });

  document.querySelectorAll(".circle-cat-item").forEach((b) => {
    b.classList.toggle("active", b.dataset.category === activeFilter);
  });

  document.querySelectorAll(".brand-chip").forEach((b) => {
    b.classList.toggle("active", b.dataset.brand === activeFilter || (activeFilter === "Todos" && b.dataset.brand === "Todas"));
  });

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
    const filter = btn.dataset.filter || "Novidades";
    selectCategoryFilter(filter);
  });
});

// Clique nas Categorias da barra superior para filtrar direto
categoryCards.forEach((card) => {
  card.addEventListener("click", () => {
    selectCategoryFilter(card.dataset.category);
  });
});

// =================================================================
// BARRA DE PESQUISA RÁPIDA NO TOPO COM DROPDOWN DE OPÇÕES
// =================================================================
const topSearchInput = document.getElementById("top-search-input");
const topSearchDropdown = document.getElementById("search-dropdown-menu");
const searchLiveResults = document.getElementById("search-live-results");
const topSearchClearBtn = document.getElementById("top-search-clear");

function updateSearchLiveResults(query) {
  if (!searchLiveResults) return;
  const q = query.trim().toLowerCase();
  if (!q) {
    searchLiveResults.innerHTML = `
      <div style="padding: 14px 16px; font-size: 13px; color: var(--muted); text-align: center;">
        Digite acima para buscar entre os 66 produtos da loja ou clique em uma opção rápida.
      </div>
    `;
    return;
  }

  const matches = products.filter(p => {
    return `${p.name} ${p.category} ${p.brand || ''} ${p.detail || ''}`.toLowerCase().includes(q);
  }).slice(0, 6);

  if (matches.length === 0) {
    searchLiveResults.innerHTML = `
      <div style="padding: 16px; font-size: 13px; color: var(--muted); text-align: center;">
        Nenhum produto encontrado para "<strong>${query}</strong>".
      </div>
    `;
    return;
  }

  searchLiveResults.innerHTML = matches.map(p => `
    <div class="search-result-item" onclick="openProductFromSearch('${p.id}')">
      <img src="${p.image}" alt="${p.name}" class="search-result-thumb" />
      <div class="search-result-info">
        <span class="search-result-name">${p.name}</span>
        <div class="search-result-meta">
          <span class="search-result-category">${p.category}</span>
          ${p.brand ? `<span class="search-result-brand">${p.brand}</span>` : ''}
        </div>
      </div>
      <strong class="search-result-price">${formatPrice(p.price)}</strong>
    </div>
  `).join("");
}

window.openProductFromSearch = function(productId) {
  if (topSearchDropdown) topSearchDropdown.style.display = "none";
  openProductModal(productId);
};

window.applyQuickSearch = function(term) {
  if (topSearchInput) topSearchInput.value = term;
  if (search) search.value = term;
  if (topSearchClearBtn) topSearchClearBtn.style.display = "block";
  if (topSearchDropdown) topSearchDropdown.style.display = "none";
  activeFilter = "Todos";
  visibleCount = 18;
  renderProducts();
  const catEl = document.querySelector("#catalogo");
  if (catEl) catEl.scrollIntoView({ behavior: "smooth" });
};

if (topSearchInput) {
  topSearchInput.addEventListener("focus", () => {
    if (topSearchDropdown) topSearchDropdown.style.display = "block";
    updateSearchLiveResults(topSearchInput.value);
  });

  topSearchInput.addEventListener("input", () => {
    const val = topSearchInput.value;
    if (topSearchClearBtn) topSearchClearBtn.style.display = val.length > 0 ? "block" : "none";
    if (search) search.value = val;
    if (topSearchDropdown) topSearchDropdown.style.display = "block";
    updateSearchLiveResults(val);
    visibleCount = 12;
    renderProducts();
  });
}

if (topSearchClearBtn) {
  topSearchClearBtn.addEventListener("click", () => {
    if (topSearchInput) topSearchInput.value = "";
    if (search) search.value = "";
    topSearchClearBtn.style.display = "none";
    updateSearchLiveResults("");
    renderProducts();
  });
}

// Fechar dropdown ao clicar fora ou pressionar ESC
document.addEventListener("click", (e) => {
  if (!e.target.closest(".top-search-banner")) {
    if (topSearchDropdown) topSearchDropdown.style.display = "none";
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && topSearchDropdown) {
    topSearchDropdown.style.display = "none";
  }
});

// Clique nas Categorias em Círculos
document.querySelectorAll(".circle-cat-item").forEach((btn) => {
  btn.addEventListener("click", () => {
    selectCategoryFilter(btn.dataset.category);
  });
});

// Filtro por Marcas Parceiras
document.querySelectorAll(".brand-chip").forEach((btn) => {
  btn.addEventListener("click", () => {
    const brand = btn.dataset.brand;
    if (brand === "Todas") {
      if (search) search.value = "";
      if (topSearchInput) topSearchInput.value = "";
      selectCategoryFilter("Todos");
    } else if (brand === "Lupo" || brand === "Loba" || brand === "Lobinha") {
      if (search) search.value = "";
      if (topSearchInput) topSearchInput.value = "";
      selectCategoryFilter(brand);
    } else {
      if (search) search.value = brand;
      if (topSearchInput) topSearchInput.value = brand;
      visibleCount = 12;
      renderProducts();
      const catalogEl = document.querySelector("#catalogo");
      if (catalogEl) catalogEl.scrollIntoView({ behavior: "smooth" });
    }
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

  // Atualiza estado do botão de favoritar no modal
  currentActiveModalId = id;
  updateModalFavBtnState(id);

  detailModal.classList.add("open");
  detailModal.setAttribute("aria-hidden", "false");
}

let currentActiveModalId = null;

function updateModalFavBtnState(id) {
  const favBtn = document.getElementById("modal-detail-favbtn");
  const favIcon = document.getElementById("modal-detail-favicon");
  const favText = document.getElementById("modal-detail-favtext");
  if (!favBtn || !favIcon || !favText) return;

  const isFav = favorites.includes(id);
  favBtn.classList.toggle("is-fav", isFav);
  favIcon.textContent = isFav ? "♥" : "♡";
  favText.textContent = isFav ? "Salvo nos Favoritos" : "Salvar Favorito";
}

window.toggleModalProductFav = function() {
  if (!currentActiveModalId) return;
  if (favorites.includes(currentActiveModalId)) {
    favorites = favorites.filter((id) => id !== currentActiveModalId);
  } else {
    favorites.push(currentActiveModalId);
  }
  updateModalFavBtnState(currentActiveModalId);
  updateFavoritesUI();
  renderProducts();
};

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
    const isSelected = chip.textContent.trim() === color;
    chip.style.borderColor = isSelected ? "var(--purple)" : "rgba(107, 59, 143, 0.2)";
    chip.style.background = isSelected ? "var(--purple-soft)" : "#faf7f8";
  });

  const modalImg = document.getElementById("modal-detail-img");
  if (modalImg) {
    let targetSrc = "";
    if (product.colorPhotos && product.colorPhotos[color]) {
      targetSrc = product.colorPhotos[color];
    } else {
      // Gera automaticamente a imagem idêntica ao produto na cor respectiva
      const prompt = `${product.name} ${product.brand || ''} na cor ${color}, fotografia profissional de catálogo em estúdio fotográfico, fundo branco limpo, iluminação de moda, 4k hd`;
      targetSrc = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=800&height=1000&nologo=true`;
      if (!product.colorPhotos) product.colorPhotos = {};
      product.colorPhotos[color] = targetSrc;
      try {
        localStorage.setItem("mimo_custom_products", JSON.stringify(products));
      } catch (e) {}
    }

    modalImg.style.transition = "opacity 0.25s ease";
    modalImg.style.opacity = "0.4";
    const temp = new Image();
    temp.onload = () => {
      modalImg.src = targetSrc;
      modalImg.style.opacity = "1";
    };
    temp.onerror = () => {
      modalImg.src = targetSrc;
      modalImg.style.opacity = "1";
    };
    temp.src = targetSrc;
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

// Gerenciamento de Favoritos e Seleção para Pix
let selectedFavIds = new Set(favorites);

function updateFavSubtotal() {
  const favProducts = products.filter((p) => favorites.includes(p.id));
  const selectedProducts = favProducts.filter((p) => selectedFavIds.has(p.id));
  const subtotal = selectedProducts.reduce((sum, p) => sum + Number(p.price || 0), 0);

  const subtotalWrap = document.getElementById("drawer-subtotal-wrap");
  const subtotalVal = document.getElementById("drawer-subtotal-value");
  const btnPayPix = document.getElementById("btn-pay-pix");

  if (subtotalWrap && subtotalVal && btnPayPix) {
    if (selectedProducts.length > 0) {
      subtotalWrap.style.display = "flex";
      subtotalVal.textContent = formatPrice(subtotal);
      btnPayPix.style.display = "flex";
      btnPayPix.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 512 512" fill="currentColor"><path d="M112.5 137.4l82.8-82.8c31.2-31.2 82-31.2 113.1 0l82.8 82.8c31.2 31.2 31.2 82 0 113.1l-82.8 82.8c-31.2 31.2-82 31.2-113.1 0l-82.8-82.8c-31.2-31.2-31.2-82 0-113.1zm113.1 27.2c-15.6 15.6-15.6 41 0 56.6l3.8 3.8c15.6 15.6 41 15.6 56.6 0l3.8-3.8c15.6-15.6 15.6-41 0-56.6l-3.8-3.8c-15.6-15.6-41-15.6-56.6 0l-3.8 3.8z"/></svg>
        <span>Pagar Selecionados por Pix (${selectedProducts.length})</span>
      `;
    } else {
      subtotalWrap.style.display = "none";
      btnPayPix.style.display = "none";
    }
  }
}

function updateFavoritesUI() {
  if (!favBadge || !drawerCount || !drawerItems) return;

  localStorage.setItem("mimo_favs", JSON.stringify(favorites));
  favBadge.textContent = favorites.length;

  const favProducts = products.filter((p) => favorites.includes(p.id));
  drawerCount.textContent = `${favProducts.length} ${favProducts.length === 1 ? 'item salvo' : 'itens salvos'}`;

  // Garante que novos favoritos venham selecionados por padrão
  favorites.forEach((id) => {
    if (!selectedFavIds.has(id)) selectedFavIds.add(id);
  });
  // Remove IDs que não são mais favoritos
  [...selectedFavIds].forEach((id) => {
    if (!favorites.includes(id)) selectedFavIds.delete(id);
  });

  if (favProducts.length === 0) {
    drawerItems.innerHTML = '<p class="drawer-empty">Você ainda não favoritou nenhuma peça. Clique no coração ♡ nos produtos para salvar seus favoritos</p>';
    if (sendFavsWa) sendFavsWa.style.display = "none";
    updateFavSubtotal();
  } else {
    if (sendFavsWa) sendFavsWa.style.display = "inline-flex";
    drawerItems.innerHTML = favProducts.map((p) => `
      <div class="drawer-item">
        <label class="drawer-item-select" title="Selecionar para Pix">
          <input type="checkbox" class="fav-checkbox" data-id="${p.id}" ${selectedFavIds.has(p.id) ? 'checked' : ''} aria-label="Selecionar para pagamento" />
        </label>
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

    updateFavSubtotal();
  }
}

// Alteração de seleção das checkboxes no drawer
if (drawerItems) {
  drawerItems.addEventListener("change", (e) => {
    const cb = e.target.closest(".fav-checkbox");
    if (!cb) return;
    const id = cb.dataset.id;
    if (cb.checked) {
      selectedFavIds.add(id);
    } else {
      selectedFavIds.delete(id);
    }
    updateFavSubtotal();
  });
}

// Fluxo de Pagamento Pix com Conferência no WhatsApp
const btnPayPix = document.getElementById("btn-pay-pix");
if (btnPayPix) {
  btnPayPix.addEventListener("click", () => {
    const favProducts = products.filter((p) => favorites.includes(p.id));
    const selectedProducts = favProducts.filter((p) => selectedFavIds.has(p.id));
    if (selectedProducts.length === 0) {
      alert("Por favor, selecione pelo menos 1 peça para pagar por Pix!");
      return;
    }

    const itemsList = selectedProducts.map(p => `• ${p.name} - ${formatPrice(p.price)}`).join("\n");
    const total = selectedProducts.reduce((sum, p) => sum + Number(p.price || 0), 0);
    const msg = `Olá! Gostaria de conferir se vocês têm em estoque na loja física da Asa Sul as seguintes peças para eu realizar o pagamento via Pix:\n\n${itemsList}\n\n*Total Selecionado:* ${formatPrice(total)}\n\nPoderiam verificar a disponibilidade antes de eu transferir?`;

    const wppBtn = document.getElementById("pix-stock-wpp-btn");
    if (wppBtn) {
      wppBtn.href = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`;
    }

    const stockPopup = document.getElementById("pix-stock-popup");
    if (stockPopup) stockPopup.classList.add("open");
  });
}

window.handleWppCheckClick = function() {
  // Mantém popup aberto para quando o cliente voltar poder clicar em "Já conferi"
};

window.openPixQrCodeModal = function() {
  const stockPopup = document.getElementById("pix-stock-popup");
  if (stockPopup) stockPopup.classList.remove("open");

  const favProducts = products.filter((p) => favorites.includes(p.id));
  const selectedProducts = favProducts.filter((p) => selectedFavIds.has(p.id));
  const total = selectedProducts.reduce((sum, p) => sum + Number(p.price || 0), 0);

  const totalEl = document.getElementById("pix-modal-total");
  if (totalEl) totalEl.textContent = `Total a Transferir: ${formatPrice(total)}`;

  const qrImg = document.getElementById("pix-qr-img");
  if (qrImg) {
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(WHATSAPP_PHONE)}`;
  }

  const qrPopup = document.getElementById("pix-qrcode-popup");
  if (qrPopup) qrPopup.classList.add("open");
};

window.closePixPopups = function() {
  document.getElementById("pix-stock-popup")?.classList.remove("open");
  document.getElementById("pix-qrcode-popup")?.classList.remove("open");
};

// Fechar ao clicar fora ou pressionar ESC
["pix-stock-popup", "pix-qrcode-popup"].forEach((id) => {
  const el = document.getElementById(id);
  if (el) {
    el.addEventListener("click", (e) => {
      if (e.target === el) window.closePixPopups();
    });
  }
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    window.closePixPopups();
    if (typeof closeProductModal === "function") closeProductModal();
    if (typeof toggleDrawer === "function") toggleDrawer(false);
  }
});

window.copyPixKey = function() {
  const keyInput = document.getElementById("pix-key-val");
  if (!keyInput) return;
  const val = keyInput.value;

  const updateBtnFeedback = () => {
    const btn = document.querySelector("#pix-qrcode-popup .preset-btn");
    if (btn) {
      const orig = btn.textContent;
      btn.textContent = "✓ Chave Pix Copiada!";
      btn.style.background = "#25d366";
      btn.style.color = "#fff";
      setTimeout(() => {
        btn.textContent = orig;
        btn.style.background = "";
        btn.style.color = "";
      }, 2500);
    }
  };

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(val).then(updateBtnFeedback).catch(() => {
      keyInput.select();
      document.execCommand("copy");
      updateBtnFeedback();
    });
  } else {
    keyInput.select();
    document.execCommand("copy");
    updateBtnFeedback();
  }
};

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
// HERO SLIDER CAROUSEL (Lupo para Todos, Novidades do Site, Moda Praia)
// =================================================================
const defaultHeroSlides = [
  {
    tag: "Lupo, Loba & Lobinha",
    title: "Lupo para Todos",
    subtitle: "Moda íntima, meias, cuecas e pijamas de alta tecnologia e durabilidade incomparável para homens, mulheres e crianças",
    btnText: "Ver Coleção Lupo",
    filter: "Lupo",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1920&q=80"
  },
  {
    tag: "Novidades Exclusivas",
    title: "Novidades do Site",
    subtitle: "Conforto e elegância que abraçam você. Lingeries em renda antialérgica, peças sem costura e pijamas de seda criados para celebrar sua beleza com aconchego",
    btnText: "Explorar Novidades",
    filter: "Novidades",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1920&q=80"
  },
  {
    tag: "Verão 2026 & Proteção UV",
    title: "Moda Praia",
    subtitle: "Biquínis, maiôs e sungas anatômicas com proteção solar UV50+ e secagem ultra-rápida para aproveitar cada raio de sol",
    btnText: "Ver Moda Praia",
    filter: "Moda Praia",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80"
  }
];

function initHeroSlider() {
  const slider = document.querySelector("#hero-slider");
  if (!slider) return;

  // Carrega slides customizados pelo admin se houver
  let heroSlides = defaultHeroSlides;
  try {
    const customSlides = JSON.parse(localStorage.getItem("mimo_hero_slides") || "null");
    if (Array.isArray(customSlides) && customSlides.length > 0) {
      heroSlides = customSlides;
    }
  } catch (e) {}

  // Renderiza slides dinamicamente
  slider.innerHTML = heroSlides.map((slide, i) => `
    <div class="hero-slide ${i === 0 ? 'active' : ''}" data-index="${i}">
      <div class="hero-slide-bg" style="background-image: url('${slide.image}');"></div>
      <div class="hero-slide-overlay"></div>
      <div class="hero-slide-content section-shell">
        <div class="hero-copy">
          <p class="eyebrow"><span class="badge-tag">${slide.tag}</span></p>
          <h1>${slide.title}</h1>
          <p class="hero-text">${slide.subtitle}</p>
          <div class="hero-actions">
            <a class="button button-primary hero-btn-cat" href="#catalogo" data-filter="${slide.filter || 'Novidades'}">${slide.btnText || 'Ver Coleção'} <span>↗</span></a>
            <a class="text-link" href="https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre ' + slide.title + ' da Mimo Íntimo')}" target="_blank" rel="noreferrer">Falar no WhatsApp <span>→</span></a>
          </div>
        </div>
      </div>
    </div>
  `).join("");

  const indicatorsContainer = document.querySelector("#hero-indicators");
  if (indicatorsContainer) {
    indicatorsContainer.innerHTML = heroSlides.map((slide, i) => `
      <button class="hero-dot ${i === 0 ? 'active' : ''}" data-slide="${i}" aria-label="Ir para ${slide.title}">
        <span class="dot-bar"></span><span class="dot-label">${slide.title}</span>
      </button>
    `).join("");
  }

  // Re-atribui evento de clique para os botões do hero slider
  slider.querySelectorAll(".hero-btn-cat").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const filter = btn.dataset.filter || "Novidades";
      selectCategoryFilter(filter);
    });
  });

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
    nextBtn.onclick = () => {
      nextSlide();
      startAutoPlay();
    };
  }

  if (prevBtn) {
    prevBtn.onclick = () => {
      prevSlide();
      startAutoPlay();
    };
  }

  // Eventos de clique nos indicadores (dots / abas)
  dots.forEach((dot) => {
    dot.onclick = () => {
      const targetIndex = parseInt(dot.dataset.slide, 10);
      if (!isNaN(targetIndex)) {
        showSlide(targetIndex);
        startAutoPlay();
      }
    };
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
