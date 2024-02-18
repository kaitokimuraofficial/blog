import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

export async function rootLoader() {
  const response = await fetch('/api');
  const movies = await response.json();
  return { movies };
}

export default function Root() {
  //   const res = load();

  return (
    <>
      <Header />
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <nav>
          <ul>
            {/* <li>
              <p>{contacts}</p> */}
            {/* </li> */}
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
