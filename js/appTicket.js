/* let dataValue = document.getElementById(dataInput).value; */


class Data{
    constructor(description){
        this._description = description;
    }

    get description(){
        return this._description;
    }

    set description(description){
        this._description = description;
    }

}



class Ticket extends Data {
    static counterTicket = 0;

    constructor(description){
        super(description)
        this._id = ++Ticket.counterTicket;
    }

    get id(){
        return this._id;
    }
}



let tickets = [
    new Ticket('primer ticket'),
    new Ticket('segundo ticket')
    
];




function showTickets(){
    console.log("Mostrar ticket")
    let texto = "";
    for(let ticket of tickets){
        console.log(ticket)
        texto += `<li>${ticket.description}</li>`;
    }
    document.getElementById('tickets').innerHTML = texto;
}


function addTicket(){
    const forma = document.forms['forma'];
    const description = forma['description'];
    if(description.value != ''){
        const ticket = new Ticket(description.value);
        console.log(ticket)
        tickets.push(ticket);
        showTickets();
    }
    else{
        console.log("No hay informacion que agregar")
    }
}

