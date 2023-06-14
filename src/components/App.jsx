import './button.scss';

const modals = [
  {id: 1},
  {id: 2},
  {id: 3},
  {id: 4},
  {id: 5},
]


const App = ({ store, setStore }) => {
    return (
        <div id="app">
          <h1>Modal</h1>
          <div className="main">
            {
              modals.map((modal, i) => {
                return <button 
                  key={`Modal-${modal.id}`}
                  onClick={ () => {
                    setStore( {showModal: true} );
                  }}
                >
                  {`Modal-${modal.id}`}
                </button>
              })
            }
          </div>
        </div>
    )
};

export default App;