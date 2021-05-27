import Navbar from './components/navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Routes from './components/routes'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Routes />
        </Switch>
      </Router>
    </>
  );
}

export default App;
