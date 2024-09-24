import { VStack } from '@chakra-ui/react';
import React from 'react';
import ReviewCard from './ReviewCard';
import Carousel from './Carousel'; // Adjust the import path as needed

const testimonials = [
  {
    image: 'https://bootstrapmade.com/demo/templates/DevFolio/assets/img/testimonials/testimonials-1.jpg',
    name: 'Saul Goodman',
    title: 'Ceo & Founder',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit odit voluptatibus distinctio? Quibusdam hic dolorum reprehenderit non quae architecto a. provident!',
  },
  {
    image: 'https://bootstrapmade.com/demo/templates/DevFolio/assets/img/testimonials/testimonials-1.jpg',
    name: 'Saul Goodman',
    title: 'Ceo & Founder',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit odit voluptatibus distinctio? Quibusdam hic dolorum reprehenderit non quae architecto a. provident!',
  },
  {
    image: 'https://bootstrapmade.com/demo/templates/DevFolio/assets/img/testimonials/testimonials-1.jpg',
    name: 'Saul Goodman',
    title: 'Ceo & Founder',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit odit voluptatibus distinctio? Quibusdam hic dolorum reprehenderit non quae architecto a. provident!',
  },
  // Add more testimonials as needed
];

const Review = () => {
  return (
    <VStack
      position="relative"
      h="60vh"
      backgroundImage="linear-gradient(to bottom, rgba(7, 108, 221, .7), rgba(7, 108, 221, .7)), url(https://plus.unsplash.com/premium_photo-1681550090719-5754576792a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
      bgSize="cover"
      bgPos="0px -390px"
      textColor="white"
      align="center"
      justify="center"
      my={10}
    >
      <Carousel  autoplay={true} >
        {testimonials.map((testimonial, idx) => (
          <ReviewCard
            key={idx}
            image={testimonial.image}
            name={testimonial.name}
            title={testimonial.title}
            description={testimonial.description}
          />
        ))}
      </Carousel>
    </VStack>
  );
};

export default Review;
