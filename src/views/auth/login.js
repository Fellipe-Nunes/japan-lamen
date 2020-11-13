import React, { useState } from 'react'
import styled from 'styled-components';
import { FaHome } from 'react-icons/fa'


import ImgLogo from '../../assets/images/image_6.jpg'
import { Link } from 'react-router-dom';
import { Button, Form, Spinner } from 'react-bootstrap';

import { authentication } from '../../services/auth'
import http from '../../config/http';
import { saveToken } from '../../config/auth';
import history from '../../config/history'

export default () => {

    const [form, setForm] = useState({
        email: "thaisnviana@gmail.com",
        password: "a12345678c"
    })
    const [loading, setLoading] = useState(false)

    const handleChange = (attr) => {
        setForm({
            ...form,
            [attr.target.name]: [attr.target.value]
        })
    }

    const isSubmitValid = () => form.email && form.password


    const submitLogin = async (e) => {
        e.preventDefault()
        if (isSubmitValid()) {
            setLoading(true)
            try {
                const { data } = await authentication(form)
                const { token } = data
                http.defaults.headers["x-auth-token"] = token;
                saveToken(data)
                history.push('/admin')

            } catch (error) {
                setLoading(false)
                console.log('deu ruim', error)
            }
        }
    }

    return (
        <Login imgLogo={ImgLogo}>
            <div className="row justify-content-center">
                <div className="col-xl-10 col-lg-12 col-md-9">
                    <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0">
                            {/* Nested Row within Card Body */}
                            <div className="row">
                                <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                                <div className="col-lg-6">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4">Bem Vindo ao Pizza Delicous</h1>
                                        </div>
                                        <Form className="user">
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Control className="form-control form-control-user" onChange={handleChange} type="email" name="email" placeholder="Enter email" value={form.email || ""} />
                                            </Form.Group>

                                            <Form.Group controlId="formBasicPassword">
                                                <Form.Control className="form-control form-control-user" onChange={handleChange} type="password" name="password" placeholder="Password" value={form.password || ""} />
                                            </Form.Group>

                                            <Button onClick={submitLogin} disabled={!isSubmitValid()} className={`btn ${isSubmitValid() ? 'btn-primary' : "btn-secondary"} btn-user btn-block`} variant="primary" type="submit">

                                                {loading ? (
                                                    <>
                                                        <Spinner
                                                            as="span"
                                                            animation="grow"
                                                            size="sm"
                                                            role="status"
                                                            aria-hidden="true"
                                                        />
                                                        Carregando...
                                                    </>
                                                ) : "Login"}

                                            </Button>
                                        </Form>
                                        <hr />
                                        <div className="text-center">
                                            <Link className="small" to="/">
                                                <FaHome /> Pagina Inicial
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Login>

    )
}



const Login = styled.div.attrs({
    className: 'container',
})`
    .bg-login-image{
        background-image: url(${ImgLogo})
    }
`;
