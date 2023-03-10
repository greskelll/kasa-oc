import Host from './host';
import Ratings from './ratings';
import Scrolldown from './Scrolldown';
import Tags from './tags';
import '../styles/Accomodation.css';
import Carousel from './carousel';

function AccomodationPage({ liste }) {
	return (
		<div className="accomodation-page">
			<Carousel liste={liste} />
			<div className="accomodation-general-info">
				<div className="accomodation-name-place">
					<h2>{liste.title}</h2>
					<h3>{liste.location}</h3>
					<Tags liste={liste} />
				</div>
				<div>
					<Host liste={liste} />
					<Ratings liste={liste} />
				</div>
			</div>
			<div className="accomodation-details">
				<Scrolldown title={'Description'} text={liste.description} />
				<Scrolldown title={'Équipements'} text={liste.equipments} />
			</div>
		</div>
	);
}

/* je dois séparer mes élements en composants et les réintégrer à AccomodationPage ensuite */
/* je dois itérer dans App.js sur ma liste de location avec map() pour générer une AccomodationPage par objet */

export default AccomodationPage;
