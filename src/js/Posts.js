import { postsService } from './PostsService';
import { POSTS } from './elements'

class Posts {
    users = [];

    async init() {
        await this.getAll();
        this._deleteTask();
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
                        <h5>${el.id}</h5>
                        <p><b>${el.title}</b></p>
                        <p>${el.body}</p>
                        <button class="btn-delete btn">Delete <i class="p-icon--delete"></i></button>
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
                postsService.deleteById(e.target.closest('div').querySelector('h5').innerHTML);
                e.target.closest('div').parentNode.remove();
            }
        })
    }
}

export const posts = new Posts();