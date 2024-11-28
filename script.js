var cidadesPorEstado = {
    "AC": ["Rio Branco", "Cruzeiro do Sul", "Sena Madureira", "Tarauacá"],
    "AL": ["Maceió", "Arapiraca", "Palmeira dos Índios", "Rio Largo"],
    "AP": ["Macapá", "Santana", "Laranjal do Jari", "Oiapoque"],
    "AM": ["Manaus", "Parintins", "Itacoatiara", "Manacapuru"],
    "BA": ["Salvador", "Feira de Santana", "Vitória da Conquista", "Camaçari"],
    "CE": ["Fortaleza", "Caucaia", "Juazeiro do Norte", "Maracanaú"],
    "DF": ["Brasília"],
    "ES": ["Vitória", "Vila Velha", "Serra", "Cariacica"],
    "GO": ["Goiânia", "Aparecida de Goiânia", "Anápolis", "Rio Verde"],
    "MA": ["São Luís", "Imperatriz", "Caxias", "Timon"],
    "MT": ["Cuiabá", "Várzea Grande", "Rondonópolis", "Sinop"],
    "MS": ["Campo Grande", "Dourados", "Três Lagoas", "Corumbá"],
    "MG": ["Belo Horizonte", "Uberlândia", "Contagem", "Juiz de Fora"],
    "PA": ["Belém", "Ananindeua", "Santarém", "Marabá"],
    "PB": ["João Pessoa", "Campina Grande", "Santa Rita", "Patos"],
    "PR": ["Curitiba", "Londrina", "Maringá", "Ponta Grossa"],
    "PE": ["Recife", "Jaboatão dos Guararapes", "Olinda", "Caruaru"],
    "PI": ["Teresina", "Parnaíba", "Picos", "Piripiri"],
    "RJ": ["Rio de Janeiro", "São Gonçalo", "Duque de Caxias", "Nova Iguaçu"],
    "RN": ["Natal", "Mossoró", "Parnamirim", "Caicó"],
    "RS": ["Porto Alegre", "Caxias do Sul", "Pelotas", "Santa Maria"],
    "RO": ["Porto Velho", "Ji-Paraná", "Ariquemes", "Cacoal"],
    "RR": ["Boa Vista", "Rorainópolis", "Caracaraí", "Alto Alegre"],
    "SC": ["Florianópolis", "Joinville", "Blumenau", "Chapecó"],
    "SP": ["São Paulo", "Campinas", "São Bernardo do Campo", "Santos"],
    "SE": ["Aracaju", "Nossa Senhora do Socorro", "Lagarto", "Itabaiana"],
    "TO": ["Palmas", "Araguaína", "Gurupi", "Porto Nacional"]
};

function carregarCidades() {
    let estado = document.getElementById("estado").value;
    let cidadeSelect = document.getElementById("cidade");

    // Limpa as opções atuais
    cidadeSelect.innerHTML = '<option value="">Selecione uma cidade</option>';

    // Adiciona as cidades correspondentes ao estado selecionado
    if (estado && cidadesPorEstado[estado]) {
        cidadesPorEstado[estado].forEach(cidade => {
            let option = document.createElement("option");
            option.value = cidade;
            option.textContent = cidade;
            cidadeSelect.appendChild(option);
        });
    }
}


// Configuração carousel

const track = document.querySelector('.carousel-track');
const items = Array.from(track.children);
const nextButton = document.querySelector('.carousel-btn.next');
const prevButton = document.querySelector('.carousel-btn.prev');

let currentIndex = 0;
const itemsToShow = 3; // Mostrar 3 itens visíveis
const itemWidth = 304 + 16; // Largura da imagem + margem (ajuste se necessário)

// Função para mover o carrossel
const moveToItem = (index) => {
  const newTranslateX = -(index * itemWidth);
  track.style.transform = `translateX(${newTranslateX}px)`;
};

// Evento para o botão "Próximo"
nextButton.addEventListener('click', () => {
  currentIndex = Math.min(currentIndex + 1, items.length - itemsToShow);
  moveToItem(currentIndex);
});

// Evento para o botão "Anterior"
prevButton.addEventListener('click', () => {
  currentIndex = Math.max(currentIndex - 1, 0);
  moveToItem(currentIndex);
});

