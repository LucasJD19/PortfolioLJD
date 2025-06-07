const Contacto = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mensaje enviado");
    e.target.reset();
  };

  return (
    <>
      <div className="stars"></div>
      <div className="shooting-star"></div>
      <div className="shooting-star"></div>
      <div className="shooting-star"></div>
      <div className="shooting-star"></div>
      <main>
        
        <div className="card-desc">
        <h2 style={{ marginTop: "30px" }}>Contacto</h2>
        <br />
        <form onSubmit={handleSubmit} style={{ margin: "auto" }}>
          <input type="text" placeholder="Tu nombre" required />
          <input type="email" placeholder="Tu email" required />
          <textarea placeholder="Tu mensaje" required></textarea>
          <button type="submit">Enviar</button>
          <br />
        </form>
        </div>
      </main>
    </>
  );
};

export default Contacto;
