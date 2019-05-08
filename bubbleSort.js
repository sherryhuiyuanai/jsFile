

const data = [37,45,29,8,12,88,-3]


// function bubbleSort (data) {
//     for (let i = data.length; i > 0; i--) {
//         for (let j = 0; j < i - 1; j++){
//             if (data[j] > data[j+1]){
//                 let temp = data[j]
//                 data[j] = data[j+1]
//                 data[j+1] = temp
//             }
//             console.log(data)
//         }
//     }
//     return data
// }

function bubbleSort(data) {
    for(let i = data.length; i > 0; i--){
        for( let j = 0; j < i-1; j++){
            if(data[j] > data[j+1]){
                [data[j], data[j+1]] = [data[j+1], data[j]]
            }
        }
    }
    return data
}


console.log(bubbleSort(data))





