class InvalidLogin
{
   loginicon="a[href='/login']"
   loginform="div[class='login-form'] h2"
   email="input[data-qa='login-email']"
   password="input[placeholder='Password']"
   loginbtn="button[data-qa='login-button']"
   error="body > section:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(2) > p:nth-child(4)"



   clickloginbutton()
   {
    cy.get(this.loginicon).click()
   }

   checkloginformvisibility()
   {
    cy.get(this.loginform).should("have.text","Login to your account")
   }

   provideemail(email)
   {
    cy.get(this.email).type(email)
   }

   providepassword(password)
   {
    cy.get(this.password).type(password)
   }

   pressloginbtn()
   {
    cy.get(this.loginbtn).click()
   }

   errorverification()
   {
    cy.get(this.error).should("have.text","Your email or password is incorrect!")
   }


}
export default InvalidLogin;