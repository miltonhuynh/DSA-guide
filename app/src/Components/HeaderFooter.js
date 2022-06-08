import React from 'react'
import { ReactComponent as Githubicon } from '../github-brands.svg';
import { useNavigate } from 'react-router-dom'

export default function HeaderFooter(props) {
  let navigate = useNavigate();

  return (
    <>
        <div id="header">
          <div id="Github-icon"><a href="https://github.com/miltonhuynh/DSA-guide"><Githubicon/></a></div>
          <div id="Brand" onClick={() => navigate("")}>Milton's Data Structures and Algorithms Guide</div>
        </div>
            {props.children}
        <div id="footer">Created by Milton Huynh, with React.js</div>
    </>
  )
}
