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
        capacity: 'Magazine size: 60 rounds, 600 rounds total',
        image: '#',
        description: "The MA5B is a gas-operated bullpup assault rifle chambered in 7.62x51mm. It is equipped with a 60-round detachable box magazine. It has an integrated computer with a display that shows the current ammo count of the magazine. While it lacks physical optics of any kind, the computer interfaces with the Spartans' MJOLNIR armor to provide a crosshair in the helmet's HUD. The MA5B has been in service long before the Covenant War, and is the standard issue weapon of the USNC. This weapon had a large spread and as such is not very accurate. Because it fires physical projectiles, it is ineffective against shields, but does good physical damage. While this weapon is often a default starting weapon in multiplayer, it is usually dropped in favor of something else.",
        r
    },
    {
        name: "M6D Pistol",
        type: 'Weapon',
        origin: 'UNSC',
        capacity: 'Magazine size: 12 rounds, 124 rounds total',
        image: '#',
        description: "The M6D is a recoil-operated, semi-automatic handgun chambered in 12.7x40mm. It is equipped with a detachable 12-round box magazine. While this handgun has conventional rear sights, it also has the ability to interface with various UNSC HUD's, including the Spartan MJOLNIR helmets. This interface is capable of a 2x optical zoom. This weapon saw extensive use throughout the Covenant war as the standard sidearm of the UNSC. This is the first weapon acquired by John-117 or Master Chief in the single-player campaign. This weapon is considered by many to be overpowered. While not terribly effective against shields, it is absolutely devastating to player health. This weapon is incrediply popular among players, and is often referred to as the 'Hand Cannon'."
    },
    {
        name: "M41 SPNKr Rocket Launcher",
        type: 'Weapon',
        origin: 'UNSC',
        capacity: 'Magazine size: 2 rounds, 8 rounds total',
        image: '#',
        description: "The M41 SPNKr, affectionately referred to as 'Spanker', is a reusable, magazine-fed rocket launcher. The magazine is a disposable assembly consisting of two tubes that rotate upon firing to load the next round. When the magazine is depleted, the user reloads by opening the body of the M41 SPNKr and replaces the empty tubes with full ones. If the player idles with this weapon equipped, the character will press the test button to rotate the tubes to ensure functionality. This is a very powerful and easy-to-use weapon and is always a good choice to pick up in multiplayer. It has a large blast radius with high damage output, making it effective against both enemy infantry and vehicles. It is somethimes called a 'noob tube' due to its combination of ease of use and lethality."
    },
    {
        name: "",
        type: '',
        origin: '',
        capacity: '',
        image: '#',
        description: ""
    },
    {
        name: "",
        type: '',
        origin: '',
        capacity: '',
        image: '#',
        description: ""
    },
    {
        name: "",
        type: '',
        origin: '',
        capacity: '',
        image: '#',
        description: ""
    },
    {
        name: "",
        type: '',
        origin: '',
        capacity: '',
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
