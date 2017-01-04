export default class RestApiService {
    // fakeBackend needed just to init it
    constructor($http, fakeBackend) {
        this.$http = $http;
    }

    search(searchValue, offset, limit) {
        return this.$http.get('/items?limit=' + limit + '&offset=' + offset + '&search_string=' + searchValue);
    }

    getById(id) {
        return this.$http.get('/item/' + id);
    }

    createItem(item) {
        return this.$http.post('/item', item);
    }

    updateItem(item) {
        return this.$http.put('/item', item);
    }

    deleteItemById(id) {
        return this.$http.delete('/item/' + id);
    }
}

RestApiService.$inject = ['$http', 'fakeBackend'];