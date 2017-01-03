class ItemsTableViewController {
    constructor($uibModal) {
        this.$uibModal = $uibModal;
    }

    openModal() {
        this.$uibModal.open({
            template: 'content',
            controller: function () {}
        });
    }
}

ItemsTableViewController.$inject = ['$uibModal'];

export { ItemsTableViewController };