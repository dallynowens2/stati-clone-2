import React, {useState} from 'react'

function PersonForm({onSavePersonData}) {
    const [enteredFirstName, setFirstName] = useState('');
    const [enteredLastName, setLastName] = useState('');
    const [enteredHeight, setHeight] = useState('');
    const [enteredHobby, setHobby] = useState('');

    const firstNameChangeHandler = (event) => {
        setFirstName(event.target.value);
    };

    const lastNameChangeHandler = (event) => {
        setLastName(event.target.value);
    };

    const heightChangeHandler = (event) => {
        setHeight(event.target.value);
    };

    const hobbyChangeHandler = (event) => {
        setHobby(event.target.value);
    };
    
    const submitHandler = (event) => {
        event.preventDefault();

        const personData = {
            firstName: enteredFirstName,
            lastName: enteredLastName,
            height: enteredHeight,
            hobby: enteredHobby
        }
        onSavePersonData(personData);
        setFirstName('');
        setLastName('');
        setHeight('');
        setHobby('');
    };

    return (
        <form onSubmit = {submitHandler}>
            <div className='row align-items-center'>
                <div className='col'>
                    <label>First Name</label>
                    <input type='text' value={enteredFirstName} onChange={firstNameChangeHandler} />
                </div>   
                <div className='col'>
                    <label>Last Name</label>
                    <input type='text' value={enteredLastName} onChange={lastNameChangeHandler} />
                </div> 
            </div>
            <div className='row align-items-center'>       
                <div className='col col-md'>
                    <label>Height</label>
                    <input type='text' value={enteredHeight} onChange={heightChangeHandler}/>
                </div>    
                <div className='col'>
                    <label>Hobby</label>
                    <input type='text' value={enteredHobby} onChange={hobbyChangeHandler}/>
                </div>     
            </div>
            <div>
                <button type='submit' class='btn btn-primary'>Add New Person</button>
            </div>
        </form>
    )
}

export default PersonForm
