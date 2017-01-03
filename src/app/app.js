import angular from 'angular';
import uirouter from 'angular-ui-router';

import '../style/app.css';
import 'bootstrap/dist/css/bootstrap.css';

import routing from './app.config';
import { ItemsTableViewComponent } from './components/items-table-view/items-table-view.component';
import { ItemsTileViewComponent } from './components/items-tile-view/items-tile-view.component';

const MODULE_NAME = 'app';

angular.module('app', [uirouter])
    .config(routing)
    .component(ItemsTableViewComponent.selector, ItemsTableViewComponent)
    .component(ItemsTileViewComponent.selector, ItemsTileViewComponent);

export default MODULE_NAME;