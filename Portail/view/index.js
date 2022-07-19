let portail = {
    oninit : () =>{
        // Au demarrage j'appelle le lock screen 
        // localStorage.setItem("locker", false);
        // portail_functionality.lock_screen();
    },

    view : ()=>{
        m("div");
    }
}

m.mount(document.querySelector("#portail"), portail);