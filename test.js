var dropdownMenuContainer = document.createElement('div');
parentContainer.appendChild(dropdownMenuContainer);
dropdownMenuContainer.style.cssText = 'display: flex; margin-top: 7%; justify-content: flex-start; flex-direction: column; overflow: auto;'; 
dropdownMenuContainer.style.width = '20%';

var dropdownMenu = document.createElement('div');
dropdownMenuContainer.appendChild(dropdownMenu);
dropdownMenu.style.cssText = 'background-color: rgba(175, 105, 216, 0.80); margin-left:5%; padding-top:80px; padding-bottom:80px; padding-left:10px; border-radius:100px; box-shadow: 10px 10px 8px #888888; font-size:20px; overflow: auto;';
dropdownMenu.style.width = '200px';
dropdownMenu.style.height = '60%';
dropdownMenu.textContent = 'Selecteer apperaat';

var itemsContainer = document.createElement('div');
parentContainer.appendChild(itemsContainer);
itemsContainer.style.cssText = 'display: flex; margin-top: 5%; justify-content: flex-start; flex-direction: column; overflow: auto;'; 



var koelkast = {
    name: 'koelkast',
    timeOnHours: '6', 
    wattusage: '50'
};
var vriezer = {
    name: 'vriezer',
    timeOnHours: '6',
    wattusage: '50'
};
var koelkastMetVriezer = {
    name: 'koelkast met vriezer',
    timeOnHours: '6',
    wattusage: '75'
};
var elektrischFornuis = {
    name: 'Elektrisch fornhuis',
    timeOnHours: '',
    wattusage: '3000',
};
var oven = {
    name: 'Oven',
    timeOnHours: '',
    wattusage: '3500',
};
var magnetron = {
    name: 'Magnetron',
    timeOnHours: '',
    wattusage: '800',
};



var CVketelElektrisch = {
    name: 'Elektrische CV ketel',
    timeOnHours: '5',
    wattusage: '5000',
};

var lichten = {
    name: 'Lichten',
    timeOnHours: '',
    wattusage: '10',
};

var oplaadpaal = {
    name: 'Oplaadpaal',
    timeOnHours: '',
    wattusage: '7200',
};

var huishoudelijkeApparaten = {
    name: 'Extra apparaat',
    timeOnHours: '',
    wattusage: '',
};

var opladers = {
    name: 'Opladers',
    timeOnHours: '',
    wattusage: '5',
};

var optionsList = {
    koelkast,
    vriezer,
    koelkastMetVriezer,
    elektrischFornuis,
    oven,
    magnetron,
    CVketelElektrisch,
    lichten,
    oplaadpaal,
    huishoudelijkeApparaten,
    opladers,
};




class Options {
    constructor(dropdownMenuOptionsContainer, optionsList) {
        for (var x = Object.keys(optionsList).length; x > 0; x--) {
            this.domElem = document.createElement('div');
            dropdownMenuOptionsContainer.appendChild(this.domElem);
            this.domElem.style.cssText = 'height: 50px; width: 92.5%; background-color: white; border-style:solid; border-width: 1px 1px 0px 1px; overflow: auto; display: flex; align-items: center; justify-content: center; ';
            var item = optionsList[Object.keys(optionsList)[x - 1]];
            this.domElem.textContent = item.name;
            
            if (x == 11){
                this.domElem.style.marginTop = '20px';
            };
            if (x == 1) {
                this.domElem.style.borderWidth = '1px 1px 1px 1px';
                this.domElem.onmousedown = function e() {
                    objectClicked(optionsList, 1);
                };
            };
            if (x == 2) {
                this.domElem.onmousedown = function e() {
                    objectClicked(optionsList, 2);
                };
            };
            if (x == 3) {
                this.domElem.onmousedown = function e() {
                    objectClicked(optionsList, 3);
                };
            };
            if (x == 4) {
                this.domElem.onmousedown = function e() {
                    objectClicked(optionsList, 4);
                };
            };
            if (x == 5) {
                this.domElem.onmousedown = function e() {
                    objectClicked(optionsList, 5);
                };
            };
            if (x == 6) {
                this.domElem.onmousedown = function e() {
                    objectClicked(optionsList, 6);
                };
            };
            if (x == 7) {
                this.domElem.onmousedown = function e() {
                    objectClicked(optionsList, 7);
                };
            };
            if (x == 8) {
                this.domElem.onmousedown = function e() {
                    objectClicked(optionsList, 8);
                };
            };
            if (x == 9) {
                this.domElem.onmousedown = function e() {
                    objectClicked(optionsList, 9);
                };
            };
            if (x == 10) {
                this.domElem.onmousedown = function e() {
                    objectClicked(optionsList, 10);
                };
            };
            if (x == 11) {
                this.domElem.onmousedown = function e() {
                    objectClicked(optionsList, 11);
                };
            };
        };
    };
};




dropdownMenu.onmouseenter = function e() {
    onHoverEnter(optionsList)
};

function onHoverEnter(optionsList) {
    var dropdownMenuOptionsContainer = document.createElement('div');
    dropdownMenu.appendChild(dropdownMenuOptionsContainer);
    var dropdownMenuOptions = new Options(dropdownMenuOptionsContainer, optionsList);
    dropdownMenu.onmouseleave = function e() {
        onHoverLeave(dropdownMenuOptionsContainer)
    };
};

function onHoverLeave(dropdownMenuOptionsContainer) {
    console.log('leave');
    dropdownMenuOptionsContainer.remove();
};


function objectClicked(optionsList, x) {
    console.log(optionsList, x);
    var item = optionsList[Object.keys(optionsList)[x - 1]];
    var domElemContainer = document.createElement('div');
    itemsContainer.appendChild(domElemContainer);
    domElemContainer.textContent = item.name;
    domElemContainer.style.cssText = 'display: flex; align-items: center; margin-bottom: 5%;';

    
    var domInputWatt = document.createElement('INPUT');
    domInputWatt.setAttribute("value", item.wattusage);
    domElemContainer.appendChild(domInputWatt);

    var domInputTime = document.createElement('INPUT');
    domInputTime.setAttribute("value", item.timeOnHours);
    domElemContainer.appendChild(domInputTime);

    var domInputPrice = document.createElement('INPUT');
    domInputPrice.setAttribute("value", "Price you pay per kWu.");
    domElemContainer.appendChild(domInputPrice);
    
    var domButton = document.createElement('div');
    domElemContainer.appendChild(domButton);
    domButton.style.height = '20px';
    domButton.style.width = '20px';
    domButton.style.backgroundColor = 'red';

    var domElemkWu = document.createElement('div');
    domElemContainer.appendChild(domElemkWu);
    
    var domElemPrice = document.createElement('div');
    domElemContainer.appendChild(domElemPrice);


    domButton.onmousedown = function e() {getInputBoxValue(domElemkWu, domElemPrice, domInputWatt, domInputTime, domInputPrice)};
};


function getInputBoxValue(domElemkWu, domElemPrice, domInputWatt, domInputTime, domInputPrice) {
    var kWuUse = domInputWatt.value * domInputTime.value / 1000;
    var price = domInputPrice.value * kWuUse * 365;
    domElemkWu.textContent = 'this is the use in kWu per day: ' + kWuUse;
    domElemPrice.textContent = 'this is the amount you pay for it per year: $' + price;
};
