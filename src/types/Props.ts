import type { Empleado } from "./Empleado";

export type empleadoType = Empleado | null;

export interface Props {
    guardarEmpleado: (e: Empleado) => void;
    empleadoEditar: empleadoType;
    setEmpleadoEditar: (e: empleadoType) => void;
}