import React from 'react'
import useFetch from '../hooks/useFetch';

const ItemGroupRadioArea = ({ person, handleChange }) => {

    const { data, loading, reFetch } = useFetch(`/area`);

    console.log(data);
    return (
        <div className="userUpdateItem">
            <label>Area</label>
            {
                loading ? (
                    <p>Loading...</p>
                ):(
                    data.map(item => (
                        <div>
                            <input type="radio" name="idArea" value={item.id} checked={person.idArea === item.id} onChange={handleChange} />
                            <label style={{ marginLeft: "5px" }}>{item.name}</label>
                        </div>
                    ))
                )
            }
        </div>
    )
}

export default ItemGroupRadioArea