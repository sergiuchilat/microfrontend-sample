import React, {Suspense, useState} from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";
const RemoteNavBar = React.lazy(() => import('nav/NavBar'));
const RemoteSideBarNav = React.lazy(() => import('nav/SideBarNav'));

import sidebarLinks from './static/sidebarLinks'

const App = () => {

    const [sideBarOpened, setSideBarOpened] = useState(false)

  return (
    <>
        <Suspense fallback={'loading...'}>
            <RemoteNavBar />
        </Suspense>
        <Suspense fallback={'loading...'}>
            <button onClick={() => {setSideBarOpened(!sideBarOpened)}}>Toggle SideBar</button>
            <RemoteSideBarNav opened={sideBarOpened} links={sidebarLinks} />
        </Suspense>
        <Header/>
        <main>
            <MainPage/>
        </main>
        <Footer/>
    </>
  );
};

export default App;
