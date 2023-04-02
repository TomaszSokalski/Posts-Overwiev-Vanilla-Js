import { navigation } from './Navigation';
import { posts } from './Posts'

window.onload = () => {
    navigation.init();
    posts.init();
}
