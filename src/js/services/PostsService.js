import { apiService } from './ApiService';

class PostsService {
    _basePath = '/posts';

    getAll() {
        return apiService.get(this._basePath);
    }
    getUserById(id) {
        return apiService.get(`${this._basePath}/${id}`);
    }
    getUsersByUserId(userId) {
        return apiService.get(`${this._basePath}?userId=${userId}`);
    }
    create(obj) {
        return apiService.post(this._basePath, obj);
    }
    updateById(id, obj) {
        return apiService.put(`${this._basePath}/${id}`, obj);
    }
    deleteById(id) {
        return apiService.delete(`${this._basePath}/${id}`);
    }
}

export const postsService = new PostsService();