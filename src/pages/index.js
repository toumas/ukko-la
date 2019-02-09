import 'papercss/dist/paper.min.css';
import '../main.css';
import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO
      title='Home'
      keywords={[`react`, `front end`, `javascript`, `developer`]}
    />
    <main>
      <h1>Tuomas Ukkola</h1>
      <h2>Front End Developer</h2>
      <div className='row'>
        <div className='col-4 col'>
          <a href='https://github.com/toumas'>GitHub</a>
        </div>
        <div className='col-4 col'>
          <a href='https://www.linkedin.com/in/tuomas-ukkola/'>LinkedIn</a>
        </div>
        <div className='col-4 col'>
          <a href='https://codesandbox.io/u/toumas'>CodeSandbox</a>
        </div>
      </div>
    </main>
  </Layout>
);

export default IndexPage;
