import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientReviewCard from "./ClientReviewCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1300 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1300, min: 764 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const ReviewSlider = () => {
  return (
    <Carousel
      responsive={responsive}
      additionalTransfrom={0}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      centerMode={false}
      infinite
      itemClass="item"
    >
      {/* ClientReviewCard */}
      <ClientReviewCard
        image="/images/user1.jpg"
        user="Sajal Talukder"
        role="Web Developer"
        desc="Working with Satnam was an excellent experience. His ability to create visually appealing and highly functional websites made our collaboration seamless. His expertise in frontend technologies is impressive."
      />
      <ClientReviewCard
        image="/images/user2.jpg"
        user="Hang Zoe"
        role="MERN Developer"
        desc="Satnam demonstrated exceptional skills in MERN stack development, ensuring efficient backend logic and a smooth user experience. His problem-solving ability and attention to detail truly set him apart."
      />
      <ClientReviewCard
        image="/images/user3.jpg"
        user="Anas"
        role="Fullstack Developer"
        desc="Satnam's full-stack expertise is commendable. From frontend to backend, he ensured that our project was built with scalable architecture and optimized performance. A great team player and skilled developer!"
      />
      <ClientReviewCard
        image="/images/user4.jpg"
        user="Mikas"
        role="React Developer"
        desc="Satnam's knowledge of React is outstanding! He built highly interactive and optimized components, making our application more user-friendly and efficient. His dedication to clean code is remarkable."
      />
      <ClientReviewCard
        image="/images/user3.jpg"
        user="Itachi Uchiha"
        role="Web Developer"
        desc="Satnam is a highly skilled web developer who focuses on responsive design and seamless navigation. His ability to transform ideas into functional web applications is truly impressive."
      />
    </Carousel>
  );
};

export default ReviewSlider;
