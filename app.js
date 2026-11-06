// Catálogo Mimo Íntimos - Produtos com Sessões, Fotos Reais e Valores
const products = [
  // --- FEMININO ---
  {
    id: "fem-1",
    name: "Conjunto Rendado Sublime",
    category: "Feminino",
    detail: "Renda antialérgica com suporte suave e caimento impecável",
    price: 129.90,
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=650&q=80",
    tag: "Destaque"
  },
  {
    id: "fem-2",
    name: "Camisola Charlize em Liganete",
    category: "Feminino",
    detail: "Toque de seda geladinho com renda no decote",
    price: 139.90,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=650&q=80",
    tag: "Queridinho"
  },
  {
    id: "fem-3",
    name: "Shortdoll Pérola em Cetim",
    category: "Feminino",
    detail: "Alças reguláveis, leveza e acabamento acetinado de alto padrão",
    price: 109.90,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=650&q=80",
    tag: "Novo"
  },
  {
    id: "fem-4",
    name: "Sutiã Comfort Sem Costura",
    category: "Feminino",
    detail: "Liberdade sem aros e máxima sustentação anatômica",
    price: 79.90,
    image: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=650&q=80",
    tag: "Essencial"
  },
  {
    id: "fem-5",
    name: "Robe Luxo em Viscose com Renda",
    category: "Feminino",
    detail: "Manga flare fluída com faixa para amarração delicada",
    price: 169.90,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=650&q=80",
    tag: "Exclusivo"
  },
  {
    id: "fem-6",
    name: "Kit 3 Calcinhas Invisíveis Corte a Laser",
    category: "Feminino",
    detail: "Não marca sob vestidos e calças finas, toque segunda pele",
    price: 74.90,
    image: "https://images.unsplash.com/photo-1582533561751-ef6f6ab93a2e?auto=format&fit=crop&w=650&q=80",
    tag: "Mais Vendido"
  },

  // --- MASCULINO ---
  {
    id: "masc-1",
    name: "Pijama Longo Classic Confort",
    category: "Masculino",
    detail: "Algodão premium respirável, caimento solto e térmico",
    price: 159.90,
    image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=650&q=80",
    tag: "Destaque"
  },
  {
    id: "masc-2",
    name: "Pijama Americano Masculino Curto",
    category: "Masculino",
    detail: "Gola colarinho com botões frontais e cós elástico com cordão",
    price: 139.90,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=650&q=80",
    tag: "Novo"
  },
  {
    id: "masc-3",
    name: "Kit 3 Cuecas Boxer Cotton Premium",
    category: "Masculino",
    detail: "Algodão com elastano, forro duplo e elástico macio",
    price: 89.90,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=650&q=80",
    tag: "Essencial"
  },
  {
    id: "masc-4",
    name: "Camiseta Loungewear Conforto",
    category: "Masculino",
    detail: "Perfeita para relaxar em casa com elegância e frescor",
    price: 79.90,
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=650&q=80",
    tag: "Básico"
  },

  // --- INFANTIL ---
  {
    id: "inf-1",
    name: "Pijama Infantil Algodão Doce",
    category: "Infantil",
    detail: "100% algodão hipoalergênico com estampa delicada",
    price: 79.90,
    image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=650&q=80",
    tag: "Destaque"
  },
  {
    id: "inf-2",
    name: "Shortdoll Juvenil Estrelas",
    category: "Infantil",
    detail: "Tecido levinho, super macio para noites de descanso feliz",
    price: 69.90,
    image: "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?auto=format&fit=crop&w=650&q=80",
    tag: "Queridinho"
  },
  {
    id: "inf-3",
    name: "Macacão Pijama Plush Conforto",
    category: "Infantil",
    detail: "Proteção térmica aconchegante com zíper protegido",
    price: 94.90,
    image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&w=650&q=80",
    tag: "Novo"
  },
  {
    id: "inf-4",
    name: "Kit 4 Peças Íntimas Kids",
    category: "Infantil",
    detail: "Elásticos delicados que não marcam e garantem liberdade",
    price: 59.90,
    image: "https://images.unsplash.com/photo-1471286174890-9c112ffca56a?auto=format&fit=crop&w=650&q=80",
    tag: "Essencial"
  },

  // --- MODA PRAIA ---
  {
    id: "praia-1",
    name: "Biquíni Cortininha Textura Canelada",
    category: "Moda Praia",
    detail: "Tecido texturizado com proteção solar UV50+ e forro duplo",
    price: 149.90,
    image: "https://images.unsplash.com/photo-1576426863848-c21f53c60b19?auto=format&fit=crop&w=650&q=80",
    tag: "Destaque"
  },
  {
    id: "praia-2",
    name: "Maiô Decote V Transpassado",
    category: "Moda Praia",
    detail: "Efeito modelador elegante que também pode ser usado como body",
    price: 179.90,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=650&q=80",
    tag: "Exclusivo"
  },
  {
    id: "praia-3",
    name: "Saída de Praia em Laise Fluída",
    category: "Moda Praia",
    detail: "Caimento arejado e sofisticado com amarração na cintura",
    price: 139.90,
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=650&q=80",
    tag: "Novo"
  },
  {
    id: "praia-4",
    name: "Sunga Boxer Beachwear",
    category: "Moda Praia",
    detail: "Secagem ultra rápida, forro anatômico e cordão interno",
    price: 89.90,
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=650&q=80",
    tag: "Verão 2026"
  }
];

const WHATSAPP_PHONE = "5561982378130";

// Elementos do DOM
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
  return val.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

// Gera URL do WhatsApp para pedir um item
function getWaProductUrl(product) {
  const text = `Olá! Vi no catálogo da Mimo Íntimos e gostaria de informações sobre:\n*${product.name}* (${formatPrice(product.price)})\nCategoria: ${product.category}\nPodem me enviar cores e tamanhos disponíveis?`;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
}

// Renderização dos Produtos
function renderProducts() {
  const query = search.value.trim().toLowerCase();
  const filtered = products.filter((product) => {
    const matchesCategory = activeFilter === "Todos" || product.category === activeFilter;
    const matchesSearch = !query || `${product.name} ${product.detail} ${product.category}`.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  const visible = filtered.slice(0, visibleCount);

  grid.innerHTML = visible.map((product) => {
    const isFav = favorites.includes(product.id);
    return `
      <article class="product-card" data-id="${product.id}">
        <div class="product-image-wrap">
          <img src="${product.image}" alt="${product.name}" loading="lazy" />
          <span class="product-tag">${product.tag}</span>
          <button class="product-fav ${isFav ? 'is-fav' : ''}" type="button" data-id="${product.id}" aria-label="Favoritar ${product.name}">
            ${isFav ? '♥' : '♡'}
          </button>
        </div>
        <div class="product-info">
          <div class="product-meta">
            <span class="product-category">${product.category}</span>
          </div>
          <h3>${product.name}</h3>
          <p>${product.detail}</p>
          <div class="product-bottom">
            <div class="product-price">
              <small>Valor</small>
              <strong>${formatPrice(product.price)}</strong>
            </div>
            <a class="product-wa-btn" href="${getWaProductUrl(product)}" target="_blank" rel="noreferrer">
              <svg width="14" height="14" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              <span>Pedir</span>
            </a>
          </div>
        </div>
      </article>
    `;
  }).join("");

  count.textContent = `Mostrando ${visible.length} de ${filtered.length} produtos`;
  loadMoreBtn.hidden = visible.length >= filtered.length;
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

// Clique nas Categorias da barra superior para filtrar direto
categoryCards.forEach((card) => {
  card.addEventListener("click", () => {
    const cat = card.dataset.category;
    activeFilter = cat;
    visibleCount = 8;
    chips.forEach((item) => item.classList.toggle("active", item.dataset.filter === cat));
    renderProducts();
    const catalogEl = document.querySelector("#catalogo");
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Busca e Carregar Mais
search.addEventListener("input", () => {
  visibleCount = 8;
  renderProducts();
});

loadMoreBtn.addEventListener("click", () => {
  visibleCount += 4;
  renderProducts();
});

// Gerenciamento de Favoritos
function updateFavoritesUI() {
  localStorage.setItem("mimo_favs", JSON.stringify(favorites));
  favBadge.textContent = favorites.length;

  const favProducts = products.filter((p) => favorites.includes(p.id));
  drawerCount.textContent = `${favProducts.length} ${favProducts.length === 1 ? 'item salvo' : 'itens salvos'}`;

  if (favProducts.length === 0) {
    drawerItems.innerHTML = '<p class="drawer-empty">Você ainda não favoritou nenhuma peça. Clique no coração ♡ nos produtos para salvar seus favoritos!</p>';
    sendFavsWa.style.display = "none";
  } else {
    sendFavsWa.style.display = "inline-flex";
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

    // Formata mensagem para enviar todos os favoritos via WhatsApp
    const listText = favProducts.map((p) => `• ${p.name} (${formatPrice(p.price)})`).join("\n");
    const fullText = `Olá! Salvei os seguintes itens no catálogo da Mimo Íntimos e gostaria de consultar tamanhos e cores:\n\n${listText}\n\nComo podemos proceder?`;
    sendFavsWa.href = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(fullText)}`;
  }
}

// Toggle de Favoritar nos Cards
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

// Remover favorito a partir da Gaveta
drawerItems.addEventListener("click", (event) => {
  const removeBtn = event.target.closest(".drawer-item-remove");
  if (!removeBtn) return;
  const id = removeBtn.dataset.id;
  favorites = favorites.filter((favId) => favId !== id);
  updateFavoritesUI();
  renderProducts();
});

// Abrir / Fechar Gaveta de Favoritos
function toggleDrawer(open) {
  favDrawer.classList.toggle("open", open);
  drawerOverlay.classList.toggle("open", open);
  favDrawer.setAttribute("aria-hidden", String(!open));
}

favToggle.addEventListener("click", () => toggleDrawer(true));
drawerClose.addEventListener("click", () => toggleDrawer(false));
drawerOverlay.addEventListener("click", () => toggleDrawer(false));

// Menu Mobile
const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

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

// Inicialização
updateFavoritesUI();
renderProducts();
