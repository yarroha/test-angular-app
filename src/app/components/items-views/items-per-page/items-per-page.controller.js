class ItemsPerPageController {
    constructor(itemsManager, state) {
        this.itemsManager = itemsManager;
        this.state = state;
        this.amounts = [1, 3, 6, 9, 12];
    }

    search() {
        this.itemsManager.searchAndUpdateItemsState();
    }
}

ItemsPerPageController.$inject = ['itemsManager', 'state'];

export {ItemsPerPageController};