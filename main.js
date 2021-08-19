const app = new Vue({
    el:'#app',
    data: {
        books: [
            {id:1,
            name:'aa',
            date:'2017.10',
            price:45.00,
            count:1},
            {id:2,
            name:'bb',
            date:'2017.11',
            price:55.00,
            count:1},
            {id:3,
            name:'cc',
            date:'2018.3',
            price:64.00,
            count:1},
            {id:4,
            name:'dd',
            date:'2018.6',
            price:68.00,
            count:1}
        ]
    },
    filters: {
        showprice(price){
            return "$" + price.toFixed(2) 
        }
    },
    computed:{
        totalprice(){
            let totalprice = 0
            for (let i in this.books) {
                const book = this.books[i]
                totalprice += book.price * book.count
                }
                return totalprice
            } 
    }
})
