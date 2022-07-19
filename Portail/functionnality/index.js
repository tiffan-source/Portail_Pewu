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

        locker :  {
            view : ()=>{
                return (
                    m("div", {"class":"bg-white p-5 shadow-lg rounded"},
                        [
                            m("h3", {"class":"text-primary"}, 
                            "Periode d'inactivite detecter"
                            ),
                            m("label", {"class":"form-label","for":"locker-psw"}, 
                            "Entrer votre mot de passe pour continuer "
                            ),
                            m("input", {"class":"form-control mb-3","type":"password","placeholder":"Password","id":"locker-psw"}),
                            m("div", {"class":"alert alert-danger d-none","role":"alert", "id" : "locker-alert"}, 
                            "Mauvais mot de Passe"
                            ),
                            m("button", {"class":"btn btn-primary shadow",onclick: portail_functionality.unlock_screen}, 
                            " Connection "
                            )
                        ]
                    )
                )
            }
        }
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
            m.mount(locker_point, portail_functionality.state.locker);

            return portail_functionality.setLockState(true);
        }

        return (false)
    },

    /**
     * unlocke screen by removing locker ( @locker )
     */

    unlock_screen : ()=>{
        if (portail_functionality.getLockState()){
            m.mount(locker, null);
            locker.classList.add("d-none")

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

}
