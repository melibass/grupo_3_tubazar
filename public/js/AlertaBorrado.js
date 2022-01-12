const formBorrado = document.querySelectorAll(".borrado")


formBorrado.forEach(elemento => {    
    elemento.addEventListener("submit", (e) => {
    e.preventDefault()
    Swal.fire({
        title: 'Estas seguro?',
        text: "No podes revertir el BORRADO!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, BORRAR!'       
      }).then((result) => {
        if (result.isConfirmed) {     
          Swal.fire(
            'Borrado!',
            'El archivo se borro de la base.',
            'success'
          )
          elemento.submit()          
        } 
      })
    
});
});
