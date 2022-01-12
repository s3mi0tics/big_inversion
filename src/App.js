import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard';

const peopleArr = [
  {"firstName": "Jane", "lastName": "Doe", "age": 45, "hairColor": "Brown"},
  {"firstName": "Chris", "lastName": "Kelly", "age": 39, "hairColor": "Blond"},
  {"firstName": "Tyler", "lastName": "Smith", "age": 60, "hairColor": "Black"},
  {"firstName": "Chelsea", "lastName": "Kauk", "age": 25, "hairColor": "Red"},
]
function App() {
  return (
    <div className="App">
    {peopleArr.map(person => {
      return <PersonCard firstName = {person.firstName} lastName = {person.lastName} age = {person.age} hairColor = {person.hairColor}/>
    })}  
    </div>
  );
}

export default App;
