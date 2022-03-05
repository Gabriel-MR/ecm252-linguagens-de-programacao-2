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
    idade: 21,
    endereco: {
        rua: "castelo da realeza",
        referencia: "malote com a tropa",
    },
    pet: "lacoste",
    bebida: "whisky com gosto amadeirado"
}

console.log(mdChefe.nome)
console.log(mdChefe.endereco.rua)
console.log(mdChefe.pet)