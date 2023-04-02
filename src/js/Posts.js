import { userService } from './PostsService';
import { POSTS } from './elements'

class Posts {
    users = [];

    init() {
        this.getAll();
    }

    async getAll() {
        try {
            this.users = await userService.getAll();
            this._render(this.users);
        } catch (error) {
            console.log(error);
        }
    }

    _render(posts) {
        let usersContent = '';

        for (const el of posts) {
            //language=html
            usersContent += `
                <div class="card">
                    <div class="card__container">
                        <h5>Post no.${el.id}</h5>
                        <p><b>${el.title}</b></p>
                        <p>${el.body}</p>
                        <button>Delete <i class="p-icon--delete"></i></button>
                    </div>
                </div>
        `;

            POSTS.innerHTML = usersContent;
            POSTS.classList.add('posts');
        }
    }
}

export const posts = new Posts();