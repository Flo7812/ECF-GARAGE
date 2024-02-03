
import { useState } from "react";
import { useNavigate } from "react-router-dom";



export default function Login() {

    const navigate = useNavigate();

    const [log, setLog] = useState({
        email: '',
        password: ''
    });

    const onChange = (e) => {
        setLog({
            ...log,
            [e.target.name]: e.target.value
        });
    };

    async function login(e) {
        e.preventDefault();
        if (log.email !=='' && log.password !==''){ 
            console.log(login, "email : ", log.email, '|| ', "password : ", log.password);
            try {
                const r = await fetch('http://127.0.0.1:5700', {
                    method: 'POST',
                    headers: {
                        'content-Type': 'application/json'
                    },
                    body: JSON.stringify({ login })
                });
                if (r.ok) {
                    console.log(r);
                    console.log('utilisateur connecté');
                    navigate("/Login");
                }
            } catch (error) {
                console.log(error.message);
            }
        }else{
            alert("merci de remplir tout les champs")
        }
    }

    return (
            <main className="login__container">
                {log.email}
                {log.password}

                <div className="form__container">
                    <form className="form" action="" method="post">
                        <h2>Bienvenue</h2>
                        <div className="">
                            <input className="input__info" type="email" name="email" placeholder="email" value={log.email} onChange={onChange} /><br />
                            <input className="input__info" type="password" name="password" placeholder="Password" value={log.password} onChange={onChange} />
                        </div>
                        <input className="input__button" type="submit" value="envoyer" onClick={login} /><br />
                        <a href="">Mot de passe oublié</a>
                    </form>
                </div>
            </main>
    );
}
