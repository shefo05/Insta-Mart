import Credentials from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";

import { jwtDecode } from "jwt-decode";

// type CallBacksParams = {
//     token:;
// }

const nextAuthConfig: NextAuthOptions = {
  providers: [
    Credentials({
        name:"Insta Mart",

        authorize: async function(credentials,req){
            const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signin",{
                method:'post'    ,
                body:JSON.stringify(credentials),

                headers:{
                    "Content-Type": "application/json",
                    
                }
            })

            const finalRes = await res.json();
            // console.log('finalRes',finalRes)

            if(finalRes.message === "success" ){
                const decodedObj:{ id:string } = jwtDecode(finalRes.token);
                
                
                return {
                    id: decodedObj.id,
                    name: finalRes.user.name,
                    email: finalRes.user.email,
                      
                    credentialsToken: finalRes.token,
                };
            };
        
            
            return null;

        },
        credentials:{
            email:{type:'email' },
            password:{type:'password' },
        }
    })
  ],

  session: { strategy: "jwt" },
  // Customize sign in page if you have one
  pages: { signIn: "/login" },

  callbacks: {
     jwt({ token, user }) {
      if (user) {
        (token as any).credentialsToken = (user as any).credentialsToken;
        (token as any).userId = (user as any).id;
      }
      return token;
    },
     session({ session, token }) {
      if (session.user) {
        (session.user as any).id = (token as any).userId;
      }
      (session as any).credentialsToken = (token as any).credentialsToken;
      return session;
    },
  },
}

const handler = NextAuth(nextAuthConfig as any);
export { handler as GET, handler as POST };
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
//             email:{type:'email' , label:'Email address' , placeholder:''},
//             password:{type:'password' , placeholder:'enter your password'},
//         }
//     })
//   ],

//   pages:{
//     signIn:'/login'
//   },

//   callbacks:{
//     jwt(params) {
//         console.log('params',params);
//     },
//   }
// }
// //   callbacks: {
// //     jwt(params) {
// //         if(params.user){

// //             params.token.credentialsToken = params.user.credentialsToken;
// //             params.token.userId = params.user.id;

// //             return params.token;
// //         }
// //   },
// //   session(params) {
// //         params.session.user.id = params.token.userId
// //         return params.session;
// //   },
// // }
// // }



// //         // (session as any).credentialsToken = (token as any).credentialsToken;
// //         params.session.user.id = params.token.userId
// //         return params.session;
    



// //   callbacks:{
// //     jwt
// //     jwt(params){
// //         if(params.user){

// //             params.token.credentialsToken = params.user.credentialsToken;
// //             params.token.userId = params.user.id;

// //             return params.token;
// //         }
// //     },
// //     // async jwt({ token, user }: { token: JWT; user?: User }){
// //     //     if (user && (user as any).credentialsToken) {
// //     //         (token as any).credentialsToken = (user as any).credentialsToken;
// //     //     }
// //     //     return token;
// //     // },
// //     session(params){
// //         // (session as any).credentialsToken = (token as any).credentialsToken;
// //         params.session.user.id = params.token.userId
// //         return params.session;
// //     }
// //   }


  
// // } as const;

// // const NextAuthHandler = NextAuth(nextAuthConfig as any)

// //  export { NextAuthHandler as GET , NextAuthHandler as POST