import React from 'react';
import { useUser } from '../hooks/useUsers';
import { UserRow } from '.';


export const UsersPage: React.FC = () => {
  const { users, prevPage, nextPage } =  useUser();
  return (
    <>
      <h3>Users</h3>
      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user) => (
              <UserRow key={user.id} user={user}/>
            ))
          }
        </tbody>
      </table>
      <div>
        <button onClick={prevPage}>Prev</button>
        <button onClick={nextPage}>Next</button>
      </div>
    </>
  )
}