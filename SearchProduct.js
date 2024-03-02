class SearchProduct
{
    productsicon="a[href='/products']"
    verification="div[class='brands_products'] h2"
    searchbox="#search_product"
    pressbtn=".fa.fa-search"
    sproduct="div[class='overlay-content'] p"


    clickproductsicon()
    {
        cy.get(this.productsicon).click()
    }

    getverification()
    {
        cy.get(this.verification).should("be.visible")
    }

    enterproductname(product)
    {
        cy.get(this.searchbox).type(product)
    }

    clickbtn()
    {
        cy.get(this.pressbtn).click()
    }

    verifysearchedproduct()
    {
        cy.get(this.sproduct).should("have.text","Blue Top")
    }

}

export default SearchProduct;