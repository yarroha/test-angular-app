export default class FakeBackend {
    constructor($httpBackend) {
        this.$httpBackend = $httpBackend;
        this.setup();
    }

    setup() {
        this.setupData();
        this.setupRequests();
    }

    setupData() {
        this.items = [
            {name: 'item1'},
            {name: 'item2'}
        ];
    }

    setupRequests() {
        this.$httpBackend.when('GET', '/items').respond(this.items);

        this.$httpBackend.when('POST', '/items').respond((method, url, data) => {
            let item = angular.fromJson(data);
            this.items.push(item);
            return [200, item, {}];
        });
    }
}

FakeBackend.$inject = ['$httpBackend'];