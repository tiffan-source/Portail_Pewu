let portail = {

    oninit : ()=>{
        portail_functionality.alert("Alert", 4000)

    },

    oncreate : ()=>{
        document.querySelectorAll(".alert-close").forEach(closer=>{
            closer.addEventListener("click", ()=>{
                portail_functionality.removeAlertWithId(closer.id);
            }, false)
        })
    },

    onupdate: function() {
        
    },

    handleAlert : (e)=>{
        console.log(e.target);
    },

    view : ()=>{
        return m("div", {onclick : portail.test}, [
            m(modal_component),
            m("ul",
                {class : "alert-portail"},
                portail_functionality.state.alerts.map(alert=>{
                    return m("li", {class : "alert alert-danger"}, [m("div", {style : "margin-right : 1rem; display : inline-block;", class : "alert-close", id : `${alert.timeId}`}, m("i", {class : "fa-solid fa-xmark"})), alert.message])
                })
            )])
    }
}

m.mount(document.querySelector("#portail"), portail);