import images from './images'

const restaurantInfo = [
    {
        title: 'The Cozy Leaf',
        info: 'Fully vegan restaurant, we craft nourishing, plant-based dishes that deliver unforgettable flavor. Indulge in meals that are good for both you and the planet.'
    },
    {
        title1: 'Green Plates',
        title2: 'Bold Tastes',
        info: `At our fully vegan restaurant, we combine fresh ingredients with creative culinary techniques to deliver unforgettable flavor experiences. From vibrant salads to hearty plant-based dishes, we serve food that’s as nourishing as it is delicious. Whether you're craving something light or looking for a filling feast, our diverse menu offers something for every taste.`
    },
    {
        title: 'Enjoy free delivery across the entire city',
        info: `Find us throughout the city, offering convenient locations wherever you are. Delivery is available until midnight, ensuring you can enjoy our dishes late into the night.`
    }
]






const restaurantPromotions = [
    {
        promotion: 'Student Special:',
        info: 'Show your student ID and get 15% off any meal!'
    },
    {
        promotion: 'Happy Hours:',
        info: 'Enjoy 2-for-1 cocktails from 4 PM to 6 PM every weekday'
    },
    {
        promotion: 'Weekend Deal:',
        info: 'Free coffee with every brunch order on Saturdays and Sundays.'
    },
    {
        promotion: 'Family Feast:',
        info: 'Kids eat free with every adult entrée after 6 PM on weekdays'
    },
    {
        promotion: 'Birthday Special:',
        info: 'Celebrate your birthday with us and enjoy a free dessert!'
    },
]


const restaurantGallery = [
    {
        image: images.gallery1,
        text: 'Fresh, organic ingredients sourced from local suppliers.'
    },
    {
        image: images.gallery2,
        text: 'Pet-friendly environment – bring your furry friends!'
    },
    {
        image: images.gallery3,
        text: '100% vegan menu, packed with healthy and tasty dishes.'
    },
    {
        image: images.gallery4,
        text: 'Relaxing atmosphere inspired by nature and harmony.'
    },
    {
        image: images.gallery5,
        text: 'Fast, eco-friendly delivery at your convenience.'
    },
    {
        image: images.gallery6,
        text: 'Top-quality ingredients for great taste and wellness.'
    },
    {
        image: images.gallery7,
        text: 'Eco-conscious decor and zero-waste principles.'
    },
    {
        image: images.gallery8,
        text: 'Gluten-free and sugar-free options, perfect for everyone.'
    },
    {
        image: images.gallery8,
        text: 'Gluten-free and sugar-free options, perfect for everyone.'
    },
]

const data = { restaurantGallery, restaurantInfo, restaurantPromotions };
export default data