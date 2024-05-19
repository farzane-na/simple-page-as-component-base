const option=document.createElement("template")

option.innerHTML=
`
    <link rel="stylesheet" href="Component/Options/options.css">
    <div class="options option1">
        <div class="options__image">
            <img src="" alt="" class="options__image-img">
        </div>
        <div class="options__caption">
            <h3 class="options__title"></h3>
            <slot name="option-text"></slot>
            <button class="options__button"></button>
        </div>
    </div>
`


class CustomeOPtion extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode:"open"})
        this.shadowRoot.appendChild(option.content.cloneNode(true))
    }
    connectedCallback(){
        let optionTitle=this.shadowRoot.querySelector(".options__title")
        optionTitle.innerHTML=this.getAttribute("option-title")

        let optionImage=this.shadowRoot.querySelector(".options__image-img")
        optionImage.setAttribute("src",this.getAttribute("option-image"))

        let optionBtn=this.shadowRoot.querySelector(".options__button")
        optionBtn.innerHTML=this.getAttribute("btn-text")

        let optionNumber=this.shadowRoot.querySelector(".options")
        optionNumber.classList.add(this.getAttribute("option-number"))
    }
    static observedAttribute(){
        return["option-title","option-image","btn-text","option-number"]
    }
}
export {CustomeOPtion}