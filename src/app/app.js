import angular from 'angular';
import ngMockE2E from 'angular-mocks';
import uirouter from 'angular-ui-router';

import '../style/app.css';
import 'bootstrap/dist/css/bootstrap.css';
//import 'jquery';
import modal from 'angular-ui-bootstrap/src/modal';
import pagination from 'angular-ui-bootstrap/src/pagination';

import routing from './app.config';
import {ItemsTableViewComponent} from './components/items-views/items-table-view/items-table-view.component';
import {ItemsTileViewComponent} from './components/items-views/items-tile-view/items-tile-view.component';
import {ItemCrudComponent} from "./components/item-crud/item-crud.component";
import {AppComponent} from './app.component';
import {RemoveItemConfirmationPopup} from './components/item-crud/confirmation-popup/remove-item-confirmation-popup.component';
import {SearchInputComponent} from './components/items-views/search/search-input.component';
import {PaginationComponent} from './components/items-views/pagination/pagination.component';
import {ItemsPerPageComponent} from './components/items-views/items-per-page/items-per-page.component';
import FakeBackend from './services/fake-backend.service';
import State from './services/state.service';
import ItemsManager from './services/items-manager.service';
import RestApiService from './services/rest-api.service';
import FileValidateDirective  from './directives/file-validate.directive';

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [
    uirouter,
    modal,
    pagination,
    'ngMockE2E'
])
    .config(routing)
    .service('state', State)
    .service('itemsManager', ItemsManager)
    .service('fakeBackend', FakeBackend)
    .service('restApiService', RestApiService)
    .directive('fileValidation', () => new FileValidateDirective())
    .component(ItemsPerPageComponent.selector, ItemsPerPageComponent)
    .component(SearchInputComponent.selector, SearchInputComponent)
    .component(PaginationComponent.selector, PaginationComponent)
    .component(RemoveItemConfirmationPopup.selector, RemoveItemConfirmationPopup)
    .component(ItemsTableViewComponent.selector, ItemsTableViewComponent)
    .component(ItemsTileViewComponent.selector, ItemsTileViewComponent)
    .component(ItemCrudComponent.selector, ItemCrudComponent)
    .component(AppComponent.selector, AppComponent);

export default MODULE_NAME;