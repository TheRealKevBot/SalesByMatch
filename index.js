/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

const example = {
    ar: [10, 20, 20, 10, 10, 30, 50, 10, 20],
    n: 9
}

const example1 = {
    ar: [10, 20, 20, 10, 10, 30, 50, 10, 20, 10, 20, 20, 10, 10, 30, 50, 10, 20],
    n: 18
}

const example2 = {
    ar: [10, 20, 20, 10, 10, 30, 50, 10, 20, 10, 30, 50, 20, 10],
    n: 14
}

function sockMerchant(n, ar) {
    let sockPairs = 0
    let socks = {} 
    ar.forEach(color => {
        if (socks[color]) {
            sockPairs += 1
            socks[color] = 0
            // console.log('If', socks)
            // console.log('If', sockPairs)
        } else {
            socks[color] = 1
            // console.log('Else', socks)
            // console.log('Else', sockPairs)  
        }
    })
    // console.log('Final', socks)
    // console.log('Final', sockPairs)
    return sockPairs
} 

/* 
* Create a count for pairs of socks starting with 0
* Create a container to store sock color's values
* IF a sock color matches then add one (1) to the count and reset the sock color key to zero (0)
* ELSE a key for that socks color will be created with a count of one (1)
* Return final count of sock pairs 
*/

// sockMerchant(example.n, example.ar)

console.log(sockMerchant(example.n, example.ar))


function sockMerchant1(n, ar) {
    let sockPairs = 0
    let socks = {}
    ar.forEach(color => {
        socks[color] ? (socks[color] = 0, sockPairs+= 1) : socks[color] = 1
        // console.log('ForEach', sockPairs)
        // console.log('ForEach', socks)
    })
    // console.log(sockPairs)
    // console.log(socks)
    return sockPairs
}  

/* 
* Create a count for pairs of socks starting with 0
* Create a container to store sock color's values
* If a sock color matches then add one (1) to the count and reset the sock color key to zero (0)
* or we will create a key for that socks color with a count of one (1)
* Return final count of sock pairs 
*/

// sockMerchant1(example.n, example.ar)

console.log(sockMerchant1(example.n, example.ar))