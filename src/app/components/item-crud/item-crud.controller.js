import {RemoveItemConfirmationPopup} from './confirmation-popup/remove-item-confirmation-popup.component';

class ItemCrudController {
    constructor($uibModal, $stateParams, state, itemsManager, $state) {
        this.$uibModal = $uibModal;
        this.$stateParams = $stateParams;
        this.state = state;
        this.$state = $state;
        this.itemsManager = itemsManager;
        this.fileReader = new FileReader();
        this.resetChangesDisabled = false;

        this._prepareEditDataIfNeeded();

        //Dirty hack, as .bind() is not allowed inside of templates
        this.updateFile = this.updateFile.bind(this);
    }

    updateFile(fileBlob, scope) {
        let loadEventListener = this.fileReader.addEventListener("load", () => {
            this.state.crudPage.itemInForm.imageData = this.fileReader.result;
            this.fileReader.removeEventListener('load', loadEventListener);
            scope.$apply();
        }, false);

        this.fileReader.readAsDataURL(fileBlob);
        this.checkPossibilityForResetChanges();
    }

    _prepareEditDataIfNeeded() {
        if (this.$stateParams.id) {
            this.itemsManager.getByIdAndUpdateStockItemState(this.$stateParams.id);
        } else {
            this.itemsManager.clearStockItemState();
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
        let modalInstance = this.$uibModal.open({
            component: RemoveItemConfirmationPopup.selector,
        });

        modalInstance.result.then(() => {
            this.itemsManager.deleteItem().then(() => {
                this.$state.go('items.table');
            });
        });
    }

    resetChanges() {
        this.itemsManager.resetChangesInEditForm();
        this.checkPossibilityForResetChanges();
    }

    checkPossibilityForResetChanges() {
        this.resetChangesDisabled = JSON.stringify(this.state.crudPage.stockItem) === JSON.stringify(this.state.crudPage.itemInForm);
    }
}

ItemCrudController.$inject = ['$uibModal', '$stateParams', 'state', 'itemsManager', '$state'];

export {ItemCrudController};