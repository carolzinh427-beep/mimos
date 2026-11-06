const products = [
  { name: "Camisola Charlize em Liganete", category: "Lingerie", detail: "Leveza e elegância para todos os dias", tone: ["#d7b2df", "#724383"], tag: "Destaque" },
  { name: "Shortdoll Pérola em Liganete", category: "Pijamas", detail: "Conforto com toque delicado", tone: ["#f4d9dd", "#c687a7"], tag: "Queridinho" },
  { name: "Pijama Longo em Viscoflex", category: "Pijamas", detail: "Maciez para o seu descanso", tone: ["#cdd7e3", "#71819a"], tag: "Novo" },
  { name: "Top Adulto Sem Bojo", category: "Lingerie", detail: "Liberdade e conforto sem costura", tone: ["#e5c8b6", "#aa6e56"], tag: "Essencial" },
  { name: "Kaftan Fechado em Ligante", category: "Pijamas", detail: "Uma peça leve para relaxar", tone: ["#c9dce9", "#7897a8"], tag: "Novo" },
  { name: "Calça Legging Lupo Basic", category: "Fitness", detail: "Tecnologia para acompanhar você", tone: ["#d6cde0", "#6c557e"], tag: "Versátil" },
  { name: "Pijama Longo Masculino", category: "Masculino", detail: "Conforto e praticidade", tone: ["#c8d3d5", "#536c72"], tag: "Destaque" },
  { name: "Camisola Pérola em Liganete", category: "Lingerie", detail: "Delicadeza que veste bem", tone: ["#ecd2c2", "#b8796c"], tag: "Novo" },
  { name: "Shortdoll Lovely em Liganete", category: "Pijamas", detail: "Seu momento de cuidado", tone: ["#dfc5dc", "#82527c"], tag: "Queridinho" },
  { name: "Bermuda Super Conforto", category: "Lingerie", detail: "Modelagem e segurança", tone: ["#e6d8d1", "#a48777"], tag: "Essencial" },
  { name: "Pijama Americano com Short", category: "Pijamas", detail: "Clássico, leve e confortável", tone: ["#d3d9c8", "#728269"], tag: "Destaque" },
  { name: "Camiseta Básica Masculina", category: "Masculino", detail: "Básico para todos os momentos", tone: ["#d9d5d0", "#77716d"], tag: "Essencial" }
];

const grid = document.querySelector("#product-grid");
const count = document.querySelector("#result-count");
const search = document.querySelector("#search");
const chips = [...document.querySelectorAll(".chip")];
let activeFilter = "Todos";
let visibleCount = 8;

function renderProducts() {
  const query = search.value.trim().toLowerCase();
  const filtered = products.filter((product) => {
    const matchesCategory = activeFilter === "Todos" || product.category === activeFilter;
    const matchesSearch = !query || `${product.name} ${product.detail} ${product.category}`.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });
  const visible = filtered.slice(0, visibleCount);
  grid.innerHTML = visible.map((product) => `
    <article class="product-card">
      <div class="product-image" style="--card-light:${product.tone[0]};--card-dark:${product.tone[1]}">
        <span class="product-tag">${product.tag}</span><button class="product-fav" type="button" aria-label="Favoritar ${product.name}">♡</button>
      </div>
      <div class="product-info"><h3>${product.name}</h3><p>${product.detail}</p></div>
    </article>`).join("");
  count.textContent = `Mostrando ${visible.length} de ${filtered.length} produtos`;
  document.querySelector("#load-more").hidden = visible.length >= filtered.length;
}

chips.forEach((chip) => chip.addEventListener("click", () => {
  activeFilter = chip.dataset.filter;
  visibleCount = 8;
  chips.forEach((item) => item.classList.toggle("active", item === chip));
  renderProducts();
}));

search.addEventListener("input", () => { visibleCount = 8; renderProducts(); });
document.querySelector("#load-more").addEventListener("click", () => { visibleCount += 4; renderProducts(); });
grid.addEventListener("click", (event) => {
  const button = event.target.closest(".product-fav");
  if (button) button.textContent = button.textContent === "♡" ? "♥" : "♡";
});

const toggle = document.querySelector(".menu-toggle");
toggle.addEventListener("click", () => {
  const menu = document.querySelector(".mobile-menu");
  const open = menu.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});
document.querySelectorAll(".mobile-menu a").forEach((link) => link.addEventListener("click", () => {
  document.querySelector(".mobile-menu").classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");
}));
renderProducts();
