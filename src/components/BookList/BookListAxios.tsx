import { ChangeEvent, useEffect, useState } from 'react'
import { bookList } from '../../constants'
import BookCard from '../BookCard/BookCard'
import { Book } from '../../utils/types'
import { BookService } from '../../services'

type Props = {}

const BookList = (props: Props) => {
    const [books, setBooks] = useState<Book[]>([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<any>();

    useEffect(() => {
        setLoading(true);
        BookService.getBooks()
            .then((data) => {
                setBooks(data);
            })
            .catch((error) => {
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

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
            <h2 className="m-2">Find a book...</h2>
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
            {
                // Loading data
                loading &&
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            }
            {
                // Handle errors
                error &&
                <div className="row">
                    <div className="col-12 col-md-3 m-3">
                        <div className="alert alert-danger" role="alert">
                            <h4 className="alert-heading">Unable to render data!</h4>
                            <p>{error?.response?.data?.message || error?.message}</p>
                            <hr />
                            <p className="mb-0">
                                Something went wrong, please try again.
                            </p>
                        </div>
                    </div>
                </div>
            }
            {
                // If not loading, and not error, show data
                !loading &&
                <div className="row">
                    {
                        books.map((book, i) => (
                            <BookCard book={book} borrow={borrowBook} key={i} />
                        ))
                    }
                </div>
            }
        </>
    )
}

export default BookList