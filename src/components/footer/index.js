import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon
} from 'mdb-react-ui-kit';
import { BsFacebook } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { SiGmail } from 'react-icons/si';

import './style.css'
export default function FOOTER() {
  return (
    <MDBFooter className='text-center text-white'>
      <MDBContainer className='pt-4'>
        <section className='mb-4'>
         
          <a
          style={{ color: 'white' }}
            className='btn btn-link btn-floating btn-lg'
            href='#!'
            role='button'
            data-mdb-ripple-color='dark'
          >
            <SiGmail/>
          </a>

          <a
            style={{ color: 'white' }}
            className='btn btn-link btn-floating btn-lg '
            href='#!'
            role='button'
            data-mdb-ripple-color='dark'
          >
           <AiFillInstagram/>
          </a>

          <a
           style={{ color: 'white' }}
            className='btn btn-link btn-floating btn-lg '
            href='#!'
            role='button'
            data-mdb-ripple-color='dark'
          >
           <BsFacebook/>
          </a>
          
        </section>
      </MDBContainer>

      <div className='text-center  p-3' >
        © 2022 Copyright:
        <a className='' href='/'>
        FREE MOVIES
        </a>
      </div>
    </MDBFooter>
    
  );
}

