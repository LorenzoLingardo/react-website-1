import React from 'react'
import '../App.scss';
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import Dropdown from './Dropdown';
import CFHistory from './CFHistory'
import CFFacts from './CFFacts'
import {Routes, Route} from "react-router-dom"
import Survey from './Survey'
import News from './News'

function MainPage() {
    var title = document.querySelector('title');
    title.innerText = 'Clark Historic Farm';
    const cfFacts = CFHistory.map(content => {
      return <CFFacts key={content.id} fact={content.fact} />
    })

    let isSignUp = false;

    return (
      <div>
        <Header />
        <Dropdown />
        <Main />
        <News />
        {/* <section className="cfFacts">
          {cfFacts}
        </section> */}
        {isSignUp && <Survey/>}
        <Footer />
      </div>
    );
  }
  
  export default MainPage;