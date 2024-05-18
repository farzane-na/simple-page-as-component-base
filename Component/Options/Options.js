const option1=document.createElement("template")
const option2=document.createElement("template")
const option3=document.createElement("template")
const option4=document.createElement("template")
const option5=document.createElement("template")
const option6=document.createElement("template")

option1.innerHTML=
`
    <link rel="stylesheet" href="Component/Options/options.css">
    <div class="options option1">
        <div class="options__image">
            <img src="../../images/pictureOne.jpg" alt="">
        </div>
        <div class="options__caption">
            <h3 class="options__title">50% off a drink when you get the app</h3>
            <p class="options__text">
                Get 50% off a drink when you download the app and join Starbucks Rewards by the end of May. Just download the app to get started.*
            </p>
            <button class="options__button">Sign Up Here</button>
        </div>
    </div>
`

option2.innerHTML=
`
    <link rel="stylesheet" href="Component/Options/options.css">
    <div class="options option2">
        <div class="options__image">
            <img src="../../images/pictureTwo.jpg" alt="">
        </div>
        <div class="options__caption option2">
            <h3 class="options__title">Summer at first sip</h3>
            <p class="options__text">
                Say hello to fun new flavors and classic favorites.
            </p>
            <button class="options__button">Order Now</button>
        </div>
    </div>
`

option3.innerHTML=
`
    <link rel="stylesheet" href="Component/Options/options.css">
    <div class="options option3">
        <div class="options__image">
            <img src="../../images/pictureThree.jpg" alt="">
        </div>
        <div class="options__caption">
            <h3 class="options__title">The best deals are in the app</h3>
            <p class="options__text">
                Tap into new offers all summer long. In May, enjoy deal drops on Mondays, 50% off your drink from 12–6 PM on Fridays and more. **
            </p>
            <button class="options__button">Get The App</button>
        </div>
    </div>
`

option4.innerHTML=
`
    <link rel="stylesheet" href="Component/Options/options.css">
    <div class="options option4">
        <div class="options__image">
            <img src="../../images/pictureFour.jpg" alt="">
        </div>
        <div class="options__caption">
            <h3 class="options__title">When you gift, we give</h3>
            <p class="options__text">
                For every Military Appreciation eGift purchased in May, we’ll donate $5 to support the military community.
            </p>
            <button class="options__button">Send an eGift</button>
        </div>
    </div>
`

option5.innerHTML=
`
    <link rel="stylesheet" href="Component/Options/options.css">
    <div class="options option5">
        <div class="options__image">
            <img src="../../images/pictureFive.png" alt="">
        </div>
        <div class="options__caption">
            <h3 class="options__title">Dads, grads & Starbucks Cards</h3>
            <p class="options__text">
                 Got a Starbucks Card? Start earning free drinks & food twice as fast when you join and use your Starbucks Cards in the app.***
            </p>
            <button class="options__button">Get The App</button>
        </div>
    </div>
`
option6.innerHTML=
`
    <link rel="stylesheet" href="Component/Options/options.css">
    <div class="options option6">
        <div class="options__image">
            <img src="../../images/pictureSix.jpg" alt="">
        </div>
        <div class="options__caption">
            <h3 class="options__title">“I never thought I would go to university. Starbucks has made this dream a reality.”</h3>
            <p class="options__text">
                  – Melinda, Starbucks partner (employee) and Starbucks College Achievement Plan graduate​
            </p>
            <button class="options__button">Learn More</button>
        </div>
    </div>
`

class CustomeOPtion1 extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode:"open"})
        this.shadowRoot.appendChild(option1.content.cloneNode(true))
    }
}
class CustomeOPtion2 extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode:"open"})
        this.shadowRoot.appendChild(option2.content.cloneNode(true))
    }
}
class CustomeOPtion3 extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode:"open"})
        this.shadowRoot.appendChild(option3.content.cloneNode(true))
    }
}
class CustomeOPtion4 extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode:"open"})
        this.shadowRoot.appendChild(option4.content.cloneNode(true))
    }
}
class CustomeOPtion5 extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode:"open"})
        this.shadowRoot.appendChild(option5.content.cloneNode(true))
    }
}
class CustomeOPtion6 extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode:"open"})
        this.shadowRoot.appendChild(option6.content.cloneNode(true))
    }
}
export {CustomeOPtion1,CustomeOPtion2,CustomeOPtion3,CustomeOPtion4,CustomeOPtion5,CustomeOPtion6}