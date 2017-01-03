class ItemsTableViewController {
    constructor(itemsManager, state) {
        this.itemsManager = itemsManager;
        this.state = state;
        this.itemsManager.getAll();
    }
}

ItemsTableViewController.$inject = ['itemsManager', 'state'];

export { ItemsTableViewController };