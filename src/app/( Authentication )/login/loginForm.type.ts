import * as zod from 'zod'
import { LoginSchema } from './login.schema';



export type LoginFormType = zod.infer<typeof LoginSchema>;
