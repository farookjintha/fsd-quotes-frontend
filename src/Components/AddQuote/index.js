
import "./addQoute.css";
import axios from 'axios';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddQuote = () => {
    const navigate = useNavigate('/');
    const [quoteData, setQuoteData] = useState({quote: '', author: ''});

    const handleQuoteData = (value) => {
        return setQuoteData(data => {
            return {...data, ...value};
        })
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/quotes`, quoteData);

            if(response){
                setQuoteData({
                    quote: '',
                    author: ''
                });

            navigate('/');
            }

        }catch(error){
            console.log('Error while adding Quote: ', error);
        }
    }

    return (
        <div className="addQuote-container">
          <h2>Add a Quote</h2>

          <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Quote</label>
                    <input className="form-control" id='quote' type='text' placeholder="Enter a quote." value={quoteData.quote} onChange={(e) => handleQuoteData({quote: e.target.value})}/>
                </div>
                <div className="form-group">
                    <label>Author</label>
                    <input className="form-control" id='quote' type='text' placeholder="Enter name of the author." value={quoteData.author} onChange={(e) => handleQuoteData({author: e.target.value})}/>
                </div>
                <div className="form-group mt-3">
                    <input className="btn btn-primary" value="Add Quote" type='submit' />
                </div>
          </form>
        </div>
    )
}

export default AddQuote;