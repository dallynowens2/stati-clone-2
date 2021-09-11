
import React, { useState } from 'react'
import peopleList from './Data/PeopleData';
import PeopleListComponent from './Components/PeopleList/PeopleListComponent';
import PeopleDetailComponent from './Components/PeopleDetail/PeopleDetailComponent';
import NewPerson from './Components/NewPeople/NewPerson';

function App() {
  const persontest = {
    id: 0,
    firstName: '',
    lastName: '',
    height: '',
    hobby: ''
  }
  const [personDetail, setPersonDetail] = useState(persontest);
  const peopleDetailHandler = (person) => {
    setPersonDetail(person);
    
  };

  const [personList, setPersonList] = useState(peopleList)
  const addPerson = (personData) =>{
    setPersonList(prevPerson => {
      return [personData, ...prevPerson];
    });  
    
  };

  const deletePerson = (selectedPerson) =>{
    
    const newList = personList.filter(e => e.id === selectedPerson.id);
    newList.forEach(f => personList.splice(personList.findIndex(e => e.id === f.id), 1));
    console.log(personList);
  }

  return (
    <div className="App">
      <div className='container-xxl cntr-txt'>Hello</div>
      <NewPerson onAddPerson={addPerson}/>
      <PeopleListComponent peopleList={personList} peopleDetailHandler={peopleDetailHandler} />
      <PeopleDetailComponent personDetail={personDetail} onDeleteClick={deletePerson}/>
    </div>
  );
}

export default App;
