const STORAGE_KEY = "minecraft_projects_status";

let items = [];

const RAW_LIST = `
[ ]  COMO MORAR EM UMA CRAFTING TABLE GIGANTE NO MINECRAFT!
[ ]  Minecraft: COMO CONSTRUIR UMA LOJA DA APPLE (APPLE STORE)
[ ]  Minecraft: CONSTRUINDO UMA CASA MODERNA 10
[ ]  Minecraft: COMO MORAR DENTRO DE UM VILLAGER DO MINECRAFT!
[ ]  Minecraft: COMO MORAR DENTRO DE UMA ÁRVORE DO MINECRAFT!
[ ]  Minecraft: CONSTRUINDO UMA CASA MODERNA 9
[ ]  Minecraft: COMO MORAR DENTRO DA LUA NO MINECRAFT!!!
[ ]  Minecraft: COMO FAZER UMA CASA DENTRO DE QUALQUER BLOCO DO MINECRAFT!
[ ]  Minecraft: COMO CONSTRUIR UMA CASA DE FIDGET SPINNER
[ ]  Minecraft: COMO CONSTRUIR UM BURGER KING
[ ]  Minecraft: COMO CONSTRUIR UM SUBWAY
[ ]  Minecraft: CONSTRUA UMA CASA NA ÁRVORE SIMPLES E FÁCIL!
[ ]  Minecraft: CONSTRUINDO A CASA DA MARCELINE (HORA DE AVENTURA/ADVENTURE TIME)
[ ]  Minecraft: CONSTRUINDO A CASA DO ASH KETCHUM (POKÉMON)
[ ]  Minecraft: CONSTRUINDO UMA CASA DENTRO DE UM ALIENÍGENA!
[ ]  Minecraft: COMO CONSTRUIR UMA INCRÍVEL CASA ENDERMAN!
[ ]  Minecraft: CONSTRUINDO UMA CASA COMPLETA E COMPACTA NA MONTANHA!
[ ]  Minecraft: CONSTRUA UMA CASA SUBTERRÂNEA COMPLETA NO SURVIVAL!
[ ]  Minecraft: CONSTRUINDO A TORRE DOS JOVENS TITÃNS (TEEN TITANS)
[ ]  Minecraft: CONSTRUINDO A TORRE DOS JOVENS TITÃNS EM AÇÃO (TEEN TITANS GO!)
[ ]  Minecraft: CONSTRUA UMA VILA COM TEMA DO TEMPLO OCEÂNICO!
[ ]  Minecraft: CONSTRUA UMA CASA BONITA EM 5 MINUTOS! (NO SURVIVAL) 4
[ ]  Minecraft: CONSTRUA UMA CASA NA MONTANHA EM 5 MINUTOS! (NO SURVIVAL)
[ ]  Minecraft: Construindo sua Primeira Casa Detalhada
[ ]  Minecraft: CONSTRUA UMA CASA BONITA EM 5 MINUTOS! (NO SURVIVAL) 3
[ ]  Minecraft: Construindo a Casa dos Robinsons (GUMBALL)
[ ]  Minecraft: Construindo a Casa de Praia do Steven Universe
[ ]  Minecraft: CONSTRUA UMA CASA MODERNA BONITA, RÁPIDA E FÁCIL!
[ ]  Minecraft: Construindo a Escola de Springfield (Simpsons)
[ ]  Minecraft: Como construir um Campo de Futebol
[ ]  Minecraft: CONSTRUA UMA CASA MODERNA EM 5 MINUTOS! 2 (NO SURVIVAL)
[ ]  Minecraft: CONSTRUA UMA CASA MODERNA EM 5 MINUTOS! (NO SURVIVAL)
[ ]  Minecraft: Construindo um Portal do Nether Futurista (1.9)
[ ]  Minecraft: Construindo uma Prisão Futurista/Espacial (1.9)
[ ]  Minecraft: CONSTRUA UMA CASA BONITA EM 5 MINUTOS! (NO SURVIVAL) 2
[ ]  Minecraft: Como construir um McDonalds Moderno
[ ]  Minecraft: DOIS DESIGNS PARA SALA DOS BAÚS! (MODERNO/MEDIEVAL)
[ ]  Minecraft: Como construir o Portão de Entrada de Jurassic Park!
[ ]  Minecraft: Deixe as casas de Vilas de DESERTO mais bonitas!
[ ]  Minecraft: COMO CONSTRUIR A CASA DO SUPER SURVIVAL
[ ]  Minecraft: Construindo uma Pequena Casa Moderna 7
[ ]  Minecraft: CONSTRUA CASAS DE VILLAGERS SIMPLES E BONITAS!
[ ]  Minecraft: Construindo uma Cabana de Filme de Terror
[ ]  Minecraft: CONSTRUA UMA CASA BONITA EM 5 MINUTOS! (NO SURVIVAL)
[x]  Minecraft: Como construir Estátuas/Skins TAMANHO REAL (GIGANTES)
[ ]  Minecraft: Como construir um Prédio Moderno 2
[ ]  Minecraft: Construa sua Primeira Casa na Árvore
[x]  Minecraft: Como construir uma Estátua de Creeper (Simples)
[x]  Minecraft: Como construir uma Estátua de Esqueleto
[ ]  Minecraft: Como construir um Barco Pirata
[x]  Minecraft: Como construir Estátuas/Skins Médias (tamanho Médio)
[ ]  Minecraft: Construindo uma Pequena Casa Moderna 6
[ ]  Minecraft: Como construir um Prédio Moderno
[x]  Minecraft: Como construir Estátuas/Skins Simples
[ ]  Minecraft: Construindo a Cabana do Mistério de Gravity Falls (Mystery Shack)
[ ]  Minecraft: Construindo a Casa do Clarêncio o Otimista (Clarence)
[ ]  Minecraft: Como construir um Centro Pokémon
[ ]  Minecraft: Como construir uma Casa Americana 3
[ ]  Minecraft: Construindo a Casa do Mestre Kame (Dragon Ball Z)
[ ]  Minecraft: Construindo uma Pequena Casa Moderna 5
[ ]  Minecraft: Como fazer uma Cela de Prisão
[ ]  Minecraft: Construindo um Starbucks (+Decoração)
[ ]  Minecraft: Deixe as casas de Vilas mais bonitas #4
[ ]  Minecraft: Construindo uma Casa Moderna 8
[ ]  Minecraft: Como construir a Casa do Ben 10
[ ]  Minecraft: Construindo o Bar do Moe (Simpsons)
[ ]  Minecraft: Construindo uma Casa Detalhada (Medieval)
[ ]  Minecraft: Como construir uma Ilha de Skywar! 2 (TEMA: TROPICAL)
[ ]  Minecraft: Como construir uma Ilha CENTRAL de Skywar!
[ ]  Minecraft: Como construir uma Ilha de Skywar!
[ ]  Minecraft: Construindo uma Pequena Casa Moderna 4
[ ]  Minecraft: Construindo a Casa do Saltitão (Apenas um Show/Regular Show)
[ ]  Minecraft: Decoração da Casa Moderna 7
[ ]  Minecraft: Construindo o Trailer do Musculoso (Apenas um Show/Regular Show)
[ ]  Minecraft: Construindo uma Casa Moderna 7 (Minimalista)
[x]  Minecraft: Construindo a casa do Seu Sirigueijo (Bob Esponja)
[ ]  Minecraft: Construindo a Casa dos Wiggum (Simpsons)
[ ]  Minecraft: Construindo a casa do Don (Apenas um Show/Regular Show)
[ ]  Minecraft: Construindo a Casa do Nelson (Simpsons)
[x]  Minecraft Veículos #2: Ambulância
[x]  Minecraft: Construindo o Carro de Golfe de Apenas um Show (Regular Show)
[x]  Minecraft Veículos #1: Carro de Polícia
[ ]  Minecraft: Decoração da Pequena Casa Moderna 3
[ ]  Minecraft: Construindo uma Pequena Casa Moderna 3
[ ]  Minecraft: Construindo o Mercado do Apu/Kwik-E-Mart (Simpsons)
[ ]  Minecraft: Como construir um Balão
[x]  Minecraft: Construindo a casa da Avó do Bob Esponja
[ ]  Minecraft: Construindo a Cabana do Hagrid (Harry Potter)
[ ]  Minecraft: Como construir uma Árvore de Natal
[ ]  Minecraft: Construindo sua primeira casa! #7
[ ]  Minecraft: Construindo uma Casa Moderna 6
[ ]  Minecraft: Como construir a casa do CJ (GTA San Andreas)
[ ]  Minecraft: Como construir um Farol 2
[x]  Minecraft: Como construir a casa do Patrick (Bob Esponja)
[x]  Minecraft: Como construir a casa do Lula Molusco (Bob Esponja)
[ ]  Minecraft: Construindo uma Casa Moderna 5 (A-Frame House)
[ ]  Minecraft: Decoração Externa da Casa Suburbana
[ ]  Minecraft: Decoração Interna da Casa Suburbana
[ ]  Minecraft: Construindo uma casa Suburbana
[x]  Minecraft: Como construir a casa do Bob Esponja (Nova Versão)
[ ]  Minecraft: Construindo o Barg-N-Mart (Mercado do Bob Esponja)
[x]  Minecraft: Construindo o Ônibus da Fenda do Biquíni (Bob Esponja)
[x]  Minecraft: Como construir a Casa da Sandy (Bob Esponja)
[ ]  Minecraft: Construindo uma Casa Medieval 3 (Stormfield)
[ ]  Minecraft: Construindo uma Mansão Georgiana (Parte 3)
[ ]  Minecraft: Construindo uma Mansão Georgiana (Parte 2)
[ ]  Minecraft: Construindo uma Mansão Georgiana (Parte 1)
[ ]  Minecraft: Construindo um Portal do Nether Personalizado (Sem Mods)
[ ]  Minecraft: Construindo um Posto de Gasolina (Parte 3)
[ ]  Minecraft: Construindo um Posto de Gasolina (Parte 2)
[ ]  Minecraft: Construindo um Posto de Gasolina (Parte 1)
[ ]  Minecraft: Como construir a casa do Gumball (The Amazing World of Gumball)
[ ]  Minecraft: Decoração da Pequena Casa Moderna 2
[ ]  Minecraft: Construindo uma pequena Casa Moderna 2
[ ]  Minecraft: Como construir a casa de Apenas um Show (Regular Show)
[ ]  Minecraft: Como construir a casa de Phineas e Ferb
[ ]  Minecraft: Decoração da Casa Moderna 4
[ ]  Minecraft: Construindo uma Casa Moderna 4
[ ]  Minecraft: Como construir uma Casa Cogumelo 2
[ ]  Minecraft: Construindo uma Carroça Medieval (Wagon)
[ ]  Minecraft: Construindo uma Casa de Lenhador (Lumberjack House)
[ ]  Minecraft: Decoração Interna da Igreja Medieval
[ ]  Minecraft: Como construir uma Igreja Medieval (Parte 2)
[ ]  Minecraft: Como construir uma Igreja Medieval (Parte 1)
[ ]  Minecraft: Construindo uma Barbearia (parte 2 | Barber Shop)
[ ]  Minecraft: Construindo uma Barbearia (parte 1 | Barber Shop)
[ ]  Minecraft: Construindo a casa do Cartman (South Park)
[ ]  Minecraft: Como construir uma Pizzaria (parte 2)
[ ]  Minecraft: Como construir uma Pizzaria (parte 1)
[ ]  Minecraft: Construindo uma pequena Casa na Árvore
[ ]  Minecraft: Construindo a casa dos Padrinhos Mágicos
[ ]  Minecraft: Decoração da pequena Casa Moderna
[ ]  Minecraft: Construindo uma pequena Casa Moderna
[ ]  Minecraft: Decoração Interna da Mansão (parte 2)
[ ]  Minecraft: Decoração Interna da Mansão (parte 1)
[ ]  Minecraft: Como construir uma Mansão (parte 2)
[ ]  Minecraft: Como construir uma Mansão (parte 1)
[ ]  Minecraft: Decoração da Casa do Velho Oeste
[ ]  Minecraft: Construindo uma Casa do Velho Oeste
[ ]  Minecraft: Como construir a casa dos Flanders (Simpsons)
[ ]  Minecraft: Decoração da Casa de Fazenda Medieval
[ ]  Minecraft: Construindo uma Casa de Fazenda Medieval
[x]  Minecraft: Como construir o Balde de Lixo (Bob Esponja)
[ ]  Minecraft: Como construir a casa do Family Guy
[ ]  Minecraft: Como construir um estábulo 2
[ ]  Minecraft: Decoração Interna da Casa Americana 2
[ ]  Minecraft: Como construir uma Casa Americana 2
[ ]  Minecraft: Como construir um Castelo (parte 8)
[ ]  Minecraft: Como construir um Castelo (parte 7)
[ ]  Minecraft: Como construir um Castelo (parte 6)
[ ]  Minecraft: Como construir um Castelo (parte 5)
[ ]  Minecraft: Como construir um Castelo (parte 4)
[ ]  Minecraft: Como construir um Castelo (parte 3)
[ ]  Minecraft: Como construir um Castelo (parte 2)
[ ]  Minecraft: Como construir um Castelo (parte 1 | Especial 100 vídeos)
[ ]  Minecraft: Como construir a Casa do Goku (Dragon Ball Z)
[ ]  Minecraft: Torre de Arqueiros
[x]  Minecraft: Como construir o Siri Cascudo (Bob Esponja)
[ ]  Minecraft: Como construir um Moinho Holandês
[ ]  Minecraft: Decoração Interna da Casa Moderna 3
[ ]  Minecraft: Decoração Externa da Casa Moderna 3
[ ]  Minecraft: Construindo uma Casa Moderna 3
[ ]  Minecraft: Como construir a casa dos Simpsons
[ ]  Minecraft: Decorando uma Hospedaria
[ ]  Minecraft: Construindo uma Hospedaria (parte 2)
[ ]  Minecraft: Construindo uma Hospedaria (parte 1)
[ ]  Minecraft: Decorando uma Taverna
[ ]  Minecraft: Construindo uma Taverna (parte 2)
[ ]  Minecraft: Construindo uma Taverna (parte 1)
[ ]  Minecraft: Decorando a Casa da Abertura
[ ]  Minecraft: Construindo a Casa da Abertura (parte 2)
[ ]  Minecraft: Construindo a Casa da Abertura (parte 1)
[ ]  Minecraft: Construindo um Farol Medieval
[ ]  Minecraft: Como construir um Chalé
[ ]  Minecraft: Construindo uma Casa Medieval 2
[ ]  Minecraft: Desafio da Casa Moderna (8X8)
[x]  Minecraft: Construindo as casas do Bob Esponja
[ ]  Minecraft: Como construir um Jardim de Vidro
[ ]  Minecraft: Como construir um Porto
[ ]  Minecraft: Construindo um Templo Grego/Romano
[ ]  Minecraft: Como construir um estábulo
[ ]  Minecraft: Construindo uma entrada para vilas (Skyrim)
[ ]  Minecraft: Construindo uma Serraria (Skyrim)
[ ]  Minecraft: Construindo uma Casa de Campo (Cottage)
[ ]  Minecraft: Construindo uma Casa Moderna 2
[ ]  Minecraft: Como construir uma Torre do Sino
[ ]  Minecraft: Como construir uma Casa Americana
[ ]  Minecraft: Construindo uma Caverna dos Piratas
[ ]  Minecraft: Como construir um Cemitério
[ ]  Minecraft: Como construir um Celeiro
[x]  Minecraft: Como construir uma Muralha
[x]  Minecraft: Como construir uma Ferraria
[ ]  Minecraft: Como construir um Mercado
[ ]  Minecraft: Construindo uma Sala do Trono
[ ]  Minecraft: Construindo uma Torre Destruída
[x]  Minecraft: Como construir um Iglu
[ ]  Minecraft: Construindo uma Casa Moderna (parte 2)
[ ]  Minecraft: Construindo uma Casa Moderna (parte 1)
[x]  Minecraft: Como construir uma casa Japonesa
[x]  Minecraft: Como construir um Farol
[x]  Minecraft: Templo para o Portal do Nether 2
[x]  Minecraft: Construindo uma Torre
[x]  Minecraft: Construindo um Templo na Floresta
[x]  Minecraft: Templo para o Portal do Nether
[x]  Minecraft: Como construir uma Casa de Bruxa
[x]  Minecraft: Como construir uma Casa Cogumelo
[x]  Minecraft: Como construir uma Casa na Árvore
[x]  Minecraft: Construindo um Moinho
[x]  Minecraft: Construindo casa Medieval
[x]  Minecraft: Construindo casa Hobbit (Senhor dos Anéis)
`;

function parseList(rawText) {
  return rawText
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.startsWith("[") && line.includes("]"))
    .map((line, index) => {
      const completed = line.startsWith("[x]");
      const text = line.substring(line.indexOf("]") + 1).trim();
      const stableId = btoa(text).replace(/=/g, "");
      return {
        id: stableId,
        index: index,
        text: text,
        completed: completed,
      };
    });
}

function saveStateToLocalStorage() {
  try {
    const stateToSave = items.map((item) => ({
      id: item.id,
      completed: item.completed,
    }));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToSave));
  } catch (error) {
    console.error("Erro ao salvar o estado no LocalStorage:", error);
  }
}

function loadStateFromLocalStorage() {
  try {
    const storedData = localStorage.getItem(STORAGE_KEY);
    if (storedData) {
      const loadedStatus = JSON.parse(storedData);
      if (
        Array.isArray(loadedStatus) &&
        loadedStatus.every((s) => s.id && typeof s.completed === "boolean")
      ) {
        return loadedStatus;
      }
    }
  } catch (error) {
    console.warn(
      "Erro ao carregar ou analisar LocalStorage. Usando lista padrão."
    );
  }
  return null;
}

function calculateMetrics(currentItems) {
  const total = currentItems.length;
  const completed = currentItems.filter((item) => item.completed).length;
  const pending = total - completed;
  const rate = total > 0 ? ((completed / total) * 100).toFixed(1) : 0;

  document.getElementById("total-count").textContent = total;
  document.getElementById("completed-count").textContent = completed;
  document.getElementById("pending-count").textContent = pending;
  document.getElementById("completion-rate").textContent = `${rate}%`;
}

function renderList(currentItems) {
  const container = document.getElementById("item-list-container");
  container.innerHTML = currentItems
    .map(
      (item) => `
        <label for="item-idx-${item.index}" 
               class="flex items-center p-3 rounded-lg cursor-pointer transition duration-150 ease-in-out hover:bg-gray-50 border-b last:border-b-0">
            <input type="checkbox" 
                   id="item-idx-${item.index}" 
                   data-index="${item.index}" 
                   ${item.completed ? "checked" : ""} 
                   class="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mr-4">
            <span class="text-gray-900 ${
              item.completed ? "line-through text-gray-500" : ""
            }">
                ${item.text}
            </span>
        </label>
    `
    )
    .join("");
}

function handleToggle(index) {
  if (index >= 0 && index < items.length) {
    items[index].completed = !items[index].completed;
  }
  saveStateToLocalStorage();
  calculateMetrics(items);
  renderList(items);
}

function downloadJson() {
  const jsonContent = JSON.stringify(items, null, 2);
  const blob = new Blob([jsonContent], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");

  a.href = url;
  a.download = "minecraft_projects_status.json";
  a.style.display = "none";

  document.body.appendChild(a);
  a.click();

  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function handleFileUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();

  reader.onload = (e) => {
    try {
      const jsonContent = e.target.result;
      const loadedData = JSON.parse(jsonContent);

      if (
        Array.isArray(loadedData) &&
        loadedData.every(
          (item) =>
            item.id &&
            item.text !== undefined &&
            typeof item.completed === "boolean"
        )
      ) {
        items = loadedData.map((item, index) => ({ ...item, index: index }));
        saveStateToLocalStorage();
        calculateMetrics(items);
        renderList(items);
      } else {
        console.error("Arquivo JSON inválido.");
      }
    } catch (error) {
      console.error("Erro ao processar o arquivo JSON:", error);
    }
    event.target.value = "";
  };

  reader.readAsText(file);
}

window.onload = function () {
  let baseItems = parseList(RAW_LIST);
  const storedStatus = loadStateFromLocalStorage();

  if (storedStatus && baseItems.length > 0) {
    const statusMap = storedStatus.reduce((map, status) => {
      map[status.id] = status.completed;
      return map;
    }, {});

    items = baseItems.map((item) => {
      if (statusMap.hasOwnProperty(item.id)) {
        item.completed = statusMap[item.id];
      }
      return item;
    });
  } else {
    items = baseItems;
  }

  saveStateToLocalStorage();
  calculateMetrics(items);
  renderList(items);

  document
    .getElementById("save-json-btn")
    .addEventListener("click", downloadJson);
  document
    .getElementById("load-json-input")
    .addEventListener("change", handleFileUpload);

  document
    .getElementById("item-list-container")
    .addEventListener("change", (event) => {
      const target = event.target;
      if (target.matches('input[type="checkbox"]')) {
        const index = parseInt(target.getAttribute("data-index"));
        handleToggle(index);
      }
    });
};
