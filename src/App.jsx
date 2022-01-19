
import './App.css';
import { HashRouter, BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import LandingPage from './LandingPage/landingPage';
import PreOrder from './LandingPage/preorder';
import Privacypolicy from './LandingPage/privacypolicy';
import Refundpolicy from './LandingPage/Refundpolicy'
import TC from './LandingPage/T&C';
import ShippingPolicy from './LandingPage/ShippingPolicy';
function App() {
	return (
		<HashRouter>
		<div className="App">
		
				<Route exact path="/" component={LandingPage} /> 
				<Route exact path="/preorder" component={PreOrder} />{' '}
				<Route exact path="/privacypolicy" component={Privacypolicy} />
				<Route exact path="/refundpolicy" component={Refundpolicy} />
				<Route exact path="/terms&conditions" component={TC} />
				<Route exact path="/shippingpolicy" component={ShippingPolicy} />

			
		</div>
		</HashRouter>
	);
}

export default App;
