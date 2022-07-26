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

