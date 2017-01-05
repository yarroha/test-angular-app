import template from './items-table-view.tpl.html';
import './items-table-view.style.scss';
import {ItemsTableViewController} from './items-table-view.controller';

export let ItemsTableViewComponent = {
    selector: 'itemsTableView',
    template: template,
    bindings: {},
    controller: ItemsTableViewController
};