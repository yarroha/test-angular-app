import template from './items-tile-view.tpl.html';
import'./items-tile-view.style.scss'
import {ItemsTileViewController} from './items-tile-view.controller';

export let ItemsTileViewComponent = {
    selector: 'itemsTileView',
    template: template,
    bindings: {},
    controller: ItemsTileViewController
};