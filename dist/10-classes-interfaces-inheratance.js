"use strict";
// clases
class Vehicle {
    drive() {
        return 'This Vehicle Drives';
    }
}
class TeslaX extends Vehicle {
    conectToBluetooth() {
        return true;
    }
    navigate() {
        return true;
    }
}
const t1 = new TeslaX();
class IPhone16 {
}
