
// export class Product {
//     id: string;
//     title: string;
//     description: string;
//     price: number;
    
//     constructor(id: string, title: string, description: string, price: number) {
//         this.id=id;
//         this.title=title;
//         this.description=description;
//         this.price=price;
//     }
// }
// to make this boilerplate code shorter, typescript has a shortcut by adding accessor in constructor

export class Product {
    constructor( 
        public id: string, 
        public title: string, 
        public description: string, 
        public price: number
    ) {}
}

