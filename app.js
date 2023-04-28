const sum = (a,b) => {
    return a + b
}

let euro = {
    "JPY" : 127.9,
    "USD" : 1.2,
    "GBP" : 0.8,
}


const fromEuroToDollar = (euros) => {
    let dollar = euros * euro.USD;
    return parseFloat(dollar.toFixed(2));
}

const fromDollarToYen = (dollar) => {
    let yen = dollar * (euro.JPY / euro.USD);
    return parseFloat(yen.toFixed(2));
}

const fromYenToPound = (yen) => {
    let pound = yen * euro.GBP / euro.JPY;
    return parseFloat(pound.toFixed(2));
}

console.log(fromYenToPound(10));

module.exports={sum, fromDollarToYen, fromEuroToDollar, fromYenToPound};

