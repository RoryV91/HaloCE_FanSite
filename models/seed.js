//==================
//   DEPENDENCIES  
//==================

const db = require('./')

//==================
//    ITEM DATA  
//==================

const seed_items = [
    {
        name: "MA5B Assault Rifle",
        type: 'Weapon',
        origin: 'UNSC',
        cpacity: 'Magazine size: 60 rounds, ',
        image: '#',
        description: "The MA5B is a gas-operated bullpup assault rifle chambered in 7.62x51mm. It is equipped with a 60-round detachable box magazine. It has an integrated computer with a display that shows the current ammo count of the magazine. While it lacks physical optics of any kind, the computer interfaces with the Spartans' MJOLNIR armor to provide a crosshair in the helmet's HUD. The MA5B has been in service long before the Covenant War, and is the standard issue weapon of the USNC. This weapon had a large spread and as such is not very accurate. Because it fires physical projectiles, it is ineffective against shields, but does good physical damage."
    },
    {
        name: "M6D Magnum Pistol",
        type: '',
        origin: '',
        cpacity: '',
        image: '#',
        description: ""
    },
    {
        name: "",
        type: '',
        origin: '',
        cpacity: '',
        image: '#',
        description: ""
    },
    {
        name: "",
        type: '',
        origin: '',
        cpacity: '',
        image: '#',
        description: ""
    },
    {
        name: "",
        type: '',
        origin: '',
        cpacity: '',
        image: '#',
        description: ""
    },
    {
        name: "",
        type: '',
        origin: '',
        cpacity: '',
        image: '#',
        description: ""
    },
    {
        name: "",
        type: '',
        origin: '',
        cpacity: '',
        image: '#',
        description: ""
    },
]

//======================
//   SEED DATA STATUS
//======================

db.Item.deleteMany({}, (err, items) => {
    if (err) {
        console.log('Error occured in remove', err)
    } else {
        console.log('Removed all items')

        db.Item.insertMany(seed_items, (err, items) => {
            if (err) {
                console.log('Error occured in insertMany', err)
            } else {
                console.log('Created', items.length, "items")
            }
        })
    }
})
