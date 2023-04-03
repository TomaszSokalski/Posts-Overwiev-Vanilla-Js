import {NAVIGATION, DIALOG_FORM, POSTS} from './elements';
import { postsService } from './PostsService'

class Navigation  {
    payLoad = {};

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
        NAVIGATION.addEventListener('click', e => {
            if (e.target.classList.contains('nav-btn')) {
                DIALOG_FORM.showModal();

                let dialogContent = '';
                //language=html
                DIALOG_FORM.innerHTML = `
                <form class="form__data">
                    <h1>Add post</h1>
                    <textarea type="text" name="title" placeholder="Post description" required></textarea>
                    <div><button type="submit" class="btn btn__primary">Add</button></div>
                    <div><button type="button" class="btn btn-close btn__warn">Close</button></div>
                </form>
                `;
                const FORM = document.querySelector('form');
                FORM.addEventListener('submit', e => {
                    e.preventDefault();
                    const formData = new FormData(FORM);


                    for (const [key, value] of formData) {
                        this.payLoad[key] = value;
                    }
                    const postData = async () => {
                        this.payLoad = await postsService.create(this.payLoad);

                        let postContent = '';

                        //lanugage=HTML
                        postContent += `
                        <div class="card__container">
                            <h5>Post no.<span>${this.payLoad.id}</span></h5>
                            <p>${this.payLoad.title}</p>
                            <button class="btn btn-details btn__primary ">Show description</button>
                            <button class="btn btn-delete btn__warn ">Delete <i class="p-icon--delete"></i></button>
                        </div>
                        `;

                        const newPost = document.createElement('div');
                        newPost.classList.add('card');
                        newPost.innerHTML = postContent;

                        POSTS.appendChild(newPost);
                    }

                    postData();
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