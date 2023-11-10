import React from 'react';
import {User} from "../../types";

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
            <h5 className="card-title">{user.name}</h5>
            <p className="card-text small">{user.email}</p>
            <p className="card-text">{active()}</p>
            <p className="card-text">{user.selectUser}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserItem;