// == compara apenas o valor
console.log(1==1) // True
console.log(1=='1') //True

// === compara primeiro o tipo e depois o valor
console.log(1===1) // True
console.log(1==='1') //False

const v = []
v[0] = 3.4
v[2] = "abc"
v[10] = 2

for (i=0; i<v.length;i++){
    console.log(v[i])
}


const v1 = []
console.log(v1.length)
v1[100] = 1
console.log(v1.lenght)

// listar nomes que começam com a letra "A"
const nomes = [
    "Ana",
    "Antonio",
    "Rodrigo",
    "Gabriel",
    "Aline"
]
console.log(nomes[i])

for(i=0;i<nomes.length;i++){
    if(nomes[i][0]=="A"){
        console.log(nomes[i])
    }
}