export interface Community {
  id: number;
  nombre: string;
  codigoPostal: string;
  descripcion: string;
}

export interface JoinCommunityResponse {
  error?: string;
  message?: string;
}
