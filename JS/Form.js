class Form{
    constructor(){
        this.input=createInput('NAME');
        this.button=createButton('PLAY');
        this.greeting=createElement('h3');
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
    display(){
        var title=createElement('h2','CAR RACING GAME');
        title.position(130,0);
        
       
        this.input.position(130,160);

       
        this. button.position(250,200);
        
        button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name=this.input.value();
            player.update();
            playerCount=playerCount+1;
            player.index=playerCount;

            player.updateCount(playerCount);
            this.greeting.html('HELLO'+name);
            this.greeting.position(130,160);

        })

        
    }
}
