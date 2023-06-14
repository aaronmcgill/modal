import './container.scss';
import Modal from './components/Modal';
import App from './components/App';
import { useState } from 'react';

function Container() {

  const [store, setStore] = useState({
    showModal: false,
    mText: 'ABCDEF'
  })

  return (
    <>
      <App
        setStore={setStore} 
        store={store}
      />
      <Modal
        setStore={setStore} 
        store={store}
      />  
    </>
  );
}

export default Container;