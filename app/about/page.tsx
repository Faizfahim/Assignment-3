import React from "react";
import Navbar from "../Components/Navbar/nevbar";
import Footer from "../Components/Footer/footer";
import Hero from "../Components/Hero/Hero";

const aboutPage = () => {
  return (
    <div>
      <Navbar/>
      <section className="">
        <div className="bg-black w-full h-6/12 text-red-800 font-serif">
          <h1 className="text-center py-56 text-6xl font-bold">About Us</h1>
        </div>
      </section>

      <div className="flex font-serif">
        <div className="bg-red-800 h-screen text-white w-6/12">
          <h1 className="ml-16 pt-12 text-3xl font-bold w-80 text-white">About Us</h1>

          <p className="ml-16 pt-9 w-9/12">
            An About page is the perfect place to learn the ins and outs of a
            brand. It tells you their mission, values, journey, and what others
            think about them.But condensing all of this into a few paragraphs is a
            tall order. You need a solid structure and a creative layout for your
            About Us page to leave a lasting impression on visitors and keep
            them coming back for more.An About page is the perfect place to learn the ins and outs of a
            brand. 
          </p>
          <p className="ml-16 w-9/12">It tells you their mission, values, journey, and what others
            think about them.But condensing all of this into a few paragraphs is a
            tall order. You need a solid structure and a creative layout for your
            About Us page to leave a lasting impression on visitors and keep
            them coming back for more.</p>
        </div>
        <div className="relative w-6/12 bg-red-800 h-screen text-white">
          <div className="absolute top-10 left-9 w-8/12 overflow-hidden">
            <img className="" src="images/image-2.png"></img>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default aboutPage;
