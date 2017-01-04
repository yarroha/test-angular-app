class ItemsTableViewController {
    constructor(itemsManager, state) {
        this.itemsManager = itemsManager;
        this.state = state;
        this.itemsManager.searchAndUpdateItemsState('', 0, 100);
    }
}

ItemsTableViewController.$inject = ['itemsManager', 'state'];

export {ItemsTableViewController};