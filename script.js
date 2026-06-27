let cursos = [
    
    {imagem: './imgs/darcy.jpg', titulo: 'Inglês intermediário', descricao: 'No Centro de Ensino Professor Darcy Ribeiro aos 11 anos entrei para o curso de inglês com duração de 4 anos, hoje o inglês parte da minha cultura e estudos.'},
    {imagem: './imgs/serratec.png', titulo: 'Residência Serratec', descricao: 'No curso aprendemos os conteúdos de desenvolvimento web e mobile como: HTML, CSS, Java, JavaScript, TypeScript, Banco de dados Relacional, Versionamento GIT, React e React Native.'},
    {imagem: './imgs/uninter.png', titulo: 'Engenharia de Software', descricao: 'Recém matriculado, agora completo 1 ano de faculdade, tendo aprendido conteúdos como: Analise de requisitos, modelagem, Phyton e desenvolvimento web.'}

]

let projetos = [
    {nome: 'Réplica de Site', link: 'https://github.com/DanielKunya/Site_Replica'},
    {nome: 'Trabalho de Curso', link: 'https://github.com/DanielKunya/AfterSkillReactJs'},
    {nome: 'Sistema Escolar', link: 'https://github.com/DanielKunya/Ecidade-C'},
    {nome: 'Projeto Uninter', link: 'https://github.com/DanielKunya/Portifolio-Uninter'},
]

const formacao = document.getElementById('formacao');
const seta = document.getElementById('Expand_Arrow_24');
const projeto = document.getElementById('projetos');

seta.addEventListener('click', e => {
    formacao.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})

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

projetos.forEach(e => {
    const proj = document.createElement("a");
    
    proj.innerText = e.nome;
    proj.href = e.link;

    projeto.appendChild(proj);

})
