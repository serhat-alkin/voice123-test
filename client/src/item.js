import React from 'react';
import userDefault from './assets/user_default.png';
import './assets/styles.css';

function Item({ result }) {
	const url = 'https://voice123.com/';
  return (
    <div>
			<div className="wrapper">
				<img src ={result?.user?.picture_small || userDefault} className="imageCircular"></img>
				<p><a href={url + result.id}  target="_blank" rel="noopener noreferrer">{result.user.name}</a></p>
			</div>
			<audio src={result.relevant_sample.file} controls />
			<p className="customP">{result.summary}</p>
    </div>
  );
}

export default Item;