import React from 'react'

function PeopleComponent({ person}) {
    return (
        <div>
            <div className="container" >
                <div className="row">
                    <div className="col">
                        {person.firstName}
                    </div>
                    <div className="col">
                        {person.lastName}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PeopleComponent
