import type { APIRoute } from "astro"

// signout.js
 export const GET: APIRoute = async ({ redirect, cookies }) => {
    cookies.delete("__session", {
       path: "/",
     })
     return redirect("/")
   }