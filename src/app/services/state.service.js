export default class State {
    constructor() {
        this.itemsPages = {
            searchValue: '',
            foundItems: [],
            amountOFFoundItems: 0,
            itemsPerPage: null,
            currentPageNumber: null,
        };
        this.crudPage = {
            stockItem: {},
            itemInForm: {}
        };
    }
};