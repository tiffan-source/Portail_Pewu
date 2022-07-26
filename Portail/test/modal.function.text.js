let modal_portail = document.createElement("div")
modal_portail.classList.add("d-none");
modal_portail.id = "modal-portail";


QUnit.module("Modal function", ()=>{
    
    test("Should set all property give", (assert)=>{
        let option = {
            title : "Titre Test",
            content : "Content Test",
            button : [ { 
                text : "Button Text",
                action : function foo(){ console.log("Test action"); }
            } ],
            layouts : "mylayouts"
        }

        modal_component.setModal(option);

        assert.equal(modal_component_state.title, option.title, "Title not set");
        assert.equal(modal_component_state.content, option.content, "Content not set");
        assert.equal(modal_component_state.layouts, option.layouts, "Layouts not set");
        assert.deepEqual(modal_component_state.button, option.button);
    })

    test("Should display my modal", assert=>{
        let query = sinon.stub(document,"querySelector");
        query.returns(modal_portail);

        modal_component.getModal();

        assert.equal(modal_portail.classList.contains("d-none"), false);

        query.restore();
    })

    test("Should hidde my modal", assert=>{
        let query = sinon.stub(document,"querySelector");
        query.returns(modal_portail);

        modal_component.hiddeModal();

        assert.equal(modal_portail.classList.contains("d-none"), true);

        query.restore();
    })

})