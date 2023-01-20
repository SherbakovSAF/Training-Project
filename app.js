
async function getObject() {
     let response = await fetch("http://www.mocky.io/v2/5944e07213000038025b6f30")
     content = await response.json()
     return content
}

// getObject().then(data => console.log(data))

async function renderHTML(){
     let info = [];
     await getObject().then((data) => (info = data));
     // debugger
     let cardArray = info.map((e) => `
     <div>
     UserID: ${e.userId}
     ID: ${e.id}
     title: ${e.title}
     body: ${e.body}
     </div>
     `

);
     return cardArray.join("")
}

renderHTML().then(data => document.querySelector("#f").innerHTML = data)


