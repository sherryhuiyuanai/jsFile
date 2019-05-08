
const object = {
    layer1: {
        layer2:{
            layer3a:{
                layer4a: 0,
            },
            layer3b:1111,
        }
    }
}


//flatten the object 

function flatten(object){
    let result = {}
    for(let props in object){
        if( typeof object[props] == 'object') {

            let temp = flatten(object[props])
            
            for(let i in temp){
                if(typeof temp == 'object'){
                    result[`${props}.${i}`] = temp[i]
                    //console.log(result)
                }
            }
        }
        else {
            result[props] = object[props]
        }
    }
    return result
}
// flatten(object)
console.log(flatten(object))

