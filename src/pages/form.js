import React, { useEffect, useRef, useState } from 'react'
import SEO from '../components/seo'
import styled from 'styled-components'
import Button from '../components/ui/Button.component'
import Input from '../components/ui/Input.component'
import { gsap } from 'gsap'
import { ArrowRight } from '../components/utils/icons'
import { budgetValue, requirments } from '../components/utils/options'
import axios from 'axios'

const Form = () => {
  const [clicked, setClicked] = React.useState(false)
  const [form, setForm] = React.useState({
    name: {
      inputType: "input",
      InputConfig: {
        placeholder: "Your name",
        type: "text",
      },
      Validation: {
        isTouched: false,
        isFilled: false,
        rules: {},
      },
      value: "",
    },
    email: {
      inputType: "input",
      InputConfig: {
        placeholder: "Your email",
        type: "text",
      },
      Validation: {
        isTouched: false,
        isFilled: false,
        rules: {
          shouldHave: "@",
        },
      },
      value: "",
    },
    tellus: {
      inputType: "textarea",
      InputConfig: {
        placeholder: "Tell us about your project",
      },
      Validation: {
        isTouched: false,
        isFilled: false,
        rules: {
          maxlength: 300,
        },
      },
      value: "",
    },
  })

  const [countDown, setCountDown] = useState(false)

  const [options, setOPtions] = React.useState(requirments)

  const [budgets, setBudget] = React.useState(budgetValue)

  let heroRef = useRef(null)
  let contentRef = useRef(null)
  let h2Ref = useRef(null)

  let formData = []

  for (let i in form) {
    formData.push({ data: form[i], i })
  }

  const onChangeHandler = (eve, id) => {
    const { value } = eve.target
    const updatedForm = { ...form }
    const updatedFormEle = { ...updatedForm[id] }
    updatedFormEle.value = value
    updatedForm[id] = updatedFormEle
    setForm(updatedForm)
  }

  const SubmitHandler = eve => {
    eve.preventDefault()
    localStorage.setItem("client_send", true)
    setCountDown(true)
  }

  useEffect(() => {
    const api = async () => {
        try {
            const { data } = await axios.post("http://localhost:5000/response", {
              email: "vishwajeetraj11@gmail.com",
              message: "I m back!",
            })
      
            console.log(data)
        } catch(error) {
            console.log(error);
        }
        api();
    }

    useEffect(() => {
        if(countDown){
            setTimeout(() => {
                localStorage.clear();
            },7000)
        }
    },[countDown]);

    useEffect(() => {
        (async() => {
            const data = await axios.post(
                "/email",
                {
                    email : "sssamaa789@gmail.com"
                }
              )
            console.log(data);
        })()
    },[])
 

  useEffect(() => {
    const h1Content = contentRef.children[0]
    const h2Content = h1Content.nextSibling
    const h3Content = h2Content.nextSibling

    console.log(h3Content)

        gsap.set(heroRef,{
            css: {
              visibility : 'visible'
            }
          })
        gsap.timeline()
            .from(h1Content.children[0],{
                y: h1Content.children[0].offsetHeight,
                duration: 1,
                ease: 'power4',
                delay: 0.2
              }
            ).from(h1Content.children[1],{
                opacity: 0,
                duration: 1,
                ease: 'power4',
            },"-=0.4")
            .from(h2Content,{
                y: 30,
                opacity: 0,
                duration:1,
                ease: 'power4',
                stagger:{
                  amount: 1,
                  from: 'start'
                } 
            },"-=1.2")
            .from(h3Content.children[0],{
                y: 30,
                opacity: 0,
                duration:1,
                ease: 'power4',
                stagger:{
                    amount: 1,
                    from: 'start'
                } 
            },"-=1")
            .from(h3Content.children[1],{
                y: 30,
                opacity: 0,
                duration:1.5,
                ease: 'power4',
                stagger:{
                    amount: 1,
                    from: 'start'
                } 
            },"-=0.8")
    },[])

    return (
        <>
            <SEO title="Let's Chat" />
            <ContactFormWrapper ref={ele => heroRef = ele}>
                <Content ref={el => contentRef = el}>
                    <Header>
                        <h1>
                           <span>Hey there!</span>
                        </h1>
                        <Emoji>
                            <img src={require("../images/hands.gif")} alt="wavers"/>
                        </Emoji>
                    </Header>
                    <h2 ref={el => h2Ref = el}><span>Feel free to tell us what</span> <br />  <span>exactly you want.</span></h2>
                    <div>
                        <h3>Not sure where to start from ?</h3>
                        <p>
                            <span>You can tell us about your startup, your company, </span>
                            <br /><span>your business or your product.</span>
                        </p>
                    </div>
                </Content>
                <FormComp>
                    <h3>Choose your requirments...</h3>
                    <OptionSection>
                        {
                            options.map(option => {
                                return <Button
                                border="1px solid rgba(0, 0, 0, 0.1)"
                                color="var(--textbase)"
                                margin={"0 1rem 1rem 0"}
                                key={option}>
                                    {option}
                                </Button>
                            })
                        }
                    </OptionSection>
                    <form onSubmit={SubmitHandler}>
                       {
                           formData.map(({data,i}) => {
                               return <Input
                               key={i}
                               onChange={eve => onChangeHandler(eve,i)}
                               {...data}
                               />
                           } ) 
                       }
                    <ProjectBudget>
                        <h3>Project budget (INR)</h3>
                        <OptionSection>
                            {
                                budgets.map(option => {
                                    return <Button
                                    border="1px solid rgba(0, 0, 0, 0.1)"
                                    color="var(--textbase)"
                                    margin={"0 1rem 1rem 0"}
                                    key={option}>
                                        {option}
                                    </Button>
                                })
                            }
                        </OptionSection>
                    </ProjectBudget>
                    <SubmitButton disabled={false}>
                        <span>Submit</span>
                        <span>
                            <ArrowRight size="3rem"/>
                        </span>
                    </SubmitButton>
                    </form>
                </FormComp>
            </ContactFormWrapper>
        </>
    )
}

export default Form

const ContactFormWrapper = styled.section`
  padding: 5vw 1rem 5vw 1rem;
  visibility: hidden;
  display: inline-flex;
  align-items: baseline;
  justify-items: center;
  margin: 0 auto;
`

const OptionSection = styled.div`
  max-width: 100%;
`

const Content = styled.div`
  h1 {
    font-weight: 600;
    letter-spacing: -1px;
    overflow: hidden;
    margin-bottom: 0;
  }
  h2 {
    font-weight: 500;
    background-color: #f3ec78;
    background-image: linear-gradient(
      120deg,
      var(--lightBlue),
      var(--deepBlue)
    );
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    width: max-content;
    margin-bottom: 3rem;
    overflow: hidden;
    padding: 0;
    height: max-content;
    span {
    }
  }
  h3 {
    font-weight: 500;
    margin-bottom: 1rem;
    font-size: 2rem;
  }
  p {
    margin: 0;
    font-weight: 500;
    text-align: justify;
    text-justify: distribute;
  }
`
const FormComp = styled.div`
margin-left : 5rem;
max-width: 780px;
h3{
    color : var(--text2);
    
}
`
const Header = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  margin-bottom: 3rem;
  overflow: hidden;
  padding: 0;
  height: max-content;
`

const Emoji = styled.div`
  position: relative;
  overflow: hidden;
  width: 8rem;
  height: 8rem;
  top: -0.5rem;
  left: -0.1rem;
  img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
    transform: rotate(-30deg);
  }
`

const ProjectBudget = styled.div`
  margin-top: 2rem;
`

const SubmitButton = styled(Button)`
  padding: 0;
  display: flex;
  align-items: center;
  margin-top: 3rem;
  width: max-content;
  &::before {
    content: "";
    background-color: var(--text2);
    height: 2px;
    width: 3rem;
    margin-right: 10px;
    transition: 0.3s all;
  }
  &:hover::before {
    width: 40px;
  }
  span {
    &:last-child {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 10px;
      background-color: var(--textbase);
      color: #fff;
      padding: 1rem;
      border-radius: 50%;
    }
  }
`
