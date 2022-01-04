import React from 'react';
import { useState } from "react";

export default function Summary(props) {
    const { cartItems, onAdd, onRemove } = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.amount * c.price, 0);
    const [days, setDays] = useState(1)
    const [extra, setExtra] = useState(1)
    const totalPrice = itemsPrice * days * extra;
    return (
        <div>
            <div className='row mb-3'>
                <div className='mt-3 col-md-6'>
                    <h4 className='text-info'>Přehled objednávky - zadejte počet kol</h4>

                    {cartItems.length === 0 && <div className='my-3 text-warning fs-4'>Dosud není vybrán žádný typ kola</div>}
                    {cartItems.map((item) => (
                        <div key={item.id} className='row my-2'>
                            <div className='col-3 text-warning fw-bold mt-2'>{item.name}</div>
                            <div className='col-6'>
                                <button onClick={() => onRemove(item)} className='btn btn-sm btn-warning text-white fw-bold m-1'>odeber kus</button>

                                <button onClick={() => onAdd(item)} className='btn btn-sm btn-info text-white fw-bold m-1'>&nbsp;přidej kus&nbsp;</button>
                            </div>
                            <div className='col-3 text-end text-warning fw-bold mt-2'>
                                {item.amount} x {item.price} Kč
                            </div>
                        </div>
                    ))}
                </div>
                <div className=' mt-3 col-md-6'>
                    <h4 className='text-info'>Vyberte, zda chcete nosič</h4>
                    <div className='text-warning'>
                        <div className='form-check'>
                            <input className='form-check-input' type="radio" value="1" id="bez" name="extra" defaultChecked="true" onChange={(e) => setExtra(e.target.value)} />
                            <label className='form-check-label' htmlFor="bez">
                                bez nosiče
                            </label>
                        </div>
                        <div className='form-check'>
                            <input className='form-check-input' type="radio" value="1.05" id="stresni" name="extra" onChange={(e) => setExtra(e.target.value)} />
                            <label className='form-check-label' htmlFor="stresni">
                                nosič střešní (+ 5% z výpůjční ceny navíc)
                            </label>
                        </div>
                        <div className='form-check'>
                            <input className='form-check-input' type="radio" value="1.1" id="zadni" name="extra" onChange={(e) => setExtra(e.target.value)} />
                            <label className='form-check-label' htmlFor="zadni">
                                nosič na tažné zařízení (+ 10% z výpůjční ceny navíc)
                            </label>
                        </div>
                    </div>
                    <div>
                        <h4 className='text-info mt-3'>Souhrn ceny</h4>
                        <div className='mt-2 row'>
                            <div className='col-6 text-warning fs-4'>Cena za vybraná kola</div>
                            <div className='col-6 text-warning fs-4'>{itemsPrice} Kč</div>
                        </div>
                        <div className='mt-2 row'>
                            <div className='col-6 text-warning fs-4'>Počet výpůjčních dní</div>
                            <div className='col-6 text-warning fs-4'>
                                <select className="form-select form-select-sm" onChange={(e) => setDays(e.target.value)}>
                                    <option value="1" defaultChecked>1 den</option>
                                    <option value="7">7 dní</option>
                                    <option value="14">14 dní</option>
                                    <option value="30">30 dní</option>
                                </select>
                            </div>
                        </div>
                        <hr className='bg-warning border-3 border-top border-warning' />
                        <div className='mt-3 row'>
                            <div className='col-6 text-white fs-4'>Celková cena</div>
                            <div className='col-6 text-white fs-4'>{Math.round(totalPrice)} Kč</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}