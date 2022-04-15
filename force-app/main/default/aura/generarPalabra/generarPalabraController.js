({
    generateWord: function(component, event, helper) {
        var action = component.get("c.getPalabra");

        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var palabraCorrecta = response.getReturnValue();
                var appevent = $A.get("e.c:events");
                appevent.setParams({ "palabraEv": palabraCorrecta });
                appevent.fire();
            }
        });
        $A.enqueueAction(action);
    }
})