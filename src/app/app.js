import angular from 'angular';
import uirouter from 'angular-ui-router';

import '../style/app.css';
import 'bootstrap/dist/css/bootstrap.css';
//import 'jquery';
import modal from 'angular-ui-bootstrap/src/modal';

import routing from './app.config';
import { ItemsTableViewComponent } from './components/items-views/items-table-view/items-table-view.component';
import { ItemsTileViewComponent } from './components/items-views/items-tile-view/items-tile-view.component';
import { ItemCrudComponent } from "./components/item-crud/item-crud.component";
import { AppComponent } from './app.component';

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [uirouter, modal])
    .config(routing)
    .component(ItemsTableViewComponent.selector, ItemsTableViewComponent)
    .component(ItemsTileViewComponent.selector, ItemsTileViewComponent)
    .component(ItemCrudComponent.selector, ItemCrudComponent)
    .component(AppComponent.selector, AppComponent);

export default MODULE_NAME;