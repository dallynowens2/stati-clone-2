import React from 'react'
import PersonForm from './PersonForm'

function NewPerson({onAddPerson}) {
    const savePersonDataHandler = (enteredPesonData) => {
        const personData ={
            id: Math.random(),
            ...enteredPesonData,
        }
        onAddPerson(personData);
    }
    
    return (
        <div>

            <PersonForm onSavePersonData ={savePersonDataHandler}/>

        </div>
    )
}

export default NewPerson
