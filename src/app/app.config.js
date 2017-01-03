import { ItemsTableViewComponent } from './components/items-table-view/items-table-view.component';
import { ItemsTileViewComponent } from './components/items-tile-view/items-tile-view.component';

routing.$inject = ['$urlRouterProvider', '$locationProvider', '$stateProvider'];

export default function routing($urlRouterProvider, $locationProvider, $stateProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/items/view/table');

    $stateProvider
        .state('table', {
            url: "/items/view/table",
            component: ItemsTableViewComponent.selector
        })
        .state('tile', {
            url: "/items/view/tile",
            component: ItemsTileViewComponent.selector
        })
}