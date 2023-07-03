import HeroSlider, {Slide} from "hero-slider";

function Slider({imagem_first, imagem_second,imagem_third}) {
    return (
        <>
            <HeroSlider
                height={"70vh"}
                autoplay= {{
                    autoplayDuration:2000,
                    autoplayDebounce: 0
                }}
                controller={{
                    slidingDuration: 3000,
                    slidingDelay: 10,
                }}
                animations={{
                    slidingAnimation: "fade",
                    sliderFadeInDuration: 400
                }}
                accessibility={{
                    shouldDisplayButtons: false,
                }}

                /*slidingAnimation="left_to_right"
                orientation="horizontal"
                inicialSlide={1}
                onBeforeChange={(previousSlide, nextSlide) => console.log("onBeforeChange", previousSlide, nextSlide)}
                onChange={nextSlide => console.log("onChange", nextSlide)}
                onAfterChange={nextSlide => console.log("OnAfterChange", nextSlide)}
                style={{
                    backgroundColor: "rgba(0, 0, 0, 1)"
                }}
                settings={{
                    slidingDuration: 350,
                    slidingDelay: 100,
                    shouldAutoplay: true,
                    shouldDisplayButtons: true,
                    autoplayDuration: 5000,
                    height: "100%"
                }}*/
            >
                <Slide
                    background= {{
                        backgroundImageSrc: imagem_first,
                        backgroundAttachment: "fixed"
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