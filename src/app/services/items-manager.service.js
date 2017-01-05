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

    searchAndUpdateItemsState() {
        let searchValue = this.state.itemsPages.searchValue;
        let offset = (this.state.itemsPages.currentPageNumber - 1) * this.state.itemsPages.itemsPerPage;
        let limit = this.state.itemsPages.itemsPerPage;

        return this.restApiService.search(searchValue, offset, limit)
            .then((response) => {
                this.state.itemsPages.foundItems = response.data.items;
                this.state.itemsPages.amountOfFoundItems = response.data.total;
            });
    }

    getByIdAndUpdateStockItemState(id) {
        return this.restApiService.getById(id)
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