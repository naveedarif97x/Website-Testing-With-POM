class AddProducts
{
    productsbtn="a[href='/products']"
    firstp="body > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)"
    continue=".btn.btn-success.close-modal.btn-block"
    second="body > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > a:nth-child(3"
    viewcart="body > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > p:nth-child(2) > a:nth-child(1) > u:nth-child(1)"
    detail1="a[href='/product_details/1']"
    detail2="a[href='/product_details/2']"



    clickproducts()
    {
        cy.get(this.productsbtn).click()
    }

    hoverfirst()
    {
        cy.get(this.firstp).click({force:true})
    }

    continueshopping()
    {
        cy.get(this.continue).click()
    }

    addsecondproduct()
    {
        cy.get(this.second).click({force:true})
    }

    clickviewcartbtn()
    {
        cy.get(this.viewcart).click()
    }

    verification1()
    {
        cy.get(this.detail1).should("have.text","Blue Top")
    }

    verification2()
    {
        cy.get(this.detail2).should("have.text","Men Tshirt")
    }

}

export default AddProducts;