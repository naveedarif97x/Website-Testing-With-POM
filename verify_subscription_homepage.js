class Homepage
{
    verification="div[class='single-widget'] h2"
    email="#susbscribe_email"
    click=".fa.fa-arrow-circle-o-right"


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
export default Homepage;