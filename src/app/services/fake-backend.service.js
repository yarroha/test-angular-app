import {virginItems} from './virgint-items-collection'

export default class FakeBackend {
    constructor($httpBackend) {
        this.$httpBackend = $httpBackend;

        this._setClassVariables();

        this._setup();
    }

    _setup() {
        this._loadCachedData();
        this._setupRequests();
    }

    _loadCachedData() {
        this._loadItemsFromLocalStorage();

        if (this._items === null) {
            this._saveDataToLocalStorage(this._virginItems);
            this._loadItemsFromLocalStorage();
        }
    }

    _setupRequests() {
        this.$httpBackend.when('GET', '/items').respond(this._items);

        this.$httpBackend.when('POST', '/items').respond((method, url, data) => {
            let item = angular.fromJson(data);
            this._items.push(item);
            return [200, item, {}];
        });
    }

    _loadItemsFromLocalStorage() {
        this._items = JSON.parse(localStorage.getItem(this._localStorageKey));
    }

    _saveDataToLocalStorage(targetObject) {
        localStorage.setItem(this._localStorageKey, JSON.stringify(targetObject));
    }

    _setClassVariables() {
        this._virginItems = virginItems;
        this._localStorageKey = 'items';
        this._items = [];
    }
}

FakeBackend.$inject = ['$httpBackend'];