QUnit.module("Alert fuction Test", {
    afterEach : (()=>{
        portail_functionality.state.alerts = [];
    })
}, ()=>{

    test("Should add alert", assert=>{
        portail_functionality.alert("Message");

        assert.equal(portail_functionality.state.alerts.length, 1, "Tableau d'alert incrementer");
    })

    test("Should add 2 alert in order", assert=>{
        portail_functionality.alert("Message 1")
        portail_functionality.alert("Message 2")

        assert.equal(portail_functionality.state.alerts.length, 2, "Tableau d'alert incrementer");
    })

    test("Should remove alert after time default (2000)", assert=>{
        portail_functionality.alert("Message 3");

        assert.equal(portail_functionality.state.alerts.length, 1, "Alert ajouter");

        assert.equal(portail_functionality.state.alerts[0].timeout, 2000, "timeout define");
        assert.ok(portail_functionality.state.alerts[0].timeId, "timeId define");

    })

    test("Should remove alert after time define", assert=>{
        let timer = portail_functionality.alert("Message 3", 4000);

        assert.equal(portail_functionality.state.alerts.length, 1, "Alert ajouter");

        assert.equal(portail_functionality.state.alerts[0].timeout, 4000, "timeout define");
        assert.ok(portail_functionality.state.alerts[0].timeId, "timeId define");

    })

    test("Should remove alert after time define to null", assert=>{
        let timer = portail_functionality.alert("Message 3", null);

        assert.equal(portail_functionality.state.alerts.length, 1, "Alert ajouter");

        assert.notOk(portail_functionality.state.alerts[0].timeout, "timeout not define");
        assert.notOk(portail_functionality.state.alerts[0].timeId, "timeId not define");

    })

    test("remove alert from alert table", assert=>{
        let alert1 = {
            message: "One alert"
        }, alert2 = {
            message: "Second alert"
        }
        
        portail_functionality.state.alerts = [alert1, alert2];

        portail_functionality.removeAlert(alert2);

        assert.equal(portail_functionality.state.alerts.includes(alert2), false, "element not in alert array");

        assert.equal(portail_functionality.state.alerts.length, 1, "One element in alert array")
    })
})