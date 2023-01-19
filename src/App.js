import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const allPerson = [
    { name: 'photoshop', price: '$500' },
    { name: 'Illustrator', price: '$400'},
    { name: 'Adobe reader', price: '$800'},
    { name: 'Adobe reader', price: '$800'},
    { name: 'Adobe reader', price: '$800'},
    { name: 'Adobe reader', price: '$800'},
    { name: 'Adobe reader', price: '$800'},
    { name: 'Adobe reader', price: '$800'},
    { name: 'Adobe reader', price: '$800'},
    { name: 'Adobe reader', price: '$800'},
    { name: 'Adobe reader', price: '$800'},
    { name: 'Adobe reader', price: '$800'},
  ]

  const student = ['arif', 'akash', 'rakib', 'naim', 'hhh'];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <User></User>

        <Counter></Counter>

        <ul>
          {
            student.map(boy => <li>{boy}</li>)
          }
        </ul>

        {
          allPerson.map(bio => <person person= {bio}></person>)
        }
        
        <div>
          {
            allPerson.map(item => <Person Person={item}></Person>)
          }
        </div>

        {/* <Person Person = {allPerson[0]}></Person>
        <Person Person = {allPerson[1]}></Person> */}

      </header>
    </div>
  );
}

function User() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers((data)))
  })
  return (
    <div>
      <h1>All User</h1>
      <ul style={{textAlign: 'left'}}>
        {
          users.map(user => <li>{user.phone}</li>)
        }
      </ul>
    </div>
  )
}

function Counter() {
  const [value, newValue] = useState(0);
  const valueIncrease = () => {
    const newCount = value + 1;
    newValue(newCount);
  };
  return (
    <div>
      <h1>Count : {value}</h1>
      <button onClick={valueIncrease}>Increase</button>
      <button onClick={()=> newValue(value-1)}>Decrease</button>
    </div>
  )
}

function Person(props) {
  const personStyle = {
    backgroundColor: 'lightgray',
    width: '200px',
    height: '200px',
    border: '1px solid gray',
    color: 'black',
    borderRadius: '10px',
    margin: '10px',
    display: 'inline-block',
    padding: '40px'
  }
  const { name, price } = props.Person;
  return (
    <div style={personStyle}>
      <h3>{name}</h3>
      <h4>{price}</h4>
      <button>Buy Now</button>
    </div>
  )
}



export default App;
