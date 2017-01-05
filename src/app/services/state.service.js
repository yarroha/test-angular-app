export default class State {
    constructor() {
        this.itemsPages = {
            searchValue: '',
            foundItems: [],
            amountOfFoundItems: 0,
            itemsPerPage: 3,
            currentPageNumber: 1,
        };
        this.crudPage = {
            stockItem: {},
            itemInForm: {}
        };
    }
};