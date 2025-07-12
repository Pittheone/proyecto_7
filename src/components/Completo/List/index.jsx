import { useContext, useEffect } from "react"
import CompletoContext from "../../../contexts/completo/CompletoContext"
import { Link } from "react-router-dom"

//it looks amazing

const CompletoList = () => {
  const ctx = useContext(CompletoContext)
  const { completos, getCompletos } = ctx

  useEffect(() => {
    getCompletos()
  }, [])

  return (
    <main className="min-h-screen px-6 py-16 bg-[#fff7f2] text-gray-800">
      <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        {(completos?.length === 0) ? (
          <p>No se encontró producto</p>
        ) : (
          completos?.map(completo => (
            <div
              key={completo._id}
              className="bg-white border border-orange-100 rounded-2xl shadow-md flex flex-col overflow-hidden transition hover:shadow-lg"
            >
              <div className="bg-orange-50">
                <Link to={`/completos/${completo.slug}`} state={{ completo }}>
                  <img
                    src={completo.img}
                    alt={completo.description}
                    className="w-full h-80 object-cover object-center"
                  />
                </Link>
              </div>

              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{completo.name}</h3>

                <div className="flex-1">
                  <p className="text-gray-600 text-sm leading-relaxed">{completo.description}</p>
                </div>

                <Link
                  to={`/completos/${completo.slug}`}
                  state={{ completo }}
                  className="mt-6"
                >
                  <button
                    type="button"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-full font-semibold transition duration-300"
                  >
                    Ver Completo
                  </button>
                </Link>
              </div>
            </div>
          ))
        )}
      </section>
    </main>
  )
}

export default CompletoList
