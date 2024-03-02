class Review
{
    products="a[href='/products']"
    verification=".title.text-center"
    viewpro="a[href='/product_details/1']"
    viewform="a[href='#reviews']"
    name="#name"
    email="#email"
    review="#review"
    submit="#button-review"
    

    clickproductsbtn()
    {
        cy.get(this.products).click()
    }

    getverification()
    {
        cy.get(this.verification).should("be.visible")
    }

    viewproduct()
    {
        cy.get(this.viewpro).click()
    }

    viewformvisibility()
    {
        cy.get(this.viewform).should("be.visible")
    }

    entername(name)
    {
        cy.get(this.name).type(name)
    }

    enteremail(email)
    {
        cy.get(this.email).type(email)
    }

    addreview(review)
    {
        cy.get(this.review).type(review)
    }

    submitreview()
    {
        cy.get(this.submit).click()
    }

}
export default Review;