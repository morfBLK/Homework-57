import React from 'react';
import {UserClone} from '../../types';
import UserItem from './UserItem.tsx';

interface Props {
  users: UserClone[];
}

const Users: React.FC<Props> = ({users}) => {
  return (
    <div className="border border-danger border-4 p-3">
      <h4>User detais</h4>
      {users.map((user) => {
        return (
          <UserItem user={user} key={user.id}/>
        );
      })}
    </div>
  );
};

export default Users;