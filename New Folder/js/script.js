
  // Configurações do contador
  const minOnline = 1200; // Mínimo de pessoas online
  const maxOnline = 1400; // Máximo de pessoas online
  const updateInterval = 3000; // Intervalo de atualização em milissegundos (3s)

  function updateOnlineCount() {
    const onlineCountElement = document.getElementById("online-count");
    let currentOnline = parseInt(onlineCountElement.textContent);

    // Define o próximo valor aleatoriamente dentro de um intervalo
    let change = Math.floor(Math.random() * 21) - 10; // Valor entre -10 e +10
    let newOnline = currentOnline + change;

    // Garante que o valor esteja dentro do limite definido
    if (newOnline < minOnline) newOnline = minOnline;
    if (newOnline > maxOnline) newOnline = maxOnline;

    // Atualiza apenas o número de pessoas online
    onlineCountElement.textContent = newOnline;
  }

  // Atualiza o número de pessoas online em intervalos regulares
  setInterval(updateOnlineCount, updateInterval);

  function showNewPopup() {
    document.getElementById("newPopup").style.display = "flex";
  }

  function closeNewPopup() {
    document.getElementById("newPopup").style.display = "none";
  }
    
        const header = document.getElementById('header');
        const popup = document.getElementById('popup');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('shrink');
            } else {
                header.classList.remove('shrink');
            }
        });

        function openPopup() {
            popup.classList.add('active');
        }

        function closePopup() {
            popup.classList.remove('active');
        }

        function redirectToTelegram() {
            window.open('https://www.paypal.com/ncp/payment/6VP2B373KDH8E', '_blank');
        }
        
        const items = [
  "Rape Folder",
  "SnapGod Full Edition",
  "CP Folder",
  "MonkeyApp Wins",
  "Darkzadie Leaks (ZIP) + 2GB Folder",
  "Omegle Teen Leaks",
  "Anxious Panda",
  "Daughters WAP Leakzone",
  "Lilly Lanes",
  "Queen Bree69",
  "BLACKMAIL",
  "Snapchat",
  "Snap 18+ Teens",
  "Skype (Call USA, South Africa, Girls)",
  "Snaplnk",
  "Kazumi Squirt",
  "Objective Dark",
];

const maleNames = [
  "John Smith",
  "Michael Johnson",
  "James Brown",
  "Robert Davis",
  "William Garcia",
  "Thomas Miller",
  "Christopher Martinez",
  "Daniel Anderson",
  "Matthew Taylor",
  "Andrew Moore",
];

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomInterval() {
  return Math.random() * (45000 - 30000) + 30000; // Random interval between 30s and 45s
}

function showNotification() {
  const container = document.getElementById("notification-container");
  const randomName = getRandomElement(maleNames);
  const randomItem = getRandomElement(items);

  const notification = document.createElement("div");
  notification.className = "notification";
  notification.innerHTML = `
    <img src="https://img.icons8.com/ios-filled/50/telegram-app.png" alt="App Icon">
    <div class="notification-content">
      <span class="notification-title">${randomName}</span>
      <span class="notification-message">purchased ${randomItem}</span>
    </div>
    <span class="notification-time">Just now</span>
  `;

  container.appendChild(notification);

  // Remove notification after 5 seconds
  setTimeout(() => {
    notification.style.animation = "fade-out 1s ease forwards";
    setTimeout(() => container.removeChild(notification), 1000);
  }, 5000);
}

// Display notifications at random intervals
function generateNotifications() {
  showNotification();
  setTimeout(generateNotifications, getRandomInterval());
}

// Start notifications
generateNotifications();
let modalShown = false;

function showExitModal(event) {
  if (!modalShown) {
    event.preventDefault();
    document.getElementById("offer-modal").classList.remove("hidden");
    modalShown = true;
  }
}

// Variável para rastrear se o modal foi exibido
let modalDisplayed = false;

// Detectar cliques em links
document.addEventListener("click", (event) => {
  const target = event.target.closest("a");

  // Verificar se é um link
  if (target && target.href) {
    const isTelegramLink = target.href.startsWith("https://www.paypal.com/ncp/payment/6VP2B373KDH8E");

    if (isTelegramLink) {
      // Links do Telegram: permitir navegação normalmente
      return;
    } else {
      // Outros links: impedir navegação e mostrar o modal
      event.preventDefault(); // Bloquear navegação padrão
      if (!modalDisplayed) {
        showExitModal(target.href); // Passar o link clicado para o modal
      }
    }
  }
});

// Mostrar o modal de saída
function showExitModal(redirectUrl = null) {
  const modal = document.getElementById("offer-modal");
  if (modal && !modalDisplayed) {
    modal.classList.remove("hidden");
    modalDisplayed = true; // Garantir que o modal só seja exibido uma vez

    // Salvar o link clicado para redirecionar depois
    if (redirectUrl) {
      modal.dataset.redirectUrl = redirectUrl;
    }
  }
}

// Fechar o modal sem redirecionar
function closeModal() {
  const modal = document.getElementById("offer-modal");
  if (modal) {
    modal.classList.add("hidden");
    modalDisplayed = false; // Resetar estado
  }
}

// Aceitar a oferta no modal e redirecionar
document.getElementById("accept-offer").addEventListener("click", () => {
  const modal = document.getElementById("offer-modal");
  if (modal && modal.dataset.redirectUrl) {
    window.location.href = modal.dataset.redirectUrl; // Redirecionar para o link clicado
  } else {
    window.location.href = "https://www.paypal.com/ncp/payment/6VP2B373KDH8E"; // Link padrão
  }
});

// Botão para fechar o modal
document.getElementById("dismiss-modal").addEventListener("click", closeModal);

   