import React from 'react'

export default function Bike(props) {
    const { bike, onAdd } = props;

    return (
        
            <div className="card text-info m-1 text-center bg-warning border-info" style={{ width: "20rem" }}>
                <img src={bike.image} className="card-img mt-3" alt={bike.name} />
                <div className="card-body">
                    <h5 className="card-title">{bike.name}</h5>
                    <p className="card-text">Cena: {bike.price} Kč za kus na 1 den</p>
                    <button className="btn text-white btn-info" onClick={() => onAdd(bike)}>Přidej typ do objednávky</button>
                </div>
            </div>
      
    )

};
