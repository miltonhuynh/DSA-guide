import React, {useState, useEffect} from 'react'
import { ReactComponent as Githubicon } from '../github-brands.svg';
import { ReactComponent as Homeicon } from '../home.svg';
import { ReactComponent as Lightmode } from '../light-mode.svg';
import { useNavigate } from 'react-router-dom'

export default function HeaderFooter(props) {
  let navigate = useNavigate();

  const [bodytheme, setbodyTheme] = useState('body_light');
  const [sectiontheme, setsectionTheme] = useState('section_light')
  
  //const [inactivetheme, setinactiveTheme] = useState('Inactive_Link')
  //const [activetheme, setactiveTheme] = useState('active_Link')

  const toggleMode = () => {
    if (bodytheme === 'body_light') {
      setbodyTheme('body_dark');
      setsectionTheme('section_dark');
      
    } else {
      setbodyTheme('body_light');
      setsectionTheme('section_light');
      
    }
  }
  useEffect(() => {
    document.body.className = bodytheme;
    
    var sections = document.getElementsByTagName("section");
    for (var i = 0; i < sections.length; i++) {
      document.getElementsByTagName("section")[i].className = sectiontheme;
    }
  })


  return (
    <>
      <header>
        <div id="Github-icon"><a href="https://github.com/miltonhuynh/DSA-guide"><Githubicon/></a></div>
        <div id="Light-icon" onClick={() => toggleMode()}>
          <Lightmode /></div>

        <div id="Home-icon" onClick={() => navigate("")}><Homeicon/></div>
        <div id="Brand" onClick={() => navigate("")}>Milton's DS&A Quick Reference</div>
      </header>
          {props.children}
      <footer>Created by Milton Huynh with React.js</footer>
    </>
  )
}
