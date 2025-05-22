function Validation(values){
    let  error = {}        
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if(values.fullname === ''){
        error.fullname = 'Fullname is required'
    }
    else{
        error.fullname = ''
    }
    if(values.email === ''){
        error.email = 'Email is required'
    }
    else if(!emailPattern.test(values.email)){
        error.email = 'Email is invalid'
    }
    else{
        error.email = ''
    }
    if(values.ph_no === ''){
        error.ph_no = 'Phone Number is required'
    }
    else{
        error.ph_no = ''
    }
    if(values.upload_file === ''){
        error.upload_file = 'File is required'
    }
    else{
        error.upload_file = ''
    }
    if(values.message === ''){
        error.message = 'Message is required'
    }
    else{
        error.message = ''
    }
    return error;
}

export default Validation;