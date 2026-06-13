

export default function Gallery() {
  return (
    <section id="gallery">
  <div className="container">
    <div className="fade-up">
      <div className="section-tag">Inside Our Plant</div>
      <h2 className="section-h2">Factory <span className="accent">Gallery</span></h2>
      <div className="divider"></div>
    </div>
    <div className="gallery-grid fade-up">
      <div className="gal-item">
        <img src="/Pictures from Hebron/gallery-1.jpg" alt="Leak Testing Machine" loading="lazy"/>
        <div className="gal-overlay"><div className="gal-caption">Leak Testing Machine</div></div>
      </div>
      <div className="gal-item">
        <img src="/Pictures from Hebron/gallery-2.jpg" alt="Quality Inspection Setup" loading="lazy"/>
        <div className="gal-overlay"><div className="gal-caption">Quality Inspection Setup</div></div>
      </div>
      <div className="gal-item">
        <img src="/Pictures from Hebron/gallery-3.jpg" alt="Precision Testing Operations" loading="lazy"/>
        <div className="gal-overlay"><div className="gal-caption">Precision Testing Operations</div></div>
      </div>
      <div className="gal-item">
        <img src="/Pictures from Hebron/gallery-4.jpg" alt="Tensile Strength Testing" loading="lazy"/>
        <div className="gal-overlay"><div className="gal-caption">Tensile Strength Testing</div></div>
      </div>
      <div className="gal-item">
        <img src="/Pictures from Hebron/gallery-5.jpg" alt="CNC Precision Machining" loading="lazy"/>
        <div className="gal-overlay"><div className="gal-caption">CNC Precision Machining</div></div>
      </div>
      <div className="gal-item">
        <img src="/Pictures from Hebron/gallery-6.jpg" alt="CNC Vertical Machining Center" loading="lazy"/>
        <div className="gal-overlay"><div className="gal-caption">CNC Vertical Machining Center</div></div>
      </div>
    </div>
  </div>
</section>
  );
}