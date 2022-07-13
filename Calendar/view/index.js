import("../model/calendar.js");

let calendar = {
    oninit : ()=>{
        console.log()
    },
    view : ()=>{
        return (
            m("button", "Test")
        );
    }
}

m.mount(document.querySelector("#body-container"), calendar);