import {RemoveItemConfirmationPopup} from './confirmation-popup/remove-item-confirmation-popup.component';

class ItemCrudController {
    constructor($uibModal, $stateParams, state, itemsManager, $state) {
        this.$uibModal = $uibModal;
        this.$stateParams = $stateParams;
        this.state = state;
        this.$state = $state;
        this.itemsManager = itemsManager;
        this.resetChangesDisabled = false;

        this._prepareEditDataIfNeeded();

        //Dirty hack, as .bind() is not allowed inside of templates
        this.updateFile = this.updateFile.bind(this);
    }

    updateFile() {
        this.checkPossibilityForResetChanges();
    }

    _prepareEditDataIfNeeded() {
        if (this.$stateParams.id) {
            this.itemsManager.getByIdAndUpdateStockItemState(this.$stateParams.id)
                .then(this.checkPossibilityForResetChanges.bind(this));
        } else {
            this.itemsManager.clearStockItemState();
        }
    }

    saveItem() {
        if (this.state.crudPage.itemInForm.id) {
            this.itemsManager.saveEditedItem().then(() => {
                this.goToTableView();
            });
        } else {
            this.itemsManager.saveNewItem().then(() => {
                this.goToTableView();
            });
        }
    }

    deleteItem() {
        let modalInstance = this.$uibModal.open({
            component: RemoveItemConfirmationPopup.selector,
        });

        modalInstance.result.then(() => {
            this.itemsManager.deleteItem().then(() => {
                this.goToTableView();
            });
        });
    }

    resetChanges() {
        this.itemsManager.resetChangesInEditForm();
        this.form.$setUntouched();
        this.checkPossibilityForResetChanges();
    }

    checkPossibilityForResetChanges() {
        // short and fast solution. is ok in the current case but maybe should be rewrtiten to the property by property comparison
        this.resetChangesDisabled = JSON.stringify(this.state.crudPage.stockItem) === JSON.stringify(this.state.crudPage.itemInForm);
    }

    goToTableView() {
        this.$state.go('items.table');
    }
}

ItemCrudController.$inject = ['$uibModal', '$stateParams', 'state', 'itemsManager', '$state'];

export {ItemCrudController};