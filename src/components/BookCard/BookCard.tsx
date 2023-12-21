import { Link } from "react-router-dom"
import { Book } from "../../utils/types"

type Props = {
    book: Book,
    borrow: (isbn: string) => void
}

const BookCard = ({ book, borrow }: Props) => {
    return (
        <div className="col-12 col-md-3 m-3">
            <div className="card">
                <div className="card-header">
                    ISBN: { book.isbn }
                </div>
                <div className="card-body">
                    <h5 className="card-title">{ book.title }</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{ book.author }</h6>
                    <p className="card-text">
                        <li className="list-group-item">Category: { book.category }</li>
                        <li className="list-group-item">Publication year: { book.publicationYear }</li>
                        <li className="list-group-item">Pages: { book.pages }</li>
                    </p>
                    <Link className="btn btn-info mx-1" to={`/books/${book.isbn}`} >View book</Link>
                    <a className="btn btn-primary" onClick={() => borrow(book.isbn) } >Borrow</a>
                </div>
            </div>
        </div>
    )
}

export default BookCard