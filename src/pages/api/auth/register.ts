import { getAuth } from "firebase-admin/auth"
import { app } from "@/firebase/server"
import type { APIRoute } from "astro"
import type { FirebaseAuthError } from "@/types/auth"

export const POST: APIRoute = async ({ request, redirect }) => {
    const auth = getAuth(app)

    const formData = await request.formData()

    const email = formData.get("email")?.toString()
    const password = formData.get("password")?.toString()
    const name = formData.get("name")?.toString()

    if (!email || !password || !name) {
        return new Response(
            "Falta uno o más campos",
            { status: 400 }
        )
    }

    try {
        await auth.createUser({
            email,
            password,
            displayName: name,
        })
    } catch (error) {
        console.log(error)

        if ((error as FirebaseAuthError).code === "auth/email-already-exists") {
            return new Response(
                "Ya existe un usuario con este correo",
                { status: 400 }
            )
        }

        return new Response(
            "Algo salió mal",
            { status: 400 }
        )
    }

    return redirect("/user-created")
}
