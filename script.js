let flavors = prompt("Please enter some frozen yogurt flavors seperated by a comma");

function seperateFlavors(str){
    let arr=str.split(',');
    return arr;
}

function showTable(arr){
    const table = {};
    for(i=0;i<arr.length;i++){
        const flv=arr[i];
        if(table[flv]===undefined){
            table[flv] = 0;
        }
        table[flv]++;
    }
    return table;
}

const arr=seperateFlavors(flavors);
console.log(showTable(arr));



