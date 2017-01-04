class ItemCrudController {
    constructor($uibModal, $stateParams, state, itemsManager, $state) {
        this.$uibModal = $uibModal;
        this.$stateParams = $stateParams;
        this.state = state;
        this.$state = $state;
        this.itemsManager = itemsManager;
        this.fileReader = new FileReader();

        this._prepareEditDataIfNeeded();

        //Dirty hack, as .bind() is not allowed inside of templates
        this.updateFile = this.updateFile.bind(this);
    }

    openModal() {
        this.$uibModal.open({
            template: 'Modal window content',
            controller: function () {
            }
        });
    }

    updateFile(fileBlob, scope) {
        let loadEventListener = this.fileReader.addEventListener("load", () => {
            this.state.crudPage.itemInForm.imageData = this.fileReader.result;
            this.fileReader.removeEventListener('load', loadEventListener);
            scope.$apply();
        }, false);

        this.fileReader.readAsDataURL(fileBlob);
    }

    _prepareEditDataIfNeeded() {
        if (this.$stateParams.id) {
            this.itemsManager.getByIdAndUpdateItemInEditState(this.$stateParams.id);
        } else {
            this.itemsManager.clearItemInEditState();
        }
    }

    saveItem() {
        if (this.state.crudPage.itemInForm.id) {
            this.itemsManager.saveEditedItem().then(() => {
                this.$state.go('items.table');
            });
        } else {
            this.itemsManager.saveNewItem().then(() => {
                this.$state.go('items.table');
            });
        }
    }

    deleteItem() {
        this.itemsManager.deleteItem().then(() => {
            this.$state.go('items.table');
        });
    }
}

ItemCrudController.$inject = ['$uibModal', '$stateParams', 'state', 'itemsManager', '$state'];

export {ItemCrudController};