import React from 'react'
import Navbar from '..//Navbar/Navbar.js';
import Cardex from '../Cardex.js';
import "./backpack.css";
import Footerex from '../Footer/Footerex.js';
function Backpack() {

  return (
    <div>
        <Navbar></Navbar> <br></br> <br></br>
        <div className='backpack'>
            <Cardex 
            id="Fjallraven"
            productimage='./backpack.jpg'
            cardtitle="Fjallraven " 
            cardtext="Foldsack No. 1 Backpack, Fits 15 Laptops Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
            carditem1="Price:₹ 4,500"
            carditem2="User Rating 4.5"> </Cardex>

            <Cardex 
            id="MOKOBARA"
            productimage='./MOKOBARA.jpg'
            cardtitle="MOKOBARA " 
            cardtext=" The Kaleido Backpack, Water-Resistant 15.6 Laptop Bag with Luggage Sleeve for Work, Travel, and Daily Use - Suitable for Men and Women"
            carditem1="Price:₹ 4,500"
            carditem2="User Rating 4.5"> </Cardex>

            <Cardex 
            id="Skybags Casual"
            productimage='./SkybagsCasual.jpg'
            cardtitle="Skybags Casual " 
            cardtext="Skybags Casual Backpack 28L, 2 Main Compartments, Bottle Pocket, Front Pocket, Padded Shoulder Strap"
            carditem1="Price:₹ 4,500"
            carditem2="User Rating 4.5"> </Cardex>

            <Cardex 
            id="FURJADEN"
            productimage='./FURJADEN.jpg'
            cardtitle="FURJADEN" 
            cardtext="FUR JADEN Anti Theft Number Lock Backpack Bag with 15.6 Inch Laptop Compartment, USB Charging Port & Organizer Pocket for Men Women Boys Girls"
            carditem1="Price:₹ 4,500"
            carditem2="User Rating 4.5"> </Cardex>

            <Cardex 
            id="Safari"
            productimage='./Safari.jpg'
            cardtitle="Safari" 
            cardtext="Safari Omega spacious/large laptop backpack with Raincover, college bag, travel bag for men and women, Black, 30 Litre"
            carditem1="Price:₹ 4,500"
            carditem2="User Rating 4.5"> </Cardex>

            <Cardex 
            id="JADEN 40L"
            productimage='./JADEN40L.jpg'
            cardtitle="JADEN 40L" 
            cardtext="FUR JADEN 40L Weekender Travel Laptop Backpack with Anti Theft Pocket, Organizer, 15.6 Inch Padded Laptop Sleeve and Dual Handles"
            carditem1="Price:₹ 4,500"
            carditem2="User Rating 4.5"> </Cardex>

            <Cardex 
            id="Wesley"
            productimage='./wesley.jpg'
            cardtitle="Wesley" 
            cardtext="Foldsack No. 1 Backpack, Fits 15 Laptops Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
            carditem1="Price:₹ 4,500"
            carditem2="User Rating 4.5"> </Cardex>

            <Cardex 
            id="MOKOBARATheEm"
            productimage='./MOKOBARATheEm.jpg'
            cardtitle="MOKOBARA The Em" 
            cardtext="MOKOBARA The Em Telescope Expandable Backpack - Green, Water-Resistant 15.6 Laptop Bag with Luggage Sleeve for Work, Travel, and Daily Use (Green Energy)"
            carditem1="Price:₹ 4,500"
            carditem2="User Rating 4.5"> </Cardex>

            <Cardex 
            id="Urban"
            productimage='./Urban.jpg'
            cardtitle="Urban" 
            cardtext="Urban Jungle by Safari Venture Workpack 23 Liters Water Resistant, L-Open, Premium Polyester Laptop Backpack"
            carditem1="Price:₹ 4,500"
            carditem2="User Rating 4.5"> </Cardex>

            <Cardex 
            id="arctic"
            productimage='./arctic.jpg'
            cardtitle="arctic" 
            cardtext="Arctic Fox Slope Anti Theft 23 L Backpack with USB Charging Port 15 Inch Laptop Backpack (Marble Black)"
            carditem1="Price:₹ 4,500"
            carditem2="User Rating 4.5"> </Cardex>

            <Cardex 
            id="safarizest"
            productimage='./safarizest.jpg'
            cardtitle="Safari Zest" 
            cardtext="Urban Jungle by Safari Zest Daypack 20 Liters Water Resistant, Top-Open, Padded, Premium Microfibre Laptop Backpack with Trolley Sleeve for Men and Women, White"
            carditem1="Price:₹ 5,500"
            carditem2="User Rating 4.5"> </Cardex>

            <Cardex 
            id="Faux"
            productimage='./Faux.jpg'
            cardtitle="Faux" 
            cardtext="Gear Classic 20L Small Faux Leather Water Resistant Anti Theft Laptop Backpack"
            carditem1="Price:₹ 5,500"
            carditem2="User Rating 4.5"> </Cardex>
        </div>
        <br></br> <br></br>
        <Footerex></Footerex>


    </div>
  )
}

export default Backpack