class Contact{

    contact="a[href='/contact_us']"
    formverification="div[class='contact-form'] h2[class='title text-center']"
    name="input[placeholder='Name']"
    email="input[placeholder='Email']"
    subject="input[placeholder='Subject']"
    message="#message"
    fileu="input[name='upload_file']"
    submit="input[value='Submit']"
    verification=".status.alert.alert-success"

    clickcontactbtn()
    {
        cy.get(this.contact).click()
    }

    verifyformvisibility()
    {
        cy.get(this.formverification).should("have.text","Get In Touch")
    }
    entername(name)
    {
        cy.get(this.name).type(name)

    }
    enteremail(email)
    {
        cy.get(this.email).type(email)
    }
    entersubject(subject)
    {
        cy.get(this.subject).type(subject)
    }
    entercompletemessage(message)
    {
        cy.get(this.message).type(message)
    }
    fileupload(file)
    {
        cy.get(this.fileu).attachFile("Cover_letter.pdf")
    }

    

    clicksubmitbtn()
    {
        cy.get(this.submit).click()
    }

    successfulverification()
    {
        cy.get(this.verification).should("have.text","Success! Your details have been submitted successfully.")
    }
        
    

}

export default Contact;