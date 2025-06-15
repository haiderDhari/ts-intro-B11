// interfaces
interface Bluetooth {
    conectToBluetooth: () => boolean
}

interface GPS {
    navigate: () => boolean
}

interface CarPlay {
    hasCarPlay: () => boolean
}

interface Drivable {
    drive: () => string
}

interface Camera {
    takePhoto: () => void
    recordVideo: () => void
}


// clases
class Vehicle implements Drivable {
    drive() {
        return 'This Vehicle Drives'
    }
}

class TeslaX extends Vehicle implements GPS, Bluetooth {
    conectToBluetooth() {
        return true;
    }
    navigate() {
        return true;
    }
}

const t1 = new  TeslaX();

class IPhone16 implements Bluetooth, GPS, Camera  {
    
}