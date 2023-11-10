import React, {useState} from 'react';
import UserForm from "./components/UserForm/UserForm";
import Users from "./components/Users/Users";
import {UserClone} from "./types";

function App() {
  const [user, setUser] = useState<UserClone[]>([]);

  const addUser = (newUser: UserClone) => {
    setUser(prev => [...prev, newUser]);
  };

  return (
    <>
      <main className="container-fluid">
        <div className="row mt-2">
          <div className="col">
            <UserForm onSubmit={addUser}/>
          </div>
          <div className="col">
            <Users  users={user}/>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;