class Form{

    static prout(x){
        if(x === undefined){
            x = 1
        }
        return x*3
    }
    static proutprout(){
        return 'proutprout'
    }

    constructor(hauteur, largeur){
        this.hauteur = hauteur,
        this.largeur = largeur
    }

    perimetre(){
        return this.hauteur *2 + this.largeur*2
    }
    sayHello(){
        return 'Hello'
    }
}

class Rectangle extends Form{

    static pipi(){
        return'pipi' 
    }
    static getPipiProuprout(){
        return 'pipi' +super.proutprout()
    }
    getfap(x){
        return  this.hauteur + ` fapfap `+ x + ' fois'
    }
    constructor(hauteur, largeur){
        super(hauteur, largeur)
    }
}

const rectangle= new Rectangle(4, 4)
// console.log(Rectangle.pipi());
console.log(Rectangle.getPipiProuprout(), Rectangle.prout(3));
console.log(rectangle.perimetre());
console.log(rectangle.sayHello());

const babar= new Rectangle('wiwi')
console.log(babar.getfap(5));

// const carre =new Form(2,2)
// console.log(carre.perimetre());
// console.log(Form.prout(3));
// console.log(Form.proutprout());
// console.log(Rectangle.proutprout());
// console.log(Rectangle.prout(2));

const createRef = async function(d, id, br, md, mt ){
    const date = new Date(d)
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    const FomatDate = `${year}${month}${day}`
    const idu = id.padStart(4, '0')
    const brand = br.padStart(3, '0')
    const model = md.padStart(3, '0')
    const motor = mt.padStart(3, '0')
    const ref = FomatDate+'-'+idu+'-'+brand+'-'+model+'-'+motor
    console.log(typeof ref,' ',ref);
    return ref
    }
    createRef('2024-02-18T13:39:35.000','1','3','2','5')


function date(){
    const date = new Date().getTime().toString()
    console.log(date);
    return date
}
date()