import { app } from "../../../firebase/server";
import { getAuth } from "firebase-admin/auth";
import type { Auth, DecodedIdToken } from "firebase-admin/auth";
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({
  request,
  cookies,
}): Promise<Response> => {
  const auth: Auth = getAuth(app);

  // Get authorization token from headers
  const authHeader: string | null = request.headers.get("Authorization");
  const idToken: string | undefined = authHeader?.split("Bearer ")[1];

  if (!idToken) {
    return new Response(
      JSON.stringify({
        success: false,
        message: "No token found",
        status: 401,
      }),
      {
        status: 401,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  try {
    // Create a session cookie
    const sessionCookie: string = await auth.createSessionCookie(idToken, {
      expiresIn: 60 * 60 * 24 * 5 * 1000, // 5 days in milliseconds
    });

    // Save the session cookie in the browser
    cookies.set("__session", sessionCookie, {
      path: "/",
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 5, // 5 days in seconds
    });

    // Return success response
    return new Response(
      JSON.stringify({
        success: true,
        url: "/home",
        status: 200,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error verifying token:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Invalid token",
        status: 401,
      }),
      {
        status: 401,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
};
