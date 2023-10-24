import './FirstView.css'

const FirstView = () => {
    return (
        <section>
            <div className="info">
                <h1>Con tecnología, es todo más fácil</h1>
                <p>Nos especializamos en crear soluciones hechas a la medida de tu propio estilo en el mundo digital.</p>
                <button>Conocé nuestros servicios</button>
            </div>
            <div className="media">
                <img src="../../public/brand/logo.png" alt="" />
            </div>
        </section>
    )
}

export default FirstView