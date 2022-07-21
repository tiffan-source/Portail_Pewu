let locker =  {
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
                    m("button", {"class":"btn btn-primary shadow"}, 
                    " Connection "
                    )
                ]
            )
        )
    }
}