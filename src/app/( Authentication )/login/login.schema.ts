import * as zod from 'zod'

export const LoginSchema = zod.object({
    email: zod.string().email("email is not in format !"),
    password: zod.string().nonempty("password is required !")
});

 