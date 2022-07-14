let portail_functionality = {
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
    }
}
