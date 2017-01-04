export default class CustomOnChangeDirective {
    constructor() {
        this.restrict = 'A';
    }

    link(scope, element, attrs) {
        let onChangeHandler = scope.$eval(attrs.customOnChange);
        element.bind('change', (event) => {
            onChangeHandler(event.target.files[0], scope);
        });
    }
}
