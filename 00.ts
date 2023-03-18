import { posts, users, comments } from './data';

//Créer une Interface Post correspondant à la structure des objects du fichier posts.ts
interface Post {
    id: number;
    userId: number;
    title: string;
    body: string;
}

//Créer une Interface Comment correspondant à la structure des objects du fichier comments.ts
interface Comment {
    id: number;
    postId: number;
    name: string;
    email: string;
    body: string;

}

// Créer une Interface User correspondant à la structure des objects du fichier users.ts
interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

// Créer une Type Company correspondant à la structure de la propriété company du fichier users.ts

type Company = {
    name: string;
    catchPhrase: string;
    bs: string;
}

// Créer une type Address correspondant à la structure de la propriété address du fichier users.ts
type Address = {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

// Créer une type Geo correspondant à la structure de la propriété geo du fichier users.ts
type Geo = {
    lat: string;
    lng: string;
}
// Créer une fonction getUsers qui retourne un tableau d'objets User
function getUsers(): User[] {
    return users;
}

// Créer une fonction getPostOfAuthor qui retourne un tableau de Post
function getPostOfAuthor(id: number): Post[] {
    return posts.filter(post => post.userId === id);
}

// Créer une fonction qui permet de valider les propriétés d'un objet Post
function validatePost(post: Partial<Post>): boolean {
    return post.id !== undefined && post.userId !== undefined && post.title !== undefined && post.body !== undefined;
}

// étendre l'interface Post et ajoute une propriété comments de type Comment[]
interface Post {
    comments?: Comment[];
}

// Créer une fonction populatePostsWithComments pour ajouter la propriété comments à un objet Post
function populatePostsWithComments(post: Post): Post {
    return {
        ...post,
        comments: comments.filter(comment => comment.postId === post.id)
    }
}

// Installer et importer axios
import axios from 'axios';

// Créer une class ApiService qui a une propriété url et les methodes suivantes:
// getAllpost qui retourne un tableau de post et qui utilise la propiété url
// createPost qui utilise axios, la fonction de validation de post et la propiété url, prend en argument un post retourne une promesse d'un post
// updatePost qui utilise axios, la fonction de validation de post et la propiété url, prend en argument un id, un post partiel retourne une promesse d'un post
// deletePost qui utilise axios et la propiété url, qui prend en argument un id et retourne une promesse d'une string

class ApiService {
    url: string;
    constructor(url: string) {
        this.url = url;
    }
    getAllpost(): Promise<Post[]> {
        return axios.get(this.url).then(res => res.data);
    }
    createPost(post: Post): Promise<Post> {
        if (validatePost(post)) {
            return axios.post(this.url, post).then(res => res.data);
        } else {
            return Promise.reject("Invalide post");
        }
    }
    updatePost(id: number, post: Partial<Post>): Promise<Post> {
        if (validatePost(post)) {
            return axios.put(`${this.url}/${id}`, post).then(res => res.data);
        } else {
            return Promise.reject("Invalide post");
        }
    }
    deletePost(id: number): Promise<string> {
        return axios.delete(`${this.url}/${id}`).then(res => res.data);
    }
}

