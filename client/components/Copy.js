import React from 'react';

import IssLocationLog from '../containers/IssLocationLog';

const Copy = ({locations}) => (
  <section className="project">
    <div className="column column-1">
      <h1 className="project-title">International Space Station Travel Log</h1>
      <IssLocationLog />
    </div>
    <div className="column column-2">
      <h3 className="project-about-title">About the project</h3>
      <p className="project-about-copy">The International Space Station (ISS) is a habitable satellite, in low Earth orbit. The space station orbits Earth about every 90 minutes &mdash;about 16 times a day. The station is moving at approximately to 28,000 km/h, which is pretty damn fast.</p>
      <p className="project-about-copy">This website visualizes the orbital path of the International Space Station by plotting the current latitude and longitude of the space station with a unix timestamp from the <a className="project-link" href="http://open-notify.org/Open-Notify-API/ISS-Location-Now/" target="_blank">Open Notify API</a>. Note: if you keep the window open for a few hours, you will see the space station’s path create a linear pattern across the map as the station continues to circle the planet.</p>
      <p className="project-made-by">Made by <a className="project-link" href="http://hexrays.at" target="_blank">Hexrays</a> </p>
    </div>
  </section>
);

export default Copy;
