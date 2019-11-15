export interface RestaurantItem {
    id?:string;
    name:string;
    address:string;
    description:string;
    location:string;
    isPureVeg:boolean;
    ratings?:number;
    imageUrl?:string;
    //branches?:Branch[];
}