import React, { useEffect, useRef } from 'react'
import SEO from '../components/seo'
import styled from 'styled-components'
import Button from '../components/ui/Button.component'
import Input from '../components/ui/Input.component'
import { TweenMax,TimelineLite } from 'gsap'

const Form = () => {
    const [clicked,setClicked] = React.useState(false);
    const [form,setForm] = React.useState({
        name : {
            inputType: 'input',
            InputConfig : {
                labelText : 'Your name',
                type : "text"
            },
            value: ''
        },
        email : {
            inputType : 'input',
            InputConfig : {
                labelText : 'Your email',
                type : "text"
            },
            value: ''
        },
        tellus : {
            inputType : 'textarea',
            InputConfig : {
                labelText : 'Tell us about your project',
            },
            value: ''
        }
    })

    let heroRef = useRef(null);

    let contentRef = useRef(null);

    let tl = new TimelineLite();
    
    const RemoveWrapper = wrapper => {

    
    } 

    const spanCreater = text => text.split(' ').map(each => <span>{each}&nbsp;</span>)

    useEffect(() => {

        const h1Content = contentRef.children[0].firstElementChild;

        console.log(h1Content);

        TweenMax.to(heroRef,0,{ css : { visibility : 'visible' } });
        ///tl.from()
        /*tl.from(h1Content.firstElementChild,1,{
            opacity:0,
            y:72,
            ease: "power4.inOut",
            delay: 0.2
        })*/


    },[])

    const options = [
        "E-commerce websites",
        "Html/css coding",
        "Blogs",
        "Android apps",
        "SPAs",
        "Web design",
        "App design",
        "Logo design",
        "Poster Design"
    ]

    let formData = [];

    for(let i in form){
        formData.push({data : form[i],i})
    }

    return (
        <>
            <SEO title="form" />
            <ContactFormWrapper ref={ele => heroRef = ele}>
                <Content ref={el => contentRef = el}>
                    <div className="wrapper"><h1>Hey There!</h1></div>
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
                                options
                                onClick={_ => setClicked(!clicked)}
                                border="1px solid rgba(0, 0, 0, 0.1)"
                                color="var(--textbase)"
                                margin={"0 1rem 1rem 0"}
                                clicked={clicked}
                                key={option}>
                                    {option}
                                </Button>
                            })
                        }
                    </OptionSection>
                    <form>
                       {
                           formData.map(({data,i}) => {
                               return <Input
                               key={i}
                               {...data}
                               />
                           } )
                       }
                    </form>
                </FormComp>
            </ContactFormWrapper>
        </>
    )
}

export default Form 


const ContactFormWrapper = styled.section`
display:inline-flex;
height : calc(100vh - 44px);
width: 100%;
justify-content:center;
align-items:center; 
visibility: hidden;
`

const OptionSection = styled.div`

`

const Content = styled.div`
transform: translateY(-5rem);
.wrapper{
    overflow: hidden;
    height:100px;
    margin-bottom: 2rem;
}
h1{
    font-weight: 600;
    letter-spacing:-1px;
    height:100px;
    span{
        font-size : 4rem;
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
    height:50%;
}
h3{
    font-weight : 500;
    font-size: 1.2rem;
    margin-bottom:0.8rem;
}
p{
    margin: 0;
}
`
const FormComp = styled.div`
margin-left : 5rem;
width: 600px;
h3{
    color : var(--text2);
    font-size : 1.5rem;
}
form{

}
`