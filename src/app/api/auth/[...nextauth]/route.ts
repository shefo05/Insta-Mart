import Credentials from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import type { NextAuthOptions, Session, User } from "next-auth";
import type { JWT } from "next-auth/jwt";

import { jwtDecode } from "jwt-decode";

// type CallBacksParams = {
//     token:;
// }

const nextAuthConfig: NextAuthOptions = {
  providers: [
    Credentials({
        name:"Insta Mart",

        authorize: async function(credentials){
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
  pages: { signIn: "/login" },

  callbacks: {
    jwt({ token, user }: { token: JWT; user?: User | null }) {
      type AugmentedUser = User & { credentialsToken?: string; id: string };
      type AugmentedToken = JWT & { credentialsToken?: string; userId?: string };
      const nextToken: AugmentedToken = { ...token } as AugmentedToken;
      if (user) {
        const u = user as AugmentedUser;
        if (u.credentialsToken) nextToken.credentialsToken = u.credentialsToken;
        if (u.id) nextToken.userId = u.id;
      }
      return nextToken as JWT;
    },
    session({ session, token }: { session: Session; token: JWT }) {
      type AugmentedToken = JWT & { credentialsToken?: string; userId?: string };
      type AugmentedSession = Session & { credentialsToken?: string; user?: (Session["user"] & { id?: string }) | null };
      const t = token as AugmentedToken;
      const s = session as AugmentedSession;
      if (s.user && t.userId) {
        s.user.id = t.userId;
      }
      if (t.credentialsToken) {
        s.credentialsToken = t.credentialsToken;
      }
      return s as Session;
    },
  },
}

const handler = NextAuth(nextAuthConfig);
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