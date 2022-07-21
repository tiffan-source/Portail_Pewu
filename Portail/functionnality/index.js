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
        alert : []
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
     * Get portail lock state
     * @returns {boolean} - portail lock state
     */

     getLockState : ()=>{
        return (portail_functionality.state.lock);
    },

    /**
     * Lock portail by adding a locker ( @locker )
     * @returns {boolean} - true for success false else
     */

    lockScreen : ()=>{
        if ( portail_functionality.getLockState() == false){
            let locker_point = document.querySelector("#locker");

            locker_point.classList.remove("d-none");
            m.mount(locker_point, locker);

            return portail_functionality.setLockState(true);
        }

        return (false)
    },

    /**
     * unlocke screen by removing locker ( @locker )
     */

    unlock_screen : ()=>{

        let locker_app = document.querySelector("#locker");

        if (portail_functionality.getLockState()){
            m.mount(locker_app, null);
            locker_app.classList.add("d-none")

            return (!portail_functionality.setLockState(false));
        }

        return (false);
    },

    /**
     * setLockState - 
     * @param {boolean} bool - Boolean indicate portail state 
     */

    setLockState : (bool)=>{
        return portail_functionality.state.lock = bool;
    },

    /**
     * Add alert to array alert
     * @param {object} alert 
     * @returns alert length
     */

    addAlert : (alert)=>{
        return portail_functionality.state.alert.push({message : alert.message, type : alert.type});
    },

    /**
     * remove first alert to array alert
     * @returns Alert remove
     */

    removeAlert : ()=>{
        return portail_functionality.state.alert.shift();
    },

    /**
     * Call alert in portail
     */

    alert : ()=>{
        let modal_alert_group = document.querySelector("#alert-modal-group");

        // if ( portail_functionality.state.alert.length != 0 ){
            
            let container_alert = {
                view : ()=>{
                    return m("div", portail_functionality.state.alert.map(data=>{
                        return m("div", {"class":"alert-modal"},
                            [
                                m("span", {"id":"close-alert"}, 
                                    m("i", {"class":"fa-solid fa-xmark"})
                                ),
                                m("br"),
                                data.message
                            ]
                        )
                    }))
                }
            }

            m.mount(modal_alert_group, container_alert);

            document.querySelectorAll("#close-alert").forEach(node=>{

                node.addEventListener("click", (e)=>{
                    node.parentNode.remove()
                })

            })

            if (portail_functionality.state.alert.length != 0 ){
                setTimeout(()=>{
                    portail_functionality.removeAlert();
                    portail_functionality.alert();
                }, 2000);
            }
        // }
    },

    /**
     * Define name of component select in title app
     * @param {string} component_name 
     */

    set_compname : (component_name)=>{
        document.querySelector("#comp-name").innerHTML = component_name;
    }
}