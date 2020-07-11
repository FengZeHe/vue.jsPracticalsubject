var app = new Vue({
    el: "#app",
    data: {
        isCheckedAll: false,
        list: [
            {
                title_name: "电子产品",
                content: [
                    {
                        id: 1,
                        name: "iphoneXR",
                        price: 4599,
                        count: 1,
                        check: false
                    },
                    {
                        id: 2,
                        name: "iphoneXs",
                        price: 5099,
                        count: 1,
                        check: false
                    },
                    {
                        id: 3,
                        name: "Macbook Pro",
                        price: 13199,
                        count: 1,
                        check: false
                    }
                ]
            },
            {
                title_name: "果蔬",
                content: [
                    {
                        id: 1,
                        name: "Apple",
                        price: 4,
                        count: 1,
                        check: false
                    },
                    {
                        id: 2,
                        name: "Banana",
                        price: 1,
                        count: 1,
                        check: false
                    },
                    {
                        id: 3,
                        name: "Peach",
                        price: 5,
                        count: 1,
                        check: false
                    }
                ]
            }
        ],
        total: 0
    },
    methods: {
        handleReduce: function (index1, index2) {
            if (this.list[index1].content[index2].count == 1) {
                return;
            }
            else {
                this.list[index1].content[index2].count--;
            }
        },
        handleAdd: function (index1, index2) {
            this.list[index1].content[index2].count++;
        },
        handleRemove: function (index1, index2) {
            this.list[index1].content.splice(index2, 1)
        },
        check: function (index1, index2) {
            if (this.list[index1].content[index2].check) {
                this.list[index1].content[index2].check = false;
                this.isCheckedAll = false;
            }
            else {
                this.list[index1].content[index2].check = true;
            }
        },
        checkAll: function () {
            if (this.isCheckedAll == false) {
                for (var i = 0; i < this.list.length; i++) {
                    var item = this.list[i];
                    for (var j = 0; j < item.content.length; j++) {
                        var items = item.content[j];
                        items.check = true;
                    }
                }
                this.isCheckedAll = true;
            } else {
                for (var i = 0; i < this.list.length; i++) {
                    var item = this.list[i];
                    for (var j = 0; j < item.content.length; j++) {
                        var items = item.content[j];
                        items.check = false;
                    }
                }
                this.isCheckedAll = false;
            }
        },
        buy: function () {
            alert('结账成功！共消费' + this.total + "元");

            this.list = [];
        }
    },
    computed: {
        totalPrice: function () {
            var total = 0;
            for (var i = 0; i < this.list.length; i++) {
                var item = this.list[i];
                for (var j = 0; j < item.content.length; j++) {
                    var items = item.content[j];
                    if (items.check == true) {
                        total += items.price * items.count;
                    }
                }
            }
            this.total = total
            return total;
        }
    }


})