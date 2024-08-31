import React from 'react'
import './hero.css'
import Title from '../../common/title/Title';
import AboutCard from '../../about/AboutCard';

const Hero = () => {
  return (
    <>
        <section className='hero'>
              <div className="container">
              <div className="row">
                <Title subtitle='WELCOME TO ACADEMIA' title='Best Online Education' />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt molestias eius sint! Vel fugit dignissimos vero itaque beatae repudiandae ipsa commodi corporis autem, quia sed id at odio in nostrum?</p>
                    <div className="button">

                        <button className="primary-btn">
                            GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
                        </button>

                        <button >
                            VIEW COURSE <i className="fa fa-long-arrow-alt-right"></i>
                        </button>

                    </div>
                </div>
              </div>
        </section>
        <div className="marigin">

        </div>
    </>
  )
}

export default Hero;