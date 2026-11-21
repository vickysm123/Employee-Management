import './App.css'
import Dashboard from './pages/Dashboard.jsx'
import Sidebar from './components/sidebar'
import Header from './components/Header'
import Employees from './pages/Employees'
function App() {
  return (
    <div className='app-layout'>
      <Sidebar />
      <div className='main-content'>
      <Header />
     <Dashboard /> 
     <Employees />    
    </div>
    </div>
  )
}

export default App
