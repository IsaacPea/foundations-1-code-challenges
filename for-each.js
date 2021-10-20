// Use the forEach method to solve these problems! All functions should return a NEW array, without mutating the old array.

/*
Input:
[
    { name: 'spot', type: 'dog' },
    { name: 'rover', type: 'dog' },
    { name: 'jumpy', type: 'frog' },
    { name: 'einstein', type: 'cat' },
]
*/

/*
Output:

['spot', 'rover', 'jumpy', 'einstein']
*/

export function makeArrayOfNames(arr) {
    const shpoloogle = [];
    arr.forEach(item => shpoloogle.push(item.name));
    //console.log(shpoloogle);

    return shpoloogle;
}



/*
Output:

['cat', 'frog', 'dog', 'dog']
*/

export function makeReversedArrayOfTypes(arr) {
    const shwing = [];
    arr.forEach(item => shwing.push(item.type));
    const reversed = shwing.reverse();
    //console.log(reversed);


    return reversed;
}

/*
Output:

[
    { nombre: 'spot', tipo: 'dog' },
    { nombre: 'rover', tipo: 'dog' },
    { nombre: 'jumpy', tipo: 'frog' },
    { nombre: 'einstein', tipo: 'cat' },
]
*/

export function makeSpanishLanguageArray(arr) {
    const spaneesh = [];
    arr.forEach(item => spaneesh.push({ nombre: item.name, tipo: item.type }));

    return spaneesh;

}