import React from 'react';
import Card from '../../components/Card';
import { MISSION_STATEMENT_BODY } from './constants';
import './index.scss';

function MainSection() {
  return (
    <div className="main-section">
      <div className="mission-statement">
        <div className="mission-statement__content">
          <div className="line" />
          <h1>OUR MISSION</h1>
          <p>{MISSION_STATEMENT_BODY}</p>
        </div>
        <img className="mission-statement__image" src="https://images.unsplash.com/photo-1576361181962-701d5694bfbf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3576&q=80" alt="Text" />
      </div>
      <div className="focus-area">
        <h1>FOCUS AREAS</h1>
        <div className="focus-area__grid">
          {
            Array(4).fill(<Card
              image={{
                src: 'https://images.unsplash.com/photo-1628717341663-0007b0ee2597?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80',
                alt: 'Hunger',
              }}
              title="HUNGER ERADICATION"
            />)
          }
        </div>
      </div>
      <div className="impact">
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
      </div>
    </div>
  );
}

export default MainSection;
