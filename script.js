/* =========================================================
   PORTFÓLIO — o JavaScript das aulas 1, 2 e 3
   aula 1 · 06/10 — a página fala: variáveis e template string
   aula 2 · 07/10 — a página responde: if e cliques
   aula 3 · 08/10 — organizando o código: funções e menu

   O index.html já tem os botões 🌙 e ☰, e o style.css já tem
   o modo escuro e o menu do celular colados no fim.
   ========================================================= */

/* =========================================================
   PARTE 1 — AULA 1 (06/10): a página fala
   ========================================================= */

const nome = "André";

// console.log("Olá mundo")
// console.log(nome)
// console.log(nome + " Desenvolvedor")

let projetosFeitos = 2;
projetosFeitos = projetosFeitos + 9;

// console.log(nome + " possui " + projetosFeitos + " projetos")

const profissao = "Tentanto entender o que é um Desenvolvedor de IA";
const cidade = "Campo Mourão";
const anoAtual = 2026;
const anoNascimento = 2025;
const anoDeCurso = 2024

const idade = anoAtual - anoNascimento
const curso = anoAtual- anoDeCurso

// console.log(nome + " possui " + idade + " de idade, trabalha como " + profissao + " e mora em " + cidade + ".")

const titulo = `Oi, eu sou ${nome}`

const bio = `possuo ${idade} de idade, ${curso} de curso, trabalha com ${profissao} e mora em ${cidade}. `

console.log(titulo + bio)

document.querySelector(".hero h1").textContent = nome
document.querySelector(".hero h2").textContent = `${profissao} - ${cidade}`

const birthday = new Date("July, 28 2025");

document.querySelector(".hero p").textContent = `${bio} - data de aniversario ${birthday.getDate()}/${birthday.getMonth() + 1}/${birthday.getFullYear()}`

const hora = new Date().getHours();

document.querySelector(".rodape h5").textContent = nome

document.querySelector(".rodape h6").textContent = `
Feito com HTML, CSS e JavaScript - ${hora}h`


/* =========================================================
   PARTE 2 — AULA 2 (07/10): revisão e dúvidas

   O tema de cada aula:
   aula 1 · 06/10 — a página fala: variáveis e template string
   aula 2 · 07/10 — a página responde: if e cliques
   aula 3 · 08/10 — organizando o código: funções e menu
   aula 4 · 15/10 — listas: arrays, objetos e arquivo de dados
   aula 5 · 20/10 — fechando o projeto: formulário e publicação
   03, 04 e 05/11 — ajuda no projeto · 06/11 — apresentação
   ========================================================= */


/* ---------------------------------------------------------
   0. PARA QUE SERVE O console.log
   Mostra mensagens no console (F12), não na página: quem
   visita o site não vê. Serve para:
   - espiar o valor de uma variável
   - confirmar que uma linha rodou
   - achar erros: algo não apareceu? console.log nele
   textContent = para o visitante · console.log = para você
   No back-end não existe página: o console.log é como o
   servidor fala com a gente, no terminal.
   --------------------------------------------------------- */

console.log(idade);
console.log("A idade é", idade);   // com vírgula, mostra várias coisas

// Pratique: mostre no console a sua cidade e a sua profissão.


/* ---------------------------------------------------------
   1. TIPOS
   string  → texto, sempre entre aspas: "João", "22"
   number  → número, sem aspas: 22, 3.5 (ponto, não vírgula)
   boolean → só true ou false
   typeof pergunta o tipo:  typeof idade → "number"
   Pegadinha:  "10" + 5 → "105"  (com texto, o + gruda)
   --------------------------------------------------------- */


/* ---------------------------------------------------------
   2. AS TRÊS ASPAS
   "duplas"   Shift + tecla à esquerda do 1
   'simples'  tecla à esquerda do 1, sem Shift
   `crase`    Shift + tecla do acento agudo (´), depois espaço

   Duplas e simples são a mesma coisa: abriu com uma, fecha
   com a mesma. Misturar ("texto') dá:
     SyntaxError: Invalid or unexpected token
   A crase (o nome certo é acento grave; em inglês, backtick)
   é a única que aceita lacunas com ${}.
   Se apertar ' ou ` e não aparecer nada, aperte espaço.
   --------------------------------------------------------- */

// O + junta exatamente o que tem, sem espaço ("João Paulopossui").
// Com crase, o espaço é só digitar:
console.log(`${titulo} ${bio}`);

// Pratique: qual é o tipo de 22, de "22" e de true? Confira com typeof.
// Pratique: corrija a linha  const frase = 'Oi";


/* ---------------------------------------------------------
   3. DATA E HORA
   new Date()  → uma FOTO do relógio no momento em que a
                 página abriu. Ela não muda sozinha: o F5
                 tira uma foto nova. Por isso a hora fica
                 numa const.
   new Date("July, 28 2004") → a foto de um DIA ESPECÍFICO
                 (o texto vai em inglês: mês, dia e ano)
   getHours()    → a hora, de 0 a 23 (um number)
   getDate()     → o dia do mês
   getMonth()    → o mês, mas começando do ZERO
                   (janeiro = 0), por isso o + 1
   getFullYear() → o ano

   CUIDADO: new Date("28/07/2004") não funciona. O JavaScript
   não entende o formato brasileiro: dá Invalid Date, e na
   página aparece NaN ("Not a Number", não é um número).

   A linha do aniversário da aula 1, pedaço por pedaço:
     document.querySelector(".hero p")  → procure o parágrafo do topo
     .textContent =                     → troque o texto dele por
     `${bio} - data de aniversario      → a frase de crase, com a bio
     ${birthday.getDate()}              → o dia: 28
     /${birthday.getMonth() + 1}        → o mês: 7
     /${birthday.getFullYear()}`        → o ano: 2004
   --------------------------------------------------------- */

const agora = new Date();
const dia = agora.getDate();
const mes = agora.getMonth() + 1;
const ano = agora.getFullYear();

console.log(dia, mes, ano);

// Esta linha vem DEPOIS da linha do const hora.
// Antes dela dá: Cannot access 'hora' before initialization
document.querySelector(".rodape h6").textContent = `Feito com HTML, CSS e JavaScript · ${dia}/${mes}/${ano} às ${hora}h`;

// Pratique: mostre no console "Hoje é dia" e o dia de hoje.
// Pratique: mostre no console só o ano em que você nasceu, usando birthday.


/* ---------------------------------------------------------
   4. MUDANDO OS BOTÕES PELO JAVASCRIPT
   document      → a página inteira
   querySelector → procure (pega o PRIMEIRO que encontrar)
   "seletor"     → o mesmo do CSS: . para classe, # para id
   textContent   → o texto que aparece
   href          → para onde o link leva

   "Ver projetos" e "Falar comigo" são links (<a>) com cara de
   botão. Link leva para outro lugar; botão (<button>) faz
   uma ação. O JavaScript muda a página aberta, não o arquivo:
   o index.html continua igual.
   --------------------------------------------------------- */

const botaoProjetos = document.querySelector(".botao");
botaoProjetos.textContent = "Meus projetos";

const botaoContato = document.querySelector(".botao-claro");
botaoContato.textContent = "Bora conversar";

// O botão de e-mail também tem a classe .botao,
// então dizemos onde ele está: dentro do #contato
const email = "andre@email.com";
const botaoEmail = document.querySelector("#contato .botao");
botaoEmail.textContent = email;
botaoEmail.href = `mailto:${email}`;

// Pratique: troque o texto do primeiro link "Ver projeto", nos cards
// de Projetos, para "Abrir projeto". Dica: o seletor é "#projetos a".


/* =========================================================
   PARTE 3 — AULA 2 (07/10): a página responde
   ========================================================= */


/* ---------------------------------------------------------
   5. DECISÕES: if e else
   if (pergunta de sim ou não) { caminho do sim }
   else { caminho do não }

   Comparações:
     >   maior            <=   menor ou igual
     <   menor            ===  igual
     >=  maior ou igual   !==  diferente

   ATENÇÃO: um = GUARDA, três === COMPARAM.
   --------------------------------------------------------- */

if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}

// O else é opcional:
if (cidade === "Peabiru") {
  console.log("Vizinho!");
}

// && (E): as duas precisam ser verdade
// || (OU): basta uma
const temIngresso = true;
const temDocumento = false;

if (temIngresso && temDocumento) {
  console.log("Pode entrar no show");
} else {
  console.log("Não pode entrar");
}

// Pratique: se projetosFeitos for maior que 5, mostre no console
// "Já tenho experiência".


/* ---------------------------------------------------------
   6. SAUDAÇÃO POR HORÁRIO: else if
   O JavaScript testa de cima para baixo e para no primeiro
   caminho que der certo.
   Para testar outro horário, troque por um minuto a linha
   da hora por:  const hora = 9;
   --------------------------------------------------------- */

let saudacao = "";

if (hora < 12) {
  saudacao = "Bom dia";
} else if (hora < 18) {
  saudacao = "Boa tarde";
} else {
  saudacao = "Boa noite";
}

document.querySelector(".hero h1").textContent = `${saudacao}! Eu sou ${nome}`;


/* ---------------------------------------------------------
   7. MODO ESCURO
   Na aula 3, o código do clique ganhou uma função com nome.
   Ele está mais abaixo, na parte 4 (item 12).
   --------------------------------------------------------- */


/* =========================================================
   PARTE 4 — AULA 3 (08/10): organizando o código
   ========================================================= */


/* ---------------------------------------------------------
   8. FUNÇÃO: uma receita com nome
   function nome() { ...ordens... }  → escreve a receita
   nome();                            → CHAMA a receita (roda)
   Escrever a receita não faz o bolo: sem chamar, nada
   acontece. E sem os parênteses, também não.
   --------------------------------------------------------- */

function mostrarBoasVindas() {
  console.log("Bem-vindo ao meu portfólio!");
}

mostrarBoasVindas();
mostrarBoasVindas();

// Pratique: crie a função mostrarCidade, que escreve a sua cidade
// no console, e chame ela.


/* ---------------------------------------------------------
   9. PARÂMETRO: a lacuna da função
   O valor da chamada entra na lacuna, na mesma ordem:
   o primeiro valor vai para a primeira lacuna.
   --------------------------------------------------------- */

function escreverNaPagina(seletor, texto) {
  document.querySelector(seletor).textContent = texto;
}

// Antes:  document.querySelector(".rodape h5").textContent = nome
// Depois: escreverNaPagina(".rodape h5", nome)
// Na aula, trocamos as linhas repetidas da aula 1 por chamadas
// como estas. No seu script, pode apagar as linhas antigas.
escreverNaPagina(".hero h2", `${profissao} - ${cidade}`);
escreverNaPagina(".rodape h5", nome);

// Pratique: troque o título "Sobre mim" por "Quem sou eu"
// usando escreverNaPagina (seletor "#sobre h2").


/* ---------------------------------------------------------
   10. return: a função que DEVOLVE
   FAZER (sem return) → mexe na página: escreverNaPagina(...)
   DEVOLVER (return)  → entrega um valor para usar:
                        montarSaudacao(hora)
   Sem o return, aparece undefined ("não tem nada aqui").
   --------------------------------------------------------- */

function dobro(numero) {
  return numero * 2;
}

console.log(dobro(5));   // 10

// A saudação da aula 2, agora como função.
// Para testar outro horário, no console: montarSaudacao(9)
function montarSaudacao(horaAtual) {
  if (horaAtual < 12) {
    return "Bom dia";
  } else if (horaAtual < 18) {
    return "Boa tarde";
  } else {
    return "Boa noite";
  }
}

escreverNaPagina(".hero h1", `${montarSaudacao(hora)}! Eu sou ${nome}`);

// Pratique: crie a função idadeEm(ano), que devolve quantos anos
// você vai ter naquele ano. Mostre idadeEm(2030) no console.


/* ---------------------------------------------------------
   11. ESCOPO
   O que é criado dentro da função só existe lá dentro.
   Fora dela, dá: ReferenceError: segredo is not defined
   De dentro da função, dá para usar as variáveis de fora.
   --------------------------------------------------------- */

function testarEscopo() {
  const segredo = 42;
  console.log(segredo);
}

testarEscopo();


/* ---------------------------------------------------------
   12. MODO ESCURO COM FUNÇÃO
   No addEventListener vai o NOME da função, SEM parênteses:
   o navegador roda quando o clique acontecer.
   Com parênteses — alternarTema() — ela roda na hora: a
   página já abre escura e o clique para de funcionar.
   --------------------------------------------------------- */

const pagina = document.querySelector("html");
const botaoTema = document.querySelector(".botao-tema");

function alternarTema() {
  pagina.classList.toggle("modo-escuro");

  if (pagina.classList.contains("modo-escuro")) {
    botaoTema.textContent = "☀️";
  } else {
    botaoTema.textContent = "🌙";
  }
}

botaoTema.addEventListener("click", alternarTema);


/* ---------------------------------------------------------
   13. MENU DO CELULAR
   classList.add    → põe a classe
   classList.remove → tira a classe
   setAttribute     → muda um atributo do HTML (aqui, o
                      aria-expanded, que avisa o leitor de
                      tela se o menu está aberto)
   Funções podem chamar outras funções: a alternarMenu decide
   se chama a abrirMenu ou a fecharMenu.
   Para testar: F12 → Ctrl + Shift + M (modo celular).
   --------------------------------------------------------- */

const botaoMenu = document.querySelector(".botao-menu");
const menu = document.querySelector(".topo nav");

function abrirMenu() {
  menu.classList.add("aberto");
  botaoMenu.textContent = "✕";
  botaoMenu.setAttribute("aria-expanded", "true");
}

function fecharMenu() {
  menu.classList.remove("aberto");
  botaoMenu.textContent = "☰";
  botaoMenu.setAttribute("aria-expanded", "false");
}

function alternarMenu() {
  if (menu.classList.contains("aberto")) {
    fecharMenu();
  } else {
    abrirMenu();
  }
}

botaoMenu.addEventListener("click", alternarMenu);


/* =========================================================
   DESAFIO DA AULA
   1) Troque as linhas repetidas da aula 1 por escreverNaPagina.
   2) Crie a função nivelDeProjetos(quantidade), que DEVOLVE:
      "começando" se for menos de 5, "pegando o jeito" se for
      menos de 10, e "veterano" no resto. Mostre no primeiro
      parágrafo do Sobre mim ("#sobre p") com escreverNaPagina.
   3) Faça o menu fechar quando clicar no link "Sobre".
      Dica: ".topo nav a" pega o primeiro link do menu.
   4) Bônus: faça o mesmo com os outros três links.
      Dica: ".topo nav a[href='#skills']"
   5) Mande no grupo um print do menu aberto no modo celular.

   Próxima aula: 15/10. Revise função, parâmetro e return.
   ========================================================= */
