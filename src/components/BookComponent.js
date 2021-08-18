import React from 'react';
import BookService from '../services/BookService';

class BookComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            books: []
        }
    }

    componentDidMount(){
        BookService.getBooks().then((Response)=> {
            this.setState({books: Response.data})
        });
    }

    render(){
        return(
            <div>
                <h1 className="text-center"> Book list </h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>Id</td><td>Title</td><td>Type</td><td>Author</td><td>Copies</td><td>Copies available</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.books.map(
                                book =>
                                <tr key={book.id}>
                                    <td>{book.idBook}</td>
                                    <td>{book.title}</td>
                                    <td>{book.type}</td>
                                    <td>{book.author}</td>
                                    <td>{book.numberCopies}</td>
                                    <td>{book.numberBooksAvailable}</td>

                                </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>
        )
    }
}
export default BookComponent