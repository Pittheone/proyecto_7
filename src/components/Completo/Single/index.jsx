import { useLocation } from "react-router-dom"


const SingleCompleto = () => {
    const location = useLocation();
    const { completo } = location?.state;
  return (
    <>
    <main className="max-w-7xl mx-auto pt-16 pb-24 px-8 lg:grid lg:grid-cols-2 lg:gap-x-16">
        <section>
            <h1 className="text-4xl font-bold">{completo.name}</h1>
            <div className="mt-4">
                <p className="text-gray-500">{completo.description}</p>
            </div>
            <div className="mt-4">
                <h1 className="text-3x1">{new Intl.NumberFormat('es-CL', {style: 'currency', currency: 'CLP'}).format(completo.price)}</h1>
                <figure className="mt-8 col-start-2 row-span-2">
                    <img 
                    src={completo.img}
                    alt={completo.description}
                    className="w-full object-center object-cover"
                    />
                </figure>
            </div>
        </section>

    </main>
    </>
  )
}

export default SingleCompleto