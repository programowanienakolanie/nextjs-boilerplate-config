import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import AboutUs from '@/components/AboutUs';
import Gallery from '@/components/Gallery';
import Services from '@/components/Services';
import Feedback from '@/components/Feedback';
import Contact from '@/components/Contact';
import Socials from '@/components/Socials';

export default function Page() {
    const sectionStyle = {
        width: '1176px',
        height: '9648px',
        backgroundImage:
            'url(' +
            ' https://cdn.discordapp.com/attachments/898626720100417536/1170152804850073640/AutoGrindHouse.png?ex=655800b9&is=65458bb9&hm=12b1f2d4552e5b3012378eee053ec4250cc66ca7dc23cd35d22e92d2ae4f2fd2&' +
            ')',
    };
    return (
        <MaxWidthWrapper>
            <div style={sectionStyle}>
                <div className='w-custom-image-witdh mx-12 h-custom-image-height border border-amber-400 border-opacity-80'>
                    <div className='w-custom-image-witdh mx-16 h-custom-image-height border border-amber-400 border-opacity-80'>
                        <div className='w-custom-image-witdh mx-20 h-custom-image-height border border-amber-200 border-opacity-80'>
                            <div className='w-custom-image-witdh mx-24 h-custom-image-height border border-amber-200 border-opacity-80'>
                                <div className='w-custom-image-witdh mx-28 h-custom-image-height border border-amber-200 border-opacity-80'>
                                    <div className='w-custom-image-witdh mx-32 h-custom-image-height border border-amber-200 border-opacity-80'>
                                        <Hero></Hero>
                                        <Stats></Stats>
                                        <AboutUs></AboutUs>
                                        <Gallery></Gallery>
                                        <Services></Services>
                                        <Feedback></Feedback>
                                        <Contact></Contact>
                                        <Socials></Socials>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MaxWidthWrapper>
    );
}
