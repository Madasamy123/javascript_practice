const totalCollection=[
    {
        name: "madasamy",
        mail: "maddy"
    },
    {
        name:"deepak",
        mail:"deeeee"
    },
    {
        name:"sudrsan",
        mail:"super"
    },
    {
        name:"bala",
        mail:"baaa"

    },
    {
        name:"senthil",
        mail:"sen"
    }
]

//create

//read

const keyName="name";
const KeyValue="bala";
const read=totalCollection.find((data)=>data[keyName]===KeyValue);
console.log(read)

//update

const updateKey="mail";
const updateValue="balamurugan";
const update=totalCollection.find((data)=>data[keyName] === KeyValue)
update[updateKey] = updateValue;
console.log(update)

//delete

const delet= totalCollection.indexOf(read);
totalCollection.splice(5,1);
console.log(totalCollection)

