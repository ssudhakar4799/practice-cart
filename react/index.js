
//projects 
let products=[
    {id:1,name:"tomato",price:50,available:70,qty:0},
    {id:2,name:"potato",price:30,available:50,qty:0},
    {id:3,name:"onion",price:80,available:90,qty:0},
    {id:4,name:"carrot",price:40,available:30,qty:0},
    {id:5,name:"brinjal",price:65,available:76,qty:0},
    {id:6,name:"cauliflower",price:35,available:45,qty:0},
    {id:7,name:"cabbage",price:81,available:55,qty:0}

];

var empty=[];

function getveg(first){

     firstelement=products.find((i)=>{
        return i.id==first;   
    })

    // console.log(firstelement);
    if(firstelement==firstelement){
        empty.push(firstelement);
        firstelement.qty+=1;
        
    }
    console.log([...new Set (empty)]);

}
function getfruit(two){

    var secondelement=products.find((j)=>{
        return j.id==two;   
    })
    
    // console.log(secondelement);
    if(secondelement==secondelement){
        empty.push(secondelement);
        secondelement.qty+=1;
    }
    console.log([...new Set (empty)]);

}

function addto(k) {

    var addcard=k;
    // console.log(addcard);
    console.log([...new Set(addcard)]);

}
function firstdel(firstdelete) {
    var element=empty.find((m)=>{
       return m.id==firstdelete;

    })
    console.log(element);
    if(element==element){
        console.log(empty.splice(element,1));

    }

}

