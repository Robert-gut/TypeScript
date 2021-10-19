var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Client = /** @class */ (function () {
    function Client(name, phone) {
        this.Name = name;
        this.Phone = phone;
    }
    Client.prototype.showClinetInfo = function () {
        console.log("Name: " + this.Name + "\n Phone number : " + this.Phone);
    };
    Client.prototype.getName = function () {
        return this.Name;
    };
    Client.prototype.setName = function (value) {
        if (value !== this.Name) {
            this.Name = value;
        }
    };
    return Client;
}());
// let client = new Clinet ('Bob','+38(068)0423116')
// client.showClinetInfo()
var Events = /** @class */ (function () {
    function Events(title, place, date) {
        this.ClientList = [];
        this.id = 0;
        this.id++;
        this.title = title;
        this.place = place;
        this.date = date;
    }
    Events.prototype.AddNewClient = function (client) {
        this.ClientList.unshift(client);
        Events.personCounter = this.ClientList.length;
    };
    Events.prototype.showEvent = function () {
        console.log("Title " + this.title + " \n Place: " + this.place + " \n Data: " + this.date);
    };
    Events.personCounter = 0;
    return Events;
}());
console.log('Person counter', Events.personCounter);
var EventService = /** @class */ (function () {
    function EventService() {
        this.EventList = [];
    }
    EventService.prototype.AddNewEvent = function (event) {
        this.EventList.unshift(event);
    };
    EventService.prototype.ShowEvents = function () {
        this.EventList.forEach(function (item) {
            item.showEvent();
        });
    };
    EventService.prototype.DelEvente = function (id) {
        this.EventList = __spreadArray(__spreadArray([], this.EventList.slice(0, id), true), this.EventList.slice(id + 1), true);
    };
    EventService.prototype.AllDelEvent = function () {
        this.EventList = [];
    };
    return EventService;
}());
var bob = new Client('Bob', '0680423116');
var rob = new Client('Rob', '0680333116');
var camila = new Client('Camila', '0680533116');
var jes = new Client('Jes', '0680333546');
var jsConf = new Events('Js Best practice', 'It Stap', new Date());
jsConf.AddNewClient(bob);
jsConf.AddNewClient(rob);
var service = new EventService();
service.AddNewEvent(jsConf);
console.log("Clients count: " + Events.personCounter);
var iForum = new Events("iForum 2021", "Lviv", new Date());
iForum.AddNewClient(camila);
iForum.AddNewClient(bob);
iForum.AddNewClient(jes);
iForum.AddNewClient(rob);
service.AddNewEvent(iForum);
service.ShowEvents();
console.log("Clients count: " + Events.personCounter);
// service.DelEvente(1)
service.ShowEvents();
// service.AllDelEvent()
service.ShowEvents();
