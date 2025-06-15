class Computer {

    brand: string
    storage: number
    price: number

    constructor(brand: string, storage: number, price: number) {
        this.brand = brand;
        this.storage = storage;
        this.price = price;
    }
}

const c1 = new Computer('Dell', 1000);
