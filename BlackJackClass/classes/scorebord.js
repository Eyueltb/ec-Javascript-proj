class Scorebord {
    constructor(sboard){
        console.log("hello from constructor");
        this._sboard=sboard;
        if(localStorage.sboard !=undefined){
            this._sboard.innerHtml=localStorage.sboard;
            
        }
    }
    addScore(player, dealer, winner){
       console.log(winner);
       let color= winner == "Dealer Wins" ? "text-danger" : "text-success"; 
       if(winner == "Draw") color="text-warning";
       let td=`<td> ${player} </td> <td>${dealer}</td> <td class='${color}'>${winner} </td>`;
       let scores=this._sboard.innerHTML;
       this._sboard.innerHTML=`${td}${scores}`;
       localStorage.sboard=this._sboard.innerHTML;
    }
    clearScoreboard(){
        localStorage.removeItem('sboard');
        this._sboard.innerHtml=" ";
    }
}