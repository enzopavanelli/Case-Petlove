import React from 'react';
import './page.css'


const Page = () => {
    return (
        <>
        <div className= "Conteiner">
            <div className= "FormCep">
                <div className= "Form">
                    <form action= "" method= "GET">
                        <input id= "cep" type= "numer" required pattern= "\d{5}-?\d{3}" placeholder= "00000-000"/>
                        <button type= "submit" id= "BtnCep">Buscar CEP</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}


export default Page;