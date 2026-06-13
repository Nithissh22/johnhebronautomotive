

export default function Products() {
  return (
    <section id="products">
  <div className="container">
    <div className="fade-up">
      <div className="section-tag">What We Make</div>
      <h2 className="section-h2">Our <span className="accent">Products</span></h2>
      <div className="divider"></div>
      <p className="section-desc">From high-pressure die cast housings to fully machined and powder-coated outer tubes, every component we produce meets the strictest automotive quality standards.</p>
    </div>
    <div className="products-grid">
      <div className="prod-card fade-up">
        <div className="prod-img">
          <img src="/Products/spring_seat_adjuster.png" alt="Spring Seat Adjuster" loading="lazy"/>
        </div>
        <div className="prod-body">
          <div className="prod-cat">PDC Parts</div>
          <div className="prod-name">Spring Seat Adjuster</div>
        </div>
      </div>
      <div className="prod-card fade-up">
        <div className="prod-img">
          <img src="/Products/eyelet_assembly.png" alt="Eyelet Assembly" loading="lazy"/>
        </div>
        <div className="prod-body">
          <div className="prod-cat">PDC Parts</div>
          <div className="prod-name">Eyelet Assembly</div>
        </div>
      </div>
      <div className="prod-card fade-up">
        <div className="prod-img">
          <img src="/Products/housings_and_sleeves.png" alt="Housings" loading="lazy"/>
        </div>
        <div className="prod-body">
          <div className="prod-cat">PDC & Machining</div>
          <div className="prod-name">Housings & Sleeves</div>
        </div>
      </div>
      <div className="prod-card fade-up">
        <div className="prod-img">
          <img src="/Products/outer_tube.png" alt="Outer Tube" loading="lazy"/>
        </div>
        <div className="prod-body">
          <div className="prod-cat">GDC Parts</div>
          <div className="prod-name">Outer Tube LH & RH (Full Finished)</div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}