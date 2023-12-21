import { Link, useParams } from "react-router-dom"
import { bookList } from "../constants"

type Props = {}

const BookPage = (props: Props) => {
    const { isbn } = useParams()
    const book = bookList.find(b => b.isbn === isbn)

    if (!book) {
        return (
            <p>The requested book does not exist.</p>
        )
    }

    return (
        <div className="col-12 col-md-3 m-3">
            <Link className="btn btn-info mb-2" to="/" >Back to Books</Link>
            <div className="card">
                <div className="card-header">
                    ISBN: {book.isbn}
                </div>
                <div className="card-body">
                    <h5 className="card-title">{book.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{book.author}</h6>
                    <p className="card-text">
                        <li className="list-group-item">Category: {book.category}</li>
                        <li className="list-group-item">Publication year: {book.publicationYear}</li>
                        <li className="list-group-item">Pages: {book.pages}</li>
                    </p>
                </div>
            </div>
        </div>
    )

}

export default BookPage