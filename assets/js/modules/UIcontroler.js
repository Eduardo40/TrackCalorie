const UI = (function (Items) {
    function UI() {}
    UI.prototype = {
        init: function init() {
            this.displayItems()
            this.displayTotal();
        },
        displayItems: function () {
            const display = document.querySelector('.display-meals');
            let items = Items.getItems();
            let result = "";
            if (items.length > 0) {
                items.forEach(i => {
                    result += `<li data-id=${i.id}><strong class="calorie-name">${i.name}</strong>: <i class="calorie-value"> <span class='cal-val'>${i.value}</span> Calories</i> <i class='fa fa-pencil'></i></li>`
                })
            } else {
                result += `<li>No items to display</li>`
            }
            display.innerHTML = result;
        },
        displayTotal: function () {
            const displayTotal = document.querySelector('.total-calories');
            let items = Items.getItems();
            let result = 0;
            if (items.length > 0) {
                items.forEach(i => {
                    result += i.value;
                })
            } else {
                result = 0;
            }
            displayTotal.innerHTML = `Total Calories: ${result}`;
        },
        displayUpdate: function (item) {
            document.querySelector('.name').value = item.name;
            document.querySelector('.value').valueAsNumber = item.value;
        },
        displayButtons: function () {
            document.querySelector('.btn-submit').classList.add('hidden');
            document.querySelector('.btn-group').classList.remove('hidden');
        },
        hideButtons: function () {
            document.querySelector('.btn-submit').classList.remove('hidden');
            document.querySelector('.btn-group').classList.add('hidden');
        },
        clearInputFields: function () {
            document.querySelector('.name').value = "";
            document.querySelector('.value').valueAsNumber = 0;
        },
        cancelBtn: function () {
            this.clearInputFields();
            this.hideButtons();
        },
        displayError: function(error) {
            alert(error)
        }
    }

    return new UI;

}(ItemControler))