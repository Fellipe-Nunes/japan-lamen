import React, { useState, useEffect } from 'react'
import { Button, Table } from 'react-bootstrap'
import styled from 'styled-components'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { getCategories, deleteCategory } from '../../services/admin'
import { FaRegEdit, FaTrashAlt } from 'react-icons/fa'



const ListCategory = (props) => {
    const [categories, setCategories] = useState([])
    const [isUpdate, setUpdate] = useState(false)

    useEffect(() => {
        setUpdate(false)
        let get = async () => { const c = await getCategories(); setCategories(c.data); }
        if (!isUpdate) {
            get();
        }
        //clear
        return () => get = () => { };
    }, [isUpdate])

    const _deleteCategory = async (obj) => {
        const message = (type, message) => Swal.fire({
            position: 'top-end',
            icon: type || 'success',
            title: message || `Categoria excluída com sucesso.`,
            showConfirmButton: false,
            timer: 2500
        })

        Swal.fire({
            title: `Deseja exluir o usuário ${obj.name} `,
            showCancelButton: true,
            confirmButtonText: `Sim`,
            cancelButtonText: `Não`,
        }).then((result) => {
            if (result.isConfirmed) {
                deleteCategory(obj._id)
                    .then(() => {
                        setUpdate(true)
                        message('success', `Categoria ${obj.name} excluída com sucesso.`)
                    })
                    .catch(() => message('danger', `Erro ao excluir a categoria`))
            }
        })
    }

    const sortCategoryByName = categories.sort(function (a, b) {
        if (a.name > b.name) {
            return 1;
        }
        if (a.name < b.name) {
            return -1;
        }
        return 0;
    });


    return (
        <>
            <Table striped hover size="sm">
                <thead>
                    <tr>
                        <THeadItem>Nome</THeadItem>
                        <THeadItem></THeadItem>
                    </tr>
                </thead>
                <tbody>
                    {sortCategoryByName.map((catg, i) => (
                        <tr key={i}>
                            <td>{catg.name}</td>
                            <td>
                                <ActionButton onClick={() => props.updateCategory(catg)} variant="link" size="sm">
                                    <FaRegEdit />                                </ActionButton>
                                <ActionButton onClick={() => _deleteCategory(catg)} variant="link" size="sm">
                                    <FaTrashAlt />
                                </ActionButton>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </Table>
        </>
    )
}

export default ListCategory


const THeadItem = styled.th`
    background: #666;
    color:#eee;

    :nth-child(1){  width: 80%; }
`
const ActionButton = styled(Button)`
    padding:2px 4px;
    font-weight:500;
    font-size: 16px;

    :hover {
        opacity:0.4;
        color: red
    }
` 
