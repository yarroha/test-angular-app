import template from './item-crud.tpl.html';
import { ItemCrudController } from './item-crud.controller';

export let ItemCrudComponent = {
    selector: 'itemCrud',
    template: template,
    bindings: {},
    controller: ItemCrudController
};