import * as zod from 'zod'
import { schema } from './Register.schema';



export type RegisterFormType = zod.infer<typeof schema>;
