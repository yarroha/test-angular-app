export default class ItemsManager {
    constructor(state, restApiService) {
        this.state = state;
        this.restApiService = restApiService;
    }

    saveNewItem() {
        //TODO: add error handling
        return this.restApiService.createItem(this.state.crudPage.itemInForm);
    }

    saveEditedItem() {
        //TODO: add error handling
        return this.restApiService.updateItem(this.state.crudPage.itemInForm);
    }

    deleteItem() {
        //TODO: add error handling
        return this.restApiService.deleteItemById(this.state.crudPage.itemInForm.id);
    }

    searchAndUpdateItemsState(searchString, offset, limit) {
        this.restApiService.search(searchString, offset, limit)
            .then((response) => {
                this.state.itemsPages.foundItems = response.data.items;
                this.state.itemsPages.amountOFFoundItems = response.data.total;
            });
    }

    getByIdAndUpdateStockItemState(id) {
        this.restApiService.getById(id)
            .then((response) => {
                this.state.crudPage.stockItem = angular.copy(response.data);
                this.state.crudPage.itemInForm = response.data;
            });
    }

    clearStockItemState() {
        this.state.crudPage.stockItem = {
            id: '',
            title: '',
            prop_1: '',
            prop_2: '',
            prop_3: '',
            imageData: ''
        };

        this.resetChangesInEditForm();
    }

    resetChangesInEditForm() {
        this.state.crudPage.itemInForm = angular.copy(this.state.crudPage.stockItem);
    }
}

ItemsManager.$inject = ['state', 'restApiService'];