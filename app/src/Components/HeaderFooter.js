import React from 'react'

export default function HeaderFooter(props) {
  return (
    <>
        <div id="header">Data Structures and Algorithms Guide</div>
            {props.children}
        <div id="footer">Created by Milton Huynh</div>
    </>
  )
}
