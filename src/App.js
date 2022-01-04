import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import data from './data';
import BikePicker from './components/BikePicker';
import Summary from './components/Summary';
import './App.css';

function App() {
  const { bikes } = data;
  const [cartItems, setCartItems] = useState ([]);
  const onAdd = (bike) => {
    const exist = cartItems.find((x) => x.id === bike.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === bike.id ? { ...exist, amount: exist.amount + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...bike, amount: 1 }]);
    }
  };
  const onRemove = (bike) => {
    const exist = cartItems.find((x) => x.id === bike.id);
    if (exist.amount === 1) {
      setCartItems(cartItems.filter((x) => x.id !== bike.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === bike.id ? { ...exist, amount: exist.amount - 1 } : x
        )
      );
    }
  };
  return (
    <div className='container mt-3 border border-info rounded' id='bg-transparent'>
      <h1 className='display-1 text-info text-center my-2 heading-style'>NewBikeCity</h1>
      <h1 className='text-warning text-center heading-style'>...a new experience</h1>
      <BikePicker bikes={bikes} onAdd={onAdd}></BikePicker>
      <Summary cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}></Summary>
    </div>
  );
}

export default App;
