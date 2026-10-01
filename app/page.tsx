'use client';

import { useState } from 'react';
import { ArrowDownRight, CalendarDays, ChevronRight, Heart, Instagram, Menu, Music2, Pause, Play, Send, Share2, Sparkles, Volume2, X, Youtube } from 'lucide-react';

const tracks = [
  { title: 'Tomando cerveza', artist: 'Corazón Serrano', duration: '3:37' },
  { title: 'Mix Morena', artist: 'Corazón Serrano', duration: '5:07' },
  { title: 'Duele el alma', artist: 'Corazón Serrano', duration: '3:39' },
  { title: 'No sufriré por nadie', artist: 'Corazón Serrano', duration: '3:46' },
];

export default function Home() {
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [open, setOpen] = useState(false);
  const playTrack = (index: number) => { setCurrent(index); setPlaying(true); };

  return <main>
    <nav className="nav" aria-label="Navegación principal">
      <a className="brand" href="#inicio" aria-label="Corazón Serrano, inicio"><span>Corazón</span><b>Serrano</b><i>♥</i></a>
      <div className="nav-links"><a href="#musica">Música</a><a href="#historia">Historia</a><a href="#agenda">Agenda</a></div>
      <a className="contact-link" href="#contacto">Contrataciones <ArrowDownRight size={17}/></a>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Abrir menú">{open ? <X/> : <Menu/>}</button>
      {open && <div className="mobile-menu"><a href="#musica" onClick={() => setOpen(false)}>Música</a><a href="#historia" onClick={() => setOpen(false)}>Historia</a><a href="#agenda" onClick={() => setOpen(false)}>Agenda</a><a href="#contacto" onClick={() => setOpen(false)}>Contrataciones</a></div>}
    </nav>

    <section id="inicio" className="hero">
      <div className="hero-image" role="img" aria-label="Integrantes de Corazón Serrano en concierto" />
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="eyebrow"><Sparkles size={15}/> Desde Piura para el mundo</p>
        <h1>Una canción,<br/><em>mil recuerdos.</em></h1>
        <p className="hero-copy">La cumbia que acompaña tus historias desde hace más de tres décadas.</p>
        <div className="hero-actions"><button className="primary" onClick={() => document.getElementById('musica')?.scrollIntoView({behavior:'smooth'})}><Play fill="currentColor" size={16}/> Escuchar ahora</button><a className="round-link" href="#historia" aria-label="Conoce nuestra historia"><ArrowDownRight size={22}/></a><span>Conoce nuestra historia</span></div>
      </div>
      <div className="hero-meta"><span>03° 34′ 00″ S&nbsp; · &nbsp;80° 37′ 00″ W</span><span>PIURA, PERÚ</span></div>
      <div className="hero-stamp"><span>EST. 1993</span><Heart fill="currentColor" size={14}/><span>CUMBIA PERUANA</span></div>
    </section>

    <section id="musica" className="music section-pad">
      <div className="section-heading"><div><p className="eyebrow dark"><Music2 size={15}/> La banda sonora</p><h2>Para cantar con<br/><em>el corazón.</em></h2></div><a href="https://open.spotify.com/artist/3qX1dqmDk5NRtJlQKxxHoF" target="_blank" rel="noreferrer" className="text-link">Ver en Spotify <ChevronRight size={17}/></a></div>
      <div className="music-grid">
        <article className="feature-card"><div className="record"><div className="record-center">CS</div></div><div className="feature-info"><p>SELECCIÓN ESPECIAL</p><h3>Las que nunca<br/>pasan de moda</h3><button onClick={() => playTrack(0)}><Play fill="currentColor" size={16}/> Reproducir playlist</button></div></article>
        <div className="tracklist" aria-label="Lista de canciones">{tracks.map((track, index) => <button className={`track ${current === index ? 'active' : ''}`} key={track.title} onClick={() => playTrack(index)} aria-label={`Reproducir ${track.title}`}><span className="track-number">0{index + 1}</span><span className="track-play">{current === index && playing ? <Pause size={17} fill="currentColor"/> : <Play size={17} fill="currentColor"/>}</span><span className="track-details"><strong>{track.title}</strong><small>{track.artist}</small></span><span className="track-duration">{track.duration}</span><Heart size={17}/></button>)}</div>
      </div>
      <div className="embed-wrap"><p className="embed-label">O ESCÚCHANOS EN SPOTIFY</p><iframe title="Corazón Serrano en Spotify" src="https://open.spotify.com/embed/artist/3qX1dqmDk5NRtJlQKxxHoF?utm_source=generator" width="100%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" /></div>
    </section>

    <section id="historia" className="story"><div className="story-photo" role="img" aria-label="Mujer disfrutando de un concierto"/><div className="story-copy"><p className="eyebrow"><Sparkles size={15}/> Nuestra historia</p><h2>El corazón de<br/><em>una generación.</em></h2><p>Desde 1993, llevamos el sabor de la cumbia piurana a cada escenario. Somos familia, somos fiesta y somos esas letras que se quedan contigo.</p><a className="outline-button" href="#agenda">Conócenos más <ArrowDownRight size={17}/></a></div><div className="story-number"><b>32</b><span>AÑOS HACIENDO<br/>HISTORIA</span></div></section>

    <section id="agenda" className="agenda section-pad"><div className="section-heading"><div><p className="eyebrow dark"><CalendarDays size={15}/> Nos vemos pronto</p><h2>Próximas<br/><em>presentaciones.</em></h2></div><a href="#contacto" className="text-link">Contratar a la orquesta <ChevronRight size={17}/></a></div><div className="events">{[['12','OCT','Chiclayo, Perú','Festival de la Cumbia'],['19','OCT','Trujillo, Perú','Gran Noche Norteña'],['31','OCT','Lima, Perú','Halloween Cumbiambero']].map(([day,month,city,event]) => <div className="event" key={event}><div className="date"><b>{day}</b><span>{month}</span></div><div><small>{city}</small><h3>{event}</h3></div><a href="#contacto" aria-label={`Información para ${event}`}><ArrowDownRight size={20}/></a></div>)}</div></section>

    <section className="video-section"><div><p className="eyebrow"><Youtube size={15}/> Mira y siente</p><h2>La música se<br/><em>vive mejor juntos.</em></h2><a className="primary light" href="https://www.youtube.com/@CorazonSerranoOficial" target="_blank" rel="noreferrer"><Youtube size={17}/> Ver en YouTube</a></div><a className="video-thumb" href="https://www.youtube.com/@CorazonSerranoOficial" target="_blank" rel="noreferrer" aria-label="Abrir el canal oficial de YouTube"><span><Play fill="currentColor" size={24}/></span></a></section>

    <footer id="contacto"><div className="footer-top"><a className="brand" href="#inicio"><span>Corazón</span><b>Serrano</b><i>♥</i></a><div><p>¿Quieres llevar la fiesta<br/>a tu ciudad?</p><a href="tel:+51914681947" className="phone">+51 914 681 947 <ArrowDownRight size={18}/></a></div><div className="socials"><a href="https://www.instagram.com/corazonserranooficial/" target="_blank" rel="noreferrer"><Instagram size={19}/></a><a href="https://www.youtube.com/@CorazonSerranoOficial" target="_blank" rel="noreferrer"><Youtube size={20}/></a><a href="mailto:contacto@corazonserrano.com.pe"><Send size={18}/></a></div></div><div className="footer-bottom"><span>© 2026 Corazón Serrano</span><span>Piura · Perú</span><a href="#inicio">Volver arriba ↑</a></div></footer>

    <div className="player" aria-label="Reproductor de música"><button onClick={() => setPlaying(!playing)} aria-label={playing ? 'Pausar' : 'Reproducir'}>{playing ? <Pause fill="currentColor"/> : <Play fill="currentColor"/>}</button><div><strong>{tracks[current].title}</strong><small>Corazón Serrano</small></div><div className="progress"><i style={{width: playing ? '38%' : '0%'}} /></div><span className="player-time">1:24 / {tracks[current].duration}</span><Volume2 size={18}/><button aria-label="Compartir canción"><Share2 size={17}/></button></div>
  </main>;
}
