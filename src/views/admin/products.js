import React, { useState } from 'react'
import ListProducts from '../../components/product/list'
import FormProducts from '../../components/product/form'
import { Button } from 'react-bootstrap'
import styled from 'styled-components'

export default () => {
    const [isForm, setForm] = useState(false)
    const [update, setUpdate] = useState({

    })

    const updateProduct = (prd) => {
        setForm(true)
        setUpdate(prd)
    }

    return (
        <Products>
            <Button size="sm" variant="success" onClick={() => setForm(!isForm)}>
                {isForm ? "Lista" : "Novo"}
            </Button>
            <hr />
            { isForm
                ? <FormProducts update={update} />
                : <ListProducts update={updateProduct} />
            }
        </Products>
    )
}

const Products = styled.div`
 
`