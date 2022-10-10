import React, {useState} from 'react';


const Form= () => {
	const [inputNombre, cambiarInputNombre] = useState('');
    const [inputDom, cambiarInputDom] = useState('');
    const [inputApellido, cambiarInputApellido] = useState('');
	const [inputCorreo, cambiarInputCorreo] = useState('');
    const [inputCorreoC, cambiarInputCorreoC] = useState('');
    const [inputphone, cambiarInputphone] = useState('');
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
	const telefonoRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{1,6}$/im
    

	// Funcion que se encargara de validar los datos y enviar el formulario
	const handleSubmit = (e) => {
		e.preventDefault();

		// Comprobamos validacion del formulario ...
		// Si todo es correcto enviamos el formulario

		console.log('Formulario Enviado!');
	}

	// Funcion que se encarga de cambiar el estado del inputNombre
	const handleInputNombre = (e) => {
		cambiarInputNombre(e.target.value);
	}


    	// Funcion que se encarga de cambiar el estado del inputNombre
	const handleInputDom = (e) => {
		cambiarInputDom(e.target.value);
	}

    	// Funcion que se encarga de cambiar el estado del inputNombre
	const handleInputApellido = (e) => {
		cambiarInputApellido(e.target.value);
	}
	
	// Funcion que se encarga de cambiar el estado del inputCorreo
	const handleInputCorreo = (e) => {
		cambiarInputCorreo(e.target.value);
	}

    // Funcion que se encarga de cambiar el estado del inputCorreo
	const handleInputCorreoC = (e) => {
		cambiarInputCorreoC(e.target.value);
	}
    // Funcion que se encarga de cambiar el estado del inputCorreo
	const handleInputphone = (e) => {
		cambiarInputphone(e.target.value);
	}


   



	return (
		<>
			<form action="" onSubmit={handleSubmit} className="formcontainer">

           

				<div>
                    

					<label htmlFor="nombre"></label>
					<input
						type="text"
						name="nombre"
						placeholder="Nombre"
						id="nombre"
						value={inputNombre}
						onChange={handleInputNombre}
					/>
				</div>

                <div>
                    

					<label htmlFor="apellido"></label>
					<input
						type="text"
						name="apellido"
						placeholder="Apellido"
						id="apellido"
						value={inputApellido}
						onChange={handleInputApellido}
					/>
				</div>

                <div>
                    

					<label htmlFor="dom"></label>
					<input
						type="text"
						name="dom"
						placeholder="Domicilio"
						id="dom"
						value={inputDom}
						onChange={handleInputDom}
					/>
				</div>





				<div>
					<label htmlFor="correo"></label>
					<input
						type="email"
						name="correo"
						placeholder="ejemplo@ejemplo.com"
						id="correo"
						value={inputCorreo}
                        required
						onChange={handleInputCorreo}
					/>
				</div>

                <div>


               
					<label htmlFor="correo"></label>
					<input
						type="email"
						name="correo"
						placeholder="Confirme Correo: ejemplo@ejemplo.com"
						id="correo"
						value={inputCorreoC}
                        required                       
						onChange={handleInputCorreoC}
					/>
				</div>

                <div>
					<label htmlFor="phone"></label>
					<input
						type="text"
						name="phone"
						placeholder="Telefono"
						id="phone"
						value={inputphone}
						onChange={handleInputphone}
					/>
				</div>
               
                </form>
		</>
	);
}
 
export default Form;