const ItemControler = (function () {
    function Item() {
        this.items = JSON.parse(localStorage.getItem('items')) || [];
    }

    Item.prototype = {
        addItem: function (item) {
            if ((item.name.trim() !== "") && (item.value !== null)) {
                item.id = generateID();
                item.value = parseInt(item.value);
                this.items.push(item);
                localStorage.setItem('items', JSON.stringify(this.items));
            }
        },
        removeItem: function (itemId) {
            this.items = this.items.filter(i => parseInt(i.id) !== parseInt(itemId));
            console.log(this.items);
            localStorage.setItem('items', JSON.stringify(this.items));
        },
        removeAllItems: function () {
            this.items = [];
            localStorage.setItem("items", JSON.stringify(this.items));
        },
        getItems: function () {
            return JSON.parse(localStorage.getItem("items")) ? JSON.parse(localStorage.getItem("items")) : [];
        },
        updateItem: function (item, data) {
            if ((data.name.trim() !== "") && (data.value !== null)) {
                const items = this.getItems();
                const _items = items.map(e => {
                    if (parseInt(e.id) === parseInt(item.id)) {
                        return item = data;
                    } else {
                        return e;
                    }
                })
                localStorage.setItem('items', JSON.stringify(_items));
            }
        }
    }

    function generateID() {
        const date = Date.now();
        const id = date;
        return id;
    }

    return new Item;
}());