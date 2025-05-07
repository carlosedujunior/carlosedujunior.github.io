// Navigation smooth scrolling
document.querySelectorAll("header a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    // Remove active class from all nav items
    document.querySelectorAll("header a").forEach((navItem) => {
      navItem.classList.remove("border-b-2", "border-blue-600", "font-medium");
      navItem.classList.add("hover:text-blue-600");
    });

    // Add active class to clicked nav item
    this.classList.add("border-b-2", "border-blue-600", "font-medium");
    this.classList.remove("hover:text-blue-600");

    // Scroll to section
    const targetId = this.getAttribute("href").substring(1);
    document.getElementById(targetId).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Skills pagination
function showSkillsPage(pageNumber) {
  document.querySelectorAll("#skills .page").forEach((page) => {
    page.classList.remove("active");
  });
  document.getElementById(`skills-page-${pageNumber}`).classList.add("active");
}

// JSON data
const skillsData = [
  { name: "Linux", level: 3 },
  { name: "Administração de Redes", level: 4 },
  { name: "Fortigate Firewall", level: 3 },
  { name: "Cisco Switches", level: 3 },
  { name: "Windows Server", level: 3 },
  { name: "AWS", level: 3 },
  { name: "Scrum", level: 2 },
  { name: "Git", level: 3 },
  { name: "Docker", level: 2 },
  { name: "CI/CD", level: 2 },
  { name: "SQL", level: 2 },
  { name: "VOIP", level: 3 },
  { name: "DNS", level: 3 },
  { name: "TCP/IP", level: 4 },
  { name: "Gestão de Projetos", level: 3 },
  { name: "DHCP", level: 3 },
  { name: "DMZ", level: 3 },
  { name: "HTML", level: 3 },
  { name: "Python", level: 2 },
];

const experienceData = [
  {
    company: "Tech Solutions Inc.",
    position: "Desenvolvedor Full Stack Sênior",
    startDate: "Jan 2020",
    endDate: "Presente",
    location: "São Paulo, SP",
    description:
      "Liderança técnica de equipe de desenvolvimento de aplicações web. Arquitetura e implementação de sistemas escaláveis utilizando React, Node.js e MongoDB. Mentoria de desenvolvedores juniores e implementação de boas práticas de código.",
  },
  {
    company: "Digital Agency XYZ",
    position: "Desenvolvedor Front-end",
    startDate: "Mar 2017",
    endDate: "Dez 2019",
    location: "São Paulo, SP",
    description:
      "Desenvolvimento de interfaces responsivas e otimizadas para SEO. Implementação de designs complexos com CSS3 e JavaScript. Integração com APIs REST e implementação de autenticação JWT.",
  },
  {
    company: "Startup ABC",
    position: "Estagiário em Desenvolvimento",
    startDate: "Jan 2016",
    endDate: "Fev 2017",
    location: "São Paulo, SP",
    description:
      "Suporte no desenvolvimento de aplicações web. Implementação de funcionalidades front-end com HTML, CSS e jQuery. Participação em reuniões de planejamento ágil e revisões de código.",
  },
];

const educationData = [
  {
    institution: "Universidade de São Paulo (USP)",
    course: "Bacharelado em Ciência da Computação",
    startDate: "2013",
    endDate: "2017",
    thesis: "Otimização de Algoritmos de Busca em Grafos para Aplicações Web",
  },
  {
    institution: "Instituto Federal de São Paulo (IFSP)",
    course: "Técnico em Informática",
    startDate: "2010",
    endDate: "2012",
  },
];

const certificatesData = [
  {
    institution: "Amazon Web Services (AWS)",
    description:
      "AWS Certified Developer - Associate - Certificação em desenvolvimento de aplicações na plataforma AWS, incluindo Lambda, DynamoDB e API Gateway.",
  },
  {
    institution: "Scrum.org",
    description:
      "Professional Scrum Master I - Certificação em gestão de projetos ágeis utilizando metodologia Scrum.",
  },
  {
    institution: "Udemy",
    description:
      "React - The Complete Guide - Curso abrangente sobre desenvolvimento com React, incluindo Hooks, Context API e Redux.",
  },
  {
    institution: "Coursera",
    description:
      "UX Design Fundamentals - Fundamentos de pesquisa e design de experiência do usuário.",
  },
];

// Render skills
const skillsPerPage = 9;
let currentPage = 1;

function renderSkills(page) {
  const startIndex = (page - 1) * skillsPerPage;
  const endIndex = page * skillsPerPage;
  const skillsToRender = skillsData.slice(startIndex, endIndex);

  // Renderizar as skills
  const skillsContainer = document.getElementById("skills-container");

  // Verifica se estamos no desktop ou mobile
  if (window.innerWidth >= 768) {
    // Desktop - Distribuir em 3 colunas
    skillsContainer.innerHTML = `
        <div class="hidden md:grid grid-cols-3 gap-6">
          ${distributeSkillsInColumns(skillsToRender)}
        </div>
      `;
  } else {
    // Mobile - Exibir como uma lista
    skillsContainer.innerHTML = `
        <div class="md:hidden bg-white p-6 rounded-lg shadow-sm">
          <ul class="space-y-4">
            ${skillsToRender.map(renderSkillItem).join("")}
          </ul>
        </div>
      `;
  }

  // Atualizar os botões de navegação
  updateNavigationButtons();
}

function distributeSkillsInColumns(skills) {
  const columns = [[], [], []];

  skills.forEach((skill, index) => {
    columns[index % 3].push(renderSkillItem(skill)); // Divide as skills nas 3 colunas
  });

  return columns
    .map(
      (col) => `
      <div class="bg-white p-6 rounded-lg shadow-sm">
        <ul class="space-y-4">
          ${col.join("")}
        </ul>
      </div>
    `
    )
    .join("");
}

function renderSkillItem(skill) {
  const levels = Array.from({ length: 5 }, (_, i) => {
    return `<span class="skill-level ${
      i < skill.level ? "filled" : ""
    }"></span>`;
  }).join("");

  return `
      <li>
        <div class="flex justify-between items-center">
          <span>${skill.name}</span>
          <div class="skill-level-container">
            ${levels}
          </div>
        </div>
      </li>
    `;
}

function navigatePage(direction) {
  currentPage += direction;
  renderSkills(currentPage);
}

function updateNavigationButtons() {
  const totalPages = Math.ceil(skillsData.length / skillsPerPage);

  // Botão "Próximo"
  document
    .getElementById("next-button")
    .classList.toggle("hidden", currentPage >= totalPages);

  // Botão "Voltar"
  document
    .getElementById("prev-button")
    .classList.toggle("invisible", currentPage <= 1);
}

// Render experience
function renderExperience() {
  const experienceList = document.getElementById("experience-list");

  experienceData.forEach((exp, index) => {
    const isLast = index === experienceData.length - 1;
    const timelineClass = isLast ? "" : "timeline-item";

    experienceList.innerHTML += `
                    <div class="bg-white p-6 rounded-lg shadow-sm relative ${timelineClass} pl-12">
                        <div class="absolute left-4 top-4 w-4 h-4 rounded-full bg-blue-500 z-10"></div>
                        <div class="flex flex-col md:flex-row md:justify-between md:items-start">
                            <div class="mb-4 md:mb-0">
                                <h3 class="text-xl font-semibold">${exp.company}</h3>
                                <p class="text-gray-600">${exp.position}</p>
                            </div>
                            <div class="text-gray-500">
                                <p>${exp.startDate} - ${exp.endDate}</p>
                                <p>${exp.location}</p>
                            </div>
                        </div>
                        <div class="mt-4">
                            <p class="text-gray-700">
                                ${exp.description}
                            </p>
                        </div>
                    </div>
                `;
  });
}

// Render education
function renderEducation() {
  const educationList = document.getElementById("education-list");

  educationData.forEach((edu) => {
    let thesisHtml = "";
    if (edu.thesis) {
      thesisHtml = `
                        <div class="mt-2">
                            <p class="text-gray-700">
                                TCC: "${edu.thesis}"
                            </p>
                        </div>
                    `;
    }

    educationList.innerHTML += `
                    <div class="bg-white p-6 rounded-lg shadow-sm">
                        <div class="flex flex-col md:flex-row md:justify-between md:items-start">
                            <div class="mb-4 md:mb-0">
                                <h3 class="text-xl font-semibold">${edu.institution}</h3>
                                <p class="text-gray-600">${edu.course}</p>
                            </div>
                            <div class="text-gray-500">
                                <p>${edu.startDate} - ${edu.endDate}</p>
                            </div>
                        </div>
                        ${thesisHtml}
                    </div>
                `;
  });
}

// Render certificates
function renderCertificates() {
  const certificatesList = document.getElementById("certificates-list");

  certificatesData.forEach((cert) => {
    certificatesList.innerHTML += `
                    <div class="bg-white p-6 rounded-lg shadow-sm">
                        <h3 class="text-xl font-semibold mb-2">${cert.institution}</h3>
                        <p class="text-gray-700">
                            ${cert.description}
                        </p>
                    </div>
                `;
  });
}

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  renderSkills(currentPage);
  renderExperience();
  renderEducation();
  renderCertificates();
});
