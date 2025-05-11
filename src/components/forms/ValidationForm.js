function Validation(values){
    let error = {}
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if(values.first_name === ""){
        error.first_name = "First Name is required"
    }
    else{
        error.first_name = ""
    }

    if(values.last_name === ""){
        error.last_name = "Last Name is required"
    }
    else{
        error.last_name = ""
    }

    if(values.email === ""){
        error.email = "Email is required"
    }
    else if(!emailPattern.test(values.email)){
        error.email = "Email is not valid"
    }
    else{
        error.email =""
    }

    if(values.ph_no === ""){
        values.ph_no = "Phone number is required"
    }
    else{
        values.ph_no = ""
    }

    if(values.message === ""){
        values.message = "Message is required"
    }
    else{
        values.message = ""
    }
    return error;
}

export default Validation