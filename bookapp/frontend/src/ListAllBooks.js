import React from 'react';
import BellIcon from 'react-bell-icon';
import Book from './Book';
import ProductstylingController from './ProductstylingController'
class ListAllBooks extends React.Component{
    state ={
        books:[]
    }
componentDidMount(){
        Book.getAllBooks()
        .then(data=>{
            this.setState({
                books:data.data.books
            });
        });
        alert(this.state.books)
    }
    render(){

        return(
        
<div className="home__row"> 
<div id= "bell">
<BellIcon width='40' active={true} animate={true} /></div>
<h1>Book List</h1>

           
                    {
                        this.state.books.map(book=>

                          <div>
                                <ProductstylingController title={book.title} price={book.price} imagePath={book.imagePath} />                
                            </div>

                        )}


                
           









  </div>




        );
    }
}



export default ListAllBooks;
