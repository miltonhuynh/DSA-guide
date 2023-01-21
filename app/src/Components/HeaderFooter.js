import React from 'react'
import { ReactComponent as Githubicon } from '../github-brands.svg';
import { ReactComponent as Homeicon } from '../home.svg';
import { useNavigate } from 'react-router-dom'

export default function HeaderFooter(props) {
  let navigate = useNavigate();

  return (
    <>
        <header>
          <div id="Github-icon"><a href="https://github.com/miltonhuynh/DSA-guide"><Githubicon/></a></div>
          <div id="Home-icon" onClick={() => navigate("")}><Homeicon/></div>

          <div id="Brand" onClick={() => navigate("")}>Milton's DS&A Crash Course</div>
        </header>
            {props.children}
        <footer>Created by Milton Huynh with React.js</footer>
    </>
  )
}
