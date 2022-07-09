import React from 'react';
import {PaginaP} from '../style';
import Formulario from '../components/Mensagem/Mensagem';

const Main=()=>{
    return(
        <PaginaP>
            <aside/>
            <main>
                <Formulario/>
            </main>
            <aside/>
        </PaginaP>
    );
}

export default Main;