import useFormularioEmpleado from "../hooks/useFormularioEmpleado";
import type { Props } from "../types/Props";

const FormularioEmpleado: React.FC<Props> = ({
    guardarEmpleado,
    empleadoEditar,
    setEmpleadoEditar,
}) => {
    const {
        formularioDatos,
        manejarCambio,
        manejarEnvio,
        manejarCancelar,
    } = useFormularioEmpleado(guardarEmpleado, empleadoEditar, setEmpleadoEditar);

    return (
        <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                { empleadoEditar ? "Editar Empleado" : "Agregar Empleado" }
            </h2>

            <form onSubmit={manejarEnvio}>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-1">
                        Nombre:
                    </label>
                    <input className="w-full border px-3 py-2 rounded" name="nombre" value={formularioDatos.nombre} onChange={manejarCambio} />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-1">
                        Cargo:
                    </label>
                    <input className="w-full border px-3 py-2 rounded" name="cargo" value={formularioDatos.cargo} onChange={manejarCambio} />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-1">
                        Departamento:
                    </label>
                    <input className="w-full border px-3 py-2 rounded" name="departamento" value={formularioDatos.departamento} onChange={manejarCambio} />
                </div>

                <div className="flex gap-2 justify-end">
                    <button className="px-4 py-2 bg-gray-200 rounded" onClick={manejarCancelar}>Cancelar</button>
                    <button className="px-4 py-2 bg-gray-800 text-white rounded" type="submit">{empleadoEditar ? "Actualizar" : "Agregar"}</button>
                </div>
            </form>
        </div>
    );
}

export default FormularioEmpleado;