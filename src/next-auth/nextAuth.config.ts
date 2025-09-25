
// import Credentials from "next-auth/providers/credentials";
// import type { NextAuthOptions } from "next-auth";

// import { jwtDecode } from "jwt-decode";

// // type CallBacksParams = {
// //     token:;
// // }

// export const nextAuthConfig:NextAuthOptions = {
//   providers: [
//     Credentials({
//         name:"Insta Mart",

//         authorize: async function(credentials,req){
//             const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signin",{
//                 method:'post'    ,
//                 body:JSON.stringify(credentials),

//                 headers:{
//                     "Content-Type": "application/json",
                    
//                 }
//             })

//             const finalRes = await res.json();
//             console.log('finalRes',finalRes)

//             if(finalRes.message === "success" ){
//                 const decodedObj:{ id:string } = jwtDecode(finalRes.token);
                
                
//                 return {
//                     id: decodedObj.id,
//                     name: finalRes.user.name,
//                     email: finalRes.user.email,
                      
//                     credentialsToken: finalRes.token,
//                 };
//             };
        
            
//             return null;

//         },
//         credentials:{
//             email:{type:'email' },
//             password:{type:'password' },
//         }
//     })
//   ],

//   pages:{
//     signIn:'/login'
//   },

  // callbacks:{
  //   jwt(params) {
  //       console.log('params',params);
  //   },
  // }

//   callbacks: {
//     jwt(params) {
//         if(params.user){

//             params.token.credentialsToken = params.user.credentialsToken;
//             params.token.userId = params.user.id;

//             return params.token;
//         }
//   },
//   session(params) {
//         params.session.user.id = params.token.userId
//         return params.session;
//   },
// }
// }



//         // (session as any).credentialsToken = (token as any).credentialsToken;
//         params.session.user.id = params.token.userId
//         return params.session;
    



//   callbacks:{
//     jwt
//     jwt(params){
//         if(params.user){

//             params.token.credentialsToken = params.user.credentialsToken;
//             params.token.userId = params.user.id;

//             return params.token;
//         }
//     },
//     // async jwt({ token, user }: { token: JWT; user?: User }){
//     //     if (user && (user as any).credentialsToken) {
//     //         (token as any).credentialsToken = (user as any).credentialsToken;
//     //     }
//     //     return token;
//     // },
//     session(params){
//         // (session as any).credentialsToken = (token as any).credentialsToken;
//         params.session.user.id = params.token.userId
//         return params.session;
//     }
//   }


  
// } as const;

// const NextAuthHandler = NextAuth(nextAuthConfig as any)

//  export { NextAuthHandler as GET , NextAuthHandler as POST