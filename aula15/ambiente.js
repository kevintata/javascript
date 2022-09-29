let num = [5, 8, 2, 9, 3]
num.sort()
num.push(1)

// Variable
console.log(num)

// How many numbers
console.log(`Our vector has ${num.length} positions`)

// Show which variable is in a certain position
console.log(`The first value in the vector is ${num[0]}`)

//Long version of for
for(let pos = 0;pos<num.length;pos++){
    console.log(num[pos])
}

// Find and show position of a number
let pos = num.indexOf(8)

if(pos == -1){
    console.log(`Value not found`)
} else{
    console.log(`O valor 8 esta na posicao ${pos}`)
}