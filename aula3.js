// gambiarra no javascript
print = console.log
print("gabriel")


function f(nome){
    console.log(nome)
}

f(nome="teste")

// retorna os vallores pares
function filter (v, f){
    resposta=[]
    v.forEach(x => {
        if (f(x)){
            resposta.push(x)
        }
    });
    return resposta
}
console.log(filter([1, 2, 3, 4, 5, 6], x => x%2==0))


// retorna o tamanho da string
function map (v, f){
    resposta=[]
    v.forEach(x => {
            resposta.push(f(x))
        }
    );
    return resposta

}
console.log(map(['abc', 'abcd'], x => x.length))



function eAgora(){
    let cont=1
    function f1(){
        console.log(cont)
    }
    cont++
    function f2(){
        console.log(cont)
    }
    // objeto json
    return {f1, f2}
}

let resposta_agora = eAgora()
resposta_agora.f1()
resposta_agora.f2()



let mdChefe = {
    nome: "rei lacoste indomável",
    vulgo: "Md Chefe",
    idade: 21,
    endereco: {
        rua: "castelo da realeza",
        referencia: "malote com a tropa",
    },
    pet: "lacoste",
    bebida: "whisky com gosto amadeirado"
}

console.log("nome: " + mdChefe.nome)
console.log("vulgo: " + mdChefe.vulgo)
console.log("endereco: " + mdChefe.endereco.rua + ", " + mdChefe.endereco.referencia)
console.log("pet: " + mdChefe.pet)
console.log("bebida: " + mdChefe.bebida)

/*
// importação
const fs = require("fs")
//função callback
const abrirArquivo= function(nomeArquivo){
    const exibirConteudo = function(erro, conteudo){
        if(erro)
            console.log(`Deu erro: ${erro}`)
        else{
            let fd
            console.log(`Conteudo: ${conteudo.toString()}`)
            const triplo =+conteudo.toString()*3
            const finalizar = (erro)
                if (erro)
                    console.log("Erro ao salvar o triplo")
                else
                    console.log("Salvou com sucesso")
                fs.close(fd)
        }
        fd = fs.writeFile("triplo.txt", triplo.toString(), finalizar)
    }
    fs.readFile(nomeArquivo, exibirConteudo)
    
}
abrirArquivo("arquivo.txt")
*/

