let portail = {
    toogle_me : ()=>{
        let toogle_button = document.querySelector(".toogle-button");

        let list_group_head = document.querySelectorAll('.list-group-head');
        let list_item_span = document.querySelectorAll('.list-group-item span');
        let logo = document.querySelector("#logo");
        let panel = document.querySelector("#panel");
        let calendar = document.querySelector("#calendar");

        if(toogle_button.classList.contains("toogle-button-active") == false){
            list_group_head.forEach(item => {
                item.classList.add("hidde")
            })
            list_item_span.forEach(item => {
                item.classList.add("hidde")
            })
            logo.classList.add("hidde");
            panel.classList.add("panel_no_flex");
            calendar.classList.add("mx-auto");

            toogle_button.classList.add("mx-auto");

            toogle_button.classList.add("toogle-button-active")
        }else{
            list_group_head.forEach(item => {
                item.classList.remove("hidde")
            })
            list_item_span.forEach(item => {
                item.classList.remove("hidde")
            })
            logo.classList.remove("hidde");
            panel.classList.remove("panel_no_flex");
            calendar.classList.remove("mx-auto");

            toogle_button.classList.remove("mx-auto");

            toogle_button.classList.remove("toogle-button-active")
        }
    }
}
