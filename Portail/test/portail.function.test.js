const {test} = QUnit;

let my_locker = document.createElement("div");
my_locker.id = "locker";
my_locker.classList.add("d-none");

let querySelector;

QUnit.module("Setter and Getter Locker function", ()=>{
    test("Set locke state", assert=>{
        assert.equal(portail_functionality.setLockState(true), portail_functionality.state.lock, "Set Screen lock true")
    })

    test("Set locke state", assert=>{
        assert.equal(portail_functionality.setLockState(false), portail_functionality.state.lock, "Set Screen lock false")
    })

    test("Get locker state", assert=>{
        assert.equal(portail_functionality.getLockState(), portail_functionality.state.lock, "Give screen state")
    })

});


QUnit.module("Lock generic", {
    beforeEach : ()=>{
        querySelector = sinon.stub(document, "querySelector").returns(my_locker);
    },

    afterEach : ()=>{
        querySelector.restore()
    }
}, ()=>{


    test("Should take parameter", assert=>{
        assert.equal(portail_functionality.lock(), false, "Screen don't lock")
    })

    test("Should not lock if already lock", assert=>{
        portail_functionality.setLockState(true);

        assert.equal(portail_functionality.lock({}), false)
    })

    test("Should lock if parameter", assert=>{

        portail_functionality.setLockState(false);

        assert.equal(portail_functionality.lock({test : "test"}), true);
        assert.equal(my_locker.classList.contains("d-none"), false)

        querySelector.restore()
    })

})

QUnit.module("Unlock", {
    beforeEach : ()=>{
        querySelector = sinon.stub(document, "querySelector").returns(my_locker);
    },

    afterEach : ()=>{
        querySelector.restore()
    }
} ,()=>{
    test("Should not lock if not lock", (assert)=>{
        portail_functionality.setLockState(false)

        assert.equal(portail_functionality.unlock(), false, "Not unlock screen");
    })

    test("Should add class d-none of locker", assert=>{
        
        portail_functionality.lock({})

        portail_functionality.unlock();

        assert.equal(my_locker.classList.contains("d-none"), true, "Add class d-none");

        querySelector.restore();
    })

    test("Should unlock screen", assert=>{
        portail_functionality.lock({})

        assert.equal(portail_functionality.unlock(), true, "Unlock screen")
        assert.equal(portail_functionality.getLockState(), false, "Unlock screen confirm with getter")

        querySelector.restore()

    })
})

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