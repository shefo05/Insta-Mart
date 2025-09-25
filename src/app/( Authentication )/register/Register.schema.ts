import * as zod from 'zod'

export const schema = zod.object({
    name: zod.string().nonempty("name is required !").min(3, "must be at least 3 characters !").max(30, "must be less than 31 characters !"),
    email: zod.email("email is not in format !"),
    password: zod.string().nonempty("password is required !").regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ ,"Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character !"),
    rePassword: zod.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ ,"Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character !"),
    phone: zod.string().nonempty("phone is required !").regex(/^01[0125][0-9]{8}$/, "enter a correct egyptian number !")

}).refine(function(obj){
    return obj.password === obj.rePassword;
},{path: ['rePassword'], error: 'passwords are in-match !' });

 