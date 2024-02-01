// import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";





export default function Login(){

        const navigate = useNavigate()
        const [login, setLogin] = useState({
            pseudo: '',
            password: ''
        })

        const onChange = (e) =>{
            setLogin({
                ...login,
                [e.target.name]: e.target.value
            })
        }



        async function loginUSer(e){
            e.preventDefault()
            console.log(login, "pseudo : ", login.pseudo,'|| ', "password : ",login.password);
            try {
                const r = await fetch('http://127.0.0.1:5500/login', {
                    method: 'POST',
                    headers:{
                        'content-Type': 'application/json'
                    },
                    body: JSON.stringify({login})
                    })
                if(r.ok){
                    console.log(r);
                    console.log('utilisateur connecté');
                    navigate("/LoginPage")
                }
            } catch (error) {
                console.log(error.message);
            }
    }

    return(
        <>

        <div className="login__container">
            <div className="form__container">
            <form className="form" action="" method="post">
                <h2>Bienvenue</h2>
                <div className="">
                    <input className="input__info" type="text" name="identifiant" placeholder="email" required onChange={onChange}/><br />
                    <input className="input__info" type="password" name="password" placeholder="Password" required onChange={onChange}/>            
                </div>
                <input className="input__button" type="submit" value="envoyer" onClick={loginUSer}/><br/>
                <a href="">Mot de passe oublié</a> 
            </form>
            </div>
        </div>

        </>
    )
}
