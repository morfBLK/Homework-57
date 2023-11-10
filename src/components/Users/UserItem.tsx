import React from 'react';
import {User} from '../../types';

interface Props {
  user: User;
}

const UserItem: React.FC<Props> = ({user}) => {

  const active = () => {
    if (user.active) {
      return 'active';
    } else {
      return 'Not Active';
    }
  };

  return (
    <div className="card mb-2">
      <div className="row no-gutters">
        <div className="col-sm-8">
          <div className="card-body">
            <h5 className="card-title">Name: <span className="text-warning">{user.name}</span></h5>
            <p className="card-text small">Email: <span className="text-primary">{user.email}</span></p>
            <p className="card-text">Condition: <span className="text-danger"> {active()}</span></p>
            <p className="card-text"> User option: <span className="text-success"> {user.selectUser}</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserItem;