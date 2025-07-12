import { useContext, useEffect } from "react"
import CompletoContext from "../../../contexts/completo/CompletoContext"
import { Link } from "react-router-dom"

const CompletoList = () => {
  const ctx = useContext(CompletoContext)
  const { completos, getCompletos } = ctx

  useEffect(() => {
    getCompletos()
  }, [])

  return (
    <>
      <section className="max-w-7xl mx-auto py-16 px-8 grid grid-cols-1 gap-y-4 gap-x-12 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-2">
        {(completos?.length === 0) ? (
          <p>No se encontró producto</p>
        ) : (
          completos?.map(completo => (
            <div key={completo._id} className="border flex flex-col">
              <div className="bg-gray-50">
                <Link to={`/completos/${completo.slug}`} state={{ completo }} >
                  <img
                    src={completo.img}
                    alt={completo.description}
                    className="w-full h-96 object-center object-cover"
                  />
                </Link>
              </div>

              <div className="flex flex-col flex-1 p-4">
                <h3 className="text-xl font-bold text-gray-900">{completo.name}</h3>

                <div className="flex-1">
                  <p className="text-gray-500">{completo.description}</p>
                </div>

                <Link to={`/completos/${completo.slug}`} state={{ completo }} className="btn-product mt-4">
                  <button type="button" className="w-full">
                    Ver Completo
                  </button>
                </Link>
              </div>
            </div>
          ))
        )}
      </section>
    </>
  )
}

export default CompletoList
