// import React, { useState } from "react";
// import { Menu } from './Menu';
// import axios from "axios";

// export const Login = () => {

//     const [miLogin, setMiLogin] = useState("false");
//     const [usu, setUsu] = useState("");
//     const [pas, setPas] = useState("");


//     function iniciarSesion(e){
//         e.preventDefault();
//         var txtusu = document.getElementById("txtusu").value;
//         var txtpas = document.getElementById("txtpas").value;
//         if(txtusu.length===0 || txtpas.length===0){
//             alert("Complete los datos faltantes.");
//         }else{
//             if(usu === "admin" && pas==="123"){
//                 setMiLogin("true");
//                 document.getElementById("form_login").style.display = "none";
//             }else{
//                 setMiLogin("false");
//                 alert("Error de usuario y/o contraseña");
//                 document.getElementById("txtusu").value = "";
//                 document.getElementById("txtpas").value = "";
//                 document.getElementById("txtusu").focus();

//             }
//         }
//     }






//     return (
        
//         <div className="container" style={{background:"lightgray", marginTop:20, padding:20}}>
        
//             <form id="form_login">
//                 <div>
//                     <h1 style={{color:"green", textalign:"center"}}>Login Evergreen</h1>
//                     <label htmlFor="txtusu"><strong>Username</strong></label>

//                     <input type="text" id="txtusu" style={{textAlign:"center"}} className="form-control" onChange={ (e)=>setUsu(e.target.value)} required/>
//                 </div>
//                 <div>
//                     <label htmlFor="txtpas"><strong>Password</strong></label>
//                     <input type="password" id="txtpas" style={{textAlign:"center"}} className="form-control" onChange={ (e)=>setPas(e.target.value)} required/>
//                 </div><br/>
//                 <input type="submit"  className="btn btn-primary" value="Login" onClick={ iniciarSesion }/>
//             </form>

//             { miLogin  === "true" && <Menu usu={usu}/> }

//         </div>
        
//     )
// }

import React, { useState } from "react";
import { Menu } from './Menu';
import axios from "axios";

export const Login = () => {

    const [miLogin, setMiLogin] = useState(false);
    const [usu, setUsu] = useState("");
    const [pas, setPas] = useState("");

// function iniciarSesion(e){
//     e.preventDefault();
//     var txtusu = document.getElementById("txtusu").value;
//     var txtpas = document.getElementById("txtpas").value;
//     if(txtusu.length===0 || txtpas.length===0){
//         alert("Complete los datos faltantes.");
//     }else{
//         axios.post("https://evergreenuserpool.onrender.com/api/v1/auth/signin", {
//             user: txtusu,
//             password: txtpas
//         }).then(response => {
//             if(response.data.success){
//                 setMiLogin("true");
//                 document.getElementById("form_login").style.display = "none";
//             }else{
//                 setMiLogin("false");
//                 alert("Error de usuario y/o contraseña");
//                 document.getElementById("txtusu").value = "";
//                 document.getElementById("txtpas").value = "";
//                 document.getElementById("txtusu").focus();
//             }
//         }).catch(error => {
//             console.log(error);
//             alert("Error de conexión con la API");
//         });
//     }
// }

function iniciarSesion(e){
    e.preventDefault();
    var txtusu = document.getElementById("txtusu").value;
    var txtpas = document.getElementById("txtpas").value;
    if(txtusu.length===0 || txtpas.length===0){
        alert("Complete los datos faltantes.");
    }else{
        axios.post("https://evergreenuserpool.onrender.com/api/v1/auth/signin", {
            user: Number(txtusu),
            password: txtpas,
            type: "phone" || "email"
        }).then(response => {
            if(response.data.success){
                setMiLogin(true);
                document.getElementById("form_login").style.display = "none";
                console.log(response.data.body)
            }else{
                setMiLogin(false);
                alert("Error de usuario y/o contraseña");
                document.getElementById("txtusu").value = "";
                document.getElementById("txtpas").value = "";
                document.getElementById("txtusu").focus();
            }
        }).catch(error => {
            console.log(error);
            alert("Error de conexión con la API");
        });
    }
}



    return (
        <div className="container" style={{background:"lightgray", marginTop:20, padding:20}}>
            <form id="form_login">
                <div>
                    <h1 style={{color:"green", textalign:"center"}}>Login Evergreen</h1>
                    <label htmlFor="txtusu"><strong>Username</strong></label>
                    <input type="text" id="txtusu" style={{textAlign:"center"}} className="form-control" onChange={ (e)=>setUsu(e.target.value)} required/>
                </div>
                <div>
                    <label htmlFor="txtpas"><strong>Password</strong></label>
                    <input type="password" id="txtpas" style={{textAlign:"center"}} className="form-control" onChange={ (e)=>setPas(e.target.value)} required/>
                </div><br/>
                <input type="submit" className="btn btn-primary" value="Login" onClick={ iniciarSesion }/>
            </form>

            { miLogin && <Menu usu={usu}/> }

        </div>
    )
}
