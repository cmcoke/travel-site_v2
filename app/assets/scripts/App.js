import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'



let mobileMenu = new MobileMenu();
new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60);















// allows webpack-dev-server to be executed by allowing hot module replacements and accepts updates on the fly
if(module.hot) {
  module.hot.accept()
}
