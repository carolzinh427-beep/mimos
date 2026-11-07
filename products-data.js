// Catálogo Completo de Produtos - Mimo Íntimo (Asa Sul - Brasília)
// Inclui Coleção Oficial Lupo, Loba e Lobinha nas categorias respectivas
const initialProducts = [
  // =================================================================
  // 1. LUPO & MULTIMARCAS MASCULINO (Adulto)
  // =================================================================
  {
    id: "lupo-masc-slip",
    name: "Cueca Slip Algodão Lupo",
    category: "Masculino",
    brand: "Lupo",
    detail: "Algodão nobre macio e respirável com cós elástico personalizado Lupo",
    price: 30.00,
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=650&q=80",
    tag: "Lupo Original",
    colors: "Branco, Preto, Cinza Mescla, Azul Marinho",
    sizes: "P, M, G, GG"
  },
  {
    id: "lupo-masc-boxer-alg",
    name: "Cueca Boxer Algodão Lupo",
    category: "Masculino",
    brand: "Lupo",
    detail: "Algodão com elastano anatômico, forro duplo frontal e elástico de alta durabilidade",
    price: 40.00,
    image: "images/cuecas-boxer.jpg",
    tag: "Mais Vendido",
    colors: "Preto, Grafite, Azul Marinho, Vinho",
    sizes: "P, M, G, GG"
  },
  {
    id: "lupo-masc-boxer-seamless",
    name: "Cueca Boxer Sem Costura Lupo",
    category: "Masculino",
    brand: "Lupo",
    detail: "Tecnologia Seamless antimicrobiana Sanitized®, não marca na calça e evita atrito",
    price: 55.00,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=650&q=80",
    tag: "Seamless",
    colors: "Preto, Chumbo, Branco",
    sizes: "P, M, G, GG"
  },
  {
    id: "lupo-masc-boxer-microfibra",
    name: "Cueca Boxer Microfibra Lupo",
    category: "Masculino",
    brand: "Lupo",
    detail: "Microfibra de secagem rápida com toque sedoso e ventilação estratégica para o dia todo",
    price: 50.00,
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=650&q=80",
    tag: "Secagem Rápida",
    colors: "Preto, Azul Royal, Cinza",
    sizes: "P, M, G, GG"
  },
  {
    id: "lupo-masc-bambu",
    name: "Cueca Fio de Bambu Lupo",
    category: "Masculino",
    brand: "Lupo",
    detail: "Fibra natural de bambu antibacteriana e termorreguladora, toque ultra macio e fresco",
    price: 55.00,
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=650&q=80",
    tag: "Ecológica",
    colors: "Verde Oliva, Preto, Areia",
    sizes: "P, M, G, GG"
  },
  {
    id: "lupo-masc-modal",
    name: "Cueca Micromodal Lupo",
    category: "Masculino",
    brand: "Lupo",
    detail: "Tecido micromodal nobre de toque aveludado, ajuste anatômico perfeito sem enrolar na perna",
    price: 50.00,
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=650&q=80",
    tag: "Toque Macio",
    colors: "Azul Marinho, Preto, Cinza",
    sizes: "P, M, G, GG"
  },
  {
    id: "lupo-masc-sunga",
    name: "Cueca Sunga Lupo",
    category: "Masculino",
    brand: "Lupo",
    detail: "Modelagem intermediária entre slip e boxer, laterais confortáveis e sustentação ideal",
    price: 40.00,
    image: "images/sunga-boxer.jpg",
    tag: "Conforto",
    colors: "Preto, Branco, Marinho",
    sizes: "P, M, G, GG"
  },
  {
    id: "lupo-masc-samba",
    name: "Samba-Canção Lupo Conforto",
    category: "Masculino",
    brand: "Lupo",
    detail: "100% algodão soltinho e arejado, ideal para relaxar e dormir com frescor",
    price: 55.00,
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=650&q=80",
    tag: "Relax",
    colors: "Xadrez Azul, Preto, Listrado Cinza",
    sizes: "P, M, G, GG"
  },
  {
    id: "lupo-masc-kit2-cuecas",
    name: "Kit 2 Cuecas Boxer Lupo",
    category: "Masculino",
    brand: "Lupo",
    detail: "Kit com duas cuecas boxer clássicas Lupo em algodão stretch anatômico",
    price: 75.00,
    image: "images/cuecas-boxer.jpg",
    tag: "Kit 2 Peças",
    colors: "Preto + Marinho, Cinza + Preto",
    sizes: "P, M, G, GG"
  },
  {
    id: "lupo-masc-kit3-cuecas",
    name: "Kit 3 Cuecas Boxer Lupo",
    category: "Masculino",
    brand: "Lupo",
    detail: "Trio essencial de cuecas boxer em algodão macio com elástico firme de alta durabilidade",
    price: 110.00,
    image: "images/cuecas-boxer.jpg",
    tag: "Super Kit",
    colors: "Preto, Cinza Mescla e Azul Marinho",
    sizes: "P, M, G, GG"
  },
  {
    id: "lupo-masc-meia-social",
    name: "Meia Social Fio Escócia Lupo",
    category: "Masculino",
    brand: "Lupo",
    detail: "Fio escócia mercerizado com brilho sutil, punho macio que não aperta a panturrilha",
    price: 20.00,
    image: "https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=650&q=80",
    tag: "Social",
    colors: "Preto, Grafite, Marinho",
    sizes: "39 a 43"
  },
  {
    id: "lupo-masc-meia-casual",
    name: "Meia Casual Algodão Lupo",
    category: "Masculino",
    brand: "Lupo",
    detail: "Algodão penteado com cano médio canelado, ideal para o dia a dia e tênis",
    price: 20.00,
    image: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=650&q=80",
    tag: "Dia a Dia",
    colors: "Branco, Preto, Cinza Mescla",
    sizes: "39 a 43"
  },
  {
    id: "lupo-masc-meia-sport",
    name: "Meia Esportiva Lupo Dry",
    category: "Masculino",
    brand: "Lupo",
    detail: "Tecnologia Dry respirável com suporte no arco do pé e calcanhar verdadeiro acolchoado",
    price: 25.00,
    image: "https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=650&q=80",
    tag: "Performance",
    colors: "Branco, Preto",
    sizes: "39 a 43"
  },
  {
    id: "lupo-masc-kit3-meias",
    name: "Kit 3 Pares de Meias Lupo",
    category: "Masculino",
    brand: "Lupo",
    detail: "Trio de meias cano médio em algodão com calcanhar verdadeiro e máxima durabilidade",
    price: 40.00,
    image: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=650&q=80",
    tag: "Kit 3 Pares",
    colors: "Preto, Branco, Cinza",
    sizes: "39 a 43"
  },
  {
    id: "lupo-masc-camiseta",
    name: "Camiseta Básica Algodão Lupo",
    category: "Masculino",
    brand: "Lupo",
    detail: "100% algodão penteado de fibra longa, gola redonda reforçada e toque extremamente macio",
    price: 65.00,
    image: "images/camiseta-loungewear.jpg",
    tag: "Básico Nobre",
    colors: "Branco, Preto, Cinza Mescla",
    sizes: "P, M, G, GG"
  },
  {
    id: "lupo-masc-pijama-curto",
    name: "Pijama Masculino Curto Lupo",
    category: "Masculino",
    brand: "Lupo",
    detail: "Camiseta manga curta e bermuda leve com cós elástico e cordão, frescor térmico",
    price: 140.00,
    image: "images/pijama-americano.jpg",
    tag: "Conforto",
    colors: "Azul Marinho, Cinza Mescla",
    sizes: "P, M, G, GG"
  },
  {
    id: "lupo-masc-pijama-longo",
    name: "Pijama Masculino Longo Lupo",
    category: "Masculino",
    brand: "Lupo",
    detail: "Conjunto manga longa e calça em algodão térmico macio para noites amenas com elegância",
    price: 180.00,
    image: "images/pijama-longo-masculino.jpg",
    tag: "Inverno",
    colors: "Azul Marinho, Cinza Chumbo",
    sizes: "P, M, G, GG"
  },

  // =================================================================
  // 2. LOBA & LUPO FEMININO (Adulto)
  // =================================================================
  {
    id: "loba-fem-biquini",
    name: "Calcinha Biquíni Loba Lupo",
    category: "Feminino",
    brand: "Loba",
    detail: "Modelagem biquíni tradicional em microfibra macia com forro 100% algodão hipoalergênico",
    price: 35.00,
    image: "images/kit-calcinhas.jpg",
    tag: "Loba",
    colors: "Nude, Preto, Branco, Vinho",
    sizes: "P, M, G, GG"
  },
  {
    id: "loba-fem-fio",
    name: "Calcinha Fio Dental Loba Lupo",
    category: "Feminino",
    brand: "Loba",
    detail: "Corte anatômico confortável sem costuras grossas, não marca sob a roupa",
    price: 35.00,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=650&q=80",
    tag: "Loba",
    colors: "Preto, Nude, Branco, Rosê",
    sizes: "P, M, G, GG"
  },
  {
    id: "loba-fem-alta",
    name: "Calcinha Cintura Alta Loba Lupo",
    category: "Feminino",
    brand: "Loba",
    detail: "Cós alto modelador que abraça a silhueta com compressão moderada e conforto",
    price: 45.00,
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=650&q=80",
    tag: "Loba",
    colors: "Nude, Preto, Chocolate",
    sizes: "P, M, G, GG"
  },
  {
    id: "loba-fem-seamless",
    name: "Calcinha Sem Costura Loba Lupo",
    category: "Feminino",
    brand: "Loba",
    detail: "Tecnologia Seamless que não marca sob vestidos ou calças de alfaiataria, toque segunda pele",
    price: 50.00,
    image: "images/kit-calcinhas.jpg",
    tag: "Seamless Loba",
    colors: "Nude, Preto, Branco",
    sizes: "P, M, G, GG"
  },
  {
    id: "loba-fem-modeladora",
    name: "Calcinha Modeladora Loba Slim",
    category: "Feminino",
    brand: "Loba",
    detail: "Reduz medidas do abdômen e modela a cintura com faixa de silicone que não enrola",
    price: 60.00,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=650&q=80",
    tag: "Modeladora",
    colors: "Nude, Preto",
    sizes: "P, M, G, GG"
  },
  {
    id: "loba-fem-kit3-calc",
    name: "Kit 3 Calcinhas Loba Lupo",
    category: "Feminino",
    brand: "Loba",
    detail: "Trio de calcinhas em microfibra macia e forro de algodão para a rotina diária",
    price: 75.00,
    image: "images/kit-calcinhas.jpg",
    tag: "Kit 3 Peças",
    colors: "Nude, Preto e Branco",
    sizes: "P, M, G, GG"
  },
  {
    id: "loba-fem-sutia-basico",
    name: "Sutiã Básico Loba Lupo",
    category: "Feminino",
    brand: "Loba",
    detail: "Sem aro, com recorte anatômico que sustenta com total leveza e liberdade de movimentos",
    price: 55.00,
    image: "images/sutia-sem-costura.jpg",
    tag: "Loba",
    colors: "Nude, Preto, Branco",
    sizes: "40, 42, 44, 46"
  },
  {
    id: "loba-fem-sutia-seamless",
    name: "Sutiã Sem Costura Loba Lupo",
    category: "Feminino",
    brand: "Loba",
    detail: "Tecnologia Seamless sem aros nem fecho traseiro, alças confortáveis e decote suave",
    price: 65.00,
    image: "images/sutia-sem-costura.jpg",
    tag: "Seamless",
    colors: "Nude, Preto, Branco",
    sizes: "40, 42, 44, 46"
  },
  {
    id: "loba-fem-sutia-bojo",
    name: "Sutiã com Bojo Loba Lupo",
    category: "Feminino",
    brand: "Loba",
    detail: "Bojo macio anatômico com aro flexível, valoriza o decote com conforto absoluto e elegância",
    price: 80.00,
    image: "images/conjunto-rendado.jpg",
    tag: "Com Bojo",
    colors: "Nude, Preto, Vinho",
    sizes: "40, 42, 44, 46"
  },
  {
    id: "lupo-fem-top-sport",
    name: "Top Feminino Lupo Sport",
    category: "Feminino",
    brand: "Lupo",
    detail: "Top nadador com sustentação média para treinos, yoga e caminhadas com tecido respirável",
    price: 65.00,
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=650&q=80",
    tag: "Lupo Sport",
    colors: "Preto, Cinza Mescla, Vinho",
    sizes: "P, M, G, GG"
  },
  {
    id: "loba-fem-body",
    name: "Body Feminino Loba Lupo",
    category: "Feminino",
    brand: "Loba",
    detail: "Decote elegante que modela suavemente o tronco, perfeito para compor looks casuais e noite",
    price: 120.00,
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=650&q=80",
    tag: "Loba",
    colors: "Preto, Nude, Branco",
    sizes: "P, M, G, GG"
  },
  {
    id: "lupo-fem-camiseta",
    name: "Camiseta Feminina Lupo Dry",
    category: "Feminino",
    brand: "Lupo",
    detail: "Malha esportiva respirável com caimento levemente acinturado e secagem rápida",
    price: 70.00,
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=650&q=80",
    tag: "Dry Fit",
    colors: "Branco, Preto, Rosa Claro",
    sizes: "P, M, G, GG"
  },
  {
    id: "lupo-fem-legging",
    name: "Legging Feminina Lupo Sport",
    category: "Feminino",
    brand: "Lupo",
    detail: "Cós alto duplo anatômico, zero transparência e alta compressão para atividades físicas",
    price: 110.00,
    image: "images/calca-legging.jpg",
    tag: "Alta Compressão",
    colors: "Preto, Chumbo, Azul Marinho",
    sizes: "P, M, G, GG"
  },
  {
    id: "lupo-fem-bermuda",
    name: "Bermuda Fitness Lupo",
    category: "Feminino",
    brand: "Lupo",
    detail: "Comprimento meia-coxa anatômico que não sobe durante os treinos, toque aveludado",
    price: 85.00,
    image: "https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?auto=format&fit=crop&w=650&q=80",
    tag: "Fitness",
    colors: "Preto, Mescla Escuro",
    sizes: "P, M, G, GG"
  },
  {
    id: "lupo-fem-short",
    name: "Short Fitness Lupo",
    category: "Feminino",
    brand: "Lupo",
    detail: "Leveza e cós largo modelador para treinos em dias quentes com liberdade",
    price: 80.00,
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=650&q=80",
    tag: "Fitness",
    colors: "Preto, Vinho, Azul Petróleo",
    sizes: "P, M, G, GG"
  },
  {
    id: "lupo-fem-pijama-curto",
    name: "Pijama Curto Feminino Lupo",
    category: "Feminino",
    brand: "Lupo",
    detail: "Blusa manga curta e shorts em viscolycra fresquinha e macia para relaxar",
    price: 120.00,
    image: "images/shortdoll-cetim.jpg",
    tag: "Conforto",
    colors: "Rosê, Cinza Mescla, Azul Claro",
    sizes: "P, M, G, GG"
  },
  {
    id: "lupo-fem-pijama-longo",
    name: "Pijama Longo Feminino Lupo",
    category: "Feminino",
    brand: "Lupo",
    detail: "Calça e blusa manga longa em algodão nobre com toque macio e acabamento refinado",
    price: 160.00,
    image: "images/camisola-charlize.jpg",
    tag: "Elegance",
    colors: "Azul Marinho, Cinza Mescla",
    sizes: "P, M, G, GG"
  },
  {
    id: "loba-fem-meia-calca-fina",
    name: "Meia-Calça Loba Clássica Fina (Fio 15)",
    category: "Feminino",
    brand: "Loba",
    detail: "Fio 15 translúcido elegante com ponteira invisível e toque acetinado clássico",
    price: 35.00,
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=650&q=80",
    tag: "Clássica Loba",
    colors: "Preto, Natural da Pele, Fumé",
    sizes: "P, M, G, GG"
  },
  {
    id: "loba-fem-meia-calca-termica",
    name: "Meia-Calça Térmica Loba (Fio 80)",
    category: "Feminino",
    brand: "Loba",
    detail: "Meia opaca aveludada super quentinha para dias frios, caimento estruturado e confortável",
    price: 55.00,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=650&q=80",
    tag: "Fio 80 Opaco",
    colors: "Preto, Café, Chumbo",
    sizes: "P, M, G, GG"
  },

  // =================================================================
  // 3. LUPO INFANTIL MASCULINO (Meninos)
  // =================================================================
  {
    id: "lupo-inf-slip",
    name: "Cueca Slip Infantil Lupo",
    category: "Infantil",
    brand: "Lupo",
    detail: "100% algodão hipoalergênico macio, elástico delicado que não aperta a barriguinha",
    price: 20.00,
    image: "images/pecas-intimas-kids.jpg",
    tag: "Infantil",
    colors: "Azul, Cinza, Branco",
    sizes: "2, 4, 6, 8, 10, 12"
  },
  {
    id: "lupo-inf-boxer",
    name: "Cueca Boxer Infantil Lupo",
    category: "Infantil",
    brand: "Lupo",
    detail: "Algodão com elastano que dá total liberdade de movimento para correr e brincar",
    price: 30.00,
    image: "images/pecas-intimas-kids.jpg",
    tag: "Mais Vendido Kids",
    colors: "Preto, Marinho, Cinza",
    sizes: "2, 4, 6, 8, 10, 12, 14"
  },
  {
    id: "lupo-inf-boxer-seamless",
    name: "Cueca Boxer Sem Costura Infantil Lupo",
    category: "Infantil",
    brand: "Lupo",
    detail: "Seamless anatômica que não marca nem pinica a pele sensível das crianças",
    price: 38.00,
    image: "images/pecas-intimas-kids.jpg",
    tag: "Seamless Kids",
    colors: "Azul Marinho, Preto, Chumbo",
    sizes: "P, M, G (Infantil)"
  },
  {
    id: "lupo-inf-estampada",
    name: "Cueca Estampada Infantil Lupo",
    category: "Infantil",
    brand: "Lupo",
    detail: "Estampas divertidas de dinossauros e astronautas em algodão antialérgico",
    price: 30.00,
    image: "images/pijama-infantil.jpg",
    tag: "Divertida",
    colors: "Estampas Sortidas",
    sizes: "4, 6, 8, 10, 12"
  },
  {
    id: "lupo-inf-kit2-cuecas",
    name: "Kit 2 Cuecas Boxer Kids Lupo",
    category: "Infantil",
    brand: "Lupo",
    detail: "Duas cuecas boxer em algodão macio com elástico confortável para os meninos",
    price: 50.00,
    image: "images/pecas-intimas-kids.jpg",
    tag: "Kit 2 Peças",
    colors: "Marinho + Cinza",
    sizes: "4, 6, 8, 10, 12"
  },
  {
    id: "lupo-inf-kit3-cuecas",
    name: "Kit 3 Cuecas Infantil Lupo",
    category: "Infantil",
    brand: "Lupo",
    detail: "Trio econômico de cuecas infantis em algodão resistente a lavagens frequentes",
    price: 65.00,
    image: "images/pecas-intimas-kids.jpg",
    tag: "Kit 3 Peças",
    colors: "Preto, Azul e Cinza",
    sizes: "4, 6, 8, 10, 12"
  },
  {
    id: "lupo-inf-meia-curta",
    name: "Meia Infantil Cano Curto Lupo",
    category: "Infantil",
    brand: "Lupo",
    detail: "Algodão respirável com punho macio para usar com tênis escolar",
    price: 15.00,
    image: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=650&q=80",
    tag: "Escolar",
    colors: "Branco, Preto, Cinza",
    sizes: "24 a 27, 28 a 31, 32 a 35"
  },
  {
    id: "lupo-inf-meia-media",
    name: "Meia Infantil Cano Médio Lupo",
    category: "Infantil",
    brand: "Lupo",
    detail: "Cano canelado clássico com calcanhar verdadeiro que não escorrega no tênis",
    price: 22.00,
    image: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=650&q=80",
    tag: "Kids",
    colors: "Branco, Marinho, Cinza",
    sizes: "24 a 27, 28 a 31, 32 a 35"
  },
  {
    id: "lupo-inf-meia-longa",
    name: "Meia Infantil Cano Longo Lupo",
    category: "Infantil",
    brand: "Lupo",
    detail: "Proteção térmica até a canela para dias mais frios e brincadeiras ao ar livre",
    price: 25.00,
    image: "https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=650&q=80",
    tag: "Cano Alto",
    colors: "Preto, Branco, Listrada",
    sizes: "28 a 31, 32 a 35"
  },
  {
    id: "lupo-inf-meia-antiderrapante",
    name: "Meia Antiderrapante Infantil Lupo",
    category: "Infantil",
    brand: "Lupo",
    detail: "Solado com pontinhos de silicone antiderrapantes para brincar em piso liso com segurança",
    price: 30.00,
    image: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=650&q=80",
    tag: "Antiderrapante",
    colors: "Azul, Cinza, Verde",
    sizes: "21 a 24, 25 a 28, 29 a 32"
  },
  {
    id: "lupo-inf-kit3-meias",
    name: "Kit 3 Pares de Meias Infantil Lupo",
    category: "Infantil",
    brand: "Lupo",
    detail: "Kit prático com 3 pares de meias macias de alta durabilidade para a rotina",
    price: 42.00,
    image: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=650&q=80",
    tag: "Kit 3 Pares",
    colors: "Sortidas ou Brancas",
    sizes: "24 a 27, 28 a 31, 32 a 35"
  },
  {
    id: "lupo-inf-kit6-meias",
    name: "Kit 6 Pares de Meias Infantil Lupo",
    category: "Infantil",
    brand: "Lupo",
    detail: "Super pacote de meias para a semana inteira de escola e passeios infantis",
    price: 75.00,
    image: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=650&q=80",
    tag: "Super Kit 6",
    colors: "6 Pares Sortidos",
    sizes: "24 a 27, 28 a 31, 32 a 35"
  },
  {
    id: "lupo-inf-pijama-curto",
    name: "Pijama Curto Infantil Menino Lupo",
    category: "Infantil",
    brand: "Lupo",
    detail: "Conjunto camiseta e bermudinha em algodão 100% fresco e macio com estampa sutil",
    price: 70.00,
    image: "images/pijama-infantil.jpg",
    tag: "Kids",
    colors: "Azul com Estampa, Mescla",
    sizes: "2, 4, 6, 8, 10, 12"
  },
  {
    id: "lupo-inf-pijama-longo",
    name: "Pijama Longo Infantil Menino Lupo",
    category: "Infantil",
    brand: "Lupo",
    detail: "Blusa manga longa e calça quentinha para noites aconchegantes e sono tranquilo",
    price: 95.00,
    image: "images/macacao-infantil.jpg",
    tag: "Aconchegante",
    colors: "Marinho, Cinza",
    sizes: "4, 6, 8, 10, 12"
  },
  {
    id: "lupo-inf-sunga",
    name: "Sunga Infantil Boxer Lupo Beach",
    category: "Infantil",
    brand: "Lupo",
    detail: "Proteção solar UV50+ com secagem rápida, forro anatômico e cordão interno ajustável",
    price: 55.00,
    image: "images/sunga-boxer.jpg",
    tag: "Praia & Piscina",
    colors: "Preto, Azul Royal, Estampada",
    sizes: "2, 4, 6, 8, 10, 12"
  },

  // =================================================================
  // 4. LOBINHA INFANTIL FEMININO (Meninas)
  // =================================================================
  {
    id: "lobinha-meia-calca",
    name: "Meia-Calça Lobinha Meninas Lupo",
    category: "Infantil",
    brand: "Lobinha",
    detail: "Fio 40 opaco e resistente, maciez e caimento perfeito com vestidos escolares e festas",
    price: 32.00,
    image: "images/shortdoll-juvenil.jpg",
    tag: "Lobinha",
    colors: "Branco, Rosa, Preto",
    sizes: "P, M, G, GG (Infantil)"
  },
  {
    id: "lobinha-kit3-calc",
    name: "Kit 3 Calcinhas Lobinha Algodão",
    category: "Infantil",
    brand: "Lobinha",
    detail: "Calcinhas 100% algodão antialérgico com estampas delicadas e elástico ultra suave",
    price: 48.00,
    image: "images/pecas-intimas-kids.jpg",
    tag: "Lobinha",
    colors: "Estampas Delicadas",
    sizes: "2, 4, 6, 8, 10, 12"
  },
  {
    id: "lobinha-legging",
    name: "Legging Infantil Lobinha Lupo",
    category: "Infantil",
    brand: "Lobinha",
    detail: "Toque aveludado sem costura, conforto total para brincadeiras, balé e rotina",
    price: 55.00,
    image: "images/shortdoll-juvenil.jpg",
    tag: "Lobinha",
    colors: "Preto, Rosa Bebê, Mescla",
    sizes: "4, 6, 8, 10, 12"
  },
  {
    id: "lobinha-kit3-meias",
    name: "Kit 3 Pares Meias Lobinha Lupo",
    category: "Infantil",
    brand: "Lobinha",
    detail: "Trio de meias delicadas com calcanhar verdadeiro e punho macio que não aperta",
    price: 38.00,
    image: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=650&q=80",
    tag: "Lobinha",
    colors: "Branco, Rosa e Lilás",
    sizes: "24 a 27, 28 a 31, 32 a 35"
  },

  // =================================================================
  // 5. COLEÇÃO MIMO ÍNTIMO BOUTIQUE (Existente)
  // =================================================================
  {
    id: "fem-1",
    name: "Conjunto Rendado Sublime",
    category: "Feminino",
    brand: "Mimo Íntimo",
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
    brand: "Mimo Íntimo",
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
    brand: "Mimo Íntimo",
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
    brand: "Mimo Íntimo",
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
    brand: "Mimo Íntimo",
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
    brand: "Mimo Íntimo",
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
    brand: "Mimo Íntimo",
    detail: "Não marca sob vestidos e calças finas, toque segunda pele",
    price: 74.90,
    image: "images/kit-calcinhas.jpg",
    tag: "Mais Vendido",
    colors: "Sortidas, Preto, Nude",
    sizes: "P, M, G, GG"
  },
  {
    id: "praia-1",
    name: "Biquíni Cortininha Textura Canelada",
    category: "Moda Praia",
    brand: "Mimo Íntimo",
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
    brand: "Mimo Íntimo",
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
    brand: "Mimo Íntimo",
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
    brand: "Mimo Íntimo",
    detail: "Secagem ultra rápida, forro anatômico e cordão interno",
    price: 89.90,
    image: "images/sunga-boxer.jpg",
    tag: "Verão 2026",
    colors: "Preto, Azul Petróleo, Chumbo",
    sizes: "P, M, G, GG"
  }
];

// Disponibiliza globalmente
if (typeof window !== "undefined") {
  window.defaultProducts = initialProducts;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = initialProducts;
}
