import { useState } from "react";
import { useHistory } from 'react-router-dom';
import * as Toast from '@radix-ui/react-toast'
import { CrossCircledIcon } from '@radix-ui/react-icons'
import * as C from './styles';
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export function Login() {
  const history = useHistory();
  // initial state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.SyntheticEvent) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();

    // set configurations
    const configuration = {
      method: "post",
      url: "/user/login",
      data: {
        email,
        password,
      },
    };

    // make the API call
    axios(configuration)
      .then((result) => {
        // set the cookie
        cookies.set("TOKEN", result.data.token, {
          path: "/",
        });
        // redirect user to the auth page
        history.push('/operator');
      })
      .catch(() => {
        setOpen(true);
        window.setTimeout(() => {
            setOpen(false);
          }, 5000);
      });
  };

  return (
    <C.Container >
      <div className="card">
      <form onSubmit={(e) => handleSubmit(e)}>
        <h2>Login</h2>
        {/* email */}
        <label>Email address
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </label>

        {/* password */}
        <label>Password
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
          Login
        </button>

      </form>

      <Toast.Provider swipeDirection="right">
          <Toast.Root className="ToastRoot" open={open} onOpenChange={setOpen}>
              <Toast.Title className="ToastTitle">Login não efetuado</Toast.Title> 
              <Toast.Description className="ToastDescription">Usuario ou senha incorretos</Toast.Description>
              <Toast.Close><CrossCircledIcon/></Toast.Close> 
          </Toast.Root>

          <Toast.Viewport  className="ToastViewport"/>
      </Toast.Provider>

      </div>
    </C.Container>
  );
}
