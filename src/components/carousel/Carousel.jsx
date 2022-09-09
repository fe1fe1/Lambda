import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import "./Carousel.scss";
import styled from "styled-components";
import PsBanner from "./ps3.png";
import XboxBanner from "./xbox-360.png";
import wiiBanner from "./wii.png";

const HomeCarousel = () => {
    return (
        <div className="carousel-container w-50 mx-auto ">
            <div className="carousel-tittle-container text-center">
                <h3 className="py-4">NEW GEN CONSOLES</h3>
            </div>

            <Carousel className="w-75 mx-auto">
                <Carousel.Item>
                    <div className="slide-img-container wii">
                        <img
                            className="slide-img"
                            src={wiiBanner}
                            alt="Second slide"
                        />
                    </div>

                    <Carousel.Caption>
                        <div className="caption-container">
                            <h3>Second slide label</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                            </p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="">
                    <div className="slide-img-container ps3 d-flex">
                        <img
                            className="slide-img"
                            src={PsBanner}
                            alt="First slide"
                        ></img>
                        <div className="bg-test"></div>
                    </div>
                    <Carousel.Caption>
                        <div className="caption-container">
                            <h3>First slide label</h3>
                            <p>
                                Nulla vitae elit libero, a pharetra augue mollis
                                interdum.
                            </p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="slide-img-container xbox-360">
                        <img
                            className="slide-img"
                            src={XboxBanner}
                            alt="Second slide"
                        />
                    </div>

                    <Carousel.Caption>
                        <div className="caption-container">
                            <h3>Second slide label</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                            </p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default HomeCarousel;
