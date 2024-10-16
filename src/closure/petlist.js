function createPetList() {
    const petList = [];
    function addPet(myPet) {
        petList.push(myPet);
        console.log(`MyPet: ${petList}`);
    }
    return addPet;
}

const myPetManu =createPetList();
myPetManu("Pipa");
myPetManu("Bruno");
