import { NAVIGATION, DIALOG } from './elements';
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
                <li class="nav__list-element"><button class="nav-btn btn">Add post<i class="p-icon--plus"></i></button></li>
            </ul>
        `;

        parentElement.innerHTML = navigationContent;
        parentElement.classList.add('nav');
    }

    _addTask() {
        NAVIGATION.addEventListener('click', e => {
            if (e.target.classList.contains('nav-btn')) {
                DIALOG.showModal();

                let dialogContent = '';
                //language=html
                DIALOG.innerHTML = `
                <form>
                    <input type="text" name="title" placeholder="Post title" required>
                    <textarea type="text" name="body" placeholder="Post description"></textarea>
                    <select name="userId">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9"><9/option>
                        <option value="10">10</option>
                    </select>
                    <div><button>Add post</button></div>
                    <div><button class="btn-close btn">Close</button></div>
                </form>
                `;
                const FORM = document.querySelector('form');
                FORM.addEventListener('submit', e => {
                    e.preventDefault();
                    const formData = new FormData(FORM);
                    const payLoad = {};

                    for (const [key, value] of formData) {
                        payLoad[key] = value
                    }
                    postsService.create(payLoad);
                    DIALOG.close();
                    FORM.reset();
                });
                document.querySelector('.btn-close').addEventListener('click', () => {
                    DIALOG.close();
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