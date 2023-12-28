import { Book } from "./utils/types";

export const bookList: Book[] = [
    {
        title: 'Alice in Wonderland',
        author: 'Lewis Carroll',
        isbn: '1503222683',
        category: 'Children\'s Book',
        publicationYear: 2020,
        pages: 70
    },
    {
        title: 'Midnight Tides',
        author: 'Steven Erikson ',
        isbn: '0765348829',
        category: 'Fantasy',
        publicationYear: 2007,
        pages: 960
    },
    {
        title: 'Legenda o Ali-paši',
        author: 'Enver Čolaković',
        isbn: '9789958210464',
        category: 'Historical Drama',
        publicationYear: 1970,
        pages: 436
    }
]

export const BASE_URL = 'http://localhost:8080/api'