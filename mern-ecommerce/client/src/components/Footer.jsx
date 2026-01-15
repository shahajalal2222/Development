import React from "react";
import Container from "./Container";
import Title from "./Title";
import SocialLinks from "./SocialLinks";
const shopArray=[
  {
    title: "Accessories",
    link: "/accessories",
  },
]
const Footer = () => {
  return (
    <div className="w-full bg-[#1b1b1b] py-20 text-white/80">
     <Container className="grid grid-cols-1 md:grid-cols-2
     lg:grid-cols-6 gap-10">
      {/*first */}
      <div className="col-span-2">
        <div className="flex flex-col gap-6">
           <Title className="text-xl">More about Orebi Shop </Title>
          <p className="test-base w-full lg:w-[80%]">
            Lorem ipsum dolor sit amet 
            consectetur adipisicing elit. Ipsum id adipisci 
            dignissimos doloremque saepe voluptatibus!
          </p>
          <SocialLinks/>
        </div>
      </div>
      {/*Second */}
      <div>
        <Title className="text-xl">Shop</Title>
      </div>
      {/*Third*/}
     </Container>
    </div>
  );
};

export default Footer;
