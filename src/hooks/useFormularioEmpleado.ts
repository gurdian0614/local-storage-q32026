import { useEffect, useState } from "react";
import type { Empleado } from "../types/Empleado";
import type { FormularioDatos } from "../types/FormularioDatos";
import type { empleadoType } from "../types/Props";
import Swal from "sweetalert2";

const useFormularioEmpleado = (
    empleadoEditar: empleadoType,
    setEmpleadoEditar: (e: empleadoType) => void,
    guardarEmpleado: (e: Empleado) => void,
) => {
    const empleadoObj: FormularioDatos = {
        nombre: "",
        cargo: "",
        departamento: ""
    };

    const [formularioDatos, setFormularioDatos] = useState<FormularioDatos>(empleadoObj);

    useEffect(() => {
        if (empleadoEditar) {
            setFormularioDatos({
                nombre: empleadoEditar.nombre,
                cargo: empleadoEditar.cargo,
                departamento: empleadoEditar.departamento
            });
        }
    }, [empleadoEditar]);
}

export default useFormularioEmpleado;