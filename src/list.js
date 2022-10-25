import React from 'react';
const List = ({ people }) => {
    return (
        <>
            {people.map((person) => {
                const { id, name, age } = person;
                return (
                    <article key={id} className="person">
                        <div>
                            <h4>{name}</h4>
                            <h4>{age}</h4>
                        </div>
                    </article>
                )
            })}
        </>
    )
}
export default List
