import { useEffect, useRef } from 'react';

export default function Journey() {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;

    const items = timeline.querySelectorAll('.tl-item');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('tl-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2, rootMargin: '0px 0px -60px 0px' });

    items.forEach(item => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="journey">
  <div className="container">
    <div style={{ textAlign: "center" }} className="fade-up">
      <div className="section-tag">Our Story</div>
      <h2 className="section-h2">Year-by-Year <span className="accent">Growth</span></h2>
      <div className="divider" style={{ margin: "1.2rem auto 0" }}></div>
    </div>
    <div className="timeline" ref={timelineRef}>
      <div className="tl-item">
        <div className="tl-year"><div className="tl-dot"></div><div className="tl-y">2019</div></div>
        <div className="tl-content">
          <div className="tl-title">Foundation</div>
          <div className="tl-desc">Hebron Automotive was launched with 2 pressure die casting machines, establishing a strong foundation in aluminium component manufacturing.</div>
        </div>
      </div>
      <div className="tl-item">
        <div className="tl-year"><div className="tl-dot"></div><div className="tl-y">2020</div></div>
        <div className="tl-content">
          <div className="tl-title">Powder Coating Expansion</div>
          <div className="tl-desc">Commissioned a semi-automatic powder coating facility to offer complete part-finishing solutions in-house.</div>
        </div>
      </div>
      <div className="tl-item">
        <div className="tl-year"><div className="tl-dot"></div><div className="tl-y">2021</div></div>
        <div className="tl-content">
          <div className="tl-title">Capacity Scale-Up</div>
          <div className="tl-desc">Added 2 more die casting machines, significantly increasing production capacity and output to meet growing customer demand.</div>
        </div>
      </div>
      <div className="tl-item">
        <div className="tl-year"><div className="tl-dot"></div><div className="tl-y">2022</div></div>
        <div className="tl-content">
          <div className="tl-title">New Machining Facility</div>
          <div className="tl-desc">Set up a dedicated facility for machining and bush assembly for Gabriel Parts, expanding our capabilities into precision machining.</div>
        </div>
      </div>
      <div className="tl-item">
        <div className="tl-year"><div className="tl-dot"></div><div className="tl-y">2023</div></div>
        <div className="tl-content">
          <div className="tl-title">Standard Room & Testing</div>
          <div className="tl-desc">Installed a comprehensive standard room with UTM, Spectro Analysis, VMM, and 2D measurement facilities for rigorous quality validation.</div>
        </div>
      </div>
      <div className="tl-item">
        <div className="tl-year"><div className="tl-dot"></div><div className="tl-y">2024</div></div>
        <div className="tl-content">
          <div className="tl-title">Heavy Tonnage Machines</div>
          <div className="tl-desc">Added 2 more die casting machines at 180T and 250T, enabling production of larger, more complex automotive components.</div>
        </div>
      </div>
      <div className="tl-item">
        <div className="tl-year"><div className="tl-dot"></div><div className="tl-y">2025</div></div>
        <div className="tl-content">
          <div className="tl-title">GDC, VMC & Tool Room</div>
          <div className="tl-desc">Installed 7 GDC machines and 5 VMC machines for Outer Tube parts. Established a full Tool Room with wire cutting, surface grinding, and CNC machines.</div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}