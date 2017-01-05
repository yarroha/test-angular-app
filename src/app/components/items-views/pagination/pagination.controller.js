class PaginationController {
    constructor(itemsManager, state) {
        this.itemsManager = itemsManager;
        this.state = state;
    }

    search() {
        this.itemsManager.searchAndUpdateItemsState();
    }
}

PaginationController.$inject = ['itemsManager', 'state'];

export {PaginationController};