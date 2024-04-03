import React from 'react'

interface Address {
  country: string;
  houseNumber: number;
}

interface Person {
  firstName: string;
  lastName: string;
  age: number;
  address: Address;
}
export const ObjectLiteral: React.FC = () => {
  const person: Person = {
    firstName: 'Rolando',
    lastName: 'Parada Puig',
    age: 30,
    address: {
      country: 'Venezuela',
      houseNumber: 143,
    }
  }
  return (
    <>
      <h3>Object Literal</h3>
      <pre>
        {JSON.stringify(person, null, 2)}
      </pre>
    </>
  )
}
