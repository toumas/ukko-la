import 'papercss/dist/paper.min.css';
import '../main.css';
import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import cv from '../ukkola-tuomas-cv.pdf';

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
        <div className='sm-12 md-4 col'>
          <a href='https://github.com/toumas'>GitHub</a>
        </div>
        <div className='sm-12 md-4 col'>
          <a href='https://www.linkedin.com/in/tuomas-ukkola/'>LinkedIn</a>
        </div>
        <div className='sm-12 md-4 col'>
          <a href='https://codesandbox.io/u/toumas'>CodeSandbox</a>
        </div>
      </div>
      <div className='row'>
        <div className='sm-12 col'>
          <a href={cv} download="ukkola-tuomas-cv.pdf">Download CV</a>
        </div>
      </div>
    </main>
  </Layout>
);

export default IndexPage;
