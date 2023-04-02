import { navigation } from './Navigation';
import { posts } from './Posts';
import { footer } from './Footer';

window.onload = () => {
    navigation.init();
    posts.init();
    footer.init();
}
