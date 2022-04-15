import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect'
import ContactCreative2 from '../contact/ContactCreative2'


class Hero extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            height: 0,
            width: 0
        }
    }

    updateDimensions = () => {
        if (this.state.height !== window.innerHeight) {
            this.setState({height: window.innerHeight})
        }
        if (this.state.width !== window.innerWidth) {
            this.setState({width: window.innerWidth})
        }
    }

    
    componentDidMount() {
        this.setState({height: window.innerHeight, width: window.innerWidth})
        window.addEventListener('resize', this.updateDimensions)
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions)
    }

    render() {

        const Section = styled.section`
        
            position: relative;
            .particles {
                position: absolute;
                width: 100%;
                height: 100%;
            }
            background-image: url(${this.props.background.childImageSharp.fluid.src});
            background-size: cover;
            background-repeat: no-repeat;
        `

        const Overlay = styled.div`
            width: 100%;
            display: flex;
            align-items: center;
            background-color: rgba(232,89,12,.2);
        `

        const Heading1 = styled.h1`
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Teko:wght@300&display=swap');
            font-size: 80px;
            font-family: Teko;
            line-height: 70px;
            color: #fff;
            font-weight: 400;
            text-transform: uppercase;
            @media (max-width:1600px) { 
                font-size: 50px;
            }
            @media (min-width:768px) {
                
            }
            @media (max-width:767px) {
               
            }
            @media (min-width:768px) and (max-width:1500px) {
                font-size: 40px;
            }
            @media (max-width:767px) {
                font-size: 20px;
                line-height: 20px;
            }
        `

        const Heading2 = styled.h2`
            font-size: 40px;
            color: #fff;
            font-weight: 700;
            text-transform: uppercase;
            background: #e8590c;
           -webkit-background-clip: text;
           -webkit-text-fill-color: transparent;
            @media (max-width:1600px) { 
                font-size: 30px;
            }
            @media (max-width:1500px) {
                font-size: 30px;
            }
            @media (max-width:600px) {
                font-size: 20px;
            }
        `

        const Type = styled.div`
            font-size: 50px;
            line-height: 50px;
            color: #fff;
            text-transform: uppercase;
            @media (max-width:1600px) { 
                font-size: 40px;
            }
            @media (max-width:767px) {
                margin-left: 2px;
            }
            @media (min-width:768px) and (max-width:1500px) {
        
            }
            @media (max-width:600px) {
                font-size: 20px;
            }
            span {
                font-family: Teko;
            }
        `
        const Content = styled.div`
            width: 100vw;
            height: 100vh;
            position: relative;
            z-index: 10
            text-align: center;
            display: flex;
            flex-direction: column;
            text-align: center;
            .sep{
                display: flex;
                flex-direction: row;
                justify-self: center;
                height: 100%;
                width: 100%;
                align-items: center;
                justify-content: center;
            }
            .sep1
                flex: 8;
                margin-left: 5vw;
            }
            .texto{
                display: flex;
                flex-direction: column;
            }
            .sep2{
                display: flex;
                justify-content: center;
                flex: 1;
                height: 100%;
            }
            .center{
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
            }
            @media (max-width:1600px) {
                .sep1
                flex: 8;
                margin-left: 2vw;
                }
                .texto{
                display: flex;
                flex-direction: column;
                }
            }
            @media (max-width:1100px) {
                .sep{
                    margin-top: 200px;
                    align-self: center;
                    justify-self: center;
                    flex-direction:column;
                }
                .sep2{
                    position: relative;
                }
            }
            @media (max-width:600px) {
                .sep{
                    width: 100%;
                }
                .sep1{
                    top: -50px;
                    align-self: center;
                    justify-self: center;
                    flex-direction:column;
                }
                .sep2{
                    display: none;
                }
                font-size: 20px;
            }
        `

        const Separator = styled.div`
            position: relative;
            display: flex;
            justify-self: center;
            align-self: center;
            height: 5px;
            width: 800px;
            background-color: #e8590c;
            margin-bottom: 30px;
            align-self: center;
            @media (max-width:1300px) { 
                width: 400px;
            }
            @media (min-width:768px) {
              
            }
            @media (max-width:767px) {
              
            }
        `

        return (
                <Section id="HOME">
                    <Overlay style={{height: `${this.state.width > 500 ? this.state.height : 350}px`}}>
                        
                            <Content>
                                <div className='sep'>
                                    <div className='sep1'>
                                        <div className='ceter'>
                                            <div className='texto'>
                                            <Heading1>
                                            Escolha o plano de Saúde certo para você!
                                        </Heading1>
                                        <Heading2>
                                            Simule e compare seu plano de saúde
                                        </Heading2>
                                        <Separator/>
                                        <Type>
                                            <Typewriter
                                                options={{
                                                strings: [
                                                    'Unimed',
                                                    'Amil',
                                                    'Hapvida',
                                                    'Humana Saúde',
                                                    'Bradesco Saúde',
                                                    'SulAmérica Saúde',
                                                    'Delfhi Odonto',
                                                ],
                                                autoStart: true,
                                                loop: true,
                                                }}
                                            />
                                        </Type>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='sep2'>
                                        <div className='center'>
                                        <ContactCreative2/>
                                        </div>
                                    </div>
                                </div>
                                
                                
                            </Content>
                  
                    </Overlay>
                </Section>
        )
    }
}
export default props => (
    <StaticQuery
      query={graphql`
      query {
        background: file(relativePath: {eq: "background-poly.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
              src
            }
          }
        }
        webexpertIcon: file(relativePath: {eq: "icons/web.png"}) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
        mobileIcon: file(relativePath: {eq: "icons/mobile.png"}) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
        seoIcon: file(relativePath: {eq: "icons/seo.png"}) {
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
        webexpertIcon, 
        mobileIcon, 
        seoIcon}) => <Hero  
        background={background} 
        webexpertIcon={webexpertIcon} 
        mobileIcon={mobileIcon} 
        seoIcon={seoIcon}
        {...props} />}
    />
  )