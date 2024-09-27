class Livro {
    constructor(id, titulo, autor, ano_pub, genero) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.ano_pub = ano_pub;
        this.genero = genero;
        console.log("Novo livro adicionado!");
    }

    exibirInformacoes() {
        console.log(`ID: ${this.id}, Título: ${this.titulo}, Autor: ${this.autor}, Ano: ${this.ano_pub}, Gênero: ${this.genero}`);
    }
}

class Biblioteca {
    constructor() {
        this.livros = [];
    }

    adicionarLivro(livro) {
        this.livros.push(livro);
    }

    removerLivro(id) {
        this.livros = this.livros.filter(livro => livro.id !== id);
        console.log(`Livro com ID ${id} removido.`);
    }

    exibirLivros(livro) {
        const lista = document.getElementById("listaLivros");
        lista.innerHTML = ""; 
        this.livros.forEach(livro => {
            const li = document.createElement('li'); 
            li.textContent = livro.exibirInformacoes();
            lista.appendChild(li);
            console.log(biblioteca.exibirLivros(lista));
            console.log("Cheguei no exibir livro");
        });
    }
}

let biblioteca = new Biblioteca();
let livros = []

const btnAdd = document.querySelector(".btnAdd");
btnAdd.addEventListener("click", () => {
    const id = parseInt(document.getElementById("id").value);
    const titulo = document.getElementById("titulo").value;
    const autor = document.getElementById("autor").value;
    const ano_pub = parseInt(document.getElementById("ano_pub").value);
    const genero = document.getElementById("genero").value;

    if (id && titulo && autor && ano_pub && genero) {
        const livro01 = new Livro(id, titulo, autor, ano_pub, genero);
        biblioteca.adicionarLivro(livro01);
        document.getElementById("book-form").reset();
        biblioteca.exibirLivros(livro01)
        console.log("Cheguei no IF");
        
    } else {
        alert("Por favor, preencha todos os campos.");
    }
    const btnEx = document.querySelector(".btnEx");
    btnEx.addEventListener("click", () => {
    biblioteca.exibirLivros(livro01);
    console.log("Cheguei no btnEx");
    });
});