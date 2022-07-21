const {test} = QUnit;

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

QUnit.module("Locker Controlle function", ()=>{

    test('Should lock my screen', assert=>{

        let my_locker = document.createElement("div");
        my_locker.id = "locker";
        my_locker.classList.add("d-none");

        let querySelector = sinon.stub(document, "querySelector").returns(my_locker);

        assert.equal(portail_functionality.lockScreen(), true, "Lock the screen");

        querySelector.restore();
    })
});


QUnit.module("UnLocker Controlle function", ()=>{

    test('Should unlock my screen', assert=>{

        let my_locker = document.createElement("div");
        my_locker.id = "locker";
        my_locker.classList.add("d-none");

        let querySelector = sinon.stub(document, "querySelector").returns(my_locker);

        assert.equal(portail_functionality.unlock_screen(), true, "unlock the screen");

        querySelector.restore();
    })
});

QUnit.module("Alert fuction Test", ()=>{

    test("Remove Alert", assert=>{
        portail_functionality.state.alert[0] = "data";

        assert.equal(portail_functionality.removeAlert(), "data", "remove last data")
    })

    test("Add Alert return current length", (assert)=>{
        assert.equal(portail_functionality.addAlert("test"), portail_functionality.state.alert.length);
    })

    test("Add Alert add data", (assert)=>{

        portail_functionality.addAlert({message : "alert", type : "tes"}, )

        assert.equal(portail_functionality.state.alert[portail_functionality.state.alert.length - 1].message, "alert", "Add last data");
    })
})