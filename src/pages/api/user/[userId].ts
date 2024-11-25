import { db } from "src/firebase/server";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import type { APIRoute } from "astro";

interface RequestBody {
  communityId: string;
}

interface Params {
  userId: string;
}

export const PUT: APIRoute = async ({ request, params }): Promise<Response> => {
  try {
    const { userId } = params;
    const { communityId }: RequestBody = await request.json();

    if (!userId || !communityId) {
      return new Response(
        JSON.stringify({ message: "Faltan datos requeridos" }),
        { status: 400 }
      );
    }

    const userRef = doc(db, "users", userId);
    await updateDoc(userRef, { communityId });

    return new Response(
      JSON.stringify({ message: "Usuario actualizado con éxito" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error al actualizar usuario:", error);
    return new Response(
      JSON.stringify({ message: "Error al actualizar usuario" }),
      { status: 500 }
    );
  }
};

export const GET: APIRoute = async ({ params }): Promise<Response> => {
  try {
    const { userId } = params;

    if (!userId) {
      return new Response(
        JSON.stringify({ message: "Faltan datos requeridos" }),
        { status: 400 }
      );
    }

    const userRef = doc(db, "users", userId);
    const userDoc = await getDoc(userRef);

    if (!userDoc.exists()) {
      return new Response(
        JSON.stringify({ message: "Usuario no encontrado" }),
        { status: 404 }
      );
    }

    return new Response(JSON.stringify(userDoc.data()), { status: 200 });
  } catch (error) {
    console.error("Error al obtener usuario:", error);
    return new Response(
      JSON.stringify({ message: "Error al obtener usuario" }),
      { status: 500 }
    );
  }
};
