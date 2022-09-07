import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">

        <form onSubmit = {(e) => {
          e.preventDefault(); 
          props.onSubmit(e.target.foo.value)
        }}>
            <input type ="text" name ="foo"/>

            <button type ="submit">submit</button>
        </form>

      </header>
    </div>
  );
}

export default App;
