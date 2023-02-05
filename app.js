// Создание заполнения карточки
let store = {
    state: {
        cardNumber: "",
        cardName: "",
        cardCW: "",
        colorBank: {
            sberbank: "#045A38",
            tinkoff: "#F8d81c",
            alpha: "#EF3124",
            vtb: "blue",
            default: "rgb(240, 240, 240)",
        },
        paySystem: {
            visa: "https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png",
            masterCard:
                "https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/mastercard.png",
            mir: "https://i.postimg.cc/59TFvsfM/logo-mir.png",
            eror: "https://i.postimg.cc/5tF3BhL8/eror.png",
        },
    },
    renderPaySystem() {
        let cardWrap = document.querySelector(".card__wrap img");
        switch (this.state.cardNumber[0]) {
            case "2":
                cardWrap.setAttribute("src", this.state.paySystem.mir);
                break;
            case "5":
                cardWrap.setAttribute("src", this.state.paySystem.masterCard);
                break;
            case "4":
                cardWrap.setAttribute("src", this.state.paySystem.visa);
                break;
            default:
                cardWrap.setAttribute("src", this.state.paySystem.eror);
        }
    },
    changeColorCard(){
     let cardWrap = document.querySelector(".card__wrap");
     switch (this.state.cardNumber.match(/.{0,4}/g)[0].slice(1)) {
         case "276":
             cardWrap.style.backgroundColor = this.state.colorBank.sberbank;
             break;
         case "200":
             cardWrap.style.backgroundColor = this.state.colorBank.tinkoff;
             break;
         case "203":
             cardWrap.style.backgroundColor = this.state.colorBank.alpha;
             break;
         default:
             cardWrap.style.backgroundColor = this.state.colorBank.default;
     }
    },

    renderCardNumber(e) {
        e.currentTarget.value = e.currentTarget.value.replace(/[^\d]/g, "");
        if (+e.key / 1 == +e.key || e.key == "Backspace") {
            this.state.cardNumber = e.currentTarget.value;
            if (this.state.cardNumber.length <= 16) {
                document.getElementById("cardNumber").innerHTML = this.sep()
            }
        }
        
        this.renderPaySystem();
        this.changeColorCard()
    },
    renderCardName(e) {
        e.currentTarget.value = e.currentTarget.value.replace(/[^A-Za-z\s]+/g, "");
        this.state.cardName = e.currentTarget.value;
        if (this.state.cardName) {
            document.getElementById("cardName").innerHTML = this.state.cardName;
        } else {
            document.getElementById("cardName").innerHTML = "Имя Фамилия";
        }
    },
    renderCardCW(e) {
        e.currentTarget.value = e.currentTarget.value.replace(/[^\d]/g, "");
        if (+e.key / 1 == +e.key || e.key == "Backspace") {
            this.state.cardCW = e.currentTarget.value;
            if (this.state.cardCW.length <= 3) {
                document.getElementById("cardCW").innerHTML = this.state.cardCW
            }
        }
        
        this.renderPaySystem();
        this.changeColorCard()
    },
    sep(){
        const sep = (xs, s) => xs.length ? [xs.slice(0, s), ...sep(xs.slice(s), s)] : [];
        const cardNumber = sep([...this.state.cardNumber,"#".repeat(16 - this.state.cardNumber.length),].join(""),4).join(" ");
        return cardNumber
    },
    renderCardMonth(el, tag) {
        document.querySelector(tag).innerHTML = el.currentTarget.value
    },
    focusCardSide(status){
        const cardWrap = document.querySelector(".card__wrap")
    
        if(status == "reverse"){
            cardWrap.innerHTML = `
                    <img src="https://i.postimg.cc/5tF3BhL8/eror.png" alt="Платёжная система">
                    <h1 id="cardCW">${this.state.cardCW}</h1>
            `
        } else {
            cardWrap.innerHTML = `
                    <img src="https://i.postimg.cc/5tF3BhL8/eror.png" alt="Платёжная система">
                    <h1 class="card__Number" id="cardNumber">${this.sep()}</h1>
                    <div class="other__card__info">
                         <div class="cardName__wrap">
                              <h3>Имя на карте</h3>
                              <h2 id="cardName">${this.state.cardName ? this.state.cardName : "Имя Фамилия"}</h2>
                         </div>
                         <div class="cardData__wrap">
                              <h3>Истекает</h3>
                              <h2><span class="cardMonth">Месяц</span>/<span class="cardYear">Год</span></h2>
                         </div>
                    </div>
            `
        }
    }
};

// 4 - visa
// 5 - МК
// 2 - Мир

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


