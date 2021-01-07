import React, { useEffect, useRef, useState } from 'react'
import SEO from '../components/seo'
import styled from 'styled-components'
import Button from '../components/ui/Button.component'
import Input from '../components/ui/Input.component'
import { TweenMax,TimelineLite } from 'gsap'
import { ArrowRight } from '../components/utils/icons'

const Form = () => {
    const [clicked,setClicked] = React.useState(false);
    const [form,setForm] = React.useState({
        name : {
            inputType: 'input',
            InputConfig : {
                placeholder:"Your name",
                type : "text"
            },
            Validation : {
                isTouched : false,
            },
            value: ''
        },
        email : {
            inputType : 'input',
            InputConfig : {
                placeholder:"Your email",
                type : "text"
            },
            Validation : {
                isTouched : false,
            },
            value: ''
        },
        tellus : {
            inputType : 'textarea',
            InputConfig : {
               placeholder:"Tell us about your project",
            },
            Validation : {
                isTouched : false,
            },
            value: ''
        }
    });

    const [countDown,setCountDown] = useState(false);

    const [options,setOPtions] = React.useState([
        "E-commerce websites",
        "Html/css coding",
        "Blogs",
        "Android apps",
        "SPAs",
        "Web design",
        "App design",
        "Logo design",
        "Poster Design"
    ])

    const [ budgets,setBudget ] = React.useState([
        "< 10k",
        "10-20k",
        "20-30k",
        "40-50k",
        "> 50k"
    ])

    let formData = [];

    for(let i in form){
        formData.push({data : form[i],i})
    }


    const onChangeHandler = (eve,id) => {
        const { value } = eve.target;
        const updatedForm = { ...form };
        const updatedFormEle = {...updatedForm[id]};
        updatedFormEle.value = value;
        updatedForm[id] = updatedFormEle;
        setForm(updatedForm);
    }

    const SubmitHandler = eve => {
        eve.preventDefault();
        localStorage.setItem("client_send", true);
        setCountDown(true);
    }

    useEffect(() => {
       localStorage.clear();
    },[countDown])

    let heroRef = useRef(null);

    let contentRef = useRef(null);

    let tl = new TimelineLite();

    useEffect(() => {

        const h1Content = contentRef.children[0];

        console.log([...h1Content.children]); 

        TweenMax.to(heroRef,0,{ css : { visibility : 'visible' } });
       /* tl.from(h1Content,1,{
            opacity:0,
            y:72,
            ease: "power4.inOut",
            delay: 0.2
        }) */


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
                    <h2><span>Feel free to tell us what</span> <br />  <span>exactly you want</span></h2>
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
                    <SubmitButton>
                        <span>Submit</span>
                        <span>
                            <ArrowRight size="1.8rem"/>
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
padding: 5vw 0 5vw 0;
visibility: hidden;
display:inline-flex;
align-items:baseline; 
justify-items : center;
margin: 0 auto;
`

const OptionSection = styled.div`

`

const Content = styled.div`
h1{
    font-weight: 600;
    letter-spacing:-1px;
    height:100px;
    overflow:hidden;
    span{
        font-size : 5.2rem;
        height:72px;
        overflow: hidden;
    }
}
h2{
    font-weight : 500;
    background-color: #f3ec78;
    background-image: linear-gradient(120deg, var(--lightBlue), var(--deepBlue));
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
    text-overflow: -o-ellipsis-lastline;
    font-size:3.5rem;
    width: max-content;
    margin-bottom: 2rem;
}
h3{
    font-weight : 500;
    font-size: 1.2rem;
    margin-bottom:0.8rem;
}
p{
    margin: 0;
    font-weight:500;
}
`
const FormComp = styled.div`
margin-left : 5rem;
max-width: 780px;
h3{
    color : var(--text2);
    font-size : 1.5rem;
}
`
const Header = styled.div`
display:flex;
align-items: center;
margin-bottom: 1rem;
` 

const Emoji = styled.div`
position: relative;
overflow: hidden;
width:5.5rem;
height:5.5rem;
top: -1rem;
left: -0.1rem;
img{
    position: absolute;
    top: 0;
    bottom: 0;
    left:0;
    right: 0;
    object-fit:cover;
    width: 100%;
    height: 100%;
    transform:rotate(-30deg);
}
`

const ProjectBudget = styled.div`
margin-top: 2rem;
`


const SubmitButton = styled(Button)`
padding:0;
display:flex;
align-items: center;
margin-top: 3rem;
width:max-content;

&::before{
    content : '';
    background-color : var(--text2);
    height: 2px;
    width: 30px; 
    margin-right : 10px; 
    transition: 0.3s all;
}
&:hover::before{
    width: 40px; 
}
span{
    &:last-child{
        display: flex;
        justify-content: center;
        align-items:center;
        margin-left : 10px;
        background-color:var(--textbase);
        color : #fff;
        padding: 0.5rem;
        border-radius: 50%;

    }
}
`