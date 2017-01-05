export default class FileValidateDirective {
    constructor() {
        this.restrict = 'A';
        this.require = '?ngModel';
    }

    link(scope, element, attrs, ngModel) {
        let customOnUpdate = scope.$eval(attrs.customOnUpdate);
        let updateModelWithFile = (event) => {
            let file = event.target.files[0] || event.dataTransfer.files[0];
            let fileReader = new FileReader();
            let loadEventListener = fileReader.addEventListener("load", () => {
                ngModel.$setViewValue(fileReader.result, event);
                fileReader.removeEventListener('load', loadEventListener);
                scope.$apply();
                if (ngModel.$valid) {
                    customOnUpdate();
                }
            }, false);

            fileReader.readAsDataURL(file);
        };

        element.on('change', updateModelWithFile);
        element.on('drop', updateModelWithFile);
        scope.$on('$destroy', function () {
            element.off('change', updateModelWithFile);
        });
    }
}
