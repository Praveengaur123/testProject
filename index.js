function handleFormSubmit(event){
    event.preventDefault()
    const webItems={
        webTitle:event.target.webtitle.value,
        webURL:event.target.weburl.value
    }
    axios.post("https://crudcrud.com/api/e7294036392a42c3a8795f0b87be2a8c/web"
        ,webItems)
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err))

    //clearing the input
    document.getElementById("webtitle").value=""
    document.getElementById("weburl").value=""
}
// get
window.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/e7294036392a42c3a8795f0b87be2a8c/web")
    .then((response)=>{
        console.log(response)
        for(var i=0;i<response.data.length;i++)
        {
            DisplayOnPage(response.data[i])
        }
    })
    .catch((err)=>console.log(err))
})
//displayin content on page
function DisplayOnPage(webItems){
    const webList= document.createElement("li")
    webList.id=webItems._id
    webList.appendChild(document.createTextNode(`${webItems.webTitle}>${webItems.webURL}`))
    //creating delete button
    const deleteBtn=document.createElement("button")
    deleteBtn.appendChild(document.createTextNode("Delete"))
    webList.appendChild(deleteBtn)
    //delete button functinality
    deleteBtn.addEventListener("click",function(event){
        axios.delete(`https://crudcrud.com/api/e7294036392a42c3a8795f0b87be2a8c/web/${webItems._id}`)
        .then((response)=>{
            const unlist=document.querySelector("ul")
            unlist.removeChild(event.target.parentElement)
        })
        .catch((err)=>console.log(err))
    })

    
    const unlist=document.querySelector("ul")
    unlist.appendChild(webList)
}
