import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>New Features !!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/analyse.jpg'
              text='Analyse the attention levels of your audience'
              label='Analyse'
              path='/services'
            />
            <CardItem
              src='images/review.jpg'
              text='Understand the quality of your content'
              label='Review'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/teaching.jpg'
              text='Virtual Assistant to monitor students'
              label='Teaching'
              path='/services'
            />
            <CardItem
              src='images/lesson-analysis.jpg'
              text='Analyse the reaction towards varied teaching methods'
              label='Lesson Analysis'
              path='/products'
            />
            <CardItem
              src='images/integrate.jpg'
              text='Realistic virtual class experience'
              label='Integrate'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

