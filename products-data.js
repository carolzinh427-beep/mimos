// Catálogo Base de Produtos - Mimo Íntimo (Asa Sul - Brasília)
const initialProducts = [
  // --- FEMININO ---
  {
    id: "fem-1",
    name: "Conjunto Rendado Sublime",
    category: "Feminino",
    detail: "Renda antialérgica com suporte suave e caimento impecável",
    price: 129.90,
    image: "images/conjunto-rendado.jpg",
    tag: "Destaque",
    colors: "Preto, Branco, Vinho",
    sizes: "P, M, G, GG"
  },
  {
    id: "fem-2",
    name: "Camisola Charlize em Liganete",
    category: "Feminino",
    detail: "Toque de seda geladinho com renda delicada no decote",
    price: 139.90,
    image: "images/camisola-charlize.jpg",
    tag: "Queridinho",
    colors: "Preto, Rosê, Azul Marinho",
    sizes: "P, M, G, GG"
  },
  {
    id: "fem-3",
    name: "Calça Legging Conforto Sem Costura",
    category: "Feminino",
    detail: "Cintura alta modeladora, compressão ideal e toque macio aveludado",
    price: 119.90,
    image: "images/calca-legging.jpg",
    tag: "Novo",
    colors: "Preto, Cinza Chumbo",
    sizes: "P, M, G, GG"
  },
  {
    id: "fem-4",
    name: "Shortdoll Pérola em Cetim",
    category: "Feminino",
    detail: "Alças reguláveis, leveza e acabamento acetinado de alto padrão",
    price: 109.90,
    image: "images/shortdoll-cetim.jpg",
    tag: "Luxo",
    colors: "Pérola, Preto, Verde Esmeralda",
    sizes: "P, M, G, GG"
  },
  {
    id: "fem-5",
    name: "Sutiã Comfort Sem Costura",
    category: "Feminino",
    detail: "Liberdade sem aros e máxima sustentação anatômica",
    price: 79.90,
    image: "images/sutia-sem-costura.jpg",
    tag: "Essencial",
    colors: "Nude, Preto, Branco",
    sizes: "P, M, G, GG"
  },
  {
    id: "fem-6",
    name: "Robe Luxo em Viscose com Renda",
    category: "Feminino",
    detail: "Manga flare fluída com faixa para amarração delicada",
    price: 169.90,
    image: "images/robe-luxo.jpg",
    tag: "Exclusivo",
    colors: "Preto, Branco, Rosê",
    sizes: "P, M, G, GG"
  },
  {
    id: "fem-7",
    name: "Kit 3 Calcinhas Invisíveis Corte a Laser",
    category: "Feminino",
    detail: "Não marca sob vestidos e calças finas, toque segunda pele",
    price: 74.90,
    image: "images/kit-calcinhas.jpg",
    tag: "Mais Vendido",
    colors: "Sortidas, Preto, Nude",
    sizes: "P, M, G, GG"
  },

  // --- MASCULINO ---
  {
    id: "masc-1",
    name: "Kit 3 Cuecas Boxer Cotton Premium",
    category: "Masculino",
    detail: "Algodão com elastano, forro duplo e elástico macio",
    price: 89.90,
    image: "images/cuecas-boxer.jpg",
    tag: "Mais Vendido",
    colors: "Preto, Cinza, Marinho",
    sizes: "P, M, G, GG"
  },
  {
    id: "masc-2",
    name: "Pijama Americano Masculino Curto",
    category: "Masculino",
    detail: "Gola colarinho com botões frontais e cós elástico com cordão",
    price: 139.90,
    image: "images/pijama-americano.jpg",
    tag: "Novo",
    colors: "Azul Marinho, Cinza Mescla",
    sizes: "P, M, G, GG"
  },
  {
    id: "masc-3",
    name: "Pijama Longo Classic Confort",
    category: "Masculino",
    detail: "Algodão premium respirável, caimento solto e térmico",
    price: 159.90,
    image: "images/pijama-longo-masculino.jpg",
    tag: "Destaque",
    colors: "Chumbo, Preto",
    sizes: "P, M, G, GG"
  },
  {
    id: "masc-4",
    name: "Camiseta Loungewear Conforto",
    category: "Masculino",
    detail: "Perfeita para relaxar em casa com elegância e frescor",
    price: 79.90,
    image: "images/camiseta-loungewear.jpg",
    tag: "Básico",
    colors: "Branco, Preto, Mescla",
    sizes: "P, M, G, GG"
  },

  // --- INFANTIL ---
  {
    id: "inf-1",
    name: "Pijama Infantil Algodão Doce",
    category: "Infantil",
    detail: "100% algodão hipoalergênico com estampa delicada",
    price: 79.90,
    image: "images/pijama-infantil.jpg",
    tag: "Destaque",
    colors: "Rosa Estrelas, Azul Céu",
    sizes: "2, 4, 6, 8, 10, 12"
  },
  {
    id: "inf-2",
    name: "Shortdoll Juvenil Estrelas",
    category: "Infantil",
    detail: "Tecido levinho, super macio para noites de descanso feliz",
    price: 69.90,
    image: "images/shortdoll-juvenil.jpg",
    tag: "Queridinho",
    colors: "Lilás, Amarelo Claro",
    sizes: "10, 12, 14, 16"
  },
  {
    id: "inf-3",
    name: "Macacão Pijama Plush Conforto",
    category: "Infantil",
    detail: "Proteção térmica aconchegante com zíper protegido",
    price: 94.90,
    image: "images/macacao-infantil.jpg",
    tag: "Novo",
    colors: "Cinza Coelhinho, Azul Nuvem",
    sizes: "2, 4, 6, 8"
  },
  {
    id: "inf-4",
    name: "Kit 4 Peças Íntimas Kids",
    category: "Infantil",
    detail: "Elásticos delicados que não marcam e garantem liberdade",
    price: 59.90,
    image: "images/pecas-intimas-kids.jpg",
    tag: "Essencial",
    colors: "Estampas Sortidas",
    sizes: "4, 6, 8, 10"
  },

  // --- MODA PRAIA ---
  {
    id: "praia-1",
    name: "Biquíni Cortininha Textura Canelada",
    category: "Moda Praia",
    detail: "Tecido texturizado com proteção solar UV50+ e forro duplo",
    price: 149.90,
    image: "images/biquini-cortininha.jpg",
    tag: "Destaque",
    colors: "Terracota, Verde Oliva, Preto",
    sizes: "P, M, G, GG"
  },
  {
    id: "praia-2",
    name: "Maiô Decote V Transpassado",
    category: "Moda Praia",
    detail: "Efeito modelador elegante que também pode ser usado como body",
    price: 179.90,
    image: "images/maio-transpassado.jpg",
    tag: "Exclusivo",
    colors: "Preto, Vinho Imperial",
    sizes: "P, M, G, GG"
  },
  {
    id: "praia-3",
    name: "Saída de Praia em Laise Fluída",
    category: "Moda Praia",
    detail: "Caimento arejado e sofisticado com amarração na cintura",
    price: 139.90,
    image: "images/saida-praia.jpg",
    tag: "Novo",
    colors: "Branco Off-White, Bege Areia",
    sizes: "Único (Veste 36 ao 44)"
  },
  {
    id: "praia-4",
    name: "Sunga Boxer Beachwear",
    category: "Moda Praia",
    detail: "Secagem ultra rápida, forro anatômico e cordão interno",
    price: 89.90,
    image: "images/sunga-boxer.jpg",
    tag: "Verão 2026",
    colors: "Preto, Azul Petróleo, Chumbo",
    sizes: "P, M, G, GG"
  }
];

// Disponibiliza globalmente tanto no navegador quanto em Node/módulos
if (typeof window !== "undefined") {
  window.defaultProducts = initialProducts;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = initialProducts;
}

