import React from 'react'

export const BasicTypes: React.FC = () => {
  const name: string = 'Rolando';
  const age: number = 30;
  const isActive: boolean = true;
  const superPowers: string[] = ['React', 'TypeScript']
  return (
    <>
      <h3>Basic Types</h3>
      { name } { age } { isActive ? 'true' : 'false' }
      <br/>
      { superPowers.join(', ') }
    </>
  )
}
