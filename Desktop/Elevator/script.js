let elevator = document.getElementById("elevator");
let liftCurrentFloor = 0;
let position = 0;


function clickUp(floor) {
   if(floor<liftCurrentFloor) {
       return
   }
   
   
   let newFloorHeightUp = 100 * liftCurrentFloor;
   let animateMaxPosition = 100*floor;
   liftCurrentFloor = floor;
    
   position = newFloorHeightUp;

    let animate = setInterval(change, 10)
    function change() {  
        if (position == animateMaxPosition){
           clearInterval(animate)
           play();
        } 
        else {      
           position++;        
           elevator.style.marginBottom = position + 'px';      
        }  
       }
}

function clickDown(floor) {
    if(liftCurrentFloor<floor) {
        return
    }
    
    const newFloorHeightDown = 100 * liftCurrentFloor;
    let animateMaxPosition = 100*floor;
    liftCurrentFloor = floor;
    
    position = newFloorHeightDown;

    let animate = setInterval(change, 10)
    function change() {  
        if (position == animateMaxPosition){
           clearInterval(animate);
           play();
        } 
        else {      
           position--;        
           elevator.style.marginBottom = position + 'px';      
        }  
       }
    
}

function play() {
   var audio = document.getElementById("audio");
   audio.play();
 }


