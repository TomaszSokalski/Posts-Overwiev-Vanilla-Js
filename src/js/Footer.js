import { FOOTER } from './elements'

class Footer {
    init() {
        this._render();
    }

    _render() {
        let footerContent = '';

        //language=html
        footerContent = `
            <p class="footer__text">Copyright &copy; Tomasz Sokalski</p>
        `;

        FOOTER.innerHTML = footerContent;
        FOOTER.classList.add('footer');
    }
}

export const footer = new Footer();