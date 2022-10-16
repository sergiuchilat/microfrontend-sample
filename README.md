# Module Federation Sample


## How to use

Run the following commands in the root directory.

To start main APP
```bash
cd app
npm start
```

To start components placeholder APP
```bash
cd nav
npm start
```

Both `app` and `nav` are independently deployed apps:

- `app`: http://localhost:3001
- `nav`: http://localhost:3002

# Composition

``app`` package contains main application and some local components.

Local components:
- Header
```bash 
import Header from "./components/Header";
```
  
- Footer
```bash
import Footer from "./components/Footer";
```

These components have been connected as usual React component.

Remote components:
- Navbar 
```bash
const RemoteNavBar = React.lazy(() => import('nav/NavBar'));
```

- SideBarNav
```bash
const RemoteSideBarNav = React.lazy(() => import('nav/SideBarNav'));
```