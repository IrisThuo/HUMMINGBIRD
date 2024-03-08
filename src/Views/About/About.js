import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import "../../Views/About/About.css";
import aboutBanner1 from "../../assets/aboutBanner1.png";
import aboutpic from "../../assets/aboutpic.png";
import aboutpic2 from "../../assets/aboutpic2.png";
import lorepic from "../../assets/lorepic.png";
import lorepic2 from "../../assets/lorepic2.png";
function About(props) {
    return (
        <div>
            <Navbar/>

                <div className='about'>
                    <div className='about_top'
                    style = {{
                        backgroundImage:
                        `url(${aboutBanner1})`
                     }}
                    >
                        <h1>ABOUT US</h1>
                    </div>

                    <div className='about_bottom'>
                     <h1>HOW WE GOT STARTED</h1>
                    <p>
                    The Millennial Environmentalists is a group of youth aimed in conserving and advocating for the environment.

                    We are a group of young pro-active Africans whose lives and careers are tied to the sustainable use of environmental resources.

                    Our main aim is to rehabilitate the earth's green and create awareness for our biotic and abiotic resources as we also enjoy natures captivating beauty and gifts through tours and travels.

                    It is a planform for the youth to air their thoughts on how best to conserve the environment.

                    It is geared to sustainable use of the environment through: Greening the environment, waste management, water conservation and public sensitisation on sustainable use and maintenanceof the environment.

                    Road trips to protected areas and biodiversity hotspots around the country is a tool the organization plans to utilize in order to practically engage the youth on environmental matters.

                    Unity is strength thus the organization plans to focus on partnerships with stakeholders in the environmental protection agenda in order to achieve.

                    </p>
                    <h5>ABOUT US</h5>
                    <p>We are a society that gives youth a platform to
                    actualize their ideas on how best we can
                    achieve sustainable climate action.

                    We design project solutions that:
                     Capitalize on societal engagement through

                    capacity building and advocacy and,
                    Have a direct impact on the environment.</p>
                    <p>By capitalizing on social engagement, we improve
                    the chances of project durability, reduced costs, and

                    scalability.

                    When people understand why they need to take
                    action, they willingly learn how to do so, and
                    eventually, they become part of the solution.

                    Our projects are holistic, involving water, flora(plants)

                    and fauna (animals).</p>
                   </div>
                    <div className='about_center_main'>
                    <div className='about_center1'>
                    <div>
                    <h1>THE MILLENNIAL ENVIRONMENTALISTS</h1>
                    <p>
                    The Millennial Environmentalists is a group of youth aimed in conserving and advocating for and the environment.

                    We are a group of young pro-active Africans whose lives and careers are tied to the sustainable use of environmental resources.

                    Our main aim is to rehabilitate the earth's green and create awareness for our biotic and abiotic resources as we also enjoy natures captivating beauty and gifts through tours and travels.

                    It is a planform for the youth to air their thoughts on how best to conserve the environment. It is geared to sustainable use of the environment through: Greening the environment, waste management, water conservation and public sensitisation on sustainable use and maintenanceof the environment. Road trips to protected areas and biodiversity hotspots around the country is a tool the organization plans to utilize in order to practically engage the youth on environmental matters. Unity is strength thus the organization plans to focus on partnerships with stakeholders in the environmental protection agenda in order to achieve.

                    It is a planform for the youth to air their thoughts on how best to conserve the environment.

                    It is geared to sustainable use of the environment through: Greening the environment, waste management, water conservation and public sensitisation on sustainable use and maintenanceof the environment.

                    Road trips to protected areas and biodiversity hotspots around the country is a tool the organization plans to utilize in order to practically engage the youth on environmental matters.

                    Unity is strength thus the organization plans to focus on partnerships with stakeholders in the environmental protection agenda in order to achieve.

                    </p>

                    </div>
                    </div>

                    <div className='about_center2'>

                        <img src={aboutpic} alt=''/>

                    </div>

                    <div className='about_center3'>

                    <img src={aboutpic2} alt=''/>

                    </div>
                    <div className='about_center4'>
                    <div>
                    <h1>T.M.E PILLARS</h1>
                    <p>
                    <ul>
                    <li>
                    Climate Action: Take urgent action to combat climate change and its impacts, this is mostly done by afforestation and reforestation excursions.
                    </li>
                    <li>
                    Education: Creating awareness of our role as youth in both the destruction and conservation of the environment and aid in providing a platform to both educate and apply matters conservation.
                     </li>
                     <li>
                     Endangered species: Act as an informant and watchful eye for endangered and invasive species of flora and fauna and monitoring their trends and our relation as people in the endangerment of the biomes in our country.
                    </li>
                    <li>
                     Waste management: Careful disposal of toxic and non-toxic waste is a longstanding method of conserving the environment, through our platforms and membership meetings; we dedicate ourselves to the provision of information on how to deal with domestic waste to prevent further pollution.
                    </li>
                    <li>
                    Water Conservation: Water, the very bloodstream of our eco systems, is rapidly becoming
                    scarce;. This pillar is geared towards reduction of water pollution and wastage for the sustainability of generations to come.
                    It is with these 5 pillars that T.M.E strives to re-establish harmony between man and environment.
                    </li>
                    </ul>
                    </p>
                    </div>
                    </div>
                    </div>
                    <div className='about_bottom'>
                    <h1>OUR ETHOS</h1>
                    <p>
                    As the millennials we belief in the free sharing of our knowledge including modern, scientific and traditional about the environment. We are geared to respectfully sensitize the community on the impacts of their daily activities on the environment and how they can alternate their ways of life to environmentally friendly lifestyles.
                    We aim to engage every young professional in coming up with ways their can achieve success in their career and ensure the thriving of nature and biodiversity.
                    Support other organizations in their conservation programs by advertisement and active participation.
                    </p>
                     <p>We envision a world where people
                     habitually nurture their environment and,
                     it nurtures them in return.

                     A world with exemplary symbiotic
                     relationship amongst all parts of nature.</p>


                    </div>
                    <div className='lorepics'>
                    <div className='loreimg1'>
                    <img src={lorepic} alt=''></img>
                    </div>
                    <div className='loreimg2'>
                    <img src={lorepic2} alt=''></img>
                    </div>
                    </div>

                    <div className='about_center_bottom'>

                        <h1>HUMMINGBIRD AWARDS</h1>
                            <p>
                            This initiative gives
                            people and organizations
                            a platform to share their
                            stories, engage and uses
                            story telling to
                            accelerate the impact of
                            all climate action efforts.
                            We have hosted 2
                            awards and
                            engaged 132
                            individuals and
                            organizations across
                            Kenya.
                            </p>
                            <h1>TME EVOLUTION</h1>
                            <p>
                            The Millennial Environentalists is a group of youth aimed in conserving and advocating for the environment.

                            We are a group of young pro-active Africans whose lives and careers are tied to the sustainable use of environmental resources.

                            Our main aim is to rehabilitate the earth's green and create awareness for our biotic and abiotic resources as we also enjoy natures captivating beauty and gifts through tours and travels.

                            It is a planform for the youth to air their thoughts on how best to conserve the environment.

                            It is geared to sustainable use of the environment through: Greening the environment, waste management, water conservation and public sensitisation on sustainable use and maintenanceof the environment.

                            Road trips to protected areas and biodiversity hotspots around the country is a tool the organization plans to utilize in order to practically engage the youth on environmental matters.

                            Unity is strength thus the organization plans to focus on partnerships with stakeholders in the environmental protection agenda in order to achieve.

                            </p>
                            </div>
                            <div className='about_center_main2'>
                            <div className='aboutcenter6'>
                            <h1>ACHIEVMENTS</h1>
                            So far, we hav planted 140,000 trees and worked with over 180
                            organizations and individuals.
                            The current survival rate is
                            roughly 60% due to failed rains.
                            In 2023, our projects are not
                            only aligned with the updated
                            forecast but also more socially
                            engaging to ensure
                            personalized efforts in
                            maximizing results.
                                <ul>
                     <li>
                                Planted more than 25,000 trees in protected areas.
                    </li>
                    <li>
                                Planted more than 20, 000  trees under the School Tree Program.
                    </li>
                    <li>
                                Grown over 150, 000 trees in various water catchment areas.
                    </li>
                    <li>
                                Planted over 10, 000 mangroves along the coast.
                    </li>
                    <li>
                                In partnership with more than 100 schools and individuals across Kenya.
                    </li>

                            </ul>
                            </div>
                            <div className='aboutcenter7'>

                            </div>
                            <div className='aboutcener8'>
                            </div>


                     <div className='aboutcenter10'>
                     <h1>LONGONOT NATIONAL PARK</h1>
                     <p>The Millennial Environmentalists at the Longonot National Park.


                     On the 10th December 2019 the T.M.E team had gone to remove the invasive species during the dry season with preparation to plant 1000 indigenous trees during the wet season.</p>
                     </div>
                     <div className='aboutcenter11'>
                     </div>
                     <div className='aboutcenter12'>
                     </div>
                     <div className='aboutcenter13'>
                     <h1>NAIROBI NATIONAL PARK</h1>
                     <p>In the month of September 2019 T.M.E in partnership with the Nairobi national park planted 5000 in the first project and 1508 in the second project
                     </p>
                     <p>On the 12th October 2019 T.M.E planted 469 trees to replace the trees that had died from the first bunch planted.</p>
                     </div>
                     <div className='aboutcenter14'>
                     </div>
                     <div className='aboutcenter15'>
                     </div>
                     <div className='aboutcenter16'>
                     <h1>#SCHOOLTREEPLANTINGPROJECT
                     </h1>
                     <p>This was our first school project where we were invited by the Trees for a Healthy community organizations.

                     The pupils were taught how to plant and take care of trees as well as celebrated the babies born in that month through cake cutting.
                     </p>
                     </div>
                     <div className='aboutcenter15'>
                     </div>

                     </div>

                </div>



                     <div className='clear'></div>
            <Footer/>
        </div>
    );
}

export default About;
