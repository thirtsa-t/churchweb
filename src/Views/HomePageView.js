import React from 'react';
import AboutUs from '../Component/AboutPage/AboutUsPage';
import BlogPage from '../Component/blog/BlogPage.js';
import Button from '../Component/contactPage/Button';
import ContactBanner from '../Component/contactPage/contactBanner';
import ContactInfoItem from '../Component/contactPage/contactFoltem';
import ContactUs from '../Component/contactPage/contactUs';
import DescrPage from '../Component/DescrPage';
import FooterPage from '../Component/footerPage/footerPage'
import HomePage from '../Component/HomePage/HomePage';

const HomePageView = () => {
    return (
        <div>
            <HomePage />
            <AboutUs/>
            <DescrPage/>
            <BlogPage/> 
            <ContactUs/>
            <ContactBanner/>
            <ContactInfoItem/>
            <Button/>
            <FooterPage/>
         

        </div>
    )
}

export default HomePageView;
