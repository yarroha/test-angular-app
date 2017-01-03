export default class State {
    constructor() {
        this.itemsPages = {
            searchValue: '',
            foundItems: [],
            itemsPerPage: null,
            currentPageNumber: null,
        };
        this.editableItem = {};
    }
};