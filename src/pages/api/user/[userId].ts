import { db } from "../../../firebase/server";
import { updateDoc, doc as firestoreDoc } from "firebase/firestore";
import type { APIRoute } from "astro";

interface RequestBody {
  communityId: string;
}

interface Params {
  userId: string;
}

export const PUT: APIRoute = async ({ request, params }): Promise<Response> => {
  const handlePut = async (): Promise<Response> => {
    const { userId } = params;
    const { communityId }: RequestBody = await request.json();

    try {
      const userDoc = firestoreDoc(db, "users", userId); 
      await updateDoc(userDoc, { communityId });

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

  return handlePut();
};

export const GET: APIRoute = async ({ params }): Promise<Response> => {
  const handleGet = async (): Promise<Response> => {
    const { userId } = params;

    try {
      const userDoc = await firestoreDoc(db, "users", userId).get(); // Método correcto para Firestore v9
      const data = userDoc.data();

      if (!data) {
        return new Response(JSON.stringify({ message: "Usuario no encontrado" }), {
          status: 404,
        });
      }

      return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
      console.error("Error al obtener usuario:", error);
      return new Response(
        JSON.stringify({ message: "Error al obtener usuario" }),
        { status: 500 }
      );
    }
  };

  return handleGet();
};

