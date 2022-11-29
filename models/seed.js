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
        image: '/assets/img/icons/MA5B.png',
        description: "The MA5B is a gas-operated bullpup assault rifle chambered in 7.62x51mm. It is equipped with a 60-round detachable box magazine. It has an integrated computer with a display that shows the current ammo count of the magazine. While it lacks physical optics of any kind, the computer interfaces with the Spartans' MJOLNIR armor to provide a crosshair in the helmet's HUD. The MA5B has been in service long before the Covenant War, and is the standard issue weapon of the USNC. This weapon had a large spread and as such is not very accurate. Because it fires physical projectiles, it is ineffective against shields, but does good physical damage. While this weapon is often a default starting weapon in multiplayer, it is usually dropped in favor of something else.",
    },
    {
        name: "M6D Pistol",
        type: 'Weapon',
        origin: 'UNSC',
        capacity: 'Magazine size: 12 rounds, 124 rounds total',
        image: '/assets/img/icons/M6D.png',
        description: "The M6D is a recoil-operated, semi-automatic handgun chambered in 12.7x40mm. It is equipped with a detachable 12-round box magazine. While this handgun has conventional rear sights, it also has the ability to interface with various UNSC HUD's, including the Spartan MJOLNIR helmets. This interface is capable of a 2x optical zoom. This weapon saw extensive use throughout the Covenant war as the standard sidearm of the UNSC. This is the first weapon acquired by John-117 or Master Chief in the single-player campaign. This weapon is considered by many to be overpowered. While not terribly effective against shields, it is absolutely devastating to player health. This weapon is incrediply popular among players, and is often referred to as the 'Hand Cannon'."
    },
    {
        name: "M41 SPNKr Rocket Launcher",
        type: 'Weapon',
        origin: 'UNSC',
        capacity: 'Magazine size: 2 rounds, 8 rounds total',
        image: '/assets/img/icons/SPNKr.png',
        description: "The M41 SPNKr, affectionately referred to as 'Spanker', is a reusable, magazine-fed rocket launcher. The magazine is a disposable assembly consisting of two tubes that rotate upon firing to load the next round. When the magazine is depleted, the user reloads by opening the body of the M41 SPNKr and replaces the empty tubes with full ones. If the player idles with this weapon equipped, the character will press the test button to rotate the tubes to ensure functionality. This is a very powerful and easy-to-use weapon and is always a good choice to pick up in multiplayer. It has a large blast radius with high damage output, making it effective against both enemy infantry and vehicles. It is somethimes called a 'noob tube' due to its combination of ease of use and lethality."
    },
    {
        name: "M7057 Flamethrower",
        type: 'Weapon',
        origin: 'UNSC',
        capacity: '100 fuel units, 1 tank',
        image: '/assets/img/icons/Flamethrower.png',
        description: "The M7057 Flamethrower is an incendiary weapon that sprays fuel into an ignitor, resulting in a continuous stream of fire. While this weapon has a very limited range, it is highly effective against anything it touches. Because it is fire, and not a projectile or plasma, it inflicts continuous damage against any player struck by it. It is equally effective against shield or health. This weapon could not be completed in-time for the original Xbox release of Halo, but was included on the PC-exclusive release of Halo: Combat Evolved. Despite this, it was featured in one cutscene in game. Due to its limited use case, it is not a very popular weapon in game. "
    },
    {
        name: "Health Pack",
        type: 'Healing',
        origin: 'UNSC',
        capacity: 'Up to 8 health units, 1 use',
        image: '/assets/img/icons/Medkit.png',
        description: "The health pack is the standard medkit of the UNSC, and as such is rather ubiquitous in game. It is considered to be just as useful for Spartans as it is for humans. It is said to contain biofoam, polypseudomorphine, and self-adhering antiseptic battle dressings. In later entries in the series the red symbol was changed to a red 'H' due to a legal dispute with The International Red Cross, which also affected many other game franchises. To achieve more mechanical simplicity, these were dropped in most of the sequels, but returned in Halo: ODST & Halo: Reach."
    },
    {
        name: "M9 Fragmentation Grenade",
        type: 'Thrown explosive',
        origin: 'UNSC',
        capacity: '4 total',
        image: '/assets/img/icons/Frag.png',
        description: "The M9 fragmentation grenade, better known as simply the frag grenade, is a high-explosive anti-personnel grenade. It is also effective against light vehicles. It is a conventional metal body explosive grenade, designed to explode and produce shrapnel to inflict physical damage. It has a large blast radius and high damage output. An energy shield provides some protection, however these are still pretty devastationg to any Spartan. In Halo: Combat Evolved, these will not detonate until they have bounced on the ground at least once, leading to a somewhat effective strategy of lobbing them a great distance to provide area suppression. Using multiple frag grenades in quick succession is a highly effective strategy to eliminate the enemy team, especially in close quarters. "
    },
    {
        name: "Banshee",
        type: 'Vehicle',
        origin: 'Covenant',
        capacity: 'Infinite; 4 second cooldown on the Fuel Rod Cannon',
        image: '/assets/img/icons/Banshee.png',
        description: "The Tye-26 Banshee is an aerial vehicle used in-atmosphere at low altitudes to support ground forces. It is equipped with two armament types, dual Plasma Cannons and an integrated Fuel Rod Cannon. The Banshee seats only 1 occupant, the pilot. These vehicles have great agility, but are limited due to the hard invisible walls on every map. The Banshee also has the lowest damage weapons of any vehicle in the game. These are more commonly used by players to traverse a long map in CTF as opposed to attacking the enemy team in Team Slayer."
    },    
    {
        name: "Shade Turret",
        type: 'Stationary weapon',
        origin: 'Covenant',
        capacity: 'Infinite',
        image: '/assets/img/icons/Turret.png',
        description: "The Shade Turret is a stationary anti-infantry weapon. While these can be destroyed in the single-player campaign, they cannot in multiplayer. However, they can be tipped over in multiplayer, rendering them basically useless. They are effective aginst vehicles and players alike, but because of their stationary characteristic, they make players using them an easy target. "
    },
    {
        name: "Active Camoflauge",
        type: 'Power-up',
        origin: 'Both',
        capacity: '1 use, 45-second duration',
        image: '/assets/img/icons/ActiveCamo.png',
        description: "Active camoflauge is a collection of technologies to make the user invisible on the visible light spectrum. Both Covenant and UNSC forces have their own versions of active camoflauge. It tends to be more effectively utilized by the UNSC, as their conventional weapons dont glow with plasma like the Covenant. These are useful in multiplayer to hide at a distance, however, players using this can be detected fairly easily at a close range."
    },
    {
        name: "Blue Flag",
        type: 'Objective pick-up',
        origin: 'UNSC',
        capacity: 'N/A',
        image: '/assets/img/icons/BlueFlag.png',
        description: "Flags were used for training in the SPARTAN-II program. Capture the flag was a common traning excercise. Usually it was a two-team event consisting of red and blue teams. The blue flag depicts a bird of some kind against two swords. It is said to be kept next to the blue team's headlight fluid."
    },
    {
        name: "Red Flag",
        type: 'Objective pick-up',
        origin: 'UNSC',
        capacity: 'N/A',
        image: '/assets/img/icons/RedFlag.png',
        description: "Flags were used for training in the SPARTAN-II program. Capture the flag was a common traning excercise. Usually it was a two-team event consisting of red and blue teams. The red flag depicts a cobra against the shape of a diamond. The meaning of the symbols on the flags is unknown. "
    },
    {
        name: "Needler",
        type: 'Weapon',
        origin: 'Covenant',
        capacity: 'Magazine sie: 20 rounds, 80 rounds total',
        image: '/assets/img/icons/Needler.png',
        description: "The Needler is perhaps the most unique weapon in the Halo franchise. It is a projectile weapon with tracking capability. It is not energy based, and the crystals protruding from the top of the weapon are the rounds it fires. The Needler feeds those crystalline structures into the barrel of the weapon and fires them in a homing pattern to their target. These shards embed themselves in the target and explode after a 3-second delay. a single magazine is enough to eliminate a Spartan."
    },
    {
        name: "OddBall",
        type: 'Objective pick-up',
        origin: 'UNSC',
        capacity: 'N/A',
        image: '/assets/img/icons/Oddball.png',
        description: "The oddball is a weathered human skull, missing the lower jaw. It is the central objective of the gametype Oddball. It is unknown who the skull belonged to. While players cannot use other weapons while holding the ball, it inflicts stronger melee damage to compensate."
    },
    {
        name: "Overshield",
        type: 'Power-up',
        origin: 'Both',
        capacity: '1 use, two full shields',
        image: '/assets/img/icons/Overshield.png',
        description: "The overshield, sometimes called simply OV, is a pickup the supplements the players shield with additional hitpoints. It gives the player the eqivalent of two more shields on top of their basic one. These shields are a one time use and do not regenerate, unlike the basic shield. "
    },
    {
        name: "Fuel Rod Cannon",
        type: 'Weapon',
        origin: 'Covenant',
        capacity: 'Magazine size: 5, 28 rounds total',
        image: '/assets/img/icons/FuelRodCannon.png',
        description: "The Fuel Rod Cannon or Fuel Rod Gun is the Covenant heavy weapon. This is the handheld version of the weapon integrated into the Banshee. It is reloadable unlike the battery operated weapons. The projectile fires in an arc pattern, meaning the round can travel a longer distance if aimed correctly. This weapon could not be completed in-time for the original Xbox release of Halo, but was included on the PC-exclusive release of Halo: Combat Evolved."
    },
    {
        name: "Ghost",
        type: 'Vehicle',
        origin: 'Covenant',
        capacity: 'Infinite',
        image: '/assets/img/icons/Ghost.png',
        description: "The Ghost is the Covenant scout bike vehicle. It is typically used for reconaissance or light attack. It is a one-person vehicle. It is equipped with two Plasma Cannons that are slightly more powerful than the ones on the Banshee. These weapons make quick work of energy shields. These vehicles move pretty fast so they are very useful for carrying a flag from one base to another. "
    },
    {
        name: "Plasma Grenade",
        type: 'Thrown explosive',
        origin: 'Covenant',
        capacity: '4 total',
        image: '/assets/img/icons/PlasmaNade.png',
        description: "The Plasma grenade, or sticky grenade, is a thrown explosive weapon that sticks to a target. It only sticks to players or vehicles, not ground or wall surfaces. Its adhesive property is activated by thermal energy or heat signature. Being stuck with a plasma grenade is a guaranteed elimination. In multiplayer, with friendly-fire turned off, players would routinely use these to jump higher to access otherwise inaccessible places in maps or to exploit level geometry. "
    },
    {
        name: "Plasma Pistol",
        type: 'Weapon',
        origin: 'Covenant',
        capacity: '100% battery, non-rechargable',
        image: '/assets/img/icons/PlasmaPistol.png',
        description: "The plasma pistol is one of the most common weapons used by the Covenant. It uses a battery and cannot be reloaded. While its single shot fire is weak, it can be charged to completely destroy an enemy shield. The charged shot even has a slight homing function. Because it uses energy, it is not very effective against players health bars, only n their energy shields. The charge shot functionality maeks this a viable weapon for use online if used in tandem with another weapon. "
    },
    {
        name: "Plasma Rifle",
        type: 'Weapon',
        origin: 'Covenant',
        capacity: '100% battery, non-rechargable',
        image: '/assets/img/icons/PlasmaRifle.png',
        description: "The plasma rifle is a fully automatic plasma weappon. This is a very old weapon and has been in service long before the Covenant was established. The plasma rifle has somewhat of a high spread at a medium distance, and is just inaccurate beyond that. This is mitigated by firing in short bursts or remaining within close range of a target. The plasma rifle is very effective against shields, but deals very little physical damage."
    },
    {
        name: "Rocket Warthog",
        type: 'Vehicle',
        origin: 'UNSC',
        capacity: 'Infinite;',
        image: '/assets/img/icons/RocketHog.png',
        description: "The M12A1 Light Anti-Armor Vehicle is most often referred to as the Rocket Warthog. It is built on the same platform as the M12 Chaingun Warthog, but sports a M39 rocket turret instead. It is visually distinct from the M12 Warthog in color, bearing ablack paint job with yellow striping, and yellow seats. The Rocket Warthog seats 3, a driver, a gunner, and a passenger. The rocket launcher turret shoots the same rocket as the SPNKr, but with an increased rate of fire due to the autmoatic reload. This vehicle was only in Halo: Combat Evolved, and not on the original Xbox release of Halo."
    },
    {
        name: "Scorpion",
        type: 'Vehicle',
        origin: 'UNSC',
        capacity: 'Infinite; 4-second cooldown on main gun',
        image: '/assets/img/icons/Scorpion.png',
        description: "The M808B Scorpion is the main battle tank of the UNSC. It is outfitted with a M512 Smooth Bore High Velocity Cannon and one coaxial M231 Medium Machine Gun. It takes two human operators, or one Spartan. In addition to the one Spartan operator, four more can ride along as passengers by sitting on the treads. The armaments on this tank are extremely powerful, its main gun is a one-hit for any player in any vehicle. "
    },
    {
        name: "Shotgun",
        type: 'Weapon',
        origin: 'UNSC',
        capacity: 'Tube size: 12 shells, 60 shells total',
        image: '/assets/img/icons/Shotgun.png',
        description: "The M90 Shotgun is an 8-guage pump action shotgun with a tube that accepts 12 shells. This weapon has been in service for the entire duration of the Covenant War. Because shells are loaded individually, the reload process can be interrupted if necessary. This weapon is absolutely devastating at close range, and can be a one-hit if aimed correctly close enough. This is the preferred weapon for close-quarters in multiplayer. It is so prolific that it has its own gametype where it is the only equipable weapon."
    },
    {
        name: "Sniper Rifle",
        type: 'Weapon',
        origin: 'UNSC',
        capacity: 'Magazine size: 4 rounds, 20 rounds total',
        image: '/assets/img/icons/SniperRifle.png',
        description: "The S2 AM Sniper Rifle is the standard long-rage weapon for the UNSC. Because of the high-caliber 14.5x114mm round it fires, it is considered to be an Anti-Material rifle. It comes equipped with a two-level optic that increases magification from 2x to 8x. The S2 AM is extremely effective against Spartan opponents. It is a guaranteed one-hit for well placed headshots, and a two-hit anywhere else on the enemy. This weapon is extremely popular in Multiplayer and has its own gametype that also features the M6D Pistol as a sidearm."
    },
    {
        name: "Warthog",
        type: 'Vehicle',
        origin: 'UNSC',
        capacity: 'Infinite',
        image: '/assets/img/icons/Warthog.png',
        description: "The M12 Chaingun Warthog is the most prolific vehicle in the game, a quintessential part of the Halo franchise. It has been featured in almost all of the machinima to come from the game. This is most often referred to as simply the Warthog. This model comes equipped with the M41 Vulcan triple-barrel chaingun. The armament has infinite ammo with no cooldown. It is extremely effective aginst infantry units and still useful against vehicles. It gained the name Warthog from the two tow hooks in the front of the vehicle on either side of the winch, resemble ones on the warthog found in nature. Despite this, some have likened its appearance to that of a Puma instead."
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
