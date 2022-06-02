import {
    ListaStyled,
    ItemLista,
    Foto,
    Informacoes,
    Nome,
    Descricao
} from './Lista.style'
import { Button } from '@mui/material'
import {Pet} from '../../../data/@types/Pet'
import { TextService } from '../../../data/services/TextServices'
interface ListaProps{
    pets: Pet[];

}

export default function Lista(props:ListaProps){
    const tamanhMaximo = 200;
    return (
        <ListaStyled>
            {
                props.pets.map(pet => (
                    <ItemLista>
                        <Foto src={pet.foto} alt={pet.nome}>
                        </Foto>
                        <Informacoes>
                            <Nome>
                                {pet.nome}
                            </Nome>
                            <Descricao>
                                {TextService.limitarTexto(pet.historia, tamanhMaximo)}
                            </Descricao>
                            <Button
                                variant={'contained'}
                                fullWidth
                            >Adotar</Button>
                        </Informacoes>
                    </ItemLista>    
                ))
            }
        </ListaStyled>
    )
}