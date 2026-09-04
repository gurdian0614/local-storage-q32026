import type { ListaEmpleadoProps } from "../types/ListaEmpleadoProps";

const ListaEmpleado: React.FC<ListaEmpleadoProps> = ({
    empleados,
    setEmpleadoEditar,
    eliminarEmpleado
}) => {
    if (!empleados || empleados.length === 0) {
        return <p className="text-gray-500 text-center">No hay empleados para mostrar.</p>
    }

    return (
        <div className="bg-white shadow-lg rounded-lg">
            <table className="min-w-full w-full table-auto">
                <thead>
                    <tr>
                        <th className="text-left p-2 font-medium text-gray-700">Nombre</th>
                        <th className="text-left p-2 font-medium text-gray-700">Cargo</th>
                        <th className="text-left p-2 font-medium text-gray-700">Departamento</th>
                        <th className="p-2 font-medium text-gray-700">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {empleados.map((empleado) =>(
                        <tr key={empleado.id} className="border-t hover:bg-gray-50">
                            <td className="p-2 align-middle">{empleado.nombre}</td>
                            <td className="p-2 align-middle">{empleado.cargo}</td>
                            <td className="p-2 align-middle">{empleado.departamento}</td>
                            <td className="p-2 align-middle">
                                <div className="flex gap-2 justify-end">
                                    <button className="px-3 py-1 bg-yellow-200 hover:bg-yellow-300 rounded" onClick={() => setEmpleadoEditar(empleado)}>
                                        Editar
                                    </button>
                                    <button className="px-3 py-1 bg-red-200 hover:bg-red-300 rounded" onClick={() => eliminarEmpleado(empleado.id)}>
                                        Eliminar
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListaEmpleado;