import { postsService } from '../services/PostsService';
import {DIALOG_DETAILS, POSTS} from '../data/elements';

class Posts {
    users = [];

    init() {
        this.getAll();
        this._deleteTask();
        this._showTaskDescription();
    }

    async getAll() {
        try {
            this.users = await postsService.getAll();
            this._render(this.users);
        } catch (error) {
            console.log(error);
        }
    }

    _render(posts) {
        let postsContent = '';

        for (const el of posts) {
            //language=html
            postsContent += `
                <div class="card">
                    <div class="card__container">
                        <h5>Post no.<span>${el.id}</span></h5>
                        <p>${el.title}</p>
                        <button class="btn btn-details btn__primary ">Show description</button>
                        <button class="btn btn-delete btn__warn ">Delete <i class="p-icon--delete"></i></button>
                    </div>
                </div>
            `;

            POSTS.innerHTML = postsContent;
            POSTS.classList.add('posts');
        }
    }

    _deleteTask() {
        POSTS.addEventListener('click', e => {
            e.preventDefault();
            if (e.target.classList.contains('btn-delete')) {
                postsService.deleteById(e.target.closest('div').querySelector('h5 > span').innerHTML);
                e.target.closest('div').parentNode.remove();
            }
        })
    }

    _showTaskDescription() {
        POSTS.addEventListener('click', e => {
            if (e.target.classList.contains('btn-details')) {
                DIALOG_DETAILS.showModal();
                const parentDiv = e.target.closest('div');


                let detailsContent = '';

                //language=html
                detailsContent += `
                    <div class="details__card">
                        <h5>${parentDiv.querySelector('h5 > span').innerHTML}</span></h5>
                        <p>${parentDiv.querySelector('p').innerHTML}</p>
                        <button class="btn btn-close btn__warn">Close</button>
                    </div>
                `;

                DIALOG_DETAILS.innerHTML = detailsContent;
                DIALOG_DETAILS.querySelector('.btn-close').addEventListener('click', () => {
                    DIALOG_DETAILS.close();
                })
            }
        })
    }
}

export const posts = new Posts();