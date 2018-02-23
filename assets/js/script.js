(function () {
    /* Main .js File */
    let item; // valriable for passing data
    document.addEventListener("DOMContentLoaded", UI.init.bind(UI));

    document.querySelector('.clear-all-btn').addEventListener('click', (e) => {
        ItemControler.removeAllItems();
        UI.init();
    })

    document.querySelector('form').addEventListener('submit', function (e) {
        e.preventDefault();
        const itemName = e.target[0].value; //item name
        const itemValue = e.target[1].valueAsNumber; // item value
        ItemControler.addItem({
            name: itemName,
            value: itemValue
        })
        this.reset();
        UI.init();

    })

    document.querySelector('.display-meals').addEventListener('click', function (e) {
        if (e.target.classList.contains('fa')) {
            const itemValue = e.target.previousSibling.previousSibling.firstElementChild.textContent;
            const itemName = e.target.parentElement.firstChild.textContent
            const id = e.target.parentElement.getAttribute('data-id');
            item = {
                name: itemName,
                value: itemValue,
                id
            }
            UI.displayUpdate(item);
            UI.displayButtons();
        }
    })

    document.querySelector('.btn-update').addEventListener('click', function (e) {
        let itemName = document.querySelector('.name').value;
        let itemValue = document.querySelector('.value').valueAsNumber;
        const item_2 = {
            name: itemName,
            value: itemValue,
            id: item.id
        }
        ItemControler.updateItem(item, item_2);
        UI.hideButtons();
        UI.clearInputFields()
        UI.init();
    });

    document.querySelector('.btn-delete').addEventListener('click', function (e) {
        ItemControler.removeItem(item.id);
        UI.clearInputFields();
        UI.hideButtons();
        UI.init();
    })

    document.querySelector('.btn-cancel').addEventListener('click', UI.cancelBtn.bind(UI))

}());