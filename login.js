class Register
{
    //logo="img[src='https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/images/logo.svg'"
   // name=".base"
    
   loginicon="a[href='/login']"
   loginform="div[class='login-form'] h2"
   email="input[data-qa='login-email']"
   password="input[placeholder='Password']"
   loginbtn="button[data-qa='login-button']"
   loginverification="ul[class='nav navbar-nav'] li a b"



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

    
   

   

}

export default Register;




   

   

   

  


    
