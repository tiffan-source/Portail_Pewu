const {test} = QUnit;

QUnit.module("Locker function", ()=>{
    test("Set locke state", assert=>{
        assert.equal(portail_functionality.setLockState(true), portail_functionality.state.lock, "Set Screen lock true")
    })

    test("Set locke state", assert=>{
        assert.equal(portail_functionality.setLockState(false), portail_functionality.state.lock, "Set Screen lock false")
    })

    test("Get locker state", assert=>{
        assert.equal(portail_functionality.getLockState(), portail_functionality.state.lock, "Give screen state")
    })

    test('Should lock my screen', assert=>{
        assert.equal(portail_functionality.lockScreen(), true, "Lock the screen");
    })
});
