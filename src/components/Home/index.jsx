import { Link } from "react-router-dom"



const Home = () => {
  return (
<>
<main className="text-center px-4 mt-24 mx-auto">
  <h1 className="text-5xl font-extrabold text-gray-900">
  Aplicación de Completos
  </h1>
  <p className="mt-3 mx-auto text-gray-500">
    Accede al divertido mundo de los completos
  </p>
  <section className="mt-16 mx-auto max-w-md">
    <article>
      <Link to='/completos' className='btn-product'> 
      Ver nuestro menú
      </Link>
    </article>
  </section>
</main>
</>
  )
}

export default Home