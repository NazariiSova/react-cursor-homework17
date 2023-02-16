import React, { useEffect } from 'react'
import { Input } from '@chakra-ui/react';
import Contacts from './components/Contacts/Contacts'
import { useState } from 'react';
import "./components/Search/Search.css"

const contactsArr = [{
  firstName: "Барней",
  lastName: "Стинсовський",
  phone: "+380956319521",
  gender: "male"
}, {
  firstName: "Робін",
  lastName: "Щербатська",
  phone: "+380931460123",
  gender: "female"
}, {
  firstName: "Анонімний",
  lastName: "Анонімус",
  phone: "+380666666666"
}, {
  firstName: "Лілія",
  lastName: "Олдровна",
  phone: "+380504691254",
  gender: "female"
}, {
  firstName: "Маршен",
  lastName: "Еріксонян",
  phone: "+380739432123",
  gender: "male"
}, {
  firstName: "Теодор",
  lastName: "Мотсбес",
  phone: "+380956319521",
  gender: "male"
}];


function App() {


  
  const [contacts, setContacts] = useState(contactsArr);

  const [inputValue, setInputValue] = useState("");

  
  const handlarChangeInput = (event) => {
setInputValue(event.target.value);
filter(event.target.value)
  };

const filter = (eventValueTarget) =>{

 setContacts(contactsArr.filter(contact => {
    return contact.firstName.toLowerCase().includes(eventValueTarget.toLowerCase())
  }));
};

  return (
    <div className="App">

      <div className="input-container">
        <Input
        className='input-search'
        value={inputValue}
          type={"text"}
          placeholder="Search name..."
          color={"white"}
          
          onChange={handlarChangeInput}
        ></Input>
      </div>


      {contacts.map((contact) => (
        <Contacts
          key={contact.lastName}
          firstName={contact.firstName}
          lastName={contact.lastName}
          phone={contact.phone}
          gender={contact.gender}
        />
      ))}

    </div>
  );
}

export default App;
