// const comunidades = [
//     { id: 1, nombre: 'Comunidad de Palermo', codigoPostal: '1425', descripcion: 'Comunidad activa en Palermo, Buenos Aires.' },
//     { id: 2, nombre: 'Comunidad de Belgrano', codigoPostal: '1428', descripcion: 'Vecinos de Belgrano.' },
//     { id: 3, nombre: 'Comunidad de Recoleta', codigoPostal: '1425', descripcion: 'Grupo de seguridad vecinal en Recoleta.' },
//   ];
  
//   const filterComunidades = (codigoPostal) => {
//     return comunidades.filter(comunidad => comunidad.codigoPostal === codigoPostal);
//   };
  
//   export const handleSubmit = (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     const codigoPostal = formData.get('codigoPostal');
//     const filteredCommunities = filterComunidades(codigoPostal);
  
    
//     console.log('Comunidades filtradas:', filteredCommunities);
//   };
  