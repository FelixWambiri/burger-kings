import React from 'react';
import './Header.css';


export default function Navbar() {
  return (
    <header>
      <div className="hero-text-box">
        <h1>Goodbye Hotels.<br/>I'm learning how to cook</h1>
        <a className="btn btn-full" href="#">Add Recipe</a>
        <a className="btn btn-ghost"href="#">More Recipes</a>
      </div>
    </header>
  )
}
