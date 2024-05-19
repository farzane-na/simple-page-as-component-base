const template = document.createElement("template")
template.innerHTML = `
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css">
    <link rel="stylesheet" href="font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="Component/Footer/custom-footer.css">
    <div class="container">
        <ul class="footer-content">
            <h3 class="footer-title">About Us</h3>
            <li class="footer-item"><a href="#">Our Compony</a></li>
            <li class="footer-item"><a href="#">Our Coffee</a></li>
            <li class="footer-item"><a href="#">Stories and News</a></li>
            <li class="footer-item"><a href="#">Starbucks Archive</a></li>
            <li class="footer-item"><a href="#">Investors Relation</a></li>
            <li class="footer-item"><a href="#">Custom Service</a></li>
            <li class="footer-item"><a href="#">Contact Us</a></li>
        </ul>
        <ul class="footer-content">
            <h3 class="footer-title">Careers</h3>
            <li class="footer-item"><a href="#">Culture and Values</a></li>
            <li class="footer-item"><a href="#">Alumni Community</a></li>
            <li class="footer-item"><a href="#">Inclusion, Diversity and Equity</a></li>
            <li class="footer-item"><a href="#">College Achievment Plan</a></li>
            <li class="footer-item"><a href="#">U.S. Carrers</a></li>
            <li class="footer-item"><a href="#">International Community</a></li>
        </ul>
        <ul class="footer-content">
            <h3 class="footer-title">Social Impact</h3>
            <li class="footer-item"><a href="#">People</a></li>
            <li class="footer-item"><a href="#">Planet</a></li>
            <li class="footer-item"><a href="#">Environmental and Social Impact Reporting</a></li>
        </ul>
        <div class="social-media">
            <h4 class="footer-title">Follow Us</h4>
            <a href="#"><i class="fa fa-instagram icons"></i></a>
            <a href="#"><i class="fa fa-telegram icons"></i></a>
            <a href="#"><i class="fa fa-linkedin icons"></i></a>
            <a href="#"><i class="fa fa-facebook-f icons"></i></a>
        </div>
    </div>
`

class CustomFooter extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({
            mode: "open"
        })
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}
export {
    CustomFooter
}