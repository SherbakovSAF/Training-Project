// Создание заполнения карточки
let store = {
    state: {
        cardNumber: "",
        cardName: "",
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
     
     switch (this.state.cardNumber.match(/.{1,4}/g)[0].slice(1)) {
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
        const sep = (xs, s) =>
            xs.length ? [xs.slice(0, s), ...sep(xs.slice(s), s)] : [];
        if (+e.key / 1 == +e.key || e.key == "Backspace") {
            this.state.cardNumber = e.currentTarget.value;
            if (this.state.cardNumber.length <= 16) {
                document.getElementById("cardNumber").innerHTML = sep(
                    [...this.state.cardNumber,"#".repeat(16 - this.state.cardNumber.length),].join(""),4).join(" ");
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
    renderCardMonth(el, tag) {
        document.querySelector(tag).innerHTML = el.currentTarget.value
    },
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


