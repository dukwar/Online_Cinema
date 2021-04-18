import {Slider1} from "../../../helpersSCSS/Carousel/Carousel";
import './SliderBlock.scss'

const slideData = [
    {
        index: 0,
        headline: 'New Fashion Apparel',
        button: 'Shop now',
        src: 'https://images.kinomax.ru/films/5/5497/560x302/p_91236ef.jpg'
    },
    {
        index: 1,
        headline: 'In The Wilderness',
        button: 'Book travel',
        src: 'https://images.kinomax.ru/films/5/5471/560x302/p_a0caf93.jpg'
    },
    {
        index: 2,
        headline: 'For Your Current Mood',
        button: 'Listen',
        src: 'https://images.kinomax.ru/films/5/5510/560x302/p_b7abe8e.jpg'
    },
    {
        index: 3,
        headline: 'Focus On The Writing',
        button: 'Get Focused',
        src: 'https://images.kinomax.ru/films/5/5506/560x302/p_6284fb7.jpg'
    },
    {
        index: 4,
        headline: 'For Your Current Mood',
        button: 'Listen',
        src: 'https://images.kinomax.ru/films/5/5441/560x302/p_e85944a.jpg'
    },
    {
        index: 5,
        headline: 'Focus On The Writing',
        button: 'Get Focused',
        src: 'https://images.kinomax.ru/films/5/5438/560x302/p_7f1c768.jpg'
    },
    {
        index: 6,
        headline: 'For Your Current Mood',
        button: 'Listen',
        src: 'https://images.kinomax.ru/films/5/5502/560x302/p_5bbeaac.jpg'
    },
    {
        index: 7,
        headline: 'Focus On The Writing',
        button: 'Get Focused',
        src: 'https://images.kinomax.ru/films/5/5490/560x302/p_ee13835.jpg'
    },

]

const SliderBlock = () => {
    return (
        <div className='slider'>
            <div className='slider__inner'>
                <Slider1 heading="Example Slider" slides={slideData}/>
            </div>
        </div>

    )
}

export default SliderBlock