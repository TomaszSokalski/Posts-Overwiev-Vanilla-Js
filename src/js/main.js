import { navigation } from './Navigation';
import { users } from './Users'

window.onload = () => {
    navigation.init();
    users.init();
}
