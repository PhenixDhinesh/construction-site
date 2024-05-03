import React,{useEffect} from 'react'
import Header from './Header'
import Footer from './Footer'
import ladder from '../assets/ladder.svg'
import '../styleSheets/about.css'
function About() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when component mounts
  }, []);
  return (
    <div>
      <Header/>
      <div className='about_container'>
        <div className='about_container_box'>
            <h3>About</h3>
            <p>
            Cras elementum arcu in feugiat dictum. Quisque nunc tortor, venenatis in venenatis lacinia, ornare ut arcu. Suspendisse non ante non nunc malesuada luctus ut ut elit. Curabitur sagittis nibh id venenatis posuere. Cras non dolor purus. Donec sem erat, fermentum eget placerat id, pulvinar non enim. Nam a congue ligula. Fusce non enim malesuada, tristique justo in, tincidunt eros. Curabitur commodo sem ut lacus rutrum, vitae commodo nunc convallis. Phasellus in libero ex. Vestibulum malesuada pellentesque velit, vel rhoncus massa gravida scelerisque. Vestibulum vestibulum vehicula volutpat. Integer molestie non ex sit amet congue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras rhoncus volutpat egestas. Aliquam volutpat quis erat vel dignissim.
            </p>
            <div className='about_image'>
                <img src={ladder} alt="" className='ladder_image'/>
            </div>
        </div>
      </div>
      <div className='vision_container'>
        <div className='vision_container_box'>
        <div className='vision'>
            <h3>vision</h3>
            <p>Curabitur molestie sit amet urna at euismod. In non vulputate urna. Nam faucibus est eu lacus ornare, ut cursus massa semper. Curabitur lorem lacus, placerat</p>
        </div>
        <div className='mission'>
            <h3>mission</h3>
            <p>Curabitur molestie sit amet urna at euismod. In non vulputate urna. Nam faucibus est eu lacus ornare, ut cursus massa semper. Curabitur lorem lacus, placerat ut fermentum sit amet, egestas sit amet metus. Aenean varius vehicula enim, ac pulvinar nulla dapibus ac. </p>
        </div>
        </div>
        
      </div>
      <Footer/>
    </div>
  )
}

export default About
