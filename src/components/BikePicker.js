import React from 'react'
import Bike from './Bike';

export default function BikePicker(props) {
    const { bikes, onAdd } = props;
    return (
        <div className='mt-3'>
            <h4 className='text-info'>Vyberte si typ(y) kol(a)</h4>
            <div className="row d-flex justify-content-center">
                {bikes.map((bike) => (
                    <Bike key={bike.id} bike={bike} onAdd={onAdd}></Bike>
                ))}
            </div>
        </div>
    )
};


