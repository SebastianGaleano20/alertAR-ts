import { getAuth } from "firebase-admin/auth";
import { app } from "../../../firebase/server";
import type { APIRoute } from "astro";
import type { FirebaseError } from "firebase-admin";

interface RegisterFormData {
  email: string | undefined;
  password: string | undefined;
  name: string | undefined;
}

interface CreateUserData {
  email: string;
  password: string;
  displayName: string;
}

export const POST: APIRoute = async ({
  request,
  redirect,
}): Promise<Response> => {
  const auth = getAuth(app);

  const formData = await request.formData();

  const userData: RegisterFormData = {
    email: formData.get("email")?.toString(),
    password: formData.get("password")?.toString(),
    name: formData.get("name")?.toString(),
  };

  if (!userData.email || !userData.password || !userData.name) {
    return new Response(JSON.stringify({ error: "Falta uno o más campos" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  try {
    const createUserData: CreateUserData = {
      email: userData.email,
      password: userData.password,
      displayName: userData.name,
    };

    await auth.createUser(createUserData);

    return redirect("/user-created");
  } catch (error) {
    console.error("Error creating user:", error);

    if ((error as FirebaseError).code === "auth/email-already-exists") {
      return new Response(
        JSON.stringify({ error: "Ya existe un usuario con este correo" }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    return new Response(JSON.stringify({ error: "Algo salió mal" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};
