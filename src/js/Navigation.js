import {NAVIGATION, DIALOG_FORM} from './elements';
import { postsService } from './PostsService'

class Navigation  {
    init() {
        this._render(NAVIGATION);
        this._addTask();
        this._scrollToTop();
    }

    _render(parentElement) {
        let navigationContent = '';

        //language=html
        navigationContent = `
            <ul class="nav__list">
                <li class="nav__list-element"><a class="title">Posts overview</a></li>
                <li class="nav__list-element"><button class="btn nav-btn btn__primary">Add post<i class="p-icon--plus"></i></button></li>
            </ul>
        `;

        parentElement.innerHTML = navigationContent;
        parentElement.classList.add('nav');
    }

    _addTask() {
        const payLoad = {};
        NAVIGATION.addEventListener('click', e => {
            if (e.target.classList.contains('nav-btn')) {
                DIALOG_FORM.showModal();

                let dialogContent = '';
                //language=html
                DIALOG_FORM.innerHTML = `
                <form class="form__data">
                    <h1>Add post</h1>
                    <input type="text" name="title" placeholder="Post title" required>
                    <textarea type="text" name="body" placeholder="Post description"></textarea>
                    <div><button class="btn btn__primary">Add</button></div>
                    <div><button class="btn btn-close btn__warn">Close</button></div>
                </form>
                `;
                const FORM = document.querySelector('form');
                FORM.addEventListener('submit', e => {
                    e.preventDefault();
                    const formData = new FormData(FORM);


                    for (const [key, value] of formData) {
                        payLoad[key] = value
                    }
                    postsService.create(payLoad);
                    DIALOG_FORM.close();
                    FORM.reset();
                });
                document.querySelector('.btn-close').addEventListener('click', () => {
                    DIALOG_FORM.close();
                });
            }
        })
    }

    _scrollToTop() {
        NAVIGATION.addEventListener('click', e => {
            if (e.target.classList.contains('title')) {
                window.scrollTo({top: 0});
            }
        })
    }
}

export const navigation = new Navigation();