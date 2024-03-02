class Reregister
{

    loginicon="a[href='/login']"
    signupform="div[class='signup-form'] h2"
    name="input[placeholder='Name']"
    email="input[data-qa='signup-email']"
    signup="button[data-qa='signup-button']"
    errormessage="body > section:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > form:nth-child(2) > p:nth-child(5)"



    clickloginbutton()
    {
     cy.get(this.loginicon).click()
    }

    signupformvisibility()
    {
        cy.get(this.signupform).should("have.text","New User Signup!")
    }

    entername(name)
    {
        cy.get(this.name).type(name)
    }

    enteremail(email)
    {
        cy.get(this.email).type(email)
    }

    clicksignup()
    {
        cy.get(this.signup).click()
    }

    showerror()
    {
        cy.get(this.errormessage).should("have.text","Email Address already exist!")
    }

}

export default Reregister;