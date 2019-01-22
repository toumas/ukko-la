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
      <div className='row'>
        <div className='col-12 col'>
          <form
            id='message-form'
            name='contact'
            method='post'
            data-netlify='true'
            data-netlify-honeypot='bot-field'
            action='#'
          >
            <textarea
              id='message'
              name='message'
              maxLength='800'
              rows={1}
              placeholder='Write a message...'
            />
            <input type='submit' value='Send' />
          </form>
        </div>
      </div>
    </main>
  </Layout>
);

export default IndexPage;
