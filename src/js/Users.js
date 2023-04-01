import { userService } from './UsersService';
import { USERS } from './elements'

class Users {
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

    _render(users) {
        let usersContent = '';

        for (const el of users) {
            //language=html
            usersContent += `
                <div class="card">
                    <div class="card__container">
                        <p><i class="p-icon--user"></i></p>
                        <h2>${el.name}</h2>
                        <p>${el.email}</p>
                        <p>${el.address.city}</p>
                        <p>${el.phone}</p>
                    </div>
                </div>
        `;

            USERS.innerHTML = usersContent;
            USERS.classList.add('users');
        }
    }
}

export const users = new Users();