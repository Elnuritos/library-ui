import BookList from '../components/BookList'

type Props = {}

const Home = (props: Props) => {
    return (
        <>
            <h2 className="m-2">Find a book...</h2>
            <BookList />
        </>
    )
}

export default Home