class ItemCrudController {
    constructor($uibModal, $stateParams) {
        this.$uibModal = $uibModal;
        this.$stateParams = $stateParams;
    }

    openModal() {
        this.$uibModal.open({
            template: 'Modal window content',
            controller: function () {}
        });
    }
}

ItemCrudController.$inject = ['$uibModal', '$stateParams'];

export { ItemCrudController };