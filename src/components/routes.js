import {Route} from 'react-router-dom'
import About from './about'
import Home from './home'

function Routes() {
    return (
        <div>
            <Route exact component={About} path="/about" />
            <Route exact component={Home} path="/" />
        </div>
    )
}

export default Routes
