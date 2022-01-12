import React from 'react';

import './index.scss';
import { FOCUS_AREAS_LIST, MISSION_STATEMENT_BODY } from './constants';

import Card from '../../components/Card';
import missionStatementImage from '../../images/mission-statement.jpg';
import CtaButton from '../../components/CTAButton';

function MainSection() {
  return (
    <div className="main-section">
      <section className="hero">
        <div className="hero__overlay">
          <div className="hero__content">
            <h1 className="hero__title">
              LEND A
              {' '}
              <br />
              {' '}
              HELPING HAND
            </h1>
            <CtaButton />
          </div>
        </div>
      </section>
      <span className="fragment-anchor" id="our-mission" />
      <section className="mission-statement">
        <div className="mission-statement__content">
          <div className="line" />
          <h1>OUR MISSION</h1>
          <p>{MISSION_STATEMENT_BODY}</p>
        </div>
        <img className="mission-statement__image" src={missionStatementImage} alt="Text" />
      </section>
      <span className="fragment-anchor" id="focus-areas" />
      <section className="focus-area">
        <h1>FOCUS AREAS</h1>
        <div className="focus-area__grid">
          {
            FOCUS_AREAS_LIST.map((item) => (
              <Card
                image={item.image}
                title={item.title}
              />
            ))
          }
        </div>
      </section>
      <span className="fragment-anchor" id="impact" />
      <section className="impact">
        <h1>IMPACT</h1>
        <div className="impact__grid">
          {
          Array(3).fill({
            metric: '1800+',
            description: 'People Served',
          }).map((impact) => (
            <div className="impact__metric">
              <span className="metric">{impact.metric}</span>
              <span className="description">{impact.description}</span>
            </div>
          ))
        }
        </div>
      </section>
    </div>
  );
}

export default MainSection;
