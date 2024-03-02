class TestCases
{
    testcasesbtn="header[id='header'] li:nth-child(5) a:nth-child(1)"
    verification="h2[class='title text-center'] b"

    clicktestcasesbtn()
    {
        cy.get(this.testcasesbtn).click()
    }

    verifytestcasepage()
    {
        cy.get(this.verification).should("have.text","Test Cases")
    }

}
export default TestCases;