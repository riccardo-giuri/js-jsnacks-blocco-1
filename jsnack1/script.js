const firstNames = ["Giorgio", "Marco", "Riccardo", "Paolo", "Lorenzo", "Giulia", "Martina", "Beatrice", "Alice", "Emma"];
const lastNames = ["Rossi", "Colombo", "Ricci", "Leone", "Bianchi", "Fontana", "Romano", "Greco", "Testa", "Moretti"];

const guestFullNames = [];
const guests = 8;

function createRandomFullName() {
    //create random index
    const randFirstNameIndex = Math.floor(Math.random() * (firstNames.length) + 0);
    const randLastNameIndex = Math.floor(Math.random() * (lastNames.length) + 0);

    //create the full name
    const currentFullName = `${firstNames[randFirstNameIndex]} ${lastNames[randLastNameIndex]}`;

    //if the name already exist repeat the function or add it to the array
    if(guestFullNames.includes(currentFullName)) {
        createRandomFullName();
    }
    else {
        guestFullNames.push(currentFullName); 
    }
}

//populate array of guests
for(let i = 0; i < guests; i++) {
    createRandomFullName(); 
    console.log(guestFullNames[i]); 
}