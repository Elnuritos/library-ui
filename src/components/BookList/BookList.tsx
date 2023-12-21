import { ChangeEvent, useState } from 'react'
import { bookList } from '../../constants'
import BookCard from '../BookCard/BookCard'

type Props = {}

const BookList = (props: Props) => {
    const [books, setBooks] = useState(bookList)

    const search = (e: ChangeEvent<HTMLInputElement>) => {
        const filteredBooks = bookList.filter(book => book.title.toLowerCase().includes(e.target.value.toLowerCase()))
        setBooks(filteredBooks)
    }

    const borrowBook = (isbn: string) => {
        const filteredBooks = bookList.filter(book => book.isbn !== isbn)
        setBooks(filteredBooks)
    }

    return (
        <>
            <div className="row">
                <div className="col-12 col-md-4 mx-3">
                    <input
                        type="text"
                        className="form-control"
                        onChange={search}
                        placeholder='Search for a book...'
                    ></input>
                </div>
            </div>
            <div className="row">
                {
                    books.map((book, i) => (
                        <BookCard book={book} borrow={borrowBook} key={i} />
                    ))
                }
            </div>
        </>
    )
}

export default BookList