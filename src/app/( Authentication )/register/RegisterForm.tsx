'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "_/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "_/components/ui/form"
import { Input } from "_/components/ui/input";
import { useForm } from "react-hook-form";
import { schema } from "./Register.schema";
import { RegisterFormType } from "./RegisterForm.type";
import { RegisterNewUser } from "./Register.actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";


export default function RegisterForm() {

  const router = useRouter();

    const RhfObj= useForm({
        resolver:zodResolver(schema),
        defaultValues: {
          name: '',
          email: '',
          password: '',
          rePassword: '',
          phone: ''
        }
      });
    
      const {control , handleSubmit} = RhfObj;
    
      
    
     
      async function MySubmit(data: RegisterFormType){

        const RegResponse = await RegisterNewUser(data);
      
        if(RegResponse === true){
          toast.success("Your account has been created successfully",{ position :'top-center', duration: 3000 });
          router.push('./login')
        }else{
          toast.error(RegResponse, {position :'top-center', duration: 3000});
          
        }
      }



  return (
    <form onSubmit={ handleSubmit(MySubmit)}>
    <Form  {...RhfObj}>
     <FormField
       control={control}
       name="name"
       render={({field}) => (
         <FormItem>
           <FormLabel className="mt-6 mb-0.5 text-lg font-bold"> Username :  </FormLabel>
           <FormControl>
             { /* Your form field */}
             <Input  {...field} />
           </FormControl>
           <FormMessage />
         </FormItem>
       )} 
     />

     <FormField
       control={control}
       name="email"
       render={({field}) => (
         <FormItem>
           <FormLabel className="mt-6 mb-0.5 text-lg font-bold"> Your E-mail :  </FormLabel>
           <FormControl>
             { /* Your form field */}
             <Input  {...field} type="email" />
           </FormControl>
           <FormMessage />
         </FormItem>
       )}
     />

     <FormField
       control={control}
       name="password"
       render={({field}) => (
         <FormItem>
           <FormLabel className="mt-6 mb-0.5 text-lg font-bold"> Password :  </FormLabel>
           <FormControl>
             { /* Your form field */}
             <Input  {...field} type="password" />
           </FormControl>
           <FormMessage />
         </FormItem>
       )}
     />

     <FormField
       control={control}
       name="rePassword"
       render={({field}) => (
         <FormItem>
           <FormLabel className="mt-6 mb-0.5 text-lg font-bold"> Confirm password :  </FormLabel>
           <FormControl>
             { /* Your form field */}
             <Input  {...field} type="password" />
           </FormControl>
           <FormMessage />
         </FormItem>
       )}
     />

     <FormField
       control={control}
       name="phone"
       render={({field}) => (
         <FormItem>
           <FormLabel className="mt-6 mb-0.5 text-lg font-bold">Enter your phone :  </FormLabel>
           <FormControl>
             { /* Your form field */}
             <Input  {...field} type="tel" />
           </FormControl>
           <FormMessage />
         </FormItem>
       )}
       
     />
     <Button className="mt-16 bg-green-700 cursor-pointer hover:bg-green-900 md:w-1/8 py-6 text-xl">Register </Button>

     </Form>
    </form>
  )
}
