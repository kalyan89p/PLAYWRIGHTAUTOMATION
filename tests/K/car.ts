class car{
    name: string;
    length: number;
    width: number; 
    height: number;
    constructor(name: string, length: number, width: number, height: number){
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
const venue = new car("Venue",20,40,60);
const ertiga = new car("Ertiga", 10,40,60);
console.log(venue.name);
console.log(ertiga.length+","+venue.length);
console.log(ertiga.bootspace());
