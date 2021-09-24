import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './figure/logo.png'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import './App.css'


function App2(){
    return(
        <div className = 'App'>
            
            <Navbar bg = 'dark' variant = "dark"
             sticky = "top" expand = "lg">
                <Navbar.Brand>
                    
                    <img src ={logo} width = '40px' height = '40px' />
                    
                </Navbar.Brand>

              <Navbar.Toggle />
                <Navbar.Collapse>
                   <Nav>
                    <NavDropdown title = 'List'>
                    <NavDropdown.Item href = '#tea'>Place</NavDropdown.Item>
                    <NavDropdown.Item href = '#iten'>Transportation</NavDropdown.Item>
                    <NavDropdown.Item href = '#jam'>Food</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
                
           </Navbar>
           
        </div>
    );
}

export default App2;