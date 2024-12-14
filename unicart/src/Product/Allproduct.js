import React from 'react'
import Navbar from '../Navbar/Navbar';
import Cardex from '../Cardex';
import "./Allproduct.css";
import Useeffect from '../Useeffect';
import Footerex from '../Footer/Footerex';
function Allproduct(){


  return (

    <div>
        <Navbar></Navbar> <br></br>
        <div className='allproduct'>
        {/*Products From Homepage */}
        <Cardex 
            id="Harddisk"
            productimage='./Harddisk.jpg'
            cardtitle="Hard Disk" 
            cardtext="Seagate Expansion 1TB External HDD- USB 3.0 for Windows and Mac with 3 yr Data Recovery Services, Portable Hard Drive (STKM1000400)"
            carditem1="Price:₹ 4,500"
            carditem2="User Rating 4.5"> 
        </Cardex>
        <Cardex 
            id="SSD"
            productimage='./ssd.jpg'
            cardtitle="SSD" 
            cardtext="FRONTECH 128GB Internal SSD, 2.5 SATA3, TLC+SMI, Low Energy Consumption, Ultra Fast with Read/Write Speed Upto 500/480 Mbps (SSD-0054, Black)"
            carditem1="Price:₹ 3,500"
            carditem2="User Rating 3.5">
        </Cardex>
        <Cardex 
            id="AntEsportsElite"
            productimage='./Ant Esports Elite.jpg'
            cardtitle="Ant Esports Elite" 
            cardtext="Ant Esports Elite 1100 Mid-Tower Computer Case/Gaming Cabinet - Black | Support ATX, M-ATX, ITX | Pre- Installed 3 x 120mm Front"
            carditem1="Price:₹ 1,500"
            carditem2="User Rating 3.8">
        </Cardex>
        <Cardex 
            id="ViewSonic"
            productimage='./Gamingmonitor.jpg'
            cardtitle="ViewSonic" 
            cardtext="ViewSonic (from USA) - VX2428 60.96 Cm (24 ) FHD IPS Monitor|Super Clear IPS Panel |180 Hz|1Ms Response time| HDR10| Srgb104%."
            carditem1="Price:₹ 11,500"
            carditem2="User Rating 4.5">
        </Cardex>
        <Cardex
            id="LGFrostFree"
            productimage='./fridge.jpeg'
            cardtitle="LG 655 L Frost Free "
            cardtext="LG 655 L Frost Free Smart Inverter Double Door Side by Side Refrigerator (2023 Model, GL-B257HWBY, Western Black, Express Freezing | Multi Air-Flow)"
            carditem1="Price:₹ 13,500"
            carditem2="User Rating 4.5">
        </Cardex>
        <Cardex
            id="GodrejoneTonAc"
            productimage='./AC.jpg'
            cardtitle="Godrej 1 Ton Ac"
            cardtext="Godrej 1 Ton 3 Star, 5 Years Comprehensive Warranty, 5-In-1 Convertible Cooling, Inverter Split AC  1T EI 12TINV3R32-GWA Split, White)"
            carditem1="Price:₹ 15,500"
            carditem2="User Rating 4.5">
        </Cardex>
        <Cardex
            id="LGWashingMachine"
            productimage='./Washingmachine.jpeg'
            cardtitle="LG Washing Machine"
            cardtext="LG 9 Kg, 5 Star, AI Direct Drive Technology, Steam, 6 Motion DD & Wi-Fi Fully-Automatic Front Load Washing Machine "
            carditem1="Price:₹ 35,500"
            carditem2="User Rating 4.5">
        </Cardex>
        <Cardex
            id="Acer80cm"
            productimage='./Tv.jpg'
            cardtitle="Acer 80 cm (32 inches)"
            cardtext="Acer 80 cm (32 inches) V Pro Series HD Ready Smart QLED Google TV AR32QDXGU2841AT (Black)"
            carditem1="Price:₹ 85,500"
            carditem2="User Rating 4.5">
        </Cardex>
        <Cardex
            id="CharismaticClassic"
            productimage='./Menbrace.jpg'
            cardtitle="Charismatic Classic"
            cardtext="Charismatic Classic Pure Stainless Steel Magnetic Bracelet for Mens & Boys, Classic all Magnets Energy Bracelet (Gold)"
            carditem1="Price:₹ 1,500"
            carditem2="User Rating 4.5">
        </Cardex>
        <Cardex
            id="Silvernaroring"
            productimage='./Silvernaroring.jpg'
            cardtitle="Silvernaro Ring"
            cardtext="CLARA Pure 925 Sterling Silver Nario Adjustable Ring |Gift for Men and Boys | Partial Matte Finish"
            carditem1="Price:₹ 1,500"
            carditem2="User Rating 4.5">
        </Cardex>
        <Cardex
            id="Sukkhi"
            productimage='./Sukkhi.jpg'
            cardtitle="Sukkhi"
            cardtext="Sukkhi Glamorous Gold Plated Choker Necklace Set Combo For Women"
            carditem1="Price:₹ 9,500"
            carditem2="User Rating 4.5">
        </Cardex>
        <Cardex
            id="Zenme"
            productimage='./Zenme.jpg'
            cardtitle="Zenme"
            cardtext="ZENEME Non-precious Metal Gold Plated and American Diamond Necklace Set & Bangles for Women & Girls"
            carditem1="Price:₹ 339"
            carditem2="User Rating 3.4">
        </Cardex>
    
        {/* /* Bagproducts */}
        <Cardex 
            id="Fjallraven"
            productimage='./backpack.jpg'
            cardtitle="Fjallraven " 
            cardtext="Foldsack No. 1 Backpack, Fits 15 Laptops Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
            carditem1="Price:₹ 4,500"
            carditem2="User Rating 4.5"> 
        </Cardex>
        <Cardex 
            id="MOKOBARA"
            productimage='./MOKOBARA.jpg'
            cardtitle="MOKOBARA " 
            cardtext=" The Kaleido Backpack, Water-Resistant 15.6 Laptop Bag with Luggage Sleeve for Work, Travel, and Daily Use - Suitable for Men and Women"
            carditem1="Price:₹ 4,500"
            carditem2="User Rating 4.5"> 
        </Cardex>
        <Cardex 
            id="Skybags Casual"
            productimage='./SkybagsCasual.jpg'
            cardtitle="Skybags Casual " 
            cardtext="Skybags Casual Backpack 28L, 2 Main Compartments, Bottle Pocket, Front Pocket, Padded Shoulder Strap"
            carditem1="Price:₹ 4,500"
            carditem2="User Rating 4.5"> 
        </Cardex>
        <Cardex 
            id="FURJADEN"
            productimage='./FURJADEN.jpg'
            cardtitle="FURJADEN" 
            cardtext="FUR JADEN Anti Theft Number Lock Backpack Bag with 15.6 Inch Laptop Compartment, USB Charging Port & Organizer Pocket for Men Women Boys Girls"
            carditem1="Price:₹ 4,500"
            carditem2="User Rating 4.5"> 
        </Cardex>
        <Cardex 
            id="Safari"
            productimage='./Safari.jpg'
            cardtitle="Safari" 
            cardtext="Safari Omega spacious/large laptop backpack with Raincover, college bag, travel bag for men and women, Black, 30 Litre"
            carditem1="Price:₹ 4,500"
            carditem2="User Rating 4.5"> 
        </Cardex>
        <Cardex 
            id="JADEN 40L"
            productimage='./JADEN40L.jpg'
            cardtitle="JADEN 40L" 
            cardtext="FUR JADEN 40L Weekender Travel Laptop Backpack with Anti Theft Pocket, Organizer, 15.6 Inch Padded Laptop Sleeve and Dual Handles"
            carditem1="Price:₹ 4,500"
            carditem2="User Rating 4.5"> 
        </Cardex>
        <Cardex 
            id="Wesley"
            productimage='./wesley.jpg'
            cardtitle="Wesley" 
            cardtext="Foldsack No. 1 Backpack, Fits 15 Laptops Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
            carditem1="Price:₹ 4,500"
            carditem2="User Rating 4.5"> 
        </Cardex>
        <Cardex 
            id="MOKOBARATheEm"
            productimage='./MOKOBARATheEm.jpg'
            cardtitle="MOKOBARA The Em" 
            cardtext="MOKOBARA The Em Telescope Expandable Backpack - Green, Water-Resistant 15.6 Laptop Bag with Luggage Sleeve for Work, Travel, and Daily Use (Green Energy)"
            carditem1="Price:₹ 4,500"
            carditem2="User Rating 4.5"> 
        </Cardex>
        <Cardex 
            id="Urban"
            productimage='./Urban.jpg'
            cardtitle="Urban" 
            cardtext="Urban Jungle by Safari Venture Workpack 23 Liters Water Resistant, L-Open, Premium Polyester Laptop Backpack"
            carditem1="Price:₹ 4,500"
            carditem2="User Rating 4.5"> 
        </Cardex>
        <Cardex 
            id="arctic"
            productimage='./arctic.jpg'
            cardtitle="arctic" 
            cardtext="Arctic Fox Slope Anti Theft 23 L Backpack with USB Charging Port 15 Inch Laptop Backpack (Marble Black)"
            carditem1="Price:₹ 4,500"
            carditem2="User Rating 4.5"> 
        </Cardex>
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

        <Cardex
            id="Zenme"
            productimage='./Zenme.jpg'
            cardtitle="Zenme"
            cardtext="ZENEME Non-precious Metal Gold Plated and American Diamond Necklace Set & Bangles for Women & Girls"
            carditem1="Price:₹ 339"
            carditem2="User Rating 3.4">
        </Cardex>
        </div> <br></br>
        <Useeffect></Useeffect>
        <br></br> <br></br>
        <Footerex></Footerex>
    </div>
  )

}
export default Allproduct