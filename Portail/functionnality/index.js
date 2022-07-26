

/**
 * All functionnality and state of portail
 */

let portail_functionality = {

    /**
     * All state and data will be store in state
     * 
     * @lock: Define lock state of portail
     * @locker: Component to lock screen
     */

    state : {
        lock : false,
        alerts : [],
    },

    /**
     * action to toogle portail panel
     */

    toogle_panel : ()=>{

        let panel = document.querySelector("#panel");
        let app_panel_name = document.querySelector("#panel-app-name");
        let list_content = document.querySelectorAll(".list-group-item span");
        let list_head = document.querySelectorAll(".list-head");
        
        if (panel.classList.contains("d-none")){
            panel.classList.remove(["d-none"]);

            if(document.body.clientWidth >= 768){
                app_panel_name.classList.add("d-md-none")

                list_content.forEach(content =>{
                    content.classList.add("d-md-none");
                });

                list_head.forEach(content=>{
                    content.classList.add("d-md-none");
                });
            }

        }else{
            panel.classList.add("d-none");

            if(document.body.clientWidth >= 768){
                app_panel_name.classList.remove("d-md-none")

                list_content.forEach(content =>{
                    content.classList.remove("d-md-none");
                });

                list_head.forEach(content=>{
                    content.classList.remove("d-md-none");
                });
            }

        }
    },

    /**
     * setLockState - 
     * @param {boolean} bool - Boolean indicate portail state 
     */

     setLockState : (bool)=>{
        return portail_functionality.state.lock = bool;
    },

    /**
     * Get portail lock state
     * @returns {boolean} - portail lock state
     */

     getLockState : ()=>{
        return (portail_functionality.state.lock);
    },

    lock : (locker_content)=>{

        // Pas tres efficace ... Penser a une autre solution

        if (locker_content && !portail_functionality.getLockState())
        {
            let locker_point = document.querySelector("#locker");

            locker_point.classList.remove("d-none");

            modal_component.setModal({
                title : "Test",
                content : "Bonjour tout le monde",
                button : [
                    {
                        text : "Action1",
                        action : ()=>{console.log("Bonjour");}
                    },
                    {
                        text : "Action1",
                        action : ()=>{console.log("Merci");}
                    },
                ],
                layouts : ""
            })

            modal_component.getModal()
   
            return portail_functionality.setLockState(true);
        }
        return portail_functionality.setLockState(false);
    },

    unlock: ()=>{
        if(portail_functionality.getLockState() == true){
            let locker_point = document.querySelector("#locker");

            locker_point.classList.add("d-none");

            modal_component.hiddeModal();

            return !portail_functionality.setLockState(false);
        }

        return false;
    },

    /**
     * Add alert to array alert
     * @param {object} alert 
     * @returns alert length
     */

    addAlert : (alert)=>{
        return portail_functionality.state.alerts.push(alert);
    },

    /**
     * remove first alert to array alert
     * @returns Alert remove
     */

    removeAlert : (alert)=>{
        portail_functionality.state.alerts = portail_functionality.state.alerts.filter((element)=>{
            return alert.message != element.message || alert.timeout != element.timeout || alert.timeId != element.timeId;
        })

        m.redraw();
    },

    removeAlertWithId : (id)=>{
        clearTimeout(id);

        portail_functionality.state.alerts.forEach(element=>{
            if (element.timeId == id)
                portail_functionality.removeAlert(element);
        })
    },

    /**
     * Call alert in portail
     */

    alert : (message, timeout = 2000)=>{
        
        let alert = {
            message,
        }

        if (timeout)
        {
            alert.timeout = timeout;
            alert.timeId = setTimeout(()=>{

                portail_functionality.removeAlert(alert);

            }, timeout, alert);
        }
        else{
            alert.timeId = null
            alert.timeout = null
        }

        portail_functionality.addAlert(alert);

    },

    /**
     * Define name of component select in title app
     * @param {string} component_name 
     */

    set_compname : (component_name)=>{
        document.querySelector("#comp-name").innerHTML = component_name;
    },

    set_generic_modal : (title, content, action)=>{
        let modal_generique = document.querySelector("#portail-modal");

        modal_generique.querySelector("#portail-modal-title").innerHTML = title;
        modal_generique.querySelector("#portail-modal-body").innerHTML = content;

        modal_generique.querySelector("#portail-modal-action").addEventListener("click", (e)=>{
            e.preventDefault();
            if(action)
                action();
        })
    },
}