

export default function CreateUser(){

    return(
        <>
        <div className="login__container">
            <div className="form__container">
            <form className="form" action="" method="post">
                <h2>Bienvenue</h2>
                <div className="register__flex">
                    <input className="input__info" type="text" name="lastName" placeholder="Nom" required/><br />
                    <input className="input__info" type="text" name="firstName" placeholder="Prenom" required/>            
                    <input className="input__info" type="text" name="pseudo" placeholder="Pseudo/ Identifaint" required/><br />
                    <input className="input__info" type="date" name="birthDate" placeholder="DDN" required/>            
                </div>
                <div className="register__flex">
                    <input className="input__info" type="text" name="adress" placeholder="Adresse" required/><br />
                    <input className="input__info" type="tel" name="tel" placeholder="Telephone" required/>            
                    <input className="input__info" type="email" name="email" placeholder="Email" required/><br />
                    <input className="input__info" type="password" name="password" placeholder="Create password" required/>    
                </div>
                <input className="input__button form__submit" type="submit" value="envoyer" onClick={postDatas}/><br/>
            </form><br />

            </div>
            
        </div>
        </>
    )

    async function postDatas(e){
        const form = document.querySelector('form')
        e.preventDefault()
        const datas = new FormData(form)
        const email = datas.get("email");
        const lastName = datas.get("lastName");
        const firstName = datas.get("firstName");
        const birthDate = datas.get("birthDate");
        const pseudo = datas.get("pseudo");
        const tel = datas.get("tel");
        const password = datas.get("password");
        const adress = datas.get("adress")
        const jsonDatas ={
            lastName: lastName, 
            firstName: firstName,
            email: email,       
            tel: tel,
            pseudo: pseudo,
            birthDate: birthDate,
            password: password,
            adress: adress
        };
        console.log(jsonDatas);
        
        try {
            const r =  await fetch("http://127.0.0.1:5500/register", {
                method: "POST",
                headers:{
                    "content-type" : "application/json"
                },
                body: JSON.stringify(jsonDatas)
            })
            if(!r.ok){
                console.log('données non recus');
            }else{
                console.log(r);
                console.log("bien envoyé");
            }
        } catch (error) {
            console.log('envoi impossible', error.message);
            return false
        }
        
    }

        

}

    