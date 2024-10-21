import React from 'react'
import "./Media.scss"
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import lokmat from './lokmat.png'


function Multimedia() {
  return (
    <div>
        <Header />
            <div className="overview">

            <section className="multimedia">
            <h1>Multimedia</h1>
            <div className="row m-auto news-letter">
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 img">
                  <img src={lokmat} alt="lokmat" />
                </div>
                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 info shadow">
                  <h3>Chemistry of Harmony</h3>
                  <p>
                  A research fellow, a teacher, a scientist. <b>DR S M JAWEED MUKARRAM</b> has a fascinating personality. And as was advised by his parents his efforts have been to achieve the highest degree of excellence in whatever he is doing. A man of science, he also roots for concept of green development. Pained by religious differences and turmoil around, hw feels that we should open up our minds and learn to respect each other. In a tete-e-tete with YOGESH GOLE, Tooba Laboratories CMD expresses his views on science, environment and religious tolerance
                  </p>

                  <p>
                  America's economy might be tottering today, but there was a time when the country was the epitome of capitalism. Every youngster used to dream of going to the land of abundance and making it big.
                  <br />
                  <br />However, scientist Dr. S M Jaweed Mukarram, doing a postdoctoral fellowship in the US in 1987, chose to return to India. Reason? he knew that it was all because of the societal support that a boy from a small town in Marathwada could achieve something in life and that he must try to repay the debt in whatever way he could.
                  </p>

                  <h4>The beginning</h4>
                  <p>
                  Son of a teacher couple Naseer Mohammed and Rabiya Bano, Jaweed obtained his primary education from Jawaharlal Nehru memorial urdu School at Ajanta, 100km from Aurangabad. Incidentally, he was the student of the first batch.
                  After obtaining a degree in B Sc (Azad College) and M Sc in organic chemistry (the then Marathwada University).
                  <br />
                  <br />
                  He worked as a supervisor at Kurla Rubber factory in Chikalthana for a few months	and later shifted to Poona College of Arts, Commerce and Science as a lecturer in chemistry in 1978.
                  </p>

                  <h4>In US and back</h4>
                  <p>
                  In a major break, Jaweed got an opportunity to do research work for Ph D at prestigious National Chemical Laboratory (NCL), Pune, under the guidance of Padmavibhushan Dr A V Ramarao. He was awarded Ph D in 1984-85.
                  <br />
                  <br />
                  Another significant milestone in his academic career a postdoctoral fellowship at Santa Barbara, University of California followed in 1985-86. For a year, he worked under Prof B H Lipshutz on 'Cyclo peptite alkaloids' He then moved on to Utah State University for a year.
                  <br />
                  <br />
                  It was at this point that  Dr. Jaweed decided to return to India, saying goodbye to the lucrative research opportunities in the US. "Mind you, a country spends Rs 10 Lakh in moulding a Ph D student,"  Dr Ramarao's word rang in his ears.
                  joining as an executive (research and development) in Wockhardt, Dr Jaweed	concentrated on research work in bulk drug development for a board range of medicines, including anti-ulcers, anti-bacterial and hyper tension. He boasts of 160 international patents for his voluminous work. When left Wockhardt, he was senior associate director.
                  </p>

                  <h4>Birth of Tooba</h4>
                  <p>
                  Dr Jaweed always strived for developing a technology for producing Active Pharmaceutical ingredients (APIs), which can be used for making formulations (medicines) and selling them as cheap as possible.
                  <br />
                  <br />
                  And from this passion has born TPPL, he is heading as chairman and managing director, Dr Jaweed, who is hoping to develop new anti-cancer and anti-AIDS molecules, says, "I am too small a person and have made a modest beginning. Let's see what happens."
                  <br />
                  <br />
                  The bearded scientist is a man medicines.. IT has done a lot for the comfort of mankind, "he stresses. But at what cost the	development? haven't we spoilt our environment? "ya ! Chemistry has become a kind of curse. " he says painfully and asserts that development  should not come by abusing our water, air and land resources.
                  <br />
                  <br />
                  It is very sad that developed nations use countries like India as a dumping ground. Multinationals want processes that cause pollution to be carried out in developing nations, " he points out.
                  </p>

                </div>
            </div>
            
            </section>
            </div>

        <Footer />
    </div>
  )
}

export default Multimedia