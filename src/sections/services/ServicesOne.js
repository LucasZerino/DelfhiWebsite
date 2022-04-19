import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import ContactCreative from '../contact/ContactCreative'
import AnimatedHeading from '../../components/animated-heading'

class ServicesOne extends React.Component {


    shouldComponentUpdate() {
        return false
    }
      

    render() {
        const Section = styled.section`
            position: relative;
            overflow: hidden;
            background-color: #111;
            background-image: url(${this.props.background.childImageSharp.fluid.src});
            background-size: cover;
            .heading {
                width: 100%;
            }
          }
        `

        const ServiceContainer = styled.div`
            background-color: rgba(232,90,12,.8);
            padding: 100px 0;
            display: flex;
            flex-direction: column;
          p{
            font-size: 30px;
            font-weight: 500;
            font-family: Teko;
            color: #fff;
          }
          h1{
            margin-top: 3px;
            font-size: 35px;
            font-weight: 500;
            font-family: Teko;
            color: #fff;
          }
          h2{
            text-align: center;
            margin-top: 3px;
            font-size: 30px;
            font-weight: 500;
            font-family: Teko;
            color: #fff;
          }
          .imcIcon{
            width: 250px;
          }

            .ps-timeline-sec {
              position: relative;
            }
            .ps-timeline-sec .container {
              position: relative;
            }
            @media screen and (max-width: 767px) {
              .ps-timeline-sec .container ol:before {
                display: none;
              }
              .ps-timeline-sec .container ol:after {
                display: none;
              }
              .ps-timeline-sec .container ol.ps-timeline {
                margin: 130px 0 !important;
                border-left: 2px solid #e85a0c;
                padding-left: 0 !important;
                padding-top: 120px !important;
                border-top: 0 !important;
                margin-left: 25px !important;
              }
              .ps-timeline-sec .container ol.ps-timeline li {
                height: 220px;
                float: none !important;
                width: inherit !important;
              }
              .ps-timeline-sec .container ol.ps-timeline li:nth-child(2) .img-handler-bot img {
                width: 70px;
              }
              .ps-timeline-sec .container ol.ps-timeline li:last-child {
                margin: 0;
                bottom: 0 !important;
                height: 120px;
              }
              .ps-timeline-sec .container ol.ps-timeline li:last-child .img-handler-bot {
                bottom: 40px !important;
                width: 40% !important;
                margin-left: 25px !important;
                margin-top: 0 !important;
              }
              .ps-timeline-sec .container ol.ps-timeline li:last-child .img-handler-bot img {
                width: 100%;
              }
              .ps-timeline-sec .container ol.ps-timeline li:last-child .ps-top {
                margin-bottom: 0 !important;
                top: 20px;
                width: 50% !important;
              }
              .ps-timeline-sec .container ol.ps-timeline li span {
                left: 0 !important;
              }
              .ps-timeline-sec .container ol.ps-timeline li span.ps-sp-top:before {
                content: none !important;
              }
              .ps-timeline-sec .container ol.ps-timeline li span.ps-sp-top:after {
                content: none !important;
              }
              .ps-timeline-sec .container ol.ps-timeline li span.ps-sp-bot:before {
                content: none !important;
              }
              .ps-timeline-sec .container ol.ps-timeline li span.ps-sp-bot:after {
                content: none !important;
              }
              .ps-timeline-sec .container ol.ps-timeline li .img-handler-top {
                position: absolute !important;
                bottom: 150px !important;
                width: 30% !important;
                float: left !important;
                margin-left: 35px !important;
                margin-bottom: 0 !important;
              }
              .ps-timeline-sec .container ol.ps-timeline li .img-handler-top img {
                margin: 0 auto !important;
                width: 80% !important;
              }
              .ps-timeline-sec .container ol.ps-timeline li .img-handler-bot {
                position: absolute !important;
                bottom: 115px !important;
                width: 30% !important;
                float: left !important;
                margin-left: 35px !important;
                margin-bottom: 0 !important;
              }
              .ps-timeline-sec .container ol.ps-timeline li p {
                text-align: left !important;
                width: 100% !important;
                margin: 0 auto !important;
                margin-top: 0px !important;
              }
              .ps-timeline-sec .container ol.ps-timeline li .ps-top {
                width: 60% !important;
                float: right !important;
                right: 0;
                top: -40px;
              }
              .ps-timeline-sec .container ol.ps-timeline li .ps-bot {
                width: 60% !important;
                float: right !important;
                right: 0;
                top: -40px;
              }
            }
            .ps-timeline-sec .container ol:before {
              background: #e85a0c;
              content: "";
              width: 10px;
              height: 10px;
              border-radius: 100%;
              position: absolute;
              left: 8px;
              top: 49.5%;
            }
            .ps-timeline-sec .container ol:after {
              background: #e85a0c;
              content: "";
              width: 10px;
              height: 10px;
              border-radius: 100%;
              position: absolute;
              right: 8px;
              top: 49.5%;
            }
            .ps-timeline-sec .container ol.ps-timeline {
              margin: 390px 0;
              padding: 0;
              border-top: 2px solid #e85a0c;
              list-style: none;
            }
            .ps-timeline-sec .container ol.ps-timeline li {
              float: left;
              width: 25%;
              padding-top: 30px;
              position: relative;
            }
            .ps-timeline-sec .container ol.ps-timeline li span {
              width: 50px;
              height: 50px;
              margin-left: -25px;
              background: #fff;
              border: 4px solid #e85a0c;
              border-radius: 50%;
              box-shadow: 0 0 0 0px #fff;
              text-align: center;
              line-height: 50px -10;
              color: red;
              font-size: 2em;
              font-style: normal;
              position: absolute;
              top: -26px;
              left: 50%;
            }
            .ps-timeline-sec .container ol.ps-timeline li span.ps-sp-top:before {
              content: '';
              color: #e85a0c;
              width: 2px;
              height: 50px;
              background: #e85a0c;
              position: absolute;
              top: -50px;
              left: 50%;
            }
            .ps-timeline-sec .container ol.ps-timeline li span.ps-sp-top:after {
              content: '';
              color: #e85a0c;
              width: 8px;
              height: 8px;
              background: #e85a0c;
              position: absolute;
              bottom: 90px;
              left: 44%;
              border-radius: 100%;
            }
            .ps-timeline-sec .container ol.ps-timeline li span.ps-sp-bot:before {
              content: '';
              color: #e85a0c;
              width: 2px;
              height: 50px;
              background: #e85a0c;
              position: absolute;
              bottom: -50px;
              left: 50%;
            }
            .ps-timeline-sec .container ol.ps-timeline li span.ps-sp-bot:after {
              content: '';
              color: #e85a0c;
              width: 8px;
              height: 8px;
              background: #e85a0c;
              position: absolute;
              top: 90px;
              left: 44%;
              border-radius: 100%;
            }
            .ps-timeline-sec .container ol.ps-timeline li .img-handler-top {
              position: absolute;
              bottom: 0;
              margin-bottom: 130px;
              width: 100%;
            }
            .ps-timeline-sec .container ol.ps-timeline li .img-handler-top img {
              display: table;
              margin: 0 auto;
            }
            .ps-timeline-sec .container ol.ps-timeline li .img-handler-bot {
              position: absolute;
              margin-top: 60px;
              width: 100%;
            }
            .ps-timeline-sec .container ol.ps-timeline li .img-handler-bot img {
              display: table;
              margin: 0 auto;
            }
            .ps-timeline-sec .container ol.ps-timeline li p {
              text-align: center;
              width: 80%;
              margin: 0 auto;
            }
            .ps-timeline-sec .container ol.ps-timeline li .ps-top {
              position: absolute;
              bottom: 0;
              margin-bottom: 100px;
            }
            .ps-timeline-sec .container ol.ps-timeline li .ps-bot {
              position: absolute;
              margin-top: 35px;
            }.ps-timeline-sec {
            position: relative;
 
      }
      .ps-timeline-sec .container {
        position: relative;
      }
      @media screen and (max-width: 767px) {
        .ps-timeline-sec .container ol:before {
          background: #e85a0c;
          content: "";
          width: 10px;
          height: 10px;
          border-radius: 100%;
          position: absolute;
          top: 130px !important;
          left: 36px !important;
        }
        .ps-timeline-sec .container ol:after {
          background: #e85a0c;
          content: "";
          width: 10px;
          height: 10px;
          border-radius: 100%;
          position: absolute;
          top: inherit !important;
          left: 36px;
        }
        .ps-timeline-sec .container ol.ps-timeline {
          margin: 130px 0 !important;
          border-left: 2px solid #e85a0c;
          padding-left: 0 !important;
          padding-top: 120px !important;
          border-top: 0 !important;
          margin-left: 25px !important;
        }
        .ps-timeline-sec .container ol.ps-timeline li {
          height: 220px;
          float: none !important;
          width: inherit !important;
        }
        .ps-timeline-sec .container ol.ps-timeline li:nth-child(2) .img-handler-bot img {
          width: 70px;
        }
        .ps-timeline-sec .container ol.ps-timeline li:last-child {
          margin: 0;
          bottom: 0 !important;
          height: 120px;
        }
        .ps-timeline-sec .container ol.ps-timeline li:last-child .img-handler-bot {
          bottom: 40px !important;
          width: 40% !important;
          margin-left: 25px !important;
          margin-top: 0 !important;
        }
        .ps-timeline-sec .container ol.ps-timeline li:last-child .img-handler-bot img {
          width: 100%;
        }
        .ps-timeline-sec .container ol.ps-timeline li:last-child .ps-top {
          margin-bottom: 0 !important;
          top: 20px;
          width: 50% !important;
        }
        .ps-timeline-sec .container ol.ps-timeline li span {
          left: 0 !important;
        }
        .ps-timeline-sec .container ol.ps-timeline li span.ps-sp-top:before {
          content: none !important;
        }
        .ps-timeline-sec .container ol.ps-timeline li span.ps-sp-top:after {
          content: none !important;
        }
        .ps-timeline-sec .container ol.ps-timeline li span.ps-sp-bot:before {
          content: none !important;
        }
        .ps-timeline-sec .container ol.ps-timeline li span.ps-sp-bot:after {
          content: none !important;
        }
        .ps-timeline-sec .container ol.ps-timeline li .img-handler-top {
          position: absolute !important;
          bottom: 150px !important;
          width: 30% !important;
          float: left !important;
          margin-left: 35px !important;
          margin-bottom: 0 !important;
        }
        .ps-timeline-sec .container ol.ps-timeline li .img-handler-top img {
          margin: 0 auto !important;
          width: 80% !important;
        }
        .ps-timeline-sec .container ol.ps-timeline li .img-handler-bot {
          position: absolute !important;
          bottom: 115px !important;
          width: 30% !important;
          float: left !important;
          margin-left: 35px !important;
          margin-bottom: 0 !important;
        }
        .ps-timeline-sec .container ol.ps-timeline li p {
          text-align: left !important;
          width: 100% !important;
          margin: 0 auto !important;
          margin-top: 0px !important;
        }
        .ps-timeline-sec .container ol.ps-timeline li .ps-top {
          width: 60% !important;
          float: right !important;
          right: 0;
          top: -40px;
        }
        .ps-timeline-sec .container ol.ps-timeline li .ps-bot {
          width: 60% !important;
          float: right !important;
          right: 0;
          top: -40px;
        }
      }
      .ps-timeline-sec .container ol:before {
        background: #fff;
        content: "";
        width: 10px;
        height: 10px;
        border-radius: 100%;
        position: absolute;
        left: 20px;
        top: -5px;
      }
      .ps-timeline-sec .container ol:after {
        background: #fff;
        content: "";
        width: 10px;
        height: 10px;
        border-radius: 100%;
        position: absolute;
        right: 20px;
        top: -5px;
      }
      .ps-timeline-sec .container ol.ps-timeline {
        margin: 390px 0;
        padding: 0;
        border-top: 2px solid #fff;
        list-style: none;
      }
      .ps-timeline-sec .container ol.ps-timeline li {
        float: left;
        width: 25%;
        padding-top: 30px;
        position: relative;
      }
      .ps-timeline-sec .container ol.ps-timeline li span {
        width: 50px;
        height: 50px;
        margin-left: -25px;
        background: #e85a0c;
        border: 4px solid #fff;
        border-radius: 50%;
        box-shadow: 0 0 0 0px #fff;
        text-align: center;
        line-height: 50px -10;
        color: #fff;
        font-family: 'Teko';
        font-size: 2.3em;
        font-style: normal;
        position: absolute;
        top: -28px;
        left: 50%;
      }
      .ps-timeline-sec .container ol.ps-timeline li span.ps-sp-top:before {
        content: '';
        color: #fff;
        width: 2px;
        height: 50px;
        background: #fff;
        position: absolute;
        top: -50px;
        left: 50%;
      }
      .ps-timeline-sec .container ol.ps-timeline li span.ps-sp-top:after {
        content: '';
        color: #fff;
        width: 8px;
        height: 8px;
        background: #fff;
        position: absolute;
        bottom: 90px;
        left: 44%;
        border-radius: 100%;
      }
      .ps-timeline-sec .container ol.ps-timeline li span.ps-sp-bot:before {
        content: '';
        color: #fff;
        width: 2px;
        height: 50px;
        background: #fff;
        position: absolute;
        bottom: -50px;
        left: 50%;
      }
      .ps-timeline-sec .container ol.ps-timeline li span.ps-sp-bot:after {
        content: '';
        color: #fff;
        width: 8px;
        height: 8px;
        background: #fff;
        position: absolute;
        top: 90px;
        left: 44%;
        border-radius: 100%;
      }
      .ps-timeline-sec .container ol.ps-timeline li .img-handler-top {
        position: absolute;
        bottom: 0;
        margin-bottom: 130px;
        width: 100%;
      }
      .ps-timeline-sec .container ol.ps-timeline li .img-handler-top img {
        display: table;
        margin: 0 auto;
      }
      .ps-timeline-sec .container ol.ps-timeline li .img-handler-bot {
        position: absolute;
        margin-top: 60px;
        width: 100%;
      }
      .ps-timeline-sec .container ol.ps-timeline li .img-handler-bot img {
        display: table;
        margin: 0 auto;
      }
      .ps-timeline-sec .container ol.ps-timeline li p {
        text-align: center;
        width: 80%;
        margin: 0 auto;
      }
      .ps-timeline-sec .container ol.ps-timeline li .ps-top {
        position: absolute;
        bottom: 0;
        margin-bottom: 100px;
      }
      .ps-timeline-sec .container ol.ps-timeline li .ps-bot {
        position: absolute;
        margin-top: 35px;
      }           
        `

        return(
            <Section id="CONTRATAR">
                <ServiceContainer>
                        
                        <AnimatedHeading text="Como contratar?" />
                        <Row>
                        <section class="ps-timeline-sec">
                          <div class="container">
                            <ol class="ps-timeline">
                              <li>
                                <div class="img-handler-top">
                                  <img className='imcIcon' src={this.props.mobile.childImageSharp.fluid.src} alt=""/>
                                </div>
                                <div class="ps-bot">
                                  <h2>Responda nosso formulário.</h2>
                                </div>
                                <span class="ps-sp-top">
                                <h1 className='centro'>01</h1>  
                                </span>
                              </li>
                              <li>
                                <div class="img-handler-bot">
                                  <img className='imcIcon' src={this.props.web.childImageSharp.fluid.src} alt=""/>
                                </div>
                                <div class="ps-top">
                                  <h2>Receba as opções de planos de saúde.</h2>
                                </div>
                                <span class="ps-sp-bot">
                                  <h1 className='centro'>02</h1>  
                                </span>
                              </li>
                              <li>
                                <div class="img-handler-top">
                                  <img className='imcIcon' src={this.props.email.childImageSharp.fluid.src} alt=""/>
                                </div>
                                <div class="ps-bot">
                                    <h2>Escolha o que mais se adequa a sua necessidade.</h2>
                                </div>
                                <span class="ps-sp-top">
                                  <h1 className='centro'>03</h1>  
                                </span>
                              </li>
                              <li>
                                <div class="img-handler-bot">
                                    <img className='imcIcon' src={this.props.seo.childImageSharp.fluid.src} alt=""/>
                                </div>
                                <div class="ps-top">
                                    <h2>Assine o contrato e tenha mais bem-estar.</h2>
                                </div>
                                <span class="ps-sp-bot centro">
                                  <h1 className='centro'>04</h1>  
                                </span>
                              </li>
                            </ol>
                          </div>
                        </section>  
                      </Row>
                    
                    <ContactCreative/>
                </ServiceContainer>
            </Section>
        )
    }

}

export default props => (
    <StaticQuery
      query={graphql`
      query {
        background: file(relativePath: {eq: "bg2.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 4000, quality: 100) {
              src
            }
          }
        }
        web: file(relativePath: {eq: "icons/web.png"}) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
        mobile: file(relativePath: {eq: "icons/mobile.png"}) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
        seo: file(relativePath: {eq: "icons/seo2.png"}) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
        email: file(relativePath: {eq: "icons/email.png"}) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
        ui: file(relativePath: {eq: "icons/sketch.png"}) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
        network: file(relativePath: {eq: "icons/network.png"}) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
      }      
      `}
      render={({ 
        background,
        web,
        mobile,
        seo,
        email,
        ui,
        network}) => <ServicesOne  
        background={background}
        web={web}
        mobile={mobile}
        seo={seo}
        email={email}
        ui={ui}
        network={network}
        {...props} />}
    />
  )