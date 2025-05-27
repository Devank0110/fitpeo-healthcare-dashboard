import Header from './components/header.jsx'
import Sidebar from './components/sidebar.jsx'
import Dashboard from './components/dashboard.jsx'

import './styles/app.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='main-body'>
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
// 2470119941