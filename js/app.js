const calenderButton = document.querySelector('.btn-start');
const calenderContainer = document.querySelector('.container');
const calenderMonths = 24;

calenderButton.addEventListener('click', (event)=> {
    console.log('test');
    for (let i = 0; i < calenderMonths; i++) {
        const calenderDoor = document.createElement('div');
        const calenderDoorText = document.createElement('div');
        calenderDoor.classList.add('image');
        calenderDoorText.classList.add('text');
        calenderDoor.style.gridArea = "month" + (i+1);
        calenderDoorText.innerHTML = i +1;
        calenderDoor.appendChild(calenderDoorText);
        calenderContainer.appendChild(calenderDoor);
        let picNumber = i+1;
        let picPath = `./img/pic${picNumber}.jpg`;
        calenderDoorText.addEventListener('click', (event)=> {
            event.target.parentNode.style.backgroundImage = `url("${picPath}")`;
            event.target.style.opacity = 0;
            event.target.style.backgroundColor = "#333";
        })
    }
    event.preventDefault();
});