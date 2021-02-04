import Link from 'next/link';
import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import {Context} from '../context/AuthContext';
import { Navbar, Nav, Button } from 'react-bootstrap';

export default function Header() {
    const router = useRouter();
    const {user, setUser, authenticated, setAuthenticated} = useContext(Context);

    function logout(){
        localStorage.removeItem('user');
        //localStorage.removeItem('access_token');
        
        setAuthenticated(false);
        setUser(null);
        router.push('/login');
    }

    function CheckAuthenticated(){
        if(!authenticated){
            return (
                <>
                    <Nav.Link href="/login" className="text-center">Login</Nav.Link>
                </>
            );
        }else{
            return (
                <>
                    <Nav.Link href="#" className="text-center">{user.name}</Nav.Link>
                    <Button variant="outline-danger" onClick={logout}>Sair</Button>
                </>
            );
        }   
    }

    return (
        <>
            <Navbar bg="light" expand="lg" className="shadow-sm">
                <Navbar.Brand href="/">
                    <img src="/images/logo.png" className="img-fluid" style={{width: 100}} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <CheckAuthenticated />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}