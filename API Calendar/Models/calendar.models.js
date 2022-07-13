const connection = require("../Configs/db.connection");

class Event{
    constructor(id, name, date){
        this.id = id;
        this.name = name;
        this.date = date;
    }

    setName = (name)=>{
        this.name = name;
    }

    setDate = (date)=>{
        this.date = date;
    }

    static getAllEvent = ()=>{
        return new Promise((resolve, reject) => {
            let query = "SELECT * FROM Event";
            connection.query(query, (err, result)=>{
                if (err){
                    console.log(err)
                    reject(err);
                }else{
                    resolve(result);
                }
            })
        })
    }

    getEvent = () => {
        return new Promise((resolve, reject) => {
            let query = "SELECT * FROM Event WHERE id = ?";
            connection.query(query, [this.id], (err, result)=>{
                if (err){
                    console.log(err);
                    reject(err);
                }else{
                    resolve(result);
                }
            })
        })
    }

    insertEvent = ()=>{
        return new Promise((resolve, reject) => {
            let query = "INSERT INTO Event(name, date) VALUES(?, ?)";
            connection.query(query, [this.name, this.date], (err, result)=>{
                if (err){
                    console.log(err);
                    reject(err);
                }else{
                    resolve(result);
                }
            });
        })
    }

    deleteEvent = ()=>{
        return new Promise((resolve, reject) => {
            let query = "DELETE FROM Event WHERE id = ?";
            connection.query(query, [this.id], (err, result)=>{
                if (err){
                    console.log(err);
                    reject(err);
                }else{
                    resolve(result);
                }
            });
        })
    }

    updateEvent = ()=>{
        return new Promise((resolve, reject) => {
            let query = " UPDATE Event SET name = ?, date = ? WHERE id = ?";
            connection.query(query, [this.name, this.date, this.id], (err, result)=>{
                if (err){
                    console.log(err);
                    reject(err);
                }else{
                    resolve(err);
                }
            });
        })
    }
}

module.exports = Event;