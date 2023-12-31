import HeroSlider, {Slide} from "hero-slider";

function Slider({imagem_first, imagem_second,imagem_third}) {

    return (
        <>
            <HeroSlider
                height="70vh"
                autoplay= {{
                    autoplayDuration:1000,
                    autoplayDebounce: 0
                }}
                controller={{
                    slidingDuration: 1500,
                    slidingDelay: 10,
                }}
                animations={{
                    slidingAnimation: "fade",
                    sliderFadeInDuration: 400
                }}
                accessibility={{
                    shouldDisplayButtons: false,
                }}
                

            >
                <Slide
                    background= {{
                        backgroundImageSrc: imagem_first,
                        backgroundAttachment: "fixed",
                        backgroundColor: "",
                    }}
                />

                <Slide
                    background= {{
                        backgroundImageSrc: imagem_second,
                        backgroundAttachment: "fixed"
                    }}
                />

                <Slide
                    background= {{
                        backgroundImageSrc: imagem_third,
                        backgroundAttachment: "fixed"
                    }}
                />
            </HeroSlider>
        </>
    )
}

export default Slider