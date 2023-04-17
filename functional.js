let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

function impreatoveUrls(elements){
    let urls = [];
    elements.forEach(element => {
        urls.push(urlify(element));
    });
    return urls;
}

// console.log(impreatoveUrls(states));

//let z = [1, 2, 3]
//states.map(n => n*n);

function urlify(string) {
    return string.toLowerCase().split(/\s+/).join("-")
}

function functionalUrls(elements){
    return elements.map(element => urlify(element))
}
//console.log(functionalUrls(states))

function impreatoveSignals(elements) {
    let singels = [];
    elements.forEach(function (element) {
        if(element.split(/\s+/).length === 1){
            singels.push(element);
        }
    });
    return singels;
}
// console.log(impreatoveSignals(states));

function functionalSingels(elements){
    return elements.filter(element => element.split(/\s+/).length === 1);
}

// console.log(functionalSingels(states));

let numbers = [1,2,3,4,5,6,7,8,9,10];

function imperativSum(elements){
    let total = 0; 
    elements.forEach((n) => {
        total += n;
    })
    return total;
}

// console.log(imperativSum(numbers))

function functionalSum (elements){
    return elements.reduce(
        (total, n) => {
            return total += n;
        }
    )
}
//console.log(functionalSum(numbers))

function imperativLenght(elements){
    let lengths = {};
    elements.forEach(e => {
        lengths[e] = e.length;
    })

    return lengths;
}

// console.log(imperativLenght(states))

function functionalLenght(elements){
    return elements.reduce(
        (obj, e) => {
            obj[e] = e.length
            return obj
        },{})
}

console.log(functionalLenght(states))
