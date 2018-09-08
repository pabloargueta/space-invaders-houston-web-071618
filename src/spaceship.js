class Spaceship {
    constructor(name, crew) {
        this.name = name
        this.crew = crew
        this.phasers = 5
        this.shields = 4
        this.cloaked = false
        this.warpDrive = "disengaged"
        this.phasersCharge = "uncharged"
        this.docked = crew.length ? false : true
        this.setCrew()
    }

    setCrew() {

        this.crew.forEach(member => {
            member.currentShip = this
        });
    }
}
