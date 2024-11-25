import { db } from "src/firebase/server";
import type { APIRoute, APIContext } from "astro";

interface RequestBody {
  communityId: string;
}

interface Params {
  userId?: string;
}
const validateInput = (userId?: string, communityId?: string): boolean => {
  return !!(userId && communityId);
};

export const PUT: APIRoute = async ({
  request,
  params,
}: APIContext): Promise<Response> => {
  try {
    const { userId } = params as Params;
    const { communityId }: RequestBody = await request.json();

    if (!validateInput(userId, communityId)) {
      return new Response(
        JSON.stringify({ message: "Faltan datos requeridos" }),
        { status: 400 }
      );
    }
    if (!userId) {
      return new Response(JSON.stringify({ message: "userId no es string" }), {
        status: 400,
      });
    }
    const userRef = db.collection("users").doc(userId);
    await userRef.update({ communityId });

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

export const GET: APIRoute = async ({
  params,
}: APIContext): Promise<Response> => {
  try {
    const { userId } = params as Params;

    if (!userId) {
      return new Response(
        JSON.stringify({ message: "Faltan datos requeridos" }),
        { status: 400 }
      );
    }

    const userRef = db.collection("users").doc(userId);
    const userDoc = await userRef.get();

    if (!userDoc.exists) {
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
