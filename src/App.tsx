import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.scss'
import { Header } from './core/Header'
import { LoginForm } from './pages/LoginForm'
import { MainPage } from './pages/MainPage'

function App () {
  return (
    <Router>
      <Header />
      <div className='App'>
        <Switch>
          <Route path='/' exact component={MainPage} />
          <Route path='/login' exact component={LoginForm} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
