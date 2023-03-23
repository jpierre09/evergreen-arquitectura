import React, { useState, useEffect } from "react";

export const Listar = () => {


    const obtenerRegistros = () => {
      var datos = localStorage.getItem("registroslogin");
      if(datos){
        return JSON.parse(datos);
        
      }else{
        return [];
      }
    }


    const [registroslogin, setRegistrosLogin] = useState(obtenerRegistros());

    const botonEliminar=(miIndex) => {
      if(window.confirm("Seguro que quieres eliminar el registro?")){
        var registrosFiltrados = registroslogin.filter((e, index)=>{
          return miIndex !== index
        });
        setRegistrosLogin(registrosFiltrados);
      }
    }

    useEffect(() => {
      localStorage.setItem("registroslogin", JSON.stringify(registroslogin))
    }, [registroslogin])


    return (
            
      <div className="bg-light" style={{marginTop:20, padding:20}}>

      <div className="h3">
        Listado De Registro
      </div>

      <div className="table-responsive">


        { registroslogin.length > 0 ? 
        


        <>
          <table className="table table-bordered table-hover" style={{marginTop:12}}>
              <thead className="text-center" style={{background:"lightgray"}}>
                  <tr>
                      <th>#</th>
                      <th>Usuario</th>
                      <th>Rol</th>
                      <th>otro dato</th>
                      <th>Celular</th>
                      <th>X</th>
                  </tr>
              </thead>
              <tbody className="text-center align-baseline">
                {
                  
                  registroslogin.map((x, index) => (
                    <tr key={index}>
                      <th>{ index+1 }</th>
                      <td>{ x.titulo }</td>
                      <td>{ x.estilo }</td>
                      <td>{ x.tecnica }</td>
                      <td>{ x.precio }</td>
                      <td className="text-center">
                        <button onClick={()=>botonEliminar(index)}>
                          <i class="bi bi-trash3-fill"></i>
                        </button>
                        
                      </td>
                      
                    </tr>
                  ))

                }
                  
              </tbody>
          </table>
        </> 
        
        : <p className="h5" style={{color:"red"}}>"No hay nada que listar</p>
              }
      </div>
   
    </div>
    )
}