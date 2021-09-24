import { Button } from 'bootstrap';
import React, { Component } from 'react';
import Counter2 from './counter2';
import App from '../App';
import AppFood from '../AppFood';
import AppT from '../AppT';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../figure/logo.png'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'


class Counters extends Component {
    
    render() { 
        return (
        <div>
            <div className = 'App'>
            
            <Navbar bg = 'dark' variant = "dark"
             sticky = "top" expand = "lg">
                <Navbar.Brand>
                    
                    <img src ={logo} width = '40px' height = '40px' />
                    
                </Navbar.Brand>

              <Navbar.Toggle/>
                <Navbar.Collapse>
                   <Nav>
                    <NavDropdown title = 'List'>
                    <NavDropdown.Item href = '#place'>Place</NavDropdown.Item>
                    <NavDropdown.Item href = '#transportation'>Transportation</NavDropdown.Item>
                    <NavDropdown.Item href = '#food'>Food</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
                
           </Navbar>
           
        </div>
           <center>
            <header>
                <div className =" App">
               
                
               
                </div>

       


            
            <h1>Welcome to Rantauan WEB</h1>
            <h2>How we can help you ?</h2>
           
            <table>
                <tr>
                    <td>1.</td>
                    <td>Rantauan dapat menolong mu berkaitan dengan informasi tempat tinggsl seperti kosan, apartemen. dan rumah kontrakan</td>
                </tr>
                <tr>
                    <td>2.</td>
                    <td>Rantauan dapat menolong mu berkaitan dengan informasi tranportasi baik itu ojek online ataupun transportasi lainnya</td>
                </tr>
                <tr>
                    <td>3.</td>
                    <td>Rantauan dapat menolong mu berkaitan dengan informasi harga kuliner atau warung makan di tempat rantau mu</td>
                </tr>
            </table>
            </header>
             <main>
            <h2 id ="place">Kosan, Apartemen dan Rumah Kontrakan</h2>
            
            <App />
            
           
            <h2 id ="transportation">Transportasi</h2>
            
            <AppT />
            
            <h2 id = "food">Kuliner dan warung makan</h2>
            
            
            <AppFood />
            </main>
            <button className = ''><a href = "#">Back to Top</a></button>

            <Navbar bg = 'dark' variant = "dark"
             sticky = "top" expand = "lg">
                 <Navbar.Brand>
            <footer>CopyRigth by Mohammad Rizki Fauzi 2021</footer>
             </Navbar.Brand>
            </Navbar>
            
            </center>
         
            
        </div>);
    }
}
 
export default Counters ;