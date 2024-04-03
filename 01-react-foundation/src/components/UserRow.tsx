import React from "react";
import type { User } from "../interfaces";

interface Props {
  user: User,
}

export const UserRow: React.FC<Props> = ({ user }: Props) => {
  const { email, first_name, last_name, avatar } = user;

  return (
    <tr>
      <td><img style={{ height: '50px', width: '50px', borderRadius: '10px' }} src={avatar} alt="User Avatar" /></td>
      <td>{first_name} {last_name}</td>
      <td>{email}</td>
    </tr>
  )
}
