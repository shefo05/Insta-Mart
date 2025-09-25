import RegisterForm from "./RegisterForm";


export default function Register() {

  /*
  {
    "name": "Ahmed Abd Al-Muti",
    "email":"ahmedmuttii4012@gmail.com",
    "password":"Ahmed@123",
    "rePassword":"Ahmed@123",
    "phone":"01010700701"
}
  */
  




  return (
    <div className='text-black flex flex-col w-2/3 mx-auto h-screen'>

      <h1 className="text-5xl text-green-700 font-bold my-12" >Register </h1>
      <RegisterForm  />



      
    </div>

    
  )
}