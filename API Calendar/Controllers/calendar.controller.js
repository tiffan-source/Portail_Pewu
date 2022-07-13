const Event = require("../Models/calendar.models");

require

module.exports.getAllEvent = async (req, res)=>{
    try {
        let data = await Event.getAllEvent();
        if(data.length){
            console.log(data)
            res.json(data);
        }
        else
            res.json({message: "No data Found"});

    } catch (error) {
        res.json(error);
    }
}

module.exports.getEvent = async (req, res) =>{
    try {
        console.log(req.params.id);
        let event = new Event(req.params.id, null, null);
        
        let data = await event.getEvent();
        
        if(data[0])
            res.json(data);
        else
            res.json({message : "Data empty"});

    } catch (error) {
        res.json(error);
    }
}

module.exports.insertEvent = async (req, res)=>{
    try {
        console.log(req.body);
        let {nom, date} = req.body;

        let event = new Event(null, nom, date);
        
        let data = await event.insertEvent();
        
        res.json(data);   
    } catch (error) {   
        res.json(error);
    }
}

module.exports.deleteEvent = async (req, res) =>{
    try{
        let event = new Event(req.params.id, null, null);

        let data = await event.getEvent();

        if(data[0]){
            let data_delete = await event.deleteEvent();
            res.json(data_delete);
        }else{
            res.json({message : "No data found to remove"});
        }
    }catch(err){
        res.json(err);
    }
}

module.exports.updateEvent = async (req, res) =>{
    try {
        let event = new Event(req.params.id, null, null);

        let data = await event.getEvent();


        if(data[0]){
            let {name, date} = req.body;

            if(name) event.setName(name);
            else event.setName(data[0].name);

            if(date) event.setDate(date);
            else event.setDate(data[0].date);

            let data_update = event.updateEvent();

            res.json(data_update);

        }else{
            res.json({message : "No data found to update"});
        }
    } catch (error) {
        res.json(error);
    }
}