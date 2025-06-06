const Contacto = () => {
    const handleSubmit = (e) => {
      e.preventDefault()
      alert("Mensaje enviado")
      e.target.reset()
    }
  
    return (
      <main>
        <h2 style={{ marginTop: '60px'}}>Contacto</h2>
        <form onSubmit={handleSubmit} style={{ margin: 'auto'}}>
          <input type="text" placeholder="Tu nombre" required />
          <input type="email" placeholder="Tu email" required />
          <textarea placeholder="Tu mensaje" required></textarea>
          <button type="submit">Enviar</button>
        </form>
      </main>
    )
  }
  
  export default Contacto