function Validation(values){
    let error = {}
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if(values.name === ''){
        error.name = "Name is required";
    }
    else{
        error.name = '';
    }
    if(error.email === ''){
        error.email = "Email is required";
    }
    else if(!emailPattern.test(values.email)){
        error.email = "Email is invalid"
    }
    else{
        error.email = ''
    }
    return error;
}

export default Validation