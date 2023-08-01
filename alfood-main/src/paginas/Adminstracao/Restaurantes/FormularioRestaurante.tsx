import { Button, TextField } from "@mui/material"
import axios from "axios"
import { useState } from "react"

const FormularioRestaurante = () => {

    const [nomeRestaurante, setNomeRestaurante] = useState('')

    const aoSubmiterForm = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        axios.post('http://localhost:8000/api/v2/restaurantes/', {
            nome: nomeRestaurante
        })
            .then(() => {
                alert("restaurante cadastrado com sucesso!")
            })
    }

    return (<form onSubmit={aoSubmiterForm}>
        <TextField
            value={nomeRestaurante}
            onChange={evento => setNomeRestaurante(evento.target.value)}
            label="Nome do restaurante"
            variant="standard"
        />
        < Button
            type="submit"
            variant="outlined" >
            Salvar
        </Button >
    </form>)

}

export default FormularioRestaurante