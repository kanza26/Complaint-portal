export const validate = values => {
    const numbers=/[123456789]{1,3}/;
    const specialChars = /[`!@#$%^&*()_+=\[\]{};':"\\|,.<>\/?~]/;
    const mobnumbers=/[0123456789]{10}/;
    const validEmail=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const errors = {};
    if (!values.name) {
      errors.name = 'Required';
    }
  
    if (!values.email) {
        errors.email = 'Required';
    }else if (!validEmail.test(values.email)) {
        errors.email = 'Invalid Email address';
    }
    if (!values.mobileno) {
      errors.mobileno = 'Required';
    } else if (!mobnumbers.test(values.mobileno)) {
      errors.mobileno = 'should be 11 digits';
    }

    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length < 8) {
        errors.password = 'Password should be at least 8 characters long';
    } else if (!specialChars.test(values.password)) {
        errors.password = 'Password should contain at least one special character';
    }else if(!numbers.test(values.password)){
        errors.password='Password should contain atleast 1 number'
    }
    return errors;
  };