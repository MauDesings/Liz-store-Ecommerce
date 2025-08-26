import { useState } from "react";
import './appLogin.css'
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const AppLogin = () => {
    const [isRegistrando, setIsRegistrando] = useState(false);
    const {values,handleInputChange,handleSubmit,error} = useAuthContext();
    const navigate = useNavigate();

    return (
        <div className="login">
            <div className='logueo'>
                <h2 className='logueo__subtitle'> {isRegistrando ? 'Registrate' : 'Inciar seción'}</h2>

                <form className='form' onSubmit={(e)=> handleSubmit(e,isRegistrando,navigate)}>
                    <div className='form__group'>
                        <label className='form__label' htmlFor="email">Email:</label>
                        <input className='form__inp' type="text" id='email' name='email' value={values.email} onChange={handleInputChange} required/>
                    </div>

                    <div className='form__group'>
                        <label className='form__label' htmlFor="password">Contraseña:</label>
                        <input className='form__inp' type="text" id='password' name='password' value={values.password} onChange={handleInputChange} required/>
                    </div>

                    <button className='form__btn' type='submit'>
                        {isRegistrando ? 'Registrate' : 'Incia seción'}
                    </button>
                </form>

                <p className={error ? 'activeError logueo__error' : 'logueo__error'}>{error}*</p>

                <button className='logueo__btn' type='button' onClick={()=>setIsRegistrando(!isRegistrando)}>
                    {isRegistrando ?'¿No tienes cuenta ? ¡Registarte gatis!' : '¿Ya tienes cuenta? ¡Inicia seción!'}
                </button>

            </div>
        </div>
        
    )
}

export default AppLogin
