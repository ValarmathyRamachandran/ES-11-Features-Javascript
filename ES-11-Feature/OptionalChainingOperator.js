//If one of the references in the chain is null or undefined, 
//the optional chaining operator (?.) will short circuit and return undefined.

const adventurer = {
    name: 'Alice',
    cat: {
      name: 'Dinah'
    }
  };
  
  const dogName = adventurer.dog?.name;
  console.log(dogName);
  //  output: undefined
  
  console.log(adventurer.someNonExistentMethod?.());
  //  output: undefined