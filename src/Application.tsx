import React, { useState } from 'react';
import CountrySearch from './country/CountrySearch';
import Store from './data/Store';
import CountryData from './country/CountryData';
import './styles/Application.css';
import logo from './img/logo.png';
import StateData from './state/StateData';
import StateSearch from './state/StateSearch';

export let [CurrentCountry, setCurrentCountry]: any = "";

const Application: React.FC = (): any => {

	[CurrentCountry, setCurrentCountry] = useState("");
	console.log(CurrentCountry);

	const onFooterClick = () => {
		window.open('https://github.com/voomp');
	}
	
	return (
		<>
			<div id="header">
				<img src={logo} alt="Logo" className="logo" />
				<span id="logoName"><pre> Corona<span id="track">Track</span></pre></span>
			</div>
			<Store>
				<CountrySearch />
				<CountryData />
				<StateSearch />
				<StateData />
			</Store>
			<br />
			<br />
			<footer onClick={onFooterClick}>Programmed by Vamp</footer>
		</>
	)

};

export default Application;