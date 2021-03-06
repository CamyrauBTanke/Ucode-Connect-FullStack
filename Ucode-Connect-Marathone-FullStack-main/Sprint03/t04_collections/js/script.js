'use strict';

function menu(name) {
    let menu = new Map();
    menu.set('Roll Double fish', 249);
    menu.set('Roll Double cheese', 359);
    menu.set('Philadelphia De Luxe with salmon', 459);
    menu.set('Philadelphia De Luxe with tuna', 599);
    if(name === 'all') {
        let all = '';
        for(const item of menu)
            all = all.concat(item + ' uah\n');
        alert(all);
    }
    else
        alert(menu.get(name) + ' uah');
}

function guestList(name, state) {
    let guests = new Set();
    guests.add('Ilya');
    guests.add('Leha');
    guests.add('Vova');
    guests.add('Vlad');
    guests.add('Jeka');

    if(state === 1) {
        let has = guests.has(name);
        if(has) alert(`Yeah, you're on the list`);
        else alert(`You're not on the list, go away!`);
    }
    if(state === 2) {
        let has = guests.delete(name);
        if(has) alert(name + ` was successfully deleted!`);
        else alert(name + ` is not on the list`);
    }
}

function bankVault(credits) {
    let bank = new WeakMap();

    const client1 = {
        id: 1337,
        name: 'Pasha',
        location: 'Ukraine'
    }
    const client2 = {
        id: 69,
        name: 'Lesha',
        location: 'Russia'
    }
    const client3 = {
        id: 420,
        name: 'Dominik',
        location: 'Hungary'
    }
    const client4 = {
        id: 54321,
        name: 'Liza',
        location: 'Ukraine'
    }

    bank.set(client1, 5167490089632514);
    bank.set(client2, 4112000011112222);
    bank.set(client3, 1234123412341234);
    bank.set(client4, 1111222233334444);

    if(bank.get(client1) === credits)
        alert(`Deposit box of ${credits}:\n\n` + `CLIENT ID: ${client1.id}\n` + `CLIENT NAME: ${client1.name}\n` + `CLIENT LOCATION: ${client1.location}`);
    else if(bank.get(client2) === credits)
        alert(`Deposit box of ${credits}:\n\n` + `CLIENT ID: ${client2.id}\n` + `CLIENT NAME: ${client2.name}\n` + `CLIENT LOCATION: ${client2.location}`);
    else if(bank.get(client3) === credits)
        alert(`Deposit box of ${credits}:\n\n` + `CLIENT ID: ${client3.id}\n` + `CLIENT NAME: ${client3.name}\n` + `CLIENT LOCATION: ${client3.location}`);
    else if(bank.get(client4) === credits)
        alert(`Deposit box of ${credits}:\n\n` + `CLIENT ID: ${client4.id}\n` + `CLIENT NAME: ${client4.name}\n` + `CLIENT LOCATION: ${client4.location}`);
    else alert(`Wrong credentials. Access denied.`)
}

function coinCollection() {
    let coinCollection = new WeakSet();

    const coin1 = {
        value: 5,
        year: 2001
    }
    const coin2 = {
        value: 10,
        year: 2003
    }
    const coin3 = {
        value: 25,
        year: 2005
    }
    const coin4 = {
        value: 50,
        year: 2011
    }
    const coin5 = {
        value: 1,
        year: 2014
    }

    coinCollection.add(coin1, "5 ????????????");
    coinCollection.add(coin2, "10 ????????????");
    coinCollection.add(coin3, "25 ????????????");
    coinCollection.add(coin4, "50 ????????????");

    alert(`coin1:\nvalue: ${coin1.value}\nyear: ${coin1.year}\n\n` + `coin2:\nvalue: ${coin2.value}\nyear: ${coin2.year}\n\n` + `coin3:\nvalue: ${coin3.value}\nyear: ${coin3.year}\n\n` +`coin4:\nvalue: ${coin4.value}\nyear: ${coin4.year}\n\n` +`coin5:\nvalue: ${coin5.value}\nyear: ${coin5.year}`);
}

let item = "";

while(item === "" || item === null) item = prompt(`Testing Menu(Map) collection.\nType the name of dish or type 'all' to list all of the dishes`, `all`)
menu(item);

let guest = "";
while(!guest) guest = prompt(`Testsing guestList(Set) collection.\nPlease enter your name:`, ``);
guestList(guest, 1);
guest = prompt(`Testsing guestList(Set) collection.\nWho do you want to delete (leave empty if not):`, ``);
if(guest) guestList(guest, 2);

let client = "";
while(!client) client = prompt(`Testsing bankVault(WeakMap) collection.\nPlease client credentials:`, `4910258967483249`);
bankVault(+client);

alert(`Testsing coinCollection(WeakSet) collection.\nPress OK to see all the coins`);
coinCollection();
