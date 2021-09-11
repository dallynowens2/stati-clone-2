import React, { useState } from 'react'

function PeopleDetailComponent({ personDetail, onDeleteClick }) {
    const onDeleteClickHandler = (event) => {
        
        onDeleteClick(event);
    }

    return (

        <div>
            {personDetail.firstName === '' ? (
            <p>Please Select a person to view details</p> ):(
            <div>
                <div>
                    Height: {personDetail.height}
                </div>
                <div>
                    Hobby: {personDetail.hobby}
                </div>
                <button className="btn btn-danger" onClick={onDeleteClickHandler(personDetail)} style={{margin: 'auto'}} >Delete person</button>
            </div>
            )}
        </div>
    )
}

export default PeopleDetailComponent
