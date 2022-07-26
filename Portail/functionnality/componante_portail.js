modal_component_state ={
    title : "",
    content : "",
    button : [],
    layouts: ""
}

modal_component = {
    /**
     * set parameter of Modal
     * @param {Object} option_component 
     */

    setModal : (option_component)=>{
        modal_component_state.title = option_component.title;
        modal_component_state.content = option_component.content;
        modal_component_state.button = option_component.button;
        modal_component_state.layouts = option_component.layouts;
    },

    getModal : ()=>{
        document.querySelector("#modal-portail").classList.remove("d-none");
    },

    hiddeModal : ()=>{
        document.querySelector("#modal-portail").classList.add("d-none");
    },

    view : ()=>{

        return (
            m("div", {class : modal_component_state.layouts +" modal-portail-generique d-none shadow p-3 mb-5 bg-body rounded", id : "modal-portail"}, [
                m("h2", modal_component_state.title),
                m("p", modal_component_state.content),
                m("div", m("div", modal_component_state.button.map(button => {
                    return m("button", {class : "btn", onclick : button.action}, button.text);
                }))),
                m("button", {onclick : modal_component.hiddeModal, class : "btn btn-secondary"}, "Cancel"),
            ])
        )
    }
}