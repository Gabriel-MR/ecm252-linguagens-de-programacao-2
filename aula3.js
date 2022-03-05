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
console.log(map(['abc', 'abcd'], x =>x.length))
