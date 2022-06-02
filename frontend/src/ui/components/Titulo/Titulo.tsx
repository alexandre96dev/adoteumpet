import { TituloStyled, SubtituloStyled } from "./Titulo.style";
interface TituloProps {
    titulo : string;
    subtitulo ?: string | JSX.Element;
}
export default function Titulo(props:TituloProps) {
    return (
        <>
            <TituloStyled>
                {props.titulo}
            </TituloStyled>
            <SubtituloStyled>
                {props.subtitulo}
            </SubtituloStyled>
        </>
        
    )
}