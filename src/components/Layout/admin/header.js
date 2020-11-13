import React from 'react'
import { Nav, NavDropdown } from 'react-bootstrap'
import { getUser } from '../../../config/auth.js'

const Header = () => {
    return (
        <Nav className="mr-auto navbar navbar-expand bg-white mb-4">
            <NavDropdown title={getUser().name} id="dropdown-basic" className="ml-auto">
                <NavDropdown.Item href="#action/3.3">Perfil</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Sair</NavDropdown.Item>
            </NavDropdown>
        </Nav>
    )
}
export default Header
