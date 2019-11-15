export interface FoodItem {
    id?:string;
    name:string;
    price:string;
    description:string;
    isPureVeg:boolean;
    imageUrl?:string;
    category:string;
    //branches?:Branch[];
}