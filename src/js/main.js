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
  { name: "Windows", level: 4 },
  { name: "Administração de Redes", level: 4 },
  { name: "Infraestrutura de Rede", level: 4 },
  { name: "Fortigate Firewall", level: 3 },
  { name: "Cisco Firewall", level: 3 },
  { name: "Cisco Switches", level: 3 },
  { name: "Segurança de Rede", level: 3 },
  { name: "Gestão de Projetos", level: 3 },
  { name: "Redes Wireless", level: 3 },
  { name: "Zabbix", level: 4 },
  { name: "DMZ", level: 3 },
  { name: "AWS", level: 3 },
  { name: "Scrum", level: 2 },
  { name: "DevOps", level: 2 },
  { name: "Git", level: 3 },
  { name: "Docker", level: 2 },
  { name: "CI/CD", level: 2 },
  { name: "Microsoft 365", level: 3 },
  { name: "GSuite", level: 2 },
  { name: "SQL", level: 2 },
  { name: "VOIP", level: 3 },
  { name: "DHCP", level: 3 },
  { name: "DNS", level: 3 },
  { name: "TCP/IP", level: 4 },
  { name: "HTML", level: 3 },
  { name: "Python", level: 2 },
  { name: "PowerShell", level: 3 },
  { name: "Bash", level: 3 },
];

const experienceData = [
  {
    company: "Estáter",
    position: "Analista de TI",
    startDate: "Mai 2021",
    endDate: "Presente",
    location: "São Paulo, SP",
    description:
      "Sou responsável por conduzir migrações estratégicas de infraestrutura, firewalls (Cisco e Fortinet), switches e NAS, em minha empresa e em empresas parceiras. Ao longo da minha trajetória, liderei diversos projetos de modernização de ambientes, com foco na redução de custos e na otimização da infraestrutura. Entre as principais iniciativas, destaco a migração de VMs de um servidor VMware legado para uma solução open-source atualizada e a transição do serviço de monitoramento de Nagios para o Zabbix, garantindo maior eficiência e escalabilidade. Também participei ativamente da migração de um serviço VoIP para a nuvem, proporcionando mais flexibilidade e performance. Na área de cloud computing, implementei a migração de sites corporativos para a AWS, com integração ao GitHub para atualizações automáticas via GitHub Actions. Além disso, reduzi significativamente os custos da AWS ao migrar servidores EC2 para buckets S3 e ao serviço Lightsail. Focado na automação, introduzi scripts em Python, Bash e PowerShell para otimizar processos e agilizar o gerenciamento de tarefas. Outro marco foi a definição e implementação da infraestrutura de rede para um coworking, oferecendo uma solução robusta e escalável.",
  },
  {
    company: "CS IT Consulting",
    position: "N1 - IT Support Analyst",
    startDate: "Jul 2019",
    endDate: "Abr 2021",
    location: "São Paulo, SP",
    description:
      "Fui responsável pela administração de servidores Windows e Linux, abrangendo serviços como AD, DHCP, Fileserver, FTP, DNS, Webserver e Appserver. Além disso, gerenciei ambientes de Office 365, G-suite, VMs onpremise e a administração de firewall Fortigate, garantindo a segurança e o desempenho da infraestrutura de TI da empresa. Durante esse período, tive a oportunidade de modernizar a infraestrutura, migrando diversos serviços para o Docker, o que trouxe maior flexibilidade e escalabilidade para o ambiente. Também fui responsável pela atualização de versões do Zabbix, ferramenta essencial para o monitoramento da rede e dos sistemas, e pela automação de processos manuais, o que resultou em um aumento significativo na eficiência operacional. A administração de ambientes híbridos e a implementação de novas tecnologias me permitiram aprimorar minhas habilidades em gestão de servidores, redes e segurança, além de me proporcionar uma visão mais estratégica sobre como otimizar recursos e garantir a continuidade dos serviços. Essa experiência foi fundamental para o meu desenvolvimento técnico, ampliando meu conhecimento sobre soluções de virtualização, containers e automação.",
  },
  {
    company: "Penso Tecnologia",
    position: "Analista de suporte técnico",
    startDate: "Dez 2017",
    endDate: "Jul 2019",
    location: "São Paulo, SP",
    description:
      "Durante minha atuação em uma corretora de seguros, fui responsável por fornecer suporte de TI, garantindo o funcionamento eficiente e seguro dos sistemas. Minhas responsabilidades incluíam a administração de redes. Trabalhei pela primeira vez com a tecnologia VoIP. Gerenciei servidores Windows e Linux, roteadores e switches. Fui também responsável pela gestão de recursos de TI e pela criação de planos de contingência para garantir a continuidade das operações, minimizando impactos em caso de falhas no sistema. Implementamos procedimentos regulares de backup e políticas de recuperação de dados, garantindo a integridade das informações essenciais para a corretora. Outra área importante foi a gestão de segurança da informação, onde implementei medidas como controle de acesso, monitoramento de vulnerabilidades e conformidade com normas e regulamentações de TI. Isso me permitiu adquirir conhecimentos valiosos em governança de TI e proteção de dados. Além disso, analisei as rotinas de trabalho da equipe e implementei melhorias significativas nos processos operacionais, reduzindo o tempo gasto em tarefas manuais e aumentando a eficiência geral. Um dos maiores desafios que enfrentei foi a migração do Tableau 17 para o Tableau 2018.1, que exigiu planejamento e execução cuidadosos para garantir uma transição suave e sem impactos negativos, foram 3 noites de desafios. Essa experiência foi essencial para o meu crescimento, aprimorando minhas habilidades em gestão de infraestrutura, telecomunicações, segurança da informação e análise de processos, além de me permitir integrar soluções tecnológicas às necessidades do negócio.",
  },
  {
    company: "Youpc Informática",
    position: "Analista de suporte técnico",
    startDate: "Jul 2014",
    endDate: "Dez 2017",
    location: "Santo André, SP",
    description:
      "Nesta posição, fui responsável por fornecer suporte remoto a pessoas físicas e jurídicas, atendendo a uma variedade de demandas e resolvendo problemas técnicos, com o objetivo de garantir que seus sistemas e infraestruturas de TI funcionassem de maneira otimizada. Um dos principais aspectos do meu trabalho foi a montagem e manutenção de computadores e servidores. Com esse foco, pude aplicar e expandir meus conhecimentos sobre hardware, desde a instalação de componentes até a realização de diagnósticos e manutenções. Além disso, fui responsável pela configuração de roteadores e switches, trabalhando com tecnologias Cisco e HP. Essa experiência me permitiu aprofundar meus conhecimentos em redes e me familiarizar com a configuração de dispositivos para a operação da infraestrutura de TI. Em termos de servidores Windows, tive a oportunidade de aprender a gerenciar e administrar diversos serviços, como Active Directory (AD), Políticas de Grupo (GPO), DHCP, DNS, File Server e rotinas de Backup. Além disso, participei ativamente na implementação de infraestruturas de rede, tanto cabeadas quanto sem fio. Essa parte do trabalho me proporcionou uma visão mais completa da gestão de redes, desde o planejamento até a execução de soluções que garantem o bom desempenho das redes de computadores. Essa experiência foi fundamental para o meu crescimento técnico, permitindome adquirir habilidades sólidas em diversas áreas de TI, além de me proporcionar uma visão ampla e integrada de como os diferentes sistemas e tecnologias se conectam e funcionam em conjunto. A prática com ferramentas e configurações avançadas me preparou para lidar com desafios complexos.",
  },
  {
    company: "Teleperformance Brasil",
    position: "Menor Aprendiz",
    startDate: "2011",
    endDate: "2012",
    location: "São Paulo, SP",
    description:
      "Fiz parte da primeira turma de menores aprendizes da empresa, o que foi uma experiência enriquecedora. Durante esse período, pude aprender de forma prática e significativa sobre o funcionamento de um ambiente corporativo, desenvolvendo habilidades que se mostraram essenciais para o meu crescimento profissional. Minhas principais responsabilidades incluíam o apoio nas rotinas administrativas, onde aprendi a lidar com atividades diárias como organização de documentos, atendimento telefônico e apoio nas demandas internas da empresa. Além disso, como parte da minha formação, tive a oportunidade de aprimorar o uso do pacote Office, que se tornou uma ferramenta essencial para a execução das minhas tarefas. Embora o ambiente corporativo fosse novo para mim, um dos maiores desafios que enfrentei foi a dificuldade inicial de me adaptar ao trabalho em equipe, além da superação da vergonha de interagir com pessoas de diferentes níveis hierárquicos. No entanto, com o tempo, aprendi a importância da colaboração, desenvolvendo habilidades interpessoais e de comunicação. Trabalhei de forma colaborativa em uma equipe de 7 pessoas, auxiliando os colegas e ajudando na execução de tarefas diárias, o que me proporcionou uma visão ampla e prática do trabalho em conjunto. Essa experiência me permitiu aprender sobre postura corporativa, como interagir de forma profissional, e como lidar com as demandas do dia a dia, compreendendo a importância da organização e da responsabilidade. Esta vivência foi fundamental para que eu pudesse crescer como profissional, aprimorando minhas habilidades técnicas e comportamentais. Este primeiro emprego formal foi a base para muitas das minhas conquistas profissionais, e me preparou para encarar novos desafios.",
  },
];

const educationData = [
  {
    institution: "Estácio de Sá",
    course: "Técnologo Redes de Computadores",
    startDate: "Fev 2015",
    endDate: "Dez 2017",
    thesis: "",
  },
];

const certificatesData = [
  {
    institution: "Cisco",
    description:
      "Introduction to Packet Tracer - Knowledge and skills to create digital models of IP Networks and IoT Systems using Cisco Packet Tracer.",
  },
  {
    institution: "4Linux",
    description:
      "DevOps Essentials - Certificação introdutória para o universo DevOps, para entender, conhecer e implantar a cultura.",
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
                                <p>${exp.startDate} - ${exp.endDate}</p>
                                <p>${exp.location}</p>
                                <p class="text-gray-600">${exp.position}</p>
                            </div>
                        </div>
                        <div class="mt-4">
                            <p class="text-gray-700 text-justify">
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
                                <p>${edu.startDate} - ${edu.endDate}</p>
                                <p class="text-gray-600">${edu.course}</p>
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
