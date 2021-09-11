import React, {useState} from 'react'
import PeopleComponent from './PeopleComponent'
import PeopleFilter from './PeopleFilter'

function PeopleListComponent({peopleList, peopleDetailHandler}) {
    const [fileredPeople, setFileredPeopleList] = useState('')
    const onFilterChanged = (input) => {
        setFileredPeopleList(input);
    }

    const filteredPeoplelist = peopleList.filter(person =>{
        return person.firstName.includes(fileredPeople);
    });

    const peopleListItem = filteredPeoplelist.map((person) => (<div onClick={() => peopleDetailHandler(person)} ><PeopleComponent person={person} peopleDetailHandler={peopleDetailHandler}/></div>) )


    return (
        <div>
            <PeopleFilter filterPeople={onFilterChanged}/>
            <div>
                {peopleListItem}
            </div>
        </div>
    )
}

export default PeopleListComponent
