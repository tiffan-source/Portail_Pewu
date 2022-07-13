const Event_controller = require("../Controllers/calendar.controller");

require("../Controllers/calendar.controller");

let configAllRoute = (app) =>{
    app.get("/event", Event_controller.getAllEvent);

    app.get("/event/:id", Event_controller.getEvent);

    app.post("/event/", Event_controller.insertEvent);

    app.put("/event/:id", Event_controller.updateEvent);

    app.delete("/event/:id", Event_controller.deleteEvent);
};

module.exports = configAllRoute;