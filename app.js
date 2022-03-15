const allPlayers = () => {
    const inputField = document.getElementById('input-field').value;
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${inputField}`;
    fetch(url)
    .then(res => res.json())
    .then(data =>{
        //console.log(data.player == null);
        if(data.player == null){
            document.getElementById('spinner').style.display ='block';
        }                  //spinner
        else{
            showPlayerDetails(data.player);
            document.getElementById('spinner').style.display ='none';
        }
    });
}

const showPlayerDetails = players => {
    //console.log(players);
    //spinner
   /*  if(players){
        document.getElementById('spinner').style.display ='none';
    }
    else{
        document.getElementById('spinner').style.display ='block';
    } */

    const playerContent = document.getElementById('player-content');
        playerContent.innerText = '';
    for(const player of players){
        //console.log(player);
        const div = document.createElement("div");
         div.innerHTML = `
        <div class="card border p-5">
            <div class="pro-pic">
            <img class="w-25" src="${player.strThumb}" alt="">
            </div>
            <h2>Name: ${player.strPlayer}</h2>
            <h5>Country: ${player.strTeam2}</h5>
             <p>Description</p>
            <div class="all-button">
            <button onclick = "Delete()" class="btn btn-danger">Delete</button>
            <button onclick = "showDetails(${player.idPlayer})" class="btn btn-danger">Details</button>
            </div>

        </div>   
            `;
        playerContent.appendChild(div);
        
    }
}
const showDetails = (detailsId) => {
    //console.log(detailsId);
    const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${detailsId}`
   // console.log(url);
   fetch(url)
   .then(res => res.json())
   .then(data => setDetail(data.players[0]));
}
const setDetail = info => {
    //console.log(info);
 if(info.strGender == "Male"){
    document.getElementById("male").style.display = 'block';
    document.getElementById("female").style.display = 'none';
   } 
   else{
    document.getElementById("female").style.display = 'block';
    document.getElementById("male").style.display = 'none';
   }
    document.getElementById('details-content').innerHTML=`
    <div>
    <img clas="" src="" alt="">
    <h1>Name: ${info.strPlayer}</h1>
    </div>
    
    `;
}