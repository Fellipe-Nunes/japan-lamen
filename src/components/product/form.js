import React, { useState, useEffect } from 'react'
import { Button, ButtonGroup, Form, ProgressBar, ToggleButton } from 'react-bootstrap'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { getCategories, createProduct } from '../../services/admin'
import { FaCheck, FaTimes } from 'react-icons/fa'
import styled from 'styled-components'
const FormProducts = (props) => {

    const [formProduct, setFormProduct] = useState({
        ...props.update,
    })
    const [categories, setCategories] = useState([])
    const [progress, setProgress] = useState(0)
    const [updatePhoto, setUpdatePhoto] = useState(false)

    useEffect(() => {
        let get = async () => {
            const c = await getCategories();
            setCategories(c.data);
        }
        get();
        //clear
        return () => get = () => { };
    }, [])


    // const typeReq = (data) => Object.keys(props.update).length > 0 ? updateProduct(props.update._id, data) : createProduct(data)

    const handleChange = (attr) => {
        console.log()
        const { value, name, checked } = attr.target
        const isCheck = name === 'status' || name === 'highlight'



        if (name === 'photo') {
            setFormProduct({
                ...formProduct,
                'photo': attr.target.files[0]
            })
        } else {
            setFormProduct({
                ...formProduct,
                [name]: isCheck ? checked : value
            })
        }
        return;
    }

    const isUpdate = Object.keys(props.update).length > 0

    const submitProduct = async () => {

        const message = (type, message) => Swal.fire({
            position: 'top-end',
            icon: type || 'success',
            title: message,
            showConfirmButton: false,
            timer: 2500
        })
        // conversao dos dados paa formData
        let data = new FormData()


        Object.keys(formProduct)
            .forEach(key => data.append(key, formProduct[key]))

        const config = {
            onUploadProgress: function (progressEvent) {
                let successPercent = Math.round(progressEvent.loaded * 100 / progressEvent.total)
                setProgress(successPercent)
            },
            headers: {
                'Content-type': 'multipart/form-data'
            }
        }

        createProduct(data, config)
            .then((res) => {
                clearForm()
                message('success', `Produto Cadastrado com sucesso.`)
            })
            .catch((err) => message('error', `Erro ao cadastrar produto.`))
    }

    const clearForm = () => {
        setFormProduct({
            status: true,
            highlight: false
        })
    }
    const removerPhoto = () => {
        setUpdatePhoto(true)
        setFormProduct({
            ...formProduct,
            photo: ""
        })
    }

    const isNotValid = () => {
        return Object.keys(formProduct).some(k => typeof formProduct[k] === "string" && formProduct[k] === "")
    }

    return (
        <>
            <Form.Group >
                <Form.Control type="text" onChange={handleChange} name="title" value={formProduct.title || ""} placeholder="Titulo do Produto" />
            </Form.Group>
            <Form.Group >
                <Form.Control type="text" onChange={handleChange} name="description" value={formProduct.description || ""} placeholder="Descrição curta do Produto" />
            </Form.Group>
            <Form.Group >
                <Form.Control type="text" onChange={handleChange} name="complete_description" value={formProduct.complete_description || ""} as="textarea" rows={3} placeholder="Descrição completa do Produto" />
            </Form.Group>
            <Form.Group >
                <Form.Control as="select" custom name="category" onChange={handleChange} >
                    <option value="">-----------</option>
                    {categories.map((it, i) => (
                        <option selected={formProduct.category?._id === it._id || false} key={i} value={it._id}>{it.name}</option>
                    ))}
                </Form.Control>
            </Form.Group>
            <hr />
            <h5>Preços</h5>
            <Form.Group >
                <Form.Control type="text" onChange={handleChange} name="price" value={formProduct.price || ""} placeholder="Preço" />
            </Form.Group>
            <Form.Group >
                <Form.Control type="text" onChange={handleChange} name="discount_price" value={formProduct.discount_price || ""} placeholder="Desconto" />
            </Form.Group>
            <Form.Group >
                <Form.Control type="text" onChange={handleChange} name="discount_price_percent" value={formProduct.discount_price_percent || ""} placeholder="Desconto em porcentagem" />
            </Form.Group>
            <Form.Group >
                {isUpdate && !updatePhoto ? (
                    <Picture>
                        <img src={formProduct.photo} alt="" />
                        <span href="" onClick={removerPhoto}>Remover</span>
                    </Picture>
                ) : (
                        <input name="photo" type="file" onChange={handleChange} />
                    )}


            </Form.Group>
            <Form.Group className="d-flex">
                <ButtonGroup toggle className="mr-3">
                    <ToggleButton
                        type="checkbox"
                        variant={Boolean(formProduct.highlight) ? 'success' : 'danger'}
                        name="highlight"
                        onChange={handleChange}
                        checked={Boolean(formProduct.highlight)}
                    >
                        {Boolean(formProduct.highlight) ? <FaCheck /> : <FaTimes />} Destaque
                    </ToggleButton>
                </ButtonGroup>
                <ButtonGroup toggle className="mr-3">
                    <ToggleButton
                        type="checkbox"
                        variant={Boolean(formProduct.status) ? 'success' : 'danger'}
                        name="status"
                        onChange={handleChange}
                        checked={Boolean(formProduct.status)}
                    >
                        {Boolean(formProduct.status) ? <FaCheck /> : <FaTimes />}  Status
                    </ToggleButton>
                </ButtonGroup>
            </Form.Group>
            <Form.Group >
                <Button variant="primary" disabled={isNotValid()} onClick={submitProduct}>
                    {isUpdate ? "Atualizar" : "Cadastrar"}
                </Button>
            </Form.Group>
            <br />
            { progress > 0 ? <ProgressBar striped variant="success" now={progress} /> : ""}
            <br />

        </>
    )

}

export default FormProducts

const Picture = styled.div`
    display: flex;
    flex-direction: column;
    
    img{
        max-width: 200px;
        max-height: 200px;
    }
    span{
        cursor: pointer;
        margin: 5px;
        color: red;
        :hover{
            opacity:0.8
        }
    }

`