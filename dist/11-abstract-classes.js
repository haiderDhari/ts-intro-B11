"use strict";
class Phone {
}
class Samsung extends Phone {
    getOS() {
        return 'Android';
    }
}
class SamsungGalaxyS27 extends Samsung {
    call() {
        console.log('Call');
    }
    text() {
        console.log('Text');
    }
}
const SamsungGalaxyS27Obj = new SamsungGalaxyS27();
