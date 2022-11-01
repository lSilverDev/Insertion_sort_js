const books = require('./books_array');

function insertionSort(arrProducts){

    for(let i = 0; i < arrProducts.length; i++){

        let auxCurrent = i;

        while(auxCurrent > 0 && arrProducts[auxCurrent].Price < arrProducts[auxCurrent - 1].Price){
            let currentProduct = arrProducts[auxCurrent];
            let previousProduct = arrProducts[auxCurrent - 1];

            arrProducts[auxCurrent] = previousProduct;
            arrProducts[auxCurrent - 1] = currentProduct;

            auxCurrent--;
        }
    }
    console.log(arrProducts);
}

insertionSort(books);