import audiosystem from "./audiosystem";
class car extends audiosystem{
    name: string;
    length: number;
   private width: number; 
    height: number;
    


    constructor(name: string, length: number, width: number, height: number,speaker: string,size: number ){
        super(speaker,size);
        this.name=name; 
        this.length = length; 
        this.width = width; 
        this.height = height;
   }
  bootspace(){
      return  this.length * this.width * this.height;
    }  
}

//const benz = new car();
//const hyundai = new car();
const venue = new car("Venue",20,40,60,"JBL",20);
const ertiga = new car("Ertiga",10,40,60,"BOAT",16);
console.log(venue.spname+","+venue.inches);
console.log(ertiga.spname+","+ertiga.inches);