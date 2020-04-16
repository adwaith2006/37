class Game{
    constructor(){

    }
    getState(){
        var gameStateRef=database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState=data.val();

        
        })
    }
    update(state){
        database.ref('/').update({
            gameState:state
        })
    }

    start(){
        if(gameState===0){

      
     
      form=new Form();  
      form.display();
      player=new Player();
      player.getCount();
        }
    }
    play(){
        form.hide();
        textSize(30);
        text('gameStart',120,100);
        Player.getPlayerInfo();
        if(allPlayers!==undefined){
         var display_position=130;

         for(val plr in allPlayers){
             if(plr==='player'+player.index)
            fill("red");
            else{
                fill("black");
               
                display_position=display_position+20;
            textSize(15);
            text(allPlayers[plr].name+':'+allPlayers[plr].distance,120,display_position);

            }
            
   

         }
         
        }
        if(keyIsDown(UP_ARROW)&&player.index!==null){
            player.distance=player.distance+50;
            player.update();
           }
    
    }

  

}