import classic from "./assets/pizza pics/classic.png"   //1
import deepdish from "./assets/pizza pics/deep-dish-pizza.png"  //2
import tango from "./assets/pizza pics/tango tomato.png"    //3
import farmhouse from "./assets/pizza pics/farmhouse.png"   //4
import coke from "./assets/pizza pics/coke.png"
import dietCoke from "./assets/pizza pics/dietcoke.png"
import pepproni from "./assets/pizza pics/pepproni pizza.png"   //5
import bread from "./assets/pizza pics/garlic-bread.png"


const pizzaData=[
    {
        id:0,
        url:classic,
        title:"classic pizza",
        price:5
    },
    {
        id:1,
        url:deepdish,
        title:"chicago style deep dish",
        price:12
    },
    {
        id:2,
        url:tango,
        title:"tangy tomatoes",
        price:4
    },
    {
        id:3,
        url:farmhouse,
        title:"farmhouse pizza",
        price:4
    },
    {
        id:4,
        url:pepproni,
        title:"pepproni pizza",
        price:3
    },
    
    {
        id:5,
        url:bread,
        title:"garlic bread",
        price:0.95
    },
    {
        id:6,
        url:coke,
        title:"coke",
        price:1
    },
    {
        id:7,
        url:dietCoke,
        title:"diet coke",
        price:1
    },
    
]

export {pizzaData}