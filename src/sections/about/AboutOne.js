import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import styled from 'styled-components'
import RevealContent from '../../components/reveal-content/index'
import Unimed from './imgs/unimed.png'
import Amil from './imgs/amil.png'
import Bradesco from './imgs/bradesco.png'
import Delfhi from './imgs/delfhi.png'
import Hapvida from './imgs/hapvida.png'
import Humana from './imgs/humana.png'
import Sulamerica from './imgs/sulamerica.png'

class AboutOne extends React.Component {

    shouldComponentUpdate() {
      return false
    }
    
      render() {
          const Section = styled.section`
              position: relative;
              overflow: hidden;
              background-color: #FFF;
              .particles {
                  position: absolute;
                  width: 100%;
                  height: 100%;
              }
  
          `
  
          const AboutContainer = styled(Container)`
              padding: 250px 0 100px 0;
              .cardContainer{
                top: 80%;
                transform: translateY(-30%);
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                max-width: 1200px;
                flex-wrap: wrap;
            }
            
            .cardContainer .card{
                position: relative;
                top: 100px;
                right: 50px;
                min-width: 320px;
                height: 440px;
                box-shadow: inset 5px 5px 5px rgba(0,0,0,0.05),
                            inset -5px -5px 5px rgba(255,255,255,0.5),
                            inset 5px 5px 5px rgba(0,0,0,0.05),
                            inset -5px -5px 5px rgba(255,255,255,0.5);
                border-radius: 15px;
                margin: 30px;
            }
            
            .cardContainer .card .box{
                position: absolute;
                top: 20px;
                left: 20px;
                right: 20px;
                bottom: 20px;
                background: #fff;
                box-shadow: 0 10px 20px rgba(0,0,0,0.1);
                border-radius: 15px;
                display: flex;
                justify-content: center;
                align-items: center;
                transition: 0.5s;
            }
            
            
            .cardContainer .card:hover .box {
                transform: translateY(-50px);
                box-shadow: 0 10px 40px rgba(0,0,0,0.2);
                background: linear-gradient(45deg, #fff,#e85a0c );
            }
            
            .cardContainer .card .box .content{
                padding: 20px;
                text-align: center;
            }
            
            .cardContainer .card .box .content h2{
                position: absolute;
                font-family: 'Teko';
                font-weight: 500;
                top: -10px;
                right: 30px;
                font-size: 4em;
                color: rgba(232, 89, 12, 0.021);
                transition: 0.5s;
                pointer-events: none;
            }
            .cardContainer .card:hover .box .content h2{
                color: rgba(255, 255, 255, 0.082);
            }
            
            .cardContainer .card .box .content h3{
                font-family: 'Teko';
                font-size: 2.4em;
                color: #777;
                z-index: 1;
                transition: 0.5s;
            }
            
            .cardContainer .card:hover .box .content h3{
                color: #fff;
            }
            
            .cardContainer .card .box .content p{
                font-family: 'Teko';
                font-size: 3em;
                font-weight: 300;
                color: #777;
                z-index: 1;
                transition: 0.5s;
            }
            
            .cardContainer .card .box .content a{
                position: relative;
                display: inline-block;
                padding: 8px 20px;
                background: #fff;
                margin-top: 15px;
                border-radius: 20px;
                color: #e85a0c;
                text-decoration: none;
                font-weight: 400;
                box-shadow: 0 10px 20px rgba(0,0,0,0.2);
                transition: 2s;
            }

            .cardContainer .card:hover .box .content a{
                color: #fff;
                background: #e85a0c;
            }
            
              @media (min-width:600px) and (max-width:768px) {
                  padding: 350px 0 100px 0;
              }
              @media (min-width:769px) and (max-width:1024px) {
                padding: 300px 0 100px 0;
              }
              @media (min-width:1025px) and (max-width:1399px) {
                padding: 400px 0 100px 0;
              }
              @media (max-width:767px) {
                  padding: 50px 50px;
              }
              @media (max-width: 800px){
                .card{
                    margin-top: 200px;
                }
                .cardContainer{
                    position: relative;
                    margin-top: 50px;
                    left: 12%;
                }
            }
          `
          const Heading = styled.h1`
              font-size: 40px;
              font-family: Teko;
              color: black;
              text-transform: uppercase;
              @media (max-width:1399px) {
                  font-size: 70px;
                  line-height: 70px;
              }
              @media (max-width:900px) {
                  font-size: 37px;
                  line-height: 30px;
                  text-align: center;
              }
          `
          const Color = styled.span`
              color: #e85a0c;
              font-size: 50px;
              font-family: Teko;
              text-transform: uppercase;
              letter-spacing: 2px;
              @media (max-width:1399px) {
                  font-size: 80px;
                  line-height: 80px;
              }
              @media (max-width:900px) {
                  font-size: 40px;
                  line-height: 40px;
              }
          `
  
          const CounterComponent = styled.div`
              margin: 10px 0;
              @media (max-width:767px) {
                  margin: 50px 0;
                  text-align:center;
              }
              .value {
                  font-size: 120px;
                  font-family: Teko;
                  color: #fff;
                  line-height: 90px;
              }
              .text {
                  font-size: 20px;
                  color: #fff;
              }
              .symbol {
                  color: #04e5e5;
                  position: relative;
                  font-size: 39px;
                  top: -38px;
              }
  
          `
  
          const LeftCol = styled(Col)`
              display: flex;
              align-items: center;
              .cardContainer{
                  position: relative;
                  top: 50%;
              }
          `

          const BottomContent = styled.div`
          position: relative;
          display: flex;
          width: 100%;
          justify-content: center;
          top: -200px;
          z-index: 2;

          .card{
              height: 310px;
              width: 310px;
              background-color: white;
              transform: scale(0.7);
              border-radius: 8px;
              box-shadow: 0 0 10px 0.5px white;
          }
          .card .info{
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: center;
          }
          .card .info .name{
              font-size: 35px;
              font-weight: 600;
              color: #f79f08;
              position: absolute;
              top: 50px;
              letter-spacing: 2px;
          }
          .divider{
              background-color: #e85a0c;
              height: 1.5px;
              width: 100px;
              position: absolute;
              top: 100px;
          }
          .bio{
              position: absolute;
              top: 110px;
              color: #000000;
              line-height: 28px;
              font-size: 18px;
              text-align: center;
          }
          .button{
              position: absolute;
              bottom: 30px;
              background-color: #f79f08;
              border: none;
              font-size: 20px;
              padding: 13px 25px;
              cursor: pointer;
              color: white;
          }
          .photo{
              height: 100%;
              width: 100%;
              background-repeat: no-repeat;
              position: absolute;
              bottom: 0;
              background-size: 100% 100%;
              border-radius: 8px;
              transition: 1s;
          }       
          .card:hover .name{
              display: inline;
          }

          .card:hover .photo{
              transform: scale(0.5, 0.35) translateY(-450px);
              border-radius: 50%;
              background-size: 100% 100%;
              background-position: 0 0;
           }     
           .card .a2{
              position: absolute;
              bottom: -70px;
              font-size: 25px;
              color: whitesmoke;
              background-color: #ff6e20;
              width: 100%;
              padding: 5px 0;
              font-size: 27px;
              font-family: 'Poppins';
              font-weight: 600;
              text-align: center;
              letter-spacing: 2px;
              text-decoration: none;
          }
          @media (max-width: 1400px) { 
            .card .info .name{
                font-size: 25px;
              }   
            .card .a2{
                font-size: 20px;
            }
            .bio{
                font-size: 15px;
            }
            }
            @media (max-width: 1250px){
                .card .info .name{
                    font-size: 20px;
                  } 
                  .card .a2{
                    font-size: 15px;
                }
            }
            @media (max-width: 800px){
                flex-direction: column;
                .card{
                    margin-top: 100px;
                    position: relative;
                    left: 50%;
                    transform: translateX(-50%);
                }
                .card:hover .photo{
                    display:none;
                 } 
            }
            @media (max-width: 800px){
                .card{
                    margin-top: 200px;
                }
                .cardContainer{
                    position: relative;
                    margin-top: 150px;
                    justify-content: center;
                }
            }
               
      `



  
          return(
       
              <Section id="PLANOS">
              <div className='particles'>  </div>
                  <AboutContainer>
                      <Row>
                          <LeftCol md={12}>
                          <BottomContent>
                                    <div className="card">
                                        <div className="info">
                                            <div className="name">Bradesco</div>
                                            <div className="divider"></div>
                                            <div className="bio">
                                                Planos completos para sua família ou para sua empresa! 
                                            </div>
                                            <button className="button">SIMULAR</button>
                                        </div>
                                        <img className='photo' src={Bradesco} alt='Logo'/>
                                        <a className="a2" href="#">Bradesco Saúde</a>
                                    </div>  

                                    <div className="card">
                                        <div className="info">
                                            <div className="name">Unimed</div>
                                            <div className="divider"></div>
                                            <div className="bio">
                                                Com hospitais e laboratórios próprios, entregamos o melhor para você! 
                                            </div>
                                            <button className="button">SIMULAR</button>
                                        </div>
                                        <img className='photo' src={Unimed} alt='Logo'/>
                                        <a className="a2" href="#">Unimed</a>
                                    </div>                        
                                
                                     
                                    <div className="card">
                                        <div className="info">
                                            <div className="name">DelfhiOdonto</div>
                                            <div className="divider"></div>
                                            <div className="bio">
                                               Nosso plano odontológico te oferece o que há de mais tecnolófico e inovador em tratamento dentário.
                                            </div>
                                            <button className="button">SIMULAR</button>
                                        </div>
                                        <img className='photo' src={Delfhi} alt='Logo'/>
                                        <a className="a2" href="#">Delfhi Odonto</a>
                                    </div>                        
                                  
                               
                                    <div className="card">
                                        <div className="info">
                                            <div className="name">Humana</div>
                                            <div className="divider"></div>
                                            <div className="bio">
                                                A vida é feita de escolhas: A melhor é ter saúde. 
                                            </div>
                                            <button className="button">SIMULAR</button>
                                        </div>
                                        <img className='photo' src={Humana} alt='Logo'/>
                                        <a className="a2" href="#">Humana Saúde</a>
                                    </div>                       
                       
                                    <div className="card">
                                        <div className="info">
                                            <div className="name">Hapvida</div>
                                            <div className="divider"></div>
                                            <div className="bio">
                                                Cuidamos da saúde de toda sua família 
                                            </div>
                                            <button className="button">SIMULAR</button>
                                        </div>
                                        <img className='photo' src={Hapvida} alt='Logo'/>
                                        <a className="a2" href="#">Hapvida</a>
                                    </div>                      
                    </BottomContent>
                          </LeftCol>
                          <LeftCol md={6}>
                              <RevealContent>
                                  <Heading>
                                      Desde 2001 <Color>Ajudamos pessoas </Color> 
                                       que buscam mais qualidade de vida com 
                                      <Color> o preço que cabe no bolso.</Color>
                                  </Heading>
                              </RevealContent>
                          </LeftCol>
                          <Col md={6}>
                              <Row>
                              <RevealContent>
                                <div class="cardContainer">
                                    <div class="card">
                                        <div class="box">
                                            <div class="content">
                                                <h2>DELFHI</h2>
                                                <h3>PLANOS COMPLETOS A PARTIR DE</h3>
                                                <p>
                                                    R$139,90
                                                </p>
                                                <a href="">SIMULAR AGORA</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </RevealContent>
                              </Row>
                          </Col>
                      </Row>
                  </AboutContainer>
              </Section>
          )
      }
  
  }

  export default AboutOne