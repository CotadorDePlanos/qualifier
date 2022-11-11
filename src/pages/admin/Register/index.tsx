import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from "axios";
import * as C from './styles'
import * as Toast from '@radix-ui/react-toast';
import { CrossCircledIcon } from '@radix-ui/react-icons'
 
export function Register() {
  const history = useHistory();
  // initial state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open,setOpen] = useState(false)

  const handleSubmit = (e: React.SyntheticEvent) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();

    // set configurations
    const configuration = {
      method: "post",
      url: "/user/register",
      data: {
        name,
        email,
        password,
      },
    };

    // make the API call
    axios(configuration)
      .then((result) => {
        history.push('/login');
      })
      .catch((error) => {
        setOpen(true);
        window.setTimeout(() => {
            setOpen(false);
          }, 5000);
      });
  };

  return (
    <C.Container>
      <div className="card">
      <form onSubmit={(e) => handleSubmit(e)}>
      <h2>Register</h2>
        {/* name */}
          <label>
            <input
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name"
            />
          </label>

        {/* email */}
          <label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
          </label>
        {/* password */}
          <label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </label>
        {/* submit button */}
        <button
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Register
        </button>


      </form>
        <Toast.Provider swipeDirection="right">
            <Toast.Root className="ToastRoot" open={open} onOpenChange={setOpen}>
                <Toast.Title className="ToastTitle">Usuario não foi criado</Toast.Title> 
                <Toast.Description className="ToastDescription">email de Usuario ja utilizado</Toast.Description>
                <Toast.Close><CrossCircledIcon/></Toast.Close> 
            </Toast.Root>

            <Toast.Viewport  className="ToastViewport"/>
        </Toast.Provider>
      </div>
    </C.Container>
  );
}
