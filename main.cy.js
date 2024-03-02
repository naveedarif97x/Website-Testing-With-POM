/// <reference types="Cypress"/>

import Register from "../PageObject/login";
import InvalidLogin from "../PageObject/InvalidLogin";
import Logout from "../PageObject/logout";
import  Rerigester from "../PageObject/RerigesterUser"
import Contact from "../PageObject/Contact";
import TestCases from "../PageObject/TestCases";
import AllProducts from "../PageObject/AllProducts";
import SearchProduct from "../PageObject/SearchProduct";
import Homepage from "../PageObject/verify_subscription_homepage";
import Cartpage from "../PageObject/verify_susscription_cartpage";
import AddProducts from "../PageObject/AddProductsToCart";
import Review from "../PageObject/review";
import RecomendedItems from "../PageObject/recomended_items";


describe("Registeration Tests", ()=>{
    it.skip("Register Yourself", ()=>{
        cy.visit("https://www.automationexercise.com/login")
        

       const  ln=new Register()

        //ln.homepagevisibility()

        ln.clickloginbutton()
        ln.checkloginformvisibility()
        ln.provideemail("naveedarif98@gmail.com")
        ln.providepassword("Hookabar98@")
        ln.pressloginbtn()
        ln.checkaccountlogin()
        
       // ln.logovisibility()
        //ln.showname()



    })

    it.skip("Invalid Login", ()=>{
        cy.visit("https://www.automationexercise.com/login")

        const  ln=new InvalidLogin()

        ln.clickloginbutton()
        ln.checkloginformvisibility()
        ln.provideemail("naveedarif95@gmail.com")
        ln.providepassword("Hookabar98")
        ln.pressloginbtn()
        ln.errorverification()
    })

    it.skip("Logout", ()=>{
        cy.visit("https://www.automationexercise.com/login")

        const  ln=new Logout()

        ln.clickloginbutton()
        ln.checkloginformvisibility()
        ln.provideemail("naveedarif98@gmail.com")
        ln.providepassword("Hookabar98@")
        ln.pressloginbtn()
        ln.checkaccountlogin()
        ln.clicklogoutbtn()
        ln.checkloginformvisibility()


    })

    it.skip("reregister user", ()=>{
        cy.visit("https://automationexercise.com/")

       const  ln=new Rerigester()

       ln.clickloginbutton();
       ln.signupformvisibility()
       ln.entername("Naveed")
       ln.enteremail("naveedarif98@gmail.com")
       ln.clicksignup()
       ln.showerror();
    })

    it.skip("contact form", ()=>{
        cy.visit("https://automationexercise.com/")

        const ln=new Contact()

        ln.clickcontactbtn()
        ln.verifyformvisibility()
        ln.entername("Naveed")
        ln.enteremail("naveedarif98@gmail.com")
        ln.entersubject("Complain")
        ln.entercompletemessage("hello all")
        ln.clicksubmitbtn()
        ln.successfulverification()
    })

    it.skip("TestCases page", ()=>{
        cy.visit("https://automationexercise.com/")

        const ln=new TestCases()

        ln.clicktestcasesbtn()
        ln.verifytestcasepage()


    })

    it.skip("All Products", ()=>{
        cy.visit("https://automationexercise.com/")

        const ln=new AllProducts()
        ln.clickproductsicon();
        ln.getverification()
        ln.clickfirstproduct()
        ln.getdetails()
    })

    it.skip("Search Product", ()=>{
        cy.visit("https://automationexercise.com/")

        const ln=new SearchProduct()

        ln.clickproductsicon()
        ln.getverification()
        ln.enterproductname("Blue Top")
        ln.clickbtn()
        ln.verifysearchedproduct()
    })

    it.skip("Sub in homepage", ()=>{
        cy.visit("https://automationexercise.com/")

        const ln=new Homepage()

        ln.verifytext()
        ln.enteremail("naveedarif98@gmail.com")
        ln.clicksubscription()
    })

    it.skip("cartpage", ()=>{
        cy.visit("https://automationexercise.com/")

        const ln=new Cartpage()

        ln.clickcartbtn()
        ln.verifytext()
        ln.enteremail("naveedarif98@gmail.com")
        ln.clicksubscription()
    })

    it.skip("Add to cart", ()=>{
        cy.visit("https://automationexercise.com/")

        const ln=new AddProducts()

        ln.clickproducts()
        ln.hoverfirst()
        ln.continueshopping()
        ln.addsecondproduct()
        ln.clickviewcartbtn()
        ln.verification1()
        ln.verification2()
    })

    it.skip("Review", ()=>{
        cy.visit("https://automationexercise.com/")

        const ln=new Review()

        ln.clickproductsbtn()
        ln.getverification()
        ln.viewproduct()
        ln.viewformvisibility()
        ln.entername("naveed")
        ln.enteremail("naveedarif98@gmail.com")
        ln.addreview("superb")
        ln.submitreview()
    })

    it.skip("recomended items", ()=>{
        cy.visit("https://automationexercise.com/")

        const ln=new RecomendedItems()

        ln.verificationritems()
        ln.addtocart()
        ln.viewcart()
       // ln.checkproduct()
    })


})