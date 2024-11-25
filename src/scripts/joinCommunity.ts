// Interfaz para tipar las comunidades
interface Comunidad {
    id: number;
    nombre: string;
    codigoPostal: string;
    descripcion: string;
  }
  
  // Lista de comunidades con la interfaz aplicada
  const comunidades: Comunidad[] = [
    { id: 1, nombre: 'Comunidad de Palermo', codigoPostal: '1425', descripcion: 'Comunidad activa en Palermo, Buenos Aires.' },
    { id: 2, nombre: 'Comunidad de Belgrano', codigoPostal: '1428', descripcion: 'Vecinos de Belgrano.' },
    { id: 3, nombre: 'Comunidad de Recoleta', codigoPostal: '1425', descripcion: 'Grupo de seguridad vecinal en Recoleta.' },
  ];
  
  // Función para filtrar comunidades por código postal
  const filterComunidades = (codigoPostal: string): Comunidad[] => {
    return comunidades.filter((comunidad) => comunidad.codigoPostal === codigoPostal);
  };
  
  // Manejador de envío del formulario con tipos definidos
  export const handleSubmit = (event: SubmitEvent): void => {
    event.preventDefault();
    
    // Obtenemos los datos del formulario
    const formData = new FormData(event.target as HTMLFormElement);
    const codigoPostal = formData.get('codigoPostal') as string;
  
    // Filtramos las comunidades
    const filteredCommunities = filterComunidades(codigoPostal);
  
    // Mostramos las comunidades filtradas
    console.log('Comunidades filtradas:', filteredCommunities);
  };
  
  