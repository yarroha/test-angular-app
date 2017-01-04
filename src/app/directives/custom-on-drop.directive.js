export default class CustomOnDropDirective {
    constructor() {
        this.restrict = 'A';
    }

    link(scope, element, attrs) {
        let onDropHandler = scope.$eval(attrs.customOnDrop);
        element.bind('drop', (event) => {
            onDropHandler(event.dataTransfer.files[0], scope);
        });
    }
}
