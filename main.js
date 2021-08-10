const app = new Vue({
    el:'#app',
    data: {
        books: [
            {id:1,
            name:'aa',
            date:'2017.10',
            price:45,
            count:1},
            {id:2,
            name:'bb',
            date:'2017.11',
            price:55,
            count:1},
            {id:3,
            name:'cc',
            date:'2018.3',
            price:64,
            count:1},
            {id:4,
            name:'dd',
            date:'2018.6',
            price:68,
            count:1}
        ]
    }
})
console.log(app)