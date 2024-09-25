class Livro{
    constructor(id, titulo, autor, ano_pub, genero){
        this.id = id
        this.titulo = titulo;
        this.autor = autor;
        this.ano_pub = ano_pub;
        this.genero = genero
        console.log("Novo livro adicionado!")
    }

    exibirInformacoes(){
        console.log(`id: ${this.id}`);
        console.log(`titulo: ${this.titulo}`);
        console.log(`autor: ${this.autor}`);
        console.log(`ano_pub: ${this.ano_pub}`);
        console.log(`genero: ${this.genero}`);
    }
}

class Biblioteca{
    constructor() {
        this.livros = []
    }
    adicionarLivro(livro){
        this.livros.push(livro);
    }
    removerLivro(id){
        this.livros = this.livros.filter(livro => livro.id !== id);
        console.log(`Livro com ID ${id} removido.`);
    }
    exibirLivros(){
        this.livros.forEach(livro => livro.exibirInformacoes());
    }
}

let biblioteca = new Biblioteca();
let livro1 = new Livro(1, "A Seleção", "Kiera Cass", 2012, "Romance");
biblioteca.adicionarLivro(livro1);

let livro2 = new Livro(2, "Diário da Anne Frank", "Anne Frank", 1947, "Autobioagrafia");
biblioteca.adicionarLivro(livro2);


console.log("Livros na biblioteca:");
biblioteca.exibirLivros();

biblioteca.removerLivro(1);

console.log("Livros na biblioteca após remoção:");
biblioteca.exibirLivros();
document.write()