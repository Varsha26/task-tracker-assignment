import { Redirect } from 'react-router-dom';

function Protected(props: any) {
    const Cmp = props.cmp;
    const formValues = localStorage.getItem('userValue')
    console.log(formValues);
    return (
        <div>
            {formValues ? <Cmp /> : <Redirect to="/" ></Redirect>}
        </div>
    )
}

export default Protected
