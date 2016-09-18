import React from 'react';

import IssLocationLog from './IssLocationLog';

const Copy = ({locations}) => (
  <section className="project">
    <div className="column column-1">
      <h1 className="project-title">Internation Space Station Travel Log</h1>
      <IssLocationLog locations={locations} />
    </div>
    <div className="column column-2">
      <h3 className="project-about-title">About the project</h3>
      <p className="project-about-copy">This is some copy about the project. It is really very interesting. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus dignissimos, nulla at enim! Reiciendis porro nulla iure sunt id quasi, velit libero minima! Minima libero beatae, ratione, nobis velit enim.</p>
    </div>
  </section>
);

export default Copy;
