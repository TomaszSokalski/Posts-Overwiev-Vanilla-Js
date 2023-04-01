import { NAVIGATION } from './elements'

class Navigation {
    init() {
        this._render(NAVIGATION);
    }

    _render(parentElement) {
        let navigationContent = '';

        //language=html
        navigationContent = `
            <ul class="nav__list">
                <li class="nav__list-element"><a class="title">Users overview</a></li>
                <li class="nav__list-element"><button class="nav-btn btn">Add user <i class="p-icon--plus"></i></button></li>
            </ul>
        `;

        parentElement.innerHTML = navigationContent;
        parentElement.classList.add('nav');
    }
}

export const navigation = new Navigation();