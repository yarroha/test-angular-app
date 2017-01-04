import template from './item-crud.tpl.html';
import './item-crud.style.scss'
import {ItemCrudController} from './item-crud.controller';

export let ItemCrudComponent = {
    selector: 'itemCrud',
    template: template,
    bindings: {
        resetChangesDisabled: '='
    },
    controller: ItemCrudController
};