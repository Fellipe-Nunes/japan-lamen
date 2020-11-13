import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import styled from 'styled-components'


import FormCategory from '../../components/category/form'
import ListCategory from '../../components/category/list'


const Category = () => {

    const [isForm, setForm] = useState(false)
    const [update, setUpdate] = useState({})

    const updateCategory = (catg) => {
        setForm(true)
        setUpdate(catg)
    }

    return (
        <Categories>
            <Button size="sm" variant="success" onClick={() => setForm(!isForm)}>
                {isForm ? "Lista" : "Novo"}
            </Button>
            <hr />
            { isForm
                ? <FormCategory update={update} />
                : <ListCategory updateCategory={updateCategory} />
            }
        </Categories>
    )
}


export default Category;

const Categories = styled.div`
 
`

