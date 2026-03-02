// let frelancerNome;
// let frelancerStacks;
// let frelancerAnosXP;

// const Frelancer = {
//   nome: frelancerNome,
//   stacks: frelancerStacks,
//   anosXP: frelancerAnosXP,
//   apresentar() {
//     console.log(Frelancer.nome);
//     console.log(Frelancer.stacks);
//     console.log(Frelancer.anosXP);
//   },
//   ficarDisponivel() {
//     console.log("O freelancer está disponível para trabalho!");
//   },
// };

// function Projeto(nome, valor, prazo) {
//   this.nome = nome;
//   this.valor = valor;
//   this.prazo = prazo;

//   this.exibirProjeto = function () {
//     console.log("Nome:", this.nome);
//     console.log("Valor:", this.valor);
//     console.log("Prazo:", this.prazo);
//   };
// }

// let projetoEcommerce = new Projeto("E-commerce", 5000, "30 dias");
// let projetoLandingPage = new Projeto("Landing Page", 3000, "20 dias");
// let projetoAppMobile = new Projeto("App Mobile", 6257, "45 dias");

// projetoAppMobile.exibirProjeto();



//Código para o login – only run when login form exists
const TelaLoad = document.querySelector(".load");
const BtnLogin = document.getElementById("btnLogin");
const login = document.querySelector(".login");

if (BtnLogin) {
  BtnLogin.addEventListener("click", function () {
    if (login) {
      login.style.animation = "loginAnimation 2s ease 0s 1 normal forwards"; //Animação do login
    }
    //Timeout pra redirecionar para a página principal após o login
    setTimeout(() => {
      window.location.href = "index.html"; 
    }, 1000);
  });
}



//H1 do header
const h1Header = document.getElementById("titulo-painel");

h1Header.textContent = "Painel de Controle Avançado";

//Mensagem de boas-vindas
h1Header.nextSibling.textContent = "Bem-vindo ao sistema";

//Adição de estilo ao h1 do header
const h1HeaderClass = document.getElementsByClassName("descricao-header");

h1HeaderClass[0].style.backgroundColor = "lightgray";

//Acessando a lista
const nav = document.querySelector("nav");
const ul = nav.querySelector("ul");

let primeiroItemLista = ul.parentNode.querySelector("ul").firstChild;
let ultimoItemLista = nav.lastChild;

let novoItem = document.createElement("li");
novoItem.textContent = "Configurações";
ul.appendChild(novoItem);

//Acessando a foto de perfil e adicionando eventos
const fotoDePerfil = document.querySelector("#Pfp");

fotoDePerfil.addEventListener("click", function () {
  fotoDePerfil.setAttribute("src", "Imgs/Pfp2.jpg");
  fotoDePerfil.setAttribute("alt", "Foto de perfil atualizada");
});

fotoDePerfil.setAttribute("title", "Usuário Verificado");

let divStatusBox = document.querySelector(".status-box");

divStatusBox.classList.replace("status-box", "disponivel");

let btnAlternarStatus = document.getElementById("btnAlternarStatus");

btnAlternarStatus.addEventListener("click", function () {
  divStatusBox.classList.toggle("disponivel");
  divStatusBox.classList.toggle("ocupado");

  if (divStatusBox.classList.contains("ocupado")) {
    divStatusBox.textContent = "Status definido como ocupado";
  } else {
    divStatusBox.textContent = "Status definido como disponivel";
  }
});

//Frases aleatórias
const frasesAleatorias = [
  "Percebemos, cada vez mais, que a determinação clara de objetivos exige a precisão e a definição das novas proposições.",
  "Todas estas questões, devidamente ponderadas, levantam dúvidas sobre se a hegemonia do ambiente político obstaculiza a apreciação da importância dos métodos utilizados na avaliação de resultados.",
  "O incentivo ao avanço tecnológico, assim como a crescente influência da mídia agrega valor ao estabelecimento do retorno esperado a longo prazo.",
  "No entanto, não podemos esquecer que o desenvolvimento contínuo de distintas formas de atuação ainda não demonstrou convincentemente que vai participar na mudança das condições financeiras e administrativas exigidas.",
];

//Gerador de depoimento e geradorAleatorio pra escolher aleatoriamente as frases
let btnGerarDepoimento = document.getElementById("btnGerarDepoimento");
let secaoDepoimento = document.getElementById("depoimento");

btnGerarDepoimento.addEventListener("click", function () {
  const geradorAleatorio = frasesAleatorias[Math.floor(Math.random() * 4)];
  let depoimentoRecente = document.createElement("p");
  depoimentoRecente.textContent = geradorAleatorio;

  secaoDepoimento.appendChild(depoimentoRecente);
});

//Adição de novas skills e remoção da última skill adicionada
const btnRmoverUltimaSkill = document.getElementById("rmvUltimaSkill");
const secaoDeSkills = document.querySelector("#skillSection ul");

btnRmoverUltimaSkill.addEventListener("click", function () {
  secaoDeSkills.lastElementChild.remove();
});

const btnAddNovaSkill = document.getElementById("addNovaSkill");

btnAddNovaSkill.addEventListener("click", function () {
  let skill = prompt("Qual skill deseja adicionar?");
  const addElemento = document.createElement("li");
  addElemento.textContent = skill;
  secaoDeSkills.appendChild(addElemento);
});

secaoDeSkills.firstElementChild.textContent = "Assembly";

//Visualizações do perfil com modificações no botão
const btnPerfilPublico = document.getElementById("btnPerfilPublico");

let contadorVisualizacoes = 0;
btnPerfilPublico.addEventListener("click", function () {
  btnPerfilPublico.textContent = "Visualizando...";
  let msgVisualizacoes = btnPerfilPublico.previousElementSibling;
  msgVisualizacoes.textContent = `Visualizações do perfil: ${++contadorVisualizacoes}`;
  console.log(
    "Alguém visualizou o seu perfil! \nVocê tem um total de " +
      contadorVisualizacoes +
      " visualizações"
  );
});

btnPerfilPublico.addEventListener("mouseover", function () {
  btnPerfilPublico.style.color = "green";
});

btnPerfilPublico.addEventListener("mouseout", function () {
  btnPerfilPublico.style.color = "black";
});

//Load da página
window.addEventListener("load", function () {
  console.log("Sistema Carregado");

  const idiomaNavegador = navigator.language;
  const urlAtual = window.location.href;

  const info = document.createElement("p");
  info.textContent = `Idioma do navegador: ${idiomaNavegador} | URL atual: ${urlAtual}`;
  document.body.appendChild(info);

  // if (idiomaNavegador && urlAtual) {
  //   alert("Informações Validadas!");
  // }
  // window.location.href = "https://www.infnet.edu.br";
});

//Listeners
const btnFazerDeploy = document.getElementById("btnFazerDeploy");

btnFazerDeploy.addEventListener("mouseover", function () {
  btnFazerDeploy.style.backgroundColor = "yellow";
});

btnFazerDeploy.addEventListener("mouseout", function () {
  btnFazerDeploy.style.backgroundColor = "";
});

btnFazerDeploy.addEventListener("mousedown", function () {
  btnFazerDeploy.textContent = "Enviando...";
});

const imgPostInstagram = document.getElementById("post");
const likes = document.getElementById("contadorDeLikes");
const coracaoLike = document.getElementById("iconCoracao");
let contadorLikes = 0;

imgPostInstagram.addEventListener("mouseover", function () {
  imgPostInstagram.style.transform = "scale(1.1)";
  imgPostInstagram.style.transition = "0.3s";
  imgPostInstagram.style.marginBottom = "10px";
});

imgPostInstagram.addEventListener("mouseout", () => {
  imgPostInstagram.style.transform = "scale(1)";
  imgPostInstagram.style.marginBottom = "";
});

imgPostInstagram.addEventListener("dblclick", function () {
  coracaoLike.style.color = "red";

  likes.textContent = ++contadorLikes;
});

coracaoLike.addEventListener("click", function () {
  coracaoLike.style.color = "red";

  likes.textContent = ++contadorLikes;
});

const comentario = document.getElementById("iconComentario");
const cardInsta = document.getElementById("paiCardInsta");

comentario.addEventListener("click", function () {
  let fazerComentario = prompt("Digite o seu comentário");
  let criarComentario = document.createElement("p");

  criarComentario.textContent = "Usuário 2: " + fazerComentario;
  cardInsta.appendChild(criarComentario);
});

const salvar = document.getElementById("iconSalvar");

salvar.addEventListener("click", function () {
  salvar.classList.add("fa-solid");
  salvar.classList.add("fa-bookmark");

  salvar.classList.remove("fa-regular");

  alert("Projeto salvo na coleção!");
});

const tarefas = document.getElementById("tarefaFazer");
const btnAdicionarTarefa = document.getElementById("btnAdicionarTarefa");
const avisoTarefa = document.getElementById("avisoTarefa");
const entradaDeDados = document.getElementById("entradaDeDados");

const regexTarefas = /^.{4,}$/;

const listaToDO = document.createElement("ul");
entradaDeDados.appendChild(listaToDO);

const btnRemover = document.createElement("button");
btnRemover.textContent = "Remover";
btnRemover.classList.add("esconder");
btnAdicionarTarefa.after(btnRemover);

btnAdicionarTarefa.addEventListener("click", function () {
  const valor = tarefas.value.trim();

  if (!regexTarefas.test(valor)) {
    tarefas.style.border = "2px solid red";
    avisoTarefa.classList.remove("esconder");
    return;
  }

  tarefas.style.border = "2px solid green";
  avisoTarefa.classList.add("esconder");

  const itemListaToDo = document.createElement("li");
  itemListaToDo.textContent = valor;
  listaToDO.appendChild(itemListaToDo);

  tarefas.value = "";

  btnRemover.classList.remove("esconder");
});

btnRemover.addEventListener("click", function () {
  if (listaToDO.children.length > 0) {
    listaToDO.lastElementChild.remove();
  }

  if (listaToDO.children.length === 0) {
    btnRemover.classList.add("esconder");
  }
});

const inputNome = document.getElementById("nomeEmpresa");
const inputFundacao = document.getElementById("fundacaoEmpresa");
const inputEmail = document.getElementById("emailEmpresa");
const inputDescricao = document.getElementById("descricaoEmpresa");
const inputAtuacao = document.getElementById("atuacaoEmpresa");
const btnFazerCadastro = document.getElementById("btnFazerCadastro");
const cadastro = document.getElementById("cadastro");

cadastro.addEventListener("submit", function (d) {
  d.preventDefault();
  const regexNome = /^(?=.*SA).{4,}$/i;
  const dataMinima = new Date("2000-01-01");
  const inputDataUsuario = new Date(inputFundacao.value);
  const regexEmail = /^[^@]+@[^@]+\.[^@]+$/;
  const regexDescricao = inputDescricao.value.length;
  const regexOpcoesValidasDeAtuacao = /^(Vendas|Marketing|Aplicativos)$/;

  if (!regexNome.test(inputNome.value)) {
    inputNome.style.border = "2px solid red";
    return;
  } else if (inputDataUsuario <= dataMinima) {
    inputFundacao.style.border = "2px solid red";
    return;
  } else if (!regexEmail.test(inputEmail.value)) {
    inputEmail.style.border = "2px solid red";
    return;
  } else if (regexDescricao > 50) {
    inputDescricao.style.border = "2px solid red";
    return;
  } else if (!regexOpcoesValidasDeAtuacao.test(inputAtuacao.value)) {
    inputAtuacao.style.border = "2px solid red";
    return;
  }
  alert("Cadastro enviado com sucesso");
  cadastro.submit();
});

const formDev = document.getElementById("formDevParceiro");
const loginDevParceiro = document.getElementById("login");
const idadeDev = document.getElementById("idade");
const senha2Dev = document.getElementById("senha2");
const senhaVerificacao = document.getElementById("senha1");
const regexSenhasDev = /^.{4,10}$/;

formDev.addEventListener("submit", function (d) {
  d.preventDefault();

  const generoDev = document.querySelector('input[name="genero"]:checked');
  const gostoMusicalDev = document.querySelectorAll(
    'input[name="generoMusical"]:checked'
  ).length;

  if (loginDevParceiro.value.length > 8) {
    loginDevParceiro.style.border = "2px solid red";
    return;
  } else if (idadeDev.value <= 12) {
    idadeDev.style.border = "2px solid red";
    return;
  } else if (!generoDev) {
    alert("selecione ao menos um gênero");
    return;
  } else if (gostoMusicalDev <= 1) {
    alert("Selecione ao menos 2 gostos musicais");
    return;
  } else if (
    senhaVerificacao.value !== senha2Dev.value &&
    !regexSenhasDev.test(senhaVerificacao) &&
    !regexSenhasDev.test(senha2Dev)
  ) {
    senha2Dev.style.border = "2px red solid";
    return;
  }
  formDev.submit();
});

const cobrancaWhats = document.getElementById("enviarCobranca");
const telefone = document.getElementById("telefone");
const mensagemCobanca = document.getElementById("mensagemCobranca");
const regexTelefone = /^\(?\d{2}\)?\s?(9?\d{4})-?\d{4}$/;

cobrancaWhats.addEventListener("click", function () {
  const telefoneSemCaracter = telefone.value.replace(/\D/g, "");

  if (!regexTelefone.test(telefone.value)) {
    alert("Insira um telefone válido");
    return;
  }

  const linkProWhatsapp = `https://wa.me/55${telefoneSemCaracter}?text=${mensagemCobanca}`;
  window.open(linkProWhatsapp, "_blank");
});