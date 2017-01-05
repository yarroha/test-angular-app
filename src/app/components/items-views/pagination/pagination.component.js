import template from './pagination.tpl.html';
import './pagination.style.scss';
import {PaginationController} from './pagination.controller';

export let PaginationComponent = {
    selector: 'pagination',
    template: template,
    bindings: {},
    controller: PaginationController
};