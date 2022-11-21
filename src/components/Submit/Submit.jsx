import { useHistory }from 'react-router-dom';



//Submitting data to admin
function Submit() {


    const history = useHistory();

    const homePage = () => {
        alert('Redirecting you to another page :)')
        history.push('/');
   
    }

    // const newSubmission =() =>{
    //     alert()
    //     history
    // }

    return (
        <>
        <h1>Thank you using Big Foot!</h1>
        
        <button onClick={homePage}>Start A New Calculation</button>
        </>
    )
}
export default Submit;