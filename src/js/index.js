import { navigation } from './base/Navigation';
import { posts } from './base/Posts';
import { footer } from './base/Footer';

window.onload = () => {
    navigation.init();
    posts.init();
    footer.init();
}
