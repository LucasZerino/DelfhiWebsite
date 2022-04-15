import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import AnimationContainer from '../../components/animation-container'
import ContactCreativeForm from './parts/ContactCreativeForm.js'

class ContactCreative extends React.Component {


    render() {

        const Section = styled.section`
            position: relative;
            overflow: hidden;
            background-color: transparent;
            padding: 100px 0;
        `

        const FormRow = styled(Row)`
           background-color: rgba(255,255,255,.2);
        `

        const ContactCol = styled(Col)`
            min-height: 600px;
            max-height: 600px;
            padding: 0;
            display: flex;
            align-items: center;
        `

        const Map = styled.iframe`
            border: none;
            height: 100%;
            width: 100%;
        `

        

        return(
            <Section id="SIMULAR">
                <Container>
                  <AnimationContainer animation="fadeIn">
                    <FormRow>
                      <ContactCol md={6}>
                          <ContactCreativeForm />
                      </ContactCol>
                      <ContactCol md={6}>
                        <Map  
                          title="map"
                          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=R.%20Princesa%20Isabel,%20461%20-%20Cidade%20Alta,%20Natal%20-%20RN,%2059025-400+(Delfhi%20Corretora)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"/>
                    </ContactCol>
                    </FormRow>
                  </AnimationContainer>
                </Container>
            </Section>
        )
    }

}

export default props => (
  <StaticQuery
    query={graphql`
    query {
      emailIcon: file(relativePath: {eq: "icons/email2.png"}) {
        childImageSharp {
          fluid(maxWidth: 500) {
            src
          }
        }
      }
      mapIcon: file(relativePath: {eq: "icons/map.png"}) {
        childImageSharp {
          fluid(maxWidth: 500) {
            src
          }
        }
      }
      phoneIcon: file(relativePath: {eq: "icons/phone.png"}) {
        childImageSharp {
          fluid(maxWidth: 500) {
            src
          }
        }
      }
    }
    `}
    render={({ 
      emailIcon, 
      mapIcon, 
      phoneIcon}) => <ContactCreative  
      emailIcon={emailIcon} 
      mapIcon={mapIcon} 
      phoneIcon={phoneIcon}
      {...props} />}
  />
)