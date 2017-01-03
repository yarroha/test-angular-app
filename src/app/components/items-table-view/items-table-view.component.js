import template from './items-table-view.tpl.html';
import { ItemsTableViewController } from './items-table-view.controller';

export let ItemsTableViewComponent = {
    selector: 'itemsTableView',
    template: template,
    bindings: {},
    controller: ItemsTableViewController
};