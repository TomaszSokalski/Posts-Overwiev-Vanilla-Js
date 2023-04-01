class ApiService {
    API_URL = 'https://jsonplaceholder.typicode.com';

    get(path) {
        return fetch(`${this.API_URL}${path}`, {
            method: 'GET'
        }).then(this.parseResponse);
    }
    post(path, body) {
        return fetch(`${this.API_URL}${path}`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then(this.parseResponse);
    }
    put(path, body) {
        return fetch(`${this.API_URL}${path}`, {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then(this.parseResponse);
    }
    delete(path) {
        return fetch(`${this.API_URL}${path}`, {
            method: 'DELETE'
        }).then(this.parseResponse);
    }
    parseResponse(res) {
        if (res.ok) {
            return res.json();
        } else {
            throw Error(res.statusText);
        }
    }
}

export const apiService = new ApiService();