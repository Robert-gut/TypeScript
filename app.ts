class Client{
    private Name: string;
    private Phone: string;

    constructor(name:string,phone:string){
        this.Name= name;
        this.Phone = phone;
    }

    showClinetInfo():void{
        console.log(`Name: ${this.Name}\n Phone number : ${this.Phone}`)
    }

    getName():string{
        return this.Name;
    }

    setName(value:string): void{
        if(value !== this.Name){
            this.Name = value;
        }
    }
}

// let client = new Clinet ('Bob','+38(068)0423116')
// client.showClinetInfo()

class Events{

    private ClientList: Client[] = [];

    private id: number = 0
    private title:string;
    static personCounter:number = 0;
    private place: string;
    private date: Date;

    constructor(title:string,place:string,date: Date){
        this.id ++;
        this.title = title;
        this.place = place;
        this.date = date;
    }

    AddNewClient(client:Client):void{
        this.ClientList.unshift(client)
        Events.personCounter =this.ClientList.length;
    }

    showEvent(): void{
        console.log(`Title ${this.title} \n Place: ${this.place} \n Data: ${this.date}`)
    }
}

console.log('Person counter', Events.personCounter)

class EventService{
    private EventList: Events[]=[];

    AddNewEvent(event: Events): void{
        this.EventList.unshift(event);
    }

    ShowEvents():void{
        this.EventList.forEach(item => {
            item.showEvent()
        })
    }

    DelEvente(id:number):void{
        this.EventList = [...this.EventList.slice(0,id) , ...this.EventList.slice(id +1)] 
    }

    AllDelEvent(): void{
        this.EventList = []
    }

    FiandEvent(dey:number,mauns:number): void{
        this.EventList
    }

}

let bob = new Client('Bob', '0680423116')
let rob = new Client('Rob', '0680333116')
let camila = new Client('Camila', '0680533116')
let jes = new Client('Jes', '0680333546')

let jsConf = new Events('Js Best practice', 'It Stap' , new Date())

jsConf.AddNewClient(bob)
jsConf.AddNewClient(rob)

const service = new EventService();
service.AddNewEvent(jsConf)
console.log(`Clients count: ${Events.personCounter}`);


let iForum = new Events("iForum 2021", "Lviv", new Date());
iForum.AddNewClient(camila);
iForum.AddNewClient(bob);
iForum.AddNewClient(jes);
iForum.AddNewClient(rob);
service.AddNewEvent(iForum);
service.ShowEvents();

console.log(`Clients count: ${Events.personCounter}`);

// service.DelEvente(1)
service.ShowEvents()

// service.AllDelEvent()
service.ShowEvents()


