import style from './assets/css/dalgona.css'
import img from './assets/img/coffee.jpg';

function Dalgona() {
  return (
    <div id='dalgona-content-body' style={style}>
    <div id="dalgona-container">

		<div id="dalgona-back">
			<a href="/#/final">
        {'< back'}
      </a>
		</div>

		<div className="dalgona-title">
			<h1>how to make:</h1>
			<h2>DALGONA COFFEE</h2>
		</div>

		<div id='dalgona-content'>
			<img src={img} />
			{/* SOURCE: CNN */}

			<div className="dalgona-description">
				<p>Named after a South Korean candy, Dalgona Coffee is a whipped coffee made from instant coffee powder that everyone's been making.</p>
			</div>

			<div id="circles">
				<div className="circle"></div>
				<div className="circle"></div>
				<div className="circle"></div>
				<div className="circle"></div>
				<div className="circle"></div>
				<div className="circle"></div>
				<div className="circle"></div>
				<div className="circle"></div>
				<div className="circle"></div>
				<div className="circle"></div>
			</div>


			<div className="recipe">
				<div id="ingredients">
					<h3>Ingredients</h3>
					<ul>
						<li>• 2 tbsp instant coffee</li>
						<li>• 2 tbsp sugar</li>
						<li>• 2 tbsp water</li>
					</ul>
				</div>

				<div id="instructions">
					<h3>Instructions</h3>
					<ul>
						<li>
							1. Combine instant coffee, sugar, and water.
						</li>
						<li>
							2. Mix until it has a thick, frothy consistency. Use an electric mixer for the quickest results (or hand mix if you want a workout).
						</li>
						<li>
							3. Scoop the mixture onto a glass of milk.
						</li>
						<li>
							4. Take some pics!
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
  </div>
  )
}

export default Dalgona;