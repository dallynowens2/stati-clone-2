import React from 'react'

function PeopleFilter({filterPeople}) {
    const onFilterInputChange = (event) =>{
        filterPeople(event.target.value);
    }


    return (
        <div>
            <label>Filter By Name</label>
            <input type='text' onChange={onFilterInputChange} ></input>
        </div>
    )
}

export default PeopleFilter