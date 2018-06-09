export class Movie {
    public _id : string;
    public imgUrl : string;
    public title: string;
    public year : number;
    public price: number;
    public shortDescription: string;
    public selected : boolean = false;
    public fullDescription : String;
    public director : String;
    public reviews: [{
        name: String,
        rating: {
            type: Number,
            min: 0,
            max: 5
        },
        text: String
    }];
    constructor() {}
}