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
        return `ID: ${this.id}, Título: ${this.titulo}, Autor: ${this.autor}, Ano: ${this.ano_pub}, Gênero: ${this.genero}`;
    }
}

class Biblioteca {
    constructor() {
        this.livros = [];
    }

    adicionarLivro(livro) {
        this.livros.push(livro);
        // this.exibirLivros();
    }

    removerLivro(id) {
        this.livros = this.livros.filter(livro => livro.id !== id);
        console.log(`Livro com ID ${id} removido.`);
        // this.exibirLivros();
    }

    exibirLivros() {
        const lista = document.getElementById("listaLivros");
        lista.innerHTML = ""; 
        this.livros.forEach(livro => {
            const div = document.createElement('div'); 
            div.textContent = livro.exibirInformacoes();
            lista.appendChild(div);
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const biblioteca = new Biblioteca();
    let idCounter = 1;

    const btnAdd = document.querySelector(".btnAdd");
    btnAdd.addEventListener("click", () => {
        const id = parseInt(document.getElementById("id").value);
        const titulo = document.getElementById("titulo").value;
        const autor = document.getElementById("autor").value;
        const ano_pub = parseInt(document.getElementById("ano_pub").value);
        const genero = document.getElementById("genero").value;

        if (id && titulo && autor && ano_pub && genero) {
            const novoLivro = new Livro(id, titulo, autor, ano_pub, genero);
            biblioteca.adicionarLivro(novoLivro);
            document.getElementById("book-form").reset();
        } else {
            alert("Por favor, preencha todos os campos.");
        }
    });
});
