// Mobile menu toggle
document
  .getElementById("mobile-menu-button")
  .addEventListener("click", function () {
    const menu = document.getElementById("mobile-menu");
    menu.classList.toggle("hidden");
  });

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - 80,
      behavior: "smooth",
    });

    // Close mobile menu if open
    const mobileMenu = document.getElementById("mobile-menu");
    if (!mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.add("hidden");
    }
  });
});

// Service data in JSON format
const servicesData = {
  reformas: [
    {
      foto: "https://images.unsplash.com/photo-1581092921461-39b2f2c8f3a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      servico: "PROJETOS",
      descricao:
        "Desenvolvimento de projetos arquitetônicos e executivos, com soluções personalizadas para cada necessidade.",
    },
    {
      foto: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      servico: "PINTURA",
      descricao:
        "Serviços de pintura interna e externa com materiais de alta qualidade e acabamento impecável.",
    },
    {
      foto: "https://images.unsplash.com/photo-1618221195710-dd6b7fa91b7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80",
      servico: "DRYWALL",
      descricao:
        "Construção e reforma com drywall, solução prática, limpa e versátil para divisórias e forros.",
    },
    {
      foto: "https://images.unsplash.com/photo-1603302576837-37554b59e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      servico: "ELÉTRICA",
      descricao:
        "Instalações e manutenções elétricas residenciais e comerciais, com segurança e eficiência.",
    },
    {
      foto: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      servico: "REVESTIMENTO",
      descricao:
        "Aplicação de revestimentos cerâmicos, porcelanatos e pedras naturais com perfeição no assentamento.",
    },
    {
      foto: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      servico: "AUTOMAÇÃO",
      descricao:
        "Soluções em automação residencial e predial para conforto, segurança e economia de energia.",
    },
    {
      foto: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      servico: "DEMOLIÇÃO",
      descricao:
        "Serviços de demolição planejada e controlada, com descarte adequado dos resíduos.",
    },
    {
      foto: "https://images.unsplash.com/photo-1622372738946-62e7b64f1b01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      servico: "HIDRÁULICA",
      descricao:
        "Instalações e reparos hidráulicos com materiais de primeira linha e mão de obra especializada.",
    },
    {
      foto: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      servico: "ALVENARIA",
      descricao:
        "Construção em alvenaria convencional e estrutural, com técnicas modernas e materiais de qualidade.",
    },
  ],
  manutencoes: [
    {
      foto: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      servico: "LIMPEZA",
      descricao:
        "Serviços especializados de limpeza pós-obra e manutenção periódica de áreas comuns.",
    },
    {
      foto: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      servico: "PINTURA",
      descricao:
        "Manutenção periódica de pinturas internas e externas, garantindo a conservação do imóvel.",
    },
    {
      foto: "https://images.unsplash.com/photo-1622372738946-62e7b64f1b01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      servico: "HIDRÁULICA",
      descricao:
        "Manutenção preventiva e corretiva em sistemas hidráulicos, evitando vazamentos e desperdícios.",
    },
  ],
  laudos: [
    {
      foto: "https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      servico: "VISTORIA DE ENTREGA",
      descricao:
        "Laudo técnico detalhado da vistoria de entrega de obra, com registro fotográfico e descritivo.",
    },
    {
      foto: "https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      servico: "VISTORIA PATOLÓGICA",
      descricao:
        "Identificação e diagnóstico de patologias construtivas com recomendações técnicas para correção.",
    },
    {
      foto: "https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      servico: "VISTORIA CAUTELAR",
      descricao:
        "Avaliação técnica prévia para identificação de danos em imóveis vizinhos a obras.",
    },
  ],
};

// Modal functions
function openModal(service) {
  const modal = document.getElementById(`${service}-modal`);
  const contentContainer = document.getElementById(`${service}-content`);

  // Clear previous content
  contentContainer.innerHTML = "";

  // Load content from JSON
  servicesData[service].forEach((item) => {
    const itemHTML = `
                    <div class="bg-[#3a4342] p-6 rounded-lg flex flex-col md:flex-row items-center">
                        <img src="${item.foto}" alt="${item.servico}" class="service-item-img rounded-full mb-4 md:mb-0 md:mr-6">
                        <div>
                            <h4 class="text-xl font-bold text-[#EF6526] mb-2">${item.servico}</h4>
                            <p class="text-gray-300">${item.descricao}</p>
                        </div>
                    </div>
                `;
    contentContainer.innerHTML += itemHTML;
  });

  // Show modal
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.querySelectorAll(".modal-overlay").forEach((modal) => {
    modal.classList.add("hidden");
  });
  document.body.style.overflow = "auto";
}

// Close modal when clicking outside content
window.addEventListener("click", function (event) {
  if (event.target.classList.contains("modal-overlay")) {
    closeModal();
  }
});
