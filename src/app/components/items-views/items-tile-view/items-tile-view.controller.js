class ItemsTileViewController {
    constructor(itemsManager, state) {
        this.itemsManager = itemsManager;
        this.state = state;
        this.itemsManager.searchAndUpdateItemsState('', 0, 100);
    }
}

ItemsTileViewController.$inject = ['itemsManager', 'state'];

export {ItemsTileViewController};