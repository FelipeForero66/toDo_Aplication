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