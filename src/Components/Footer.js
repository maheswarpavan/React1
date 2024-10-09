import '../styles.css'
import React from 'react';

export default function Footer(){
    return(
        <footer className='footer'>
              <p className='footer-text'>{new Date().getFullYear()}. All rights reserved by My3Tech</p>
        </footer>
    );
}