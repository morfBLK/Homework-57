import React, {useState} from 'react';
import {User, UserClone} from "../../types";

interface Props {
  onSubmit: (user: UserClone) => void;
}

const UserForm: React.FC<Props> = ({onSubmit}) => {
  const [user, setUser] = useState<User>({
    name: '',
    email: '',
    active: false,
    selectUser: '',
  });

  const onUserChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {name, value} = e.target;
    setUser(prev => ({...prev, [name]: value}));
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...user,
      id: Math.random().toString(),
    });
  };

  const onCheckboxChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    const {checked} = e.target;
    setUser(prev => ({...prev, active: checked}));
  };

  return (
    <form onSubmit={onFormSubmit} className={'border border-danger border-4 p-3'}>
      <h4>Name</h4>
      <div className="form-group mb-3">
        <label htmlFor="name" className='me-2'>Name</label>
        <input
          type="text"
          className="form-group"
          name="name"
          value={user.name}
          onChange={onUserChange}
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="email" className='me-2'>@mail</label>
        <input
          type="email"
          className="form-group"
          name="email"
          value={user.email}
          onChange={onUserChange}
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="checkbox" className='me-4'>Active: Yes or No?</label>
        <input
          type="checkbox"
          className="form-group"
          name="checkbox"
          value={user.name}
          onChange={onCheckboxChange}
        />
      </div>
      <div className="form-group mb-3">
        <select
          className="form-group"
          name="selectUser"
          onChange={onUserChange}
        >
          <option disabled selected value=''>Select user</option>
          <option value={'User'}>User</option>
          <option value={'Editor'}>Editor</option>
          <option value={'Admin'}>Admin</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">Create</button>
    </form>
  );
};

export default UserForm;