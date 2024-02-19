

export default function CreateCar(){
    
    return (
        <main className="login__container">
            <div className="form__container">
            <form className="form" action="" method="post">
                <h2>Create Car</h2>
                <div className="register__flex">
                    <input className="input__info" type="text" name="last_name" placeholder="Nom"   /><br />
                    <input className="input__info" type="text" name="first_name" placeholder="Prenom"  />            
                    
                    <input className="input__info" type="date" name="date_of_birth" placeholder="DDN"  />            
                </div>
                <div className="register__flex">
                    <input className="input__info" type="text" name="address" placeholder="Adresse" /><br />
                    <input className="input__info" type="tel" name="phone" placeholder="Telephone" />            
                    <input className="input__info" type="email" name="email" placeholder="Email" /><br />
                    <input className="input__info" type="password" name="password" placeholder="Create password" />    
                </div>

                <input className="input__button form__submit" type="submit" value="envoyer" /><br/>
            </form><br />

            </div>
            
        </main>
    );
};

