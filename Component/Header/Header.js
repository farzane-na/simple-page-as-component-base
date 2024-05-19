const template = document.createElement("template")
// const script=document.createElement("script")

template.innerHTML = `
    <link rel="stylesheet" href="Component/Header/custom-header.css">
    <div class="container">
        <ul class="nav-menu">
            <li class="menu-item"><a href="#">Home</a></li>
            <li class="menu-item"><a href="#">Product</a></li>
            <li class="menu-item"><a href="#">Shop</a></li>
            <li class="menu-item"><a href="#">Contact Us</a></li>
            <li class="menu-item"><a href="#">Cart</a></li>
        </ul>
        <div class="mobile-menu">
            <div class="hamburger-menu"><span class="hamburger-menu-line"></span></div>
            <ul class="nav-menu-mobile ">
                <li class="menu-item-mobile"><a href="#">Home</a></li>
                <li class="menu-item-mobile"><a href="#">Product</a></li>
                <li class="menu-item-mobile"><a href="#">Shop</a></li>
                <li class="menu-item-mobile"><a href="#">Contact Us</a></li>
                <li class="menu-item-mobile"><a href="#">Cart</a></li>
            </ul>
        </div>
        <div class="logo">
         <img src="starbucks-logo1 (2).png" alt="starbox logo" title="starbucks logo">
        </div>
    </div>
`
class CustomHeader extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({
            mode: "open"
        })
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
    connectedCallback(){
        let hamburgerMenu=this.shadowRoot.querySelector(".hamburger-menu")
        let mobileMenu=this.shadowRoot.querySelector(".nav-menu-mobile")
        console.log(hamburgerMenu);
        hamburgerMenu.addEventListener("click",()=>{
            this.openMobileMenu(this,hamburgerMenu,mobileMenu)
        })
    }
    openMobileMenu(el,hamburgerMenu,mobileMenu){
        console.log(el);
        hamburgerMenu.classList.toggle("nav-menu-mobile--open")
        if(hamburgerMenu.classList.contains("nav-menu-mobile--open")){
            mobileMenu.style.right="0"
        }else{
            mobileMenu.style.right="-50vw"
        }
    }
}
export {
    CustomHeader
}