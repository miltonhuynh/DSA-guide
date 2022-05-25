import React from 'react'
import { ReactComponent as Githubicon } from '../github-brands.svg';

export default function HeaderFooter(props) {
  return (
    <>
        <div id="header">
          <div id="Github-icon"><a href="https://github.com/miltonhuynh/DSA-guide"><Githubicon/></a></div>
          Milton's Data Structures and Algorithms Guide
        </div>
            {props.children}
        <div id="footer">Created by Milton Huynh, powered by React.js</div>
    </>
  )
}
