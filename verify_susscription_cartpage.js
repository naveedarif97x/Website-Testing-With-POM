class Cartpage
{
    cartbtn="body > header:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1"

    verification="div[class='single-widget'] h2"
    email="#susbscribe_email"
    click=".fa.fa-arrow-circle-o-right"

    clickcartbtn()
    {
        cy.get(this.cartbtn).click()
    }

    verifytext()
    {
        cy.get(this.verification).should("have.text","Subscription").scrollIntoView()
    }

    enteremail(email)
    {
        cy.get(this.email).type(email)
    }

    clicksubscription()
    {
        cy.get(this.click).click()
    }
}
export default Cartpage;