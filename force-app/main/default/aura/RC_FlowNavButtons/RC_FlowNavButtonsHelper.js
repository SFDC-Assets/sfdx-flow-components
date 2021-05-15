({
    setButtonClicked: function(component, buttonClicked) {
        var buttonLabelVar = "v." + buttonClicked + "_label";
        var buttonLabel = component.get(buttonLabelVar);
        console.log('RC_FlowNavButtonsHelper > buttonClicked: ' + buttonClicked + ', label: ' + buttonLabel);
        component.set("v.buttonClicked", buttonLabel);
    },
});