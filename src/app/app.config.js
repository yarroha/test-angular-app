import { ItemsTableViewComponent } from './components/items-views/items-table-view/items-table-view.component';
import { ItemsTileViewComponent } from './components/items-views/items-tile-view/items-tile-view.component';
import { ItemCrudComponent } from "./components/item-crud/item-crud.component";

routing.$inject = ['$urlRouterProvider', '$locationProvider', '$stateProvider'];

export default function routing($urlRouterProvider, $locationProvider, $stateProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/items/tableview');

    $stateProvider
        .state('items', {
            abstract: true,
            template: '<ui-view/>'
        })
        .state('items.table', {
            parent: 'items',
            url: "/items/tableview",
            component: ItemsTableViewComponent.selector
        })
        .state('items.tile', {
            parent: 'items',
            url: "/items/tileview",
            component: ItemsTileViewComponent.selector
        })
        .state('item', {
            url: "/item/{id}",
            component: ItemCrudComponent.selector
        })
}