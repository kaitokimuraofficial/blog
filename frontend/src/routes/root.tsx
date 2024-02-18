import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export async function rootLoader() {
  const response = await fetch('/api/health');
  const movies = await response.json();
  console.log(movies)
  return { movies };
}

export default function Root() {
  //   const res = load();

  return (
    <>
      <Header />
      <div id="sidebar">
        <h1>React Router Contacts</h1>
      </div>
      <div id="detail">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
