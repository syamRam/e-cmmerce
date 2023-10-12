export interface Product {
    title: string,
    description: string,
    _id: string,
    imageCover: string,
    price: number,
    ratingsAverage: number,
    category: {
        name: string
    }

}
