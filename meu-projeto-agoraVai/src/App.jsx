import './App.css'
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router';
//reaproveitamento de estrutura 
import { Outlet } from 'react-router-dom';

    function App() {   
    const navigate = useNavigate();

    const handleContact = () => {
        console.log ("Oi aqui");
        return 
            navigate("/")
    };
  

  return (
    <>    
       <Outlet />
    </>
  );
}

export default App