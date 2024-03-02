class Logout
{

   loginicon="a[href='/login']"
   loginform="div[class='login-form'] h2"
   email="input[data-qa='login-email']"
   password="input[placeholder='Password']"
   loginbtn="button[data-qa='login-button']"
   loginverification="ul[class='nav navbar-nav'] li a b"
   logoutbtn="a[href='/logout']"



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

   checkaccountlogin()
   {
    cy.get(this.loginverification).should("have.text","Naveed")
   }

   clicklogoutbtn()
   {
    cy.get(this.logoutbtn).click()
   }

   checkloginformvisibility()
   {
    cy.get(this.loginform).should("have.text","Login to your account")
   }



}

export default Logout;