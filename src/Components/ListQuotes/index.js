import './listQuotes.css';
import { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const ListQuotes = () => {
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        getAllQuotes();
    }, []);

    const getAllQuotes = async () => {
        try{
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/quotes`);
            if(response){
                console.log('Response: ', response);
                setQuotes(response.data.quotes);
            }
        }catch(error){
            console.log('Error while getting all Quotes:', error);
        }
    } 

    const deleteQuote = async (quoteId) => {
        try{
            const response = await axios.delete(`${process.env.REACT_APP_BASE_URL}/quotes/${quoteId}`);

            if(response){
                getAllQuotes();
            }
        }catch(error){
            console.log('Error while deleting quote: ', error);
        }
    }



    return (
        <div className="listQuotes">
            <h2>Quotes for Life</h2>

            <div className="quotes-container">
                {quotes.length ? quotes.map((quote, index) => (
                    <div key={index} className='quote'>
                        <div class="quote-content">
                            <h4>{quote.quote}</h4>
                        </div>
                        <div className="quote-metadata">
                            <h5>Author: {quote.author}</h5>
                            <h5>Posted at: {quote.createdAt}</h5>
                        </div>
                        <div>
                            <NavLink className='btn btn-link' to={`/quotes/${quote._id}/update`}> Update </NavLink>
                            <button className='btn btn-link' onClick={(() => deleteQuote(quote._id))}> Delete </button>
                        </div>
                    </div>
                )) : <div> No Quotes </div>}
            </div>

        </div>
    )
}

export default ListQuotes;