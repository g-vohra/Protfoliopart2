import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import endpoints from '../constants/endpoints';
import Social from './Social';
import FallbackSpinner from './FallbackSpinner';
import '../css/home.css';

function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints.home, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return data ? (
    <Fade triggerOnce className="home-fade-container">
      <section className="hero">
        {/* Background ambient glow effect */}
        <div className="hero-glow-glow"></div>

        <div className="hero-main-container">
          {data?.status && (
            <div className="hero-status-tag">
              <span className="status-dot"></span>
              <span className="hero-eyebrow">{data.status}</span>
            </div>
          )}

          <h1 className="hero-name">{data?.name}</h1>

          <div className="hero-roles">
            <span>I&apos;m&nbsp;</span>
            <span className="typewriter-accent">
              <Typewriter
                options={{
                  loop: true,
                  autoStart: true,
                  strings: data?.roles,
                }}
              />
            </span>
          </div>

          {data?.tagline && <p className="hero-tagline">{data.tagline}</p>}

          <div className="hero-actions">
            <div className="hero-cta">
              <Link className="btn-pill btn-accent" to="/projects">
                View my work
              </Link>
              <Link className="btn-pill btn-ghost" to="/about">
                About me
              </Link>
            </div>

            <div className="hero-social-inline">
              <Social />
            </div>
          </div>
        </div>
      </section>
    </Fade>
  ) : <FallbackSpinner />;
}

export default Home;