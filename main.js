/*
Oscar Alberto Nazarit Campos
Simular una carrera entre dos corredores con la probabilidad de avance descrita abajo en una pista de 100 cuadros
ir marcando en cada avance la posición de los corredores, al final decir quien gano o si hubo empate.
Probabilidades
1/6    3 cuadros           1  
2/6    2 cuadros           23
3/6    1 cuadros           456
Avances modificados a mi gusto personal
*/

class Main{
    constructor(){
        this.main();
    }
    main(){
        let tirada = 1;
        let final = false;
        let pos1 = 0, pos2 = 0;
        while(final == false){
            pos1 += this.convertirAPasos(this.tirarDado());
            pos2 += this.convertirAPasos(this.tirarDado());
            console.log(`Tirada ${tirada}: Corredor1: ${pos1}/100     Corredor2: ${pos2}/100`);
            tirada++;
            if(pos1 >= 100 || pos2 >= 100){
                final = true;
                console.log(this.resultado(pos1,pos2));
            }
            
        }
    }
    tirarDado(){
        let dado = Math.floor(Math.random()*6)+1;
        return(dado);
    }
    convertirAPasos(dado){
        switch(dado){
            case 1: return(3); break;
            case 2: return(2); break; case 3: return(2); break;
            case 4: return(1); break; case 5: return(1); break; case 6: return(1); break;
        }
    }
    resultado(pos1,pos2){
        if(pos1 >= 100 && pos2 >= 100)
            return("Empate");
        else if(pos1 > pos2)
            return("Gana el corredor 1");
        else
            return("Gana el corredor 2");
    }

}

new Main();