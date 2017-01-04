class RemoveItemConfirmationPopupController {
    constructor(state) {
        this.state = state;
    }

    confirm() {
        this.close({});
    };

    cancel() {
        this.dismiss({});
    };

}

RemoveItemConfirmationPopupController.$inject = ['state'];

export {RemoveItemConfirmationPopupController};