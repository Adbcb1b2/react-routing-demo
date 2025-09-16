import { useSearchParams } from "react-router"

function SendEmail() {
    const [searchParams] = useSearchParams();
    return(
        <div className='page'>
            <h4>Send Email</h4>
            <div className='pageContent'>
                <p><strong>Name: </strong>{searchParams.get('name')}</p>
                <p><strong>Email: </strong>{searchParams.get('email')}</p>
            </div>
        </div>
    )
}

export default SendEmail