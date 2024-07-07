import './App.css'
import closeButton from './assets/close_button.png'
import headerImage from './assets/fortnite_header_image.png'
import fortnite_Imgone from './assets/fortnite_collection_one.png'
import fortnite_Imgtwo from './assets/fortnite_collection_two.png'
import fortnite_Imgthree from './assets/fortnite_collection_three.png'


function App() {

  return (
    <div className='container-fluid'>
      
      <div className='d-flex flex-row-reverse' >
        <img src={closeButton} alt="close-button" style={{width:"20px",marginTop:"10px"}}  />
      </div>

      <div className="container mt-5 contents">

        <h2 className='text-light text-center head-title'>Epic Games : An American video game and software developer and publisher based in Cary, North Carolina.</h2>

        <img style={{width:'100%'}} src={headerImage}alt="fortnite" className='mt-4 text-center'/>

        <p className='container d-flex justify-content-center align-items-center text-center flex-column paragraph  text-light'>
          Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or live event, or discover over a million creator made games, including racing, parkour, zombie survival, and more. Each Fortnite island has an individual age rating so you can find the one that's right for you and your friends. Find it all in Fortnite ... Drop In.
        </p>

        <div className='text-center'>
          <button className='visit-button text-center mt-5'>Visit Website</button>
        </div>

        <div className="container d-flex justify-content-center align-items-center collection">
          <div>
            <div className='list-images'>             
                <img  src={fortnite_Imgone} alt="Game-play" className='fortnite-collection' />    
              <p className='para-details'>
                Explore large, destructible environments where no two games are ever the same.
              </p>
            </div>
          </div>
          <div >
            <div className='list-images'>
                <img  src={fortnite_Imgtwo} alt="Game-play" className='fortnite-collection'/>
              <p className='para-details'>
                Team up with friends by sprinting, climbing and smashing your way to earn your Victory Royale
              </p>
            </div>
          </div>
          <div >
            <div className='list-images'>
                <img  src={fortnite_Imgthree} alt="Game-play" className='fortnite-collection'/>
              <p className='para-details'>
                Discover even more ways to play across thousands of creator-made game genres
              </p>
            </div>
          </div>
        </div>

        <div className='container d-flex justify-content-center align-items-center collection-value flex-column'>
          
          <h1 className='text-center contribution'>Our Contribution</h1>

          <p className='text-center mt-4 contribution-para'>
            Our core offering extends beyond mere profit generation; we emphasize the growth and active involvement of our user community. Collaborating with us represents an investment, rather than a mere expenditure. Our dedication to providing distinctive digital interactions guarantees unparalleled benefits for our clientele.
          </p>
        </div>

        <div className='justify-content-evenly align-items-center experience-data text-light text-center'>

          <div className="text-center exp">
            <h3 className='exp-header'>5M</h3>
            <p>Daily User <br /> 
            Engagements</p>
          </div>

          <div className="text-center exp">
            <h3 className='exp-header'>$500K</h3>
            <p>Revenue Surge for an  <br />
            Platform</p>
          </div>

          <div className="text-center exp">
            <h3 className='exp-header'>10X</h3>
            <p>ROAS on all our <br />
            marketing campaigns</p>
          </div>
        </div>

        <div className='container d-flex justify-content-center align-items-center text-center flex-column text-light contact flex-column'>
          <h3 className='contact-header'>Interested in delving deeper into the project?</h3>
          <p className='contact-para'>If you'd like to explore further details about our  initiatives or any <br /> of our  affiliated brands, don't hesitate to connect. You can reach out to us via <br /> email at <span style={{fontWeight:'600'}}>hello@abc.com</span> or give us a call at <span style={{fontWeight:'600'}}>+91 480 20802730</span>.</p>
        </div>

        <div className='text-center'>
          <button className='skype text-center mt-5'>Ring us on Skype</button>
          <button className='contact-button text-center mt-5'>Contact us</button>
        </div>

        <div className='text-center'>
          <h6 className='footer'>© 2019-2023 abcTechnology Solutions Pvt. Ltd. All Rights Reserved.</h6>
        </div>
        
      </div>
    </div>
  )
}

export default App
