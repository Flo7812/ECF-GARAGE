
export default class User{

    constructor(lastname, firstname, pseudo, email, dateOfBirth, adress, role, password, modifiedAt = '', createdAt = ''){
        
        lastname = this.lastname,
        firstname = this.firstname,
        pseudo = this.pseudo,
        email = this.email,
        dateOfBirth = this.dateOfBirth,
        adress = this.adress,
        role = this.role,
        password = this.password,
        modifiedAt = new Date,
        createdAt = new Date
    }
    
}