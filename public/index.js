
// function for entries
let editId=null
function showEntries(obj){
    console.log(obj)
    const searchPlayer = document.getElementById('player-search');
    const getPlayer=document.getElementById('get-player')
    getPlayer.className="p-3 bg-secondary conatainer mt-4";
    const editButton=document.createElement('input')
    // creating edit button 
    editButton.type="button";
    editButton.value="Edit"
    editButton.className="bg-danger "
    // displaying in the html form
    getPlayer.innerHTML=`
    <img src=${obj.photoUrl}>
    <h5>${obj.playerName}</h5>
    <h5>${obj.birthPlace}</h5>
    <h5>${obj.birthDate}</h5><br>
    <div class="row">
    <div class="col-md-4">
    <h4>Personal information</h4>
    <ul class="list-unstyled">
    <li><strong>No Of Matches:</strong>${obj.matches}</li>
    <li><strong>Average:</strong>${obj.average}</li>
    <li><strong>Runs:</strong>${obj.score}</li>
    <li><strong>No Of Fifties:</strong>${obj.fifties}</li>
    <li><strong>No Of Centuries:</strong>${obj.centuries}</li>
    <li><strong>Wickets:</strong>${obj.wickets}</li>
    </ul>
    </div>
    <div class="col-md-8">
    <p>${obj.career}<p>
    </div>
    </div>
    `
    getPlayer.appendChild(editButton)

    // edit button functionality 
    editButton.onclick=()=>{
        console.log("Editing the info")
        editButton.innerHTML=`<h1>Hello</h1>`
        document.getElementById('player-name').value=obj.playerName;
        document.getElementById('url').value=obj.photoUrl;
        document.getElementById('birth-date').value=obj.birthDate;
        document.getElementById('birth-place').value=obj.birthPlace;
        document.getElementById('career').value=obj.career;
        document.getElementById('matches').value=obj.matches;
        document.getElementById('score').value=obj.score;
        document.getElementById('fifties').value=obj.fifties;
        document.getElementById('centuries').value=obj.centuries;
        document.getElementById('wickets').value=obj.wickets;
        document.getElementById('average').value=obj.average;
        editId=obj.id
        console.log(editId)
    }
    searchPlayer.reset()
}
const searchPlayer = document.getElementById('player-search');
searchPlayer.addEventListener('submit', (event) => {
    event.preventDefault()
    const searchItem=document.getElementById('search').value

    console.log("here is the search value:",searchItem)
    if(searchItem.length===0) document.body.innerHTML=document.body.innerHTML+"<h1>Enter the Search Item<h1>";
    
    axios.get(`http://localhost:5051/get-info?query=${searchItem}`)
        .then((response)=>{
          console.log("getting the data in frontend")
            const newdata=response.data[0]
            if(newdata==undefined){
                document.body.innerHTML=document.body.innerHTML+"<h1>Couldn't find the data<h1>";
            }
            else{
              showEntries(newdata)
            }
        })
        .catch(err=>console.log(err))
    })
    
    const playerForm = document.getElementById('player-form');
    // event for posting the data
    playerForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const playerName = document.getElementById('player-name').value;
        const photoUrl=document.getElementById('url').value;
        const birthDate=document.getElementById('birth-date').value;
        const birthPlace=document.getElementById('birth-place').value;
        const career=document.getElementById('career').value;
        const matches=document.getElementById('matches').value;
        const score=document.getElementById('score').value;
        const fifties=document.getElementById('fifties').value;
        const centuries=document.getElementById('centuries').value;
        const wickets=document.getElementById('wickets').value;
        const average=document.getElementById('average').value;
        const obj={ playerName,photoUrl,birthDate,birthPlace,career,matches,score,fifties,centuries,wickets,average }

        if(editId){
            axios.put(`http://localhost:5051/edit-info/${editId}`,obj)
            .then((response)=>{
                console.log("Info updated succesfully",response.data)
                showEntries(obj)
            })
            .catch(err=>{
                console.error("error updating Info",err)
            })
            editId=null
        }
        else{
        console.log("here is the object that is parsing",obj)
        axios.post("http://localhost:5051/add-info/",obj)
        .then((response)=>{
            console.log("response From server",response.data)
        })
        .catch((err)=>{
            console.log("Invalid response form server",err)
            document.body.innerHTML=document.body.innerHTML+"<h3>Something went wrong</h3>"
        }) 
    }
    playerForm.reset()
    });



