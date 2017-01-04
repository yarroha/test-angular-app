import template from './remove-item-confirmation-popup.tpl.html';
import {RemoveItemConfirmationPopupController} from './remove-item-confirmation-popup.controller';

export let RemoveItemConfirmationPopup = {
    selector: 'removeItemConfirmationPopup',
    template: template,
    bindings: {
        resolve: '<',
        close: '&',
        dismiss: '&'
    },
    controller: RemoveItemConfirmationPopupController
};