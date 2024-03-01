const bcrypt = require('bcrypt')
const fs = require('fs')
const util = require('util')
const path = require('path')
const DBmodels = require('../../Models/index');

async function initDBTables(){
    try {
        const route1 = path.join(__dirname, '..', '..', '..', 'assets', 'Logo1.png')
        const route2 = path.join(__dirname, '..', '..', '..', 'assets', 'LogoVoitureColoriage.png')
        const route3 = path.join(__dirname, '..', '..', '..', 'assets', 'Screenshot 2024-02-20 230942.png')
        const route4 = path.join(__dirname, '..', '..', '..', 'assets', 'Sidous.jpeg')
        const images = {route1, route2, route3, route4}
        const newArray = []
        const fsrf = util.promisify(fs.readFile)
        for (const route in images) {
            const data =  await fsrf(images[route])
            // console.log(data);
            const arrayName = images[route].split('\\');
            // console.log(arrayName);
            const name = arrayName[arrayName.length - 1];
            // console.log(name);
            let image = {img1: data, img1description : name}
            newArray.push(image)
        }
        // console.log(newArray);
        await DBmodels.Image.bulkCreate(newArray) 

        await DBmodels.UserRole.bulkCreate([
                {role: 'admin'},
                {role: 'employee'}
            ])
            .then(()=>(console.log('instances USerRoles OK')))
            .catch((e)=> console.log('Unable to create instances of Table UserRoles', e))

        await DBmodels.Brand.bulkCreate([
                {name: 'Renault'},
                {name: 'Dacia'},
                {name: 'Peugeot'},
                {name: 'Citroën'},
            ])
            .then(()=>console.log('instances Brands OK'))
            .catch((e)=> console.log('Unable to create instances of Table Brands', e))

            await DBmodels.Model.bulkCreate([
                    {
                        name: 'Clio',
                        serie: '3'
                    },
                    {
                        name: 'Zoe',
                        serie: '1'
                    },
                    {name: 'Springs'},
                    {name: '206'},
                    {name: 'C1'},
                ])
                .then(()=>console.log('instances Models OK'))
                .catch((e)=> console.log('Unable to create instances of Table Models', e))

            await DBmodels.Motor.bulkCreate([
                    {type: 'Essence'},
                    {type: 'Diesel'},
                    {type: 'Hybride'},
                    {type: 'Electrique'},
                    {
                        type: 'Essence',
                        description: '1L6'
                    },
                    {
                        type: 'Electrique',
                        description: '27kw'
                    },
                    {
                        type: 'Diesel',
                        description: '1L4'
                    }
                ])
                .then(()=>console.log('instances Motors OK'))
                .catch((e)=> console.log('Unable to create instances of Table Motors', e))

            await DBmodels.TestimonyStatus.bulkCreate([
                    {
                        ValidateStatus: 'confirmed',
                        isValidated: true
                    },
                    {
                        ValidateStatus: 'to confirm',
                        isValidated: false
                    }
                ])
                .then(()=>console.log('instances testimonyStatus OK'))
                .catch((e)=> console.log('Unable to create instances of Table TestimonyStatus', e))
            
            const vpPass = await bcrypt.hash(process.env.USER_ADMIN_PASSWORD, parseInt(process.env.BCRYPT_SALT))
            const ePass = await bcrypt.hash(process.env.USER_JEANBON_PASSWORD, parseInt(process.env.BCRYPT_SALT))
            await DBmodels.User.bulkCreate([
                    {
                        last_name: 'Parrot',
                        first_name: 'Vincent',
                        username: 'VParrot1',
                        email: 'vparrot@mail.fr',
                        date_of_birth: '1970-01-31',
                        address: '12 rue de la voiture',
                        phone: '0607080910',
                        password: vpPass,
                        role: '1'
                    },
                    {
                        last_name: 'Bon',
                        first_name: 'Jean',
                        username: 'JBon2',
                        email: 'jbon@mail.fr',
                        date_of_birth: '1980-12-31',
                        address: '3 rue du cochon',
                        phone: '0605040302',
                        password: ePass,
                        role: '2'
                    },
                ])
                .then(()=>console.log('instances Users OK'))
                .catch((e)=> console.log('Unable to create instances of Table Users', e))
            
                await DBmodels.Seller.bulkCreate([
                    {
                        last_name: 'Doe',
                        first_name: 'John',
                        email: 'jdoe@mail.com',
                        address: '13 rue unknow',
                        phone: '0602030900',
                    },
                    {
                        last_name: 'Boe',
                        first_name: 'Bart',
                        email: 'boebart@mail.fr',
                        address: '2 rue de la prairie',
                        phone: '0607770888',
                    },
                    {
                        last_name: 'Vincent',
                        first_name: 'Franky',
                        email: 'fvt007@mail.fr',
                        address: '15 ave des iles',
                        phone: '0707070102',
                    },
                ])
                .then(()=>console.log('instances Sellers OK'))
                .catch((e)=> console.log('Unable to create instances of Table Sellers', e))

            await DBmodels.Car.bulkCreate([
                    {
                        ref:'20242001-0001-001-001-005',
                        brand: '1',
                        model: '1',
                        motor: '5',
                        price:'8000',
                        kilometers: '90400',
                        initial_registration: '2009-06-09',
                        description: 'Une super voiture!',
                        seller: '1',
                        images: '1',
                        createdBy:'2'
                    },
                    {
                        ref:'20242201-0002-002-003-006',
                        brand: '2',
                        model: '3',
                        motor: '6',
                        price:'15000',
                        kilometers: '32330',
                        initial_registration: '2021-11-29',
                        description: 'Ideale pour des petits trajets.',
                        seller: '1',
                        images: '2',
                        createdBy:'2'
                    },
                    {
                        ref:'20242201-0003-003-004-001',
                        brand: '3',
                        model: '4',
                        motor: '1',
                        price:'12000',
                        kilometers: '69000',
                        initial_registration: '2013-09-30',
                        description: 'Un classique pour tout les jours et les vacances!!',
                        seller: '3',
                        images: '3',
                        createdBy:'2'
                    },
                    {
                        ref:'20242201-0004-004-005-007',
                        brand: '4',
                        model: '5',
                        motor: '7',
                        price:'3500',
                        kilometers: '105480',
                        initial_registration: '2003-04-01',
                        description: 'Fiable!!',
                        seller: '2',
                        images: '4',
                        createdBy:'2'
                    }
                ])
                .then(()=> console.log('instances Cars OK'))
                .catch((e)=> console.log('Unable to create instances of Table Cars', e))

            await DBmodels.Testimony.bulkCreate([
                    {
                        author_last_name: 'Simson',
                        author_first_name: 'Homer',
                        author_email: 'hsimson@springfield.com',
                        content: 'C\'est un super garage!!',
                        status: '1',
                        validator:'2'
                    },
                    {
                        author_last_name: 'Jacques',
                        author_first_name: 'Jean',
                        author_email: 'jj@mail.com',
                        content: 'Au top!!',
                        // status: '',
                        // validator:'2', 
                    },
                    {
                        author_last_name: 'Doe',
                        author_first_name: 'Jane',
                        author_email: 'dj@mail.com',
                        content: 'Super!!',
                        status: '1',
                        validator: '1',
                    },
                    ])
                    .then(()=>console.log('instances Testimonials OK'))
                    .catch((e)=> console.log('Unable to create instances of Table Testimonials', e))

                await DBmodels.SectionPage.bulkCreate([
                    {
                        page_name: 'main'
                    },
                    {
                        page_name: 'services'
                    }
                ])                    
                    .then(()=>console.log('instances section_page OK'))
                    .catch((e)=> console.log('Unable to create instances of Table section_page', e))

                await DBmodels.Section.bulkCreate([
                    {
                        title: 'Accueil',
                        content: 'Fort de son experience, le garage Vincent Parrot vous recois dans la bonne humeur ...Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil dignissimos mollitia provident nemo, commodi ipsum molestias sit! Porro dignissimos reiciendis facere, molestiae ad perspiciatis id veniam commodi obcaecati. Laudantium, dolor. ',
                        position:'1',
                        page: '1'
                    },
                    {
                        title: 'Services',
                        content: 'Nous effectuons des raparations, entretiens, carrosserie...',
                        position:'2',
                        page:'1'
                    },
                    {
                        title: 'Vente de vehicules',
                        content: 'De l\'occasion a bon prix fiable, controlé par nos soins.',
                        position:'3',
                        page:'1'
                    },
                    {
                        title: 'Offres d\'emplois',
                        content: 'Toujours a la recheche de nouveaux talents! contacter nous.',
                        position:'4',
                        page:'1'
                    },
                    {
                        title: 'Reparations',
                        content: 'Tout types de reparations',
                        position:'1',
                        page:'2'
                    },
                    {
                        title: 'Carrosserie - Peinture',
                        content: 'Pour tout types de vehicules',
                        position:'2',
                        page:'2'
                    },
                    {
                        title: 'Entretiens- Nettoyage',
                        content: 'Pour rouler en toute sécurité',
                        position:'3',
                        page:'2'
                    },
                    {
                        title: 'Restauration',
                        content: 'Redonnez vie au vehicule des grands-parents',
                        page:'2'
                    }
                ])
                    .then(()=>console.log('instances Sections OK'))
                    .catch((e)=> console.log('Unable to create instances of Table Sections', e))

                await DBmodels.Message.bulkCreate([
                    {
                        sender_last_name: 'Poirot',
                        sender_first_name: 'Jean-jaques',
                        sender_email: 'jjpoirot@mail.fr',
                        sender_phone:'0605040302',
                        object: 'Reanult Clio 3 essence 1L6 ref : 20242001-0001-001-001-005',
                        refCar:'20242001-00001-01-01-05',
                        content:'j aime beaucoup cette Reanult Clio 3 est elle toujours disponible?.'
                    },
                    {
                        sender_last_name: 'Deschamps',
                        sender_first_name: 'Jeannette',
                        sender_phone:'0701020304',
                        object: 'Peaugot 206  essence ref : 20242201-0003-004-001-002',
                        refCar:'20242201-0003-004-001-002',
                        content: 'Pouvez vous me recontacter.'
                    }
                ])                    
                    .then(()=>console.log('instances messages OK'))
                    .catch((e)=> console.log('Unable to create instances of Table messages', e))
    } catch (error) {
        console.log('Tables intances ERROR :', error)
    }
}

module.exports = initDBTables()

