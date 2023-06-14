import './modal.scss';

const Modal = ({store, setStore}) => {
  return (
    <>
      <div className="modal"
        style={{
          display: store.showModal ? 'block' : 'none'
        }}
      >
        <div className="background"></div>
        <div className="modal-container">
          <div className="header">
            Welcome
            <button
              onClick={() => {
                setStore({ showModal: false })
              }}
            >
              X
            </button>
          </div>
          <div className="body">
            <h2 style={{ textAlign: "left" }}>Welcome!</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam deleniti eveniet in odio magnam. Obcaecati, ullam culpa
              ipsam sequi nisi eos, corrupti animi repellat aliquam, deleniti
              facere quidem itaque eligendi?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
