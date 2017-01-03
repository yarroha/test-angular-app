export default class ItemsManager {
    /**
     *
     * @param $http
     * @param state
     * @param fakeBackend needed just to init it
     */
    constructor($http, state, fakeBackend) {
        this.state = state;
        this.$http = $http;
    }
    addItem(item) {}
    removeById(id) {}
    findByAllFields(searchValue) {}
    getAll() {
        this.$http.get('/items').then((response) => {
            this.state.itemsPages.foundItems = response.data;
        });
    }
}

ItemsManager.$inject = ['$http', 'state', 'fakeBackend'];