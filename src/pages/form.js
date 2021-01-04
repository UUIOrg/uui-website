import React from 'react'
import SEO from '../components/seo'
import styled from 'styled-components'
import Button from '../components/ui/Button.component'

const Form = () => {
    const [clicked,setClicked] = React.useState(false);
    const options = [
        "E-commerce websites",
        "Html/css coding",
        "Blogs",
        "Android apps",
        "SPAs",
        "Web design",
        "App design",
        "Logo design"
    ]
    return (
        <>
            <SEO title="form" />
            <ContactFormWrapper>
                <Content>
                    <h1>Hey There!</h1>
                    <h2>Feel free to tell us what exactly you want</h2>
                    <div>
                        <h3>Not sure where to start from ?</h3>
                        <p>You can tell us about your startup, your company, your business or your product.</p>
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
                                clicked={clicked}
                                key={option}>
                                    {option}
                                </Button>
                            })
                        }
                    </OptionSection>
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
`

const OptionSection = styled.div`

`

const Content = styled.div`
transform: translateY(-5rem);
max-width: 700px;
h1{
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
}
h3{
    font-weight : 500;
    font-size: 1.2rem;
    margin-bottom:0.8rem;
}
p{
    max-width: 500px;
    margin: 0;
}
`
const FormComp = styled.div`
margin-left : 3rem;
width: 600px;
h3{
    color : var(--text2);
    font-size : 1.5rem;
    
}
`