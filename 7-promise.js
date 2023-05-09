// console.log('Запит даних з серверу ...');

// setTimeout(() => {
//     console.log('підготовка даних для відповіді сервера ...');

//     const product = {
//         name: 'Laptop',
//         price: 10000
//     }

//     setTimeout(() => {
//         product.status = 'inStock';
//         console.log(product);
//     }, 2000)

// }, 10000)


const req = new Promise((resolve, reject) => {}); //проміс колбек функція яка місить резолв(успішно) та реджект(у випадку помилки)


const req2 = new Promise((resolve, reject) => {
    console.log('Запит даних з серверу ...');

    setTimeout(() => {
        console.log('підготовка даних для відповіді сервера ...');

        const product = {
        name: 'Laptop',
        price: 10000
    }

    setTimeout(() => {
        product.status = 'inStock';
        console.log(product);
    }, 2000)

}, 10000)

})


const req3 = new Promise((resolve, reject) => {
    console.log('Запит даних з серверу ...');

    setTimeout(() => {
        console.log('підготовка даних для відповіді сервера ...');

        const product = {
            name: 'Laptop',
            price: 10000
        }

    resolve(product);

    }, 10000)
})

req3.then((product) => {                // метод then і є резолвом кий повертає проміс який є результатом функції
    setTimeout(() => {
        product.status = 'inStock';
        console.log(product);
    }, 2000)
})

// усі функції сайпреса повертають проміси, усі діїї над елементами повертають проміси 

// перевага промісів перед колбеками

const req4 = new Promise((resolve, reject) => {
    console.log('Запит даних з серверу ...');

    setTimeout(() => {
        console.log('підготовка даних для відповіді сервера ...');

        const product = {
            name: 'Laptop',
            price: 10000
        }

    resolve(product);

    }, 10000)
})

req4.then((product) => {              
    const req5 = new Promise ( (resolve, reject) => {
        setTimeout(() => {
            product.status = 'inStock';
            console.log(product);
        }, 2000)
    })

    req5.then( product => {
        console.log(product);
    })
})

// resolve

const req8 = new Promise((resolve, reject) => {
    console.log('Запит даних з серверу ...');

    setTimeout(() => {
        console.log('підготовка даних для відповіді сервера ...');

        const product = {
            name: 'Laptop',
            price: 10000
        }

    resolve(product);

    }, 10000)
})

req8.then((product) => {              
    return new Promise ( (resolve, reject) => {
        setTimeout(() => {
            product.status = 'inStock';
            resolve(product);
        }, 2000)
    })
}).then( product => {
    product.isModified = true;
    return product;
}).then( product => {
    console.log(product)
})

// reject

let error = false;

const req9 = new Promise((resolve, reject) => {
    console.log('Запит даних з серверу ...');

    setTimeout(() => {
        console.log('підготовка даних для відповіді сервера ...');

        const product = {
            name: 'Laptop',
            price: 10000
        }

    if(error){
        reject(product);
    }

    resolve(product);

    }, 10000)
})

req9.then((product) => {              
    return new Promise ( (resolve, reject) => {
        setTimeout(() => {
            product.status = 'inStock';
            resolve(product);
        }, 2000)
    })
}).then( product => {
    product.isModified = true;
    return product;
}).then( product => {
    console.log(product)
}).catch( product => {            // після реджекту весь код в then ігнорується, виконується тільки те, що в catch
    console.log('Error happend')
    console.log(product)
}).finally(() => {
    console.log('finally')        // виконається в будь-якому випадку
})             