import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getQuotes,backgroundChange } from '../features/quoteSlice';
import '../stylesheets/quotes.css'
import { FaTwitter } from 'react-icons/fa'
import { FaQuoteLeft } from 'react-icons/fa'

const Quotes = () => {
    
    const { quoteText, author, backgroundColor } = useSelector((store) => store.quotes)
    const dispatch = useDispatch();
    const newQuote = () => {
        dispatch(getQuotes())
        dispatch(backgroundChange())
    }

    useEffect(() => {
        dispatch(getQuotes())
        dispatch(backgroundChange())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])



    return (
        <div id="quote-box">
            <div id="text">
                <p style={{color: backgroundColor}}><FaQuoteLeft className='quote-icon' style={{color: backgroundColor, transition: "all 0.7s ease-in-out"}}/>{quoteText}</p>
            </div>
            <div id="author">
                <p style={{color: backgroundColor}}>-{author}</p>
            </div>
            <div id="button-container">
                <a id="tweet-quote" className='button' href="twitter.com/intent/tweet" target="_blank" title='Tweet this quote!' style={{backgroundColor: backgroundColor}}>
                    <FaTwitter  />
                </a>
                <button id='new-quote' className='button' onClick={() => {newQuote()}} style={{backgroundColor: backgroundColor}}>New Quote</button>
            </div>
        </div>
    )
}

export default Quotes