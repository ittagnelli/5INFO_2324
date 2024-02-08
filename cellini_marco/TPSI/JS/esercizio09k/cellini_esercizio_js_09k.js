const new_auto = () => {
    return {
        persone: 0, speed: 0, gear: 1, status: false,
        set_persone(n) { n >= 0 && n <= 6 ? this.persone = n : null; this.print_car(); },
        set_speed(v) {
            this.speed >= 0 && this.speed <= 180 && Math.abs(this.speed - v) <= 30 ?
                this.speed = v :
                console.log('velocità non idonea');
            this.print_car();
        },
        gear_up() { this.gear != 6 && this.status === true ? this.gear++ : null; this.print_car(); },
        gear_down() { this.gear != 0 && this.status === true ? this.gear-- : null; this.print_car(); },
        on_off() { this.status = !this.status; this.print_car(); },
        print_car() {
            for (let k in this)
                typeof this[k] !== 'function' ? console.log(`${k} --> ${this[k]}`): null;
            console.log('\n');
        }
    };
};

let macchina = new_auto();
macchina.set_persone(5);
macchina.on_off();
macchina.gear_up();
macchina.set_speed(25);