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

    getByIdAndUpdateItemInEditState(id) {
        this.restApiService.getById(id)
            .then((response) => {
                this.state.crudPage.itemInEdit = angular.copy(response.data);
                this.state.crudPage.itemInForm = response.data;
            });
    }

    clearItemInEditState() {
        this.state.crudPage.itemInForm = {
            id: '',
            title: '',
            prop_1: '',
            prop_2: '',
            prop_3: '',
            imageData: ''
        };

        this.state.crudPage.itemInEdit = angular.copy(this.state.crudPage.itemInForm);
    }
}

ItemsManager.$inject = ['state', 'restApiService'];