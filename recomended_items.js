class RecomendedItems
{
    ritems="div[class='recommended_items'] h2[class='title text-center']"
    add="body > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(36) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(4)"
    viewc="body > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > p:nth-child(2) > a:nth-child(1) > u:nth-child(1)"
    product="a[href='/product_details/4']"

    verificationritems()
    {
        cy.get(this.ritems).scrollIntoView().should("be.visible")
    }

    addtocart()
    {
        cy.get(this.add).should('exist').click()
    }

    viewcart()
    {
        cy.get(this.viewc).click()
    }

    checkproduct()
    {
        cy.get(this.product).should("have.text","Stylish Dress")
    }

}

export default RecomendedItems;