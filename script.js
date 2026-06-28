// Arrays simples com objetivo de tornar o site modular,
// Utilizando a estratégia de Componentização.
// Toda vez que um item novo é adicionado a lista
// Automaticamente já aparece no site funcional
let cursos = [
    
    {imagem: './imgs/darcy.jpg', titulo: 'Inglês intermediário', descricao: 'No Centro de Ensino Professor Darcy Ribeiro aos 11 anos entrei para o curso de inglês com duração de 4 anos, hoje o inglês faz parte da minha cultura e estudos.'},
    {imagem: './imgs/serratec.png', titulo: 'Residência Serratec', descricao: 'No curso aprendemos os conteúdos de desenvolvimento web e mobile como: HTML, CSS, Java, JavaScript, TypeScript, Banco de dados Relacional, Versionamento GIT, React e React Native.'},
    {imagem: './imgs/uninter.png', titulo: 'Engenharia de Software', descricao: 'Recém matriculado, agora completo 1 ano de faculdade, tendo aprendido conteúdos como: Analise de requisitos, modelagem, Python e desenvolvimento web.'}

]

let projetos = [

    {nome: 'Réplica de Site', link: 'https://github.com/DanielKunya/Site_Replica'},
    {nome: 'Trabalho de Curso', link: 'https://github.com/DanielKunya/AfterSkillReactJs'},
    {nome: 'Sistema Escolar', link: 'https://github.com/DanielKunya/Ecidade-C'},
    {nome: 'Projeto Uninter', link: 'https://github.com/DanielKunya/Portifolio-Uninter'},
]

//-------------------------------------------------------------------------------------------------------


//Evento para a seta no começo do site rolar a tela
const seta = document.getElementById('Expand_Arrow_24');
const header = document.querySelector('header')
const sobremim = document.getElementById('sobremim')

seta.addEventListener('click', e => {
    formacao.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})



header.children[0].addEventListener('click', e => {
    document.body.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})

header.children[1].addEventListener('click', e => {
    formacao.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})

header.children[2].addEventListener('click', e => {
    projeto.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})

header.children[3].addEventListener('click', e => {
    sobremim.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})

header.children[4].addEventListener('click', e => {
    formulario.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})


//--------------------------------------------------------------------------------------------------------

//As funções de componentização percorrem a lista criada no começo do documento,
//Criam elementos para cada item e adicionam no arquivo index.html.
//A estilização e responsividade é feita pelo CSS automaticamente.

//Componentização da aba de formação
const formacao = document.getElementById('formacao');

cursos.forEach((e, index) => {
    const container = document.createElement("div");
    const img = document.createElement("img");
    const titulo = document.createElement("h1");
    const descricao = document.createElement("span");
    
    container.classList.add("formacao-container");
    if(index % 2 !== 0){
        container.classList.add("end")
    }
    
    
    img.src = e.imagem;
    titulo.innerText = e.titulo;
    descricao.innerText = e.descricao;
    
    container.appendChild(img);
    container.appendChild(titulo);
    container.appendChild(descricao);
    
    formacao.appendChild(container);
    
})

//Componentização da aba projetos
const projeto = document.getElementById('projetos');

projetos.forEach(e => {
    const proj = document.createElement("a");
    
    proj.innerText = e.nome;
    proj.href = e.link;

    projeto.appendChild(proj);

})

//----------------------------------------------------------------------------

//Função para interação da caixa de notificação
const formulario = document.getElementById('formulario');
const notificacao = document.getElementById("notificacao")

formulario.children[5].addEventListener('click', e => {
    let nome = formulario.children[1].value;
    let email = formulario.children[2].value;
    let assunto = formulario.children[3].value;
    let mensagem = formulario.children[4].value;

    if(nome.trim() === "" || email.trim() === "" || assunto.trim() === "" || mensagem.trim() === ""){
        notificacao.children[0].children[0].innerText = "Todos os campos devem ser preenchidos";
        notificacao.style.display = 'flex'

    } else if(formulario.children[2].checkValidity() === false){
        notificacao.children[0].children[0].innerText = "E-mail inválido";
        notificacao.style.display = 'flex'
    } else{
        notificacao.children[0].children[0].innerText = "Mensagem enviada, aguarde o contato pelo E-mail";
        notificacao.style.display = 'flex'
    }
})

notificacao.children[0].children[1].addEventListener('click', e => {
    notificacao.style.display = 'none'
})