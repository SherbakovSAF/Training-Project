// Создание заполнения карточки
let store = {
     state: {
          cardNumber: "",
          colorBank: {
               sberbank: "#045A38",
               tinkoff: "#F8d81c",
               alpha: "#EF3124",
               vtb: "blue",
          }
     },
     renderCardNumber(e){
          let cardNumber = store.state.cardNumber
          e.currentTarget.value = e.currentTarget.value.replace(/[^\d]/g,'')
          const sep = (xs, s) => xs.length ? [xs.slice(0, s), ...sep(xs.slice(s), s)] : []
          if(+e.key / 1 == +e.key || e.key == "Backspace"){
               cardNumber = e.currentTarget.value
               if(cardNumber.length <= 16){
                    document.getElementById("cardNumber").innerHTML = sep([...cardNumber, "#".repeat(16 - cardNumber.length)].join(""), 4).join(" ")
                    // + 
               } else{
                    console.log("Прекрати да")
               }
          } 
}}

// Обучение fetch и ассинхроннорсти

// async function getObject() {
//      let response = await fetch("http://www.mocky.io/v2/5944e07213000038025b6f30")
//      content = await response.json()
//      return content
// }

// // getObject().then(data => console.log(data))

// async function renderHTML(){
//      let info = [];
//      await getObject().then((data) => (info = data));
//      // debugger
//      let cardArray = info.map((e) => `
//      <div>
//      UserID: ${e.userId}
//      ID: ${e.id}
//      title: ${e.title}
//      body: ${e.body}
//      </div>
//      `

// );
//      return cardArray.join("")
// }

// renderHTML().then(data => document.querySelector("#f").innerHTML = data)


