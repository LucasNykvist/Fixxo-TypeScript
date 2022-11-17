import React from 'react'
import Breadcrumb from '../components/BreadCrumb'
import LocationMap from '../components/LocationMap'
import ContactForm from '../sections/ContactForm'
import Footer from '../sections/Footer'
import Navbar from '../sections/Navbar'

const ContactsView = () => {
    return (
        <>
            <Navbar />
            <Breadcrumb icon='fa-solid fa-house' where='Contacts' />
            <LocationMap />
            <ContactForm />
            <Footer />
        </>
    )
}

export default ContactsView