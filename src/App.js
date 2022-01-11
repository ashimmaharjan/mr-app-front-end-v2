import './App.css'
import './tailwind.css'
import { createTheme, ThemeProvider } from '@mui/material'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Login from './components/Auth/Login'
import Register from "./components/Auth/Register";
import AdminDashboard from './components/AdminLayout';
import AdminLayout from './components/AdminLayout'

const theme = createTheme({
  palette: {
    primary: {
      main: '#f50057'
    },
    secondary: {
      main: '#0071FF'
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <AdminLayout />
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App;
