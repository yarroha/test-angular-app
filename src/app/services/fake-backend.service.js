import {virginItems} from './virgint-items-collection'

export default class FakeBackend {
    constructor($httpBackend) {
        this.$httpBackend = $httpBackend;

        this._setClassVariables();
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

    /**
     * Backend doens't include any validation, for fare use only.
     */
    _setupRequests() {
        //this.$httpBackend.when('GET', '/items').respond(/.../);
        let urlRegexItemsSearch = /\/items\/*/;
        this.$httpBackend.when('GET', urlRegexItemsSearch).respond((method, url, data, headers) => {
            let params = this._getJsonFromUrl(url.split('?')[1]);
            let offset = parseInt(params.offset);
            let limit = offset + parseInt(params.limit);
            let total = 0;
            let resultItems = [];

            this._items.forEach((item) => {
                let acceptableBySearchQuery = this._searchThroughProperties(item, params.search_string);

                if (acceptableBySearchQuery) {
                    if (offset <= total && total <= limit) {
                        resultItems.push(item);
                    }
                    total++;
                }
            });

            return [200, {
                items: resultItems,
                total: total
            }, {}];

        });

        let urlRegexItemSearch = /\/item*/;
        this.$httpBackend.when('GET', urlRegexItemSearch).respond((method, url, data) => {
            let itemId = url.split('/')[2];
            let item = this._items.find((item) => {
                return item.id == itemId;
            });

            if (item != -1) {
                return [200, item, {}];
            } else {
                return [404, {}, {}];
            }
        });

        this.$httpBackend.when('POST', '/item').respond((method, url, data) => {
            let item = angular.fromJson(data);
            item.id = Date.now() / 1000 | 0;
            this._items.push(item);
            this._saveDataToLocalStorage(this._items);
            return [200, item, {}];
        });

        this.$httpBackend.when('PUT', '/item').respond((method, url, data) => {
            let itemDataFromClient = angular.fromJson(data);
            let targetItemIndex = this._items.findIndex((targetItem) => {
                return targetItem.id == itemDataFromClient.id;
            });

            if (targetItemIndex > -1) {
                this._items[targetItemIndex] = itemDataFromClient;
                this._saveDataToLocalStorage(this._items);
                return [200, this._items[targetItemIndex], {}];
            } else {
                return [400, {}, {}];
            }
        });

        this.$httpBackend.when('DELETE', urlRegexItemSearch).respond((method, url, data) => {
            let itemId = url.split('/')[2];
            let targetItemIndex = this._items.findIndex((targetItem) => {
                return targetItem.id == itemId;
            });

            if (targetItemIndex > -1) {
                this._items.splice(targetItemIndex, 1);
                this._saveDataToLocalStorage(this._items);
                return [200, {}, {}];
            } else {
                return [400, {}, {}];
            }
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

    _getJsonFromUrl(query) {
        let result = {};
        query.split("&").forEach(function (part) {
            let item = part.split("=");
            result[item[0]] = decodeURIComponent(item[1]);
        });
        return result;
    }

    _searchThroughProperties(item, searchString) {
        if (searchString === '') {
            return true;
        }

        return (item.title + item.prop_1 + item.prop_2 + item.prop_3).indexOf(searchString) == -1;
    }
}

FakeBackend.$inject = ['$httpBackend'];