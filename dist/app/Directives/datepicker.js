//Date Picker Directive   
app.directive("datepicker", function () {
    function link(scope, element, attrs, controller) {
        element.datepicker({
            onSelect: function (dt) {
                scope.$apply(function () {
                    controller.$setViewValue(dt);
                });
            }
            , dateFormat: "yy-mm-dd"
        });
    }
    return {
        require: 'ngModel'
        , link: link
    };
});