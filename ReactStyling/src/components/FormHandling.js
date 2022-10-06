import React , {useState, useEffect }from 'react'


export default function FormHandling(props) {
  
  const initialValues = { firstname: "", lastname: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange  = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      // console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    if (!values.firstname) {
      errors.firstname = "First Name is required!";
    }
    if (!values.lastname) {
      errors.lastname = "Last Name is required!";
    }
    return errors;
  };


  return (
    <div>
       {Object.key(formErrors).length === 0 && isSubmit ? (
          <div className="ui message success">Signed in successfully</div>
        ) : (
          <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
        )}
      <div className="iphone">
        <header className="header">
          <h1>Checkout</h1>
        </header>

        <form className="Form" onSubmit={submitHandler}>
          <label htmlFor="fname">First Name</label>
          <input type="text" id="fname" name="firstname" value={ formValues.firstname } onChange={ handleChange } placeholder="Your name.." />
          <p>{formErrors.firstname}</p>
          <label htmlFor="lname">Last Name</label>
          <input type="text" id="lname" name="lastname" value={ formValues.lastname } onChange={ handleChange } placeholder="Your last name.." />
          <p>{formErrors.lastname}</p>
        <button className="button button--full" type="submit">Submit</button>
        </form>
      </div>
    </div>
    
  )
}
