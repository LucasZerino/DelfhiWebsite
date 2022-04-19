import React from 'react'
import styled, { keyframes } from 'styled-components'
import emailjs from 'emailjs-com'

class ContactThreeForm extends React.Component {
      constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            phone: "",
            menssagem: "",
            error: false
        }
    }

    formSubmit() {
      if (this.state.name === "" || this.state.email === "" || this.state.message === "") {
          this.setState({error: true})
      } else {
          this.setState({error: false})
      }
      this.forceUpdate()
    }

    
    check(val) {
        if (this.state.error && val === "") {
            return false
        } else {
            return true
        }
    }

    shouldComponentUpdate(nextProps, nextState) { 
      return false;
    }

    render() {

        const Separator = styled.div`
            height: 5px;
            width: 50px;
            background-color: #fff;
            margin-bottom: 20px;
            margin-left: 6px;
        `

        const ContactForm = styled.div`
            top: -50px;
            width: 400px;
            height: 600px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 40px;
            position: relative;
            z-index: 5;
        `

        const Heading = styled.h2`
            width: 350px;
            font-size: 40px;
            font-family: Teko;
            color: #fff;
            text-align: center;
        `

        const InputElement = styled.div`
            width: 300px;
            margin: 20px 0;
            input::placeholder {
              color: #fff;
            }

            .marcadores{
              display: flex;
              width: 300px;
              justify-content: space-around;
              color: white;
              
            }
        `

        const ErrorInputAnimation = keyframes`
            0% {
              border-bottom: 1px solid #111;
            }
            100% {
              border-bottom: 1px solid #ff0000;
            }
        `
        

        const Input = styled.input`
            width: 100%;
            background-color: transparent;
            border: none;
            border-bottom: 1px solid #fff;
            padding: 10px 5px;
            border-radius: 0;
            color: #fff;
            transition: .5s;
            input::placeholder {
              color: #fff;
            }
            &:focus {
              border-bottom: 1px solid #e85a0c;
              outline: none;
            }
            &.error {
              animation: ${ErrorInputAnimation} 1s forwards;
            }

        `
        const Submit = styled.button`
            display: block;
            height: 50px;
            width: 186px;
            position: relative;
            border: none;
            left: 50%;
            transform: translateX(-50%);
            overflow: hidden;
            transition: .5s;
            background-color: #fff;
            &:hover {
              background: #fff;
            }
            input{
            display: block;
            height: 50px;
            width: 186px;
            position: relative;
            border: none;
            overflow: hidden;
            transition: .5s;
            color: #e85a0c;
            font-size: 20px;
            background-color: #fff;
            &:hover {
              background: #fff;
            }
            span {
              position: relative;
              top: 0;
              color: #fff;
              z-index: 10;
              text-transform: uppercase;
              letter-spacing: 2px;
            }
        `



        return(
          <ContactForm>
              <Heading>
                Simule Agora
              </Heading>
              <Separator />
              <form className='form'>
                <InputElement>
                  <Input type='text' name='AdfsCpf' id='AdfsCpf' placeholder="Nome"/>
                </InputElement>
                <InputElement>
                  <Input type="text" name="AdfsSenha" id="AdfsSenha" placeholder="Telefone"/>
                </InputElement>
                <InputElement>
                  <Input type="text" name="AdfsSenha" id="AdfsSenha" placeholder="Cidade"/>
                </InputElement>
                <InputElement>
                <div className="marcadores">
                         <label className="marcar">
                            <input  type="radio" name="Tipo de Plano" value="Pessoa Física" checked/>&nbsp;Pessoa Fisica
                        </label>
                        <label class="marcar">
                            <input type="radio" name="Tipo de Plano" value="Pessoa Jurídica"/>&nbsp;Pessoa Jurídica
                        </label>
                    </div>
                </InputElement>
                <input type="hidden"/>
                <Submit>
                  <input type="submit" value="Quero simular"/>
                </Submit>
              </form>
          </ContactForm>
        )
    }

}

export default ContactThreeForm