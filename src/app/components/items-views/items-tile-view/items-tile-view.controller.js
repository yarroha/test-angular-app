class ItemsTileViewController {
    constructor(itemsManager, state) {
        this.itemsManager = itemsManager;
        this.state = state;
        this.itemsManager.getAll();
    }
}

ItemsTileViewController.$inject = ['itemsManager', 'state'];

export { ItemsTileViewController };