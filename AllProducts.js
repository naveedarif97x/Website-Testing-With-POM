class AllProducts
{

    productsicon="a[href='/products']"
    verification="div[class='brands_products'] h2"
    firstproduct="a[href='/product_details/1']"
    details="div[class='product-information'] h2"

    clickproductsicon()
    {
        cy.get(this.productsicon).click()
    }

    getverification()
    {
        cy.get(this.verification).should("be.visible")
    }

    clickfirstproduct()
    {
        cy.get(this.firstproduct).click()
    }

    getdetails()
    {
        cy.get(this.details).should("have.text","Blue Top")
    }
}
export default AllProducts;