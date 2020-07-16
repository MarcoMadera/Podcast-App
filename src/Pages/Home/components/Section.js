import React from "react";
import { Link } from "react-router-dom";
import "./css/Section.css";

const Section = (props) => {
  const { name, data } = props;
  return (
    <div>
      <header>
        <h1>
          {name == "channel"
            ? "Recommended"
            : name == "categories"
            ? "Categories"
            : "Popular"}
        </h1>
      </header>
      <div className="carousel">
        {/* <button className="carousel__button carousel__button--left">{"<"}</button> */}
        <div className="carousel__track-container">
          <ul className="carousel__track">
            {(name == "popular" ? data.body.audio_clips : data.body).map(
              (channel, i) => (
                <li className="carousel__slide" key={channel.id + i}>
                  <Link
                    to={`/${name == "popular" ? "podcast" : name}/${
                      channel.id
                    }`}
                  >
                    <img
                      src={
                        (channel.urls !== undefined &&
                          channel.urls.images !== undefined &&
                          channel.urls.images.thumb.url) ||
                        (channel.urls !== undefined &&
                          channel.urls.logo_image.thumb) ||
                        channel.banner_image_url ||
                        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1000 1000'%3E%3Cdefs%3E%3CradialGradient id='a' cx='500' cy='500' r='50%25' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23dd33bb'/%3E%3Cstop offset='1' stop-color='%23404'/%3E%3C/radialGradient%3E%3CradialGradient id='b' cx='500' cy='500' r='60%25' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23F70' stop-opacity='1'/%3E%3Cstop offset='1' stop-color='%23F70' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='1000' height='1000'/%3E%3Cg fill='none' stroke='%23F6B' stroke-width='1' stroke-miterlimit='10' stroke-opacity='.3'%3E%3Crect x='12.5' y='12.5' width='975' height='975'/%3E%3Crect x='25' y='25' width='950' height='950'/%3E%3Crect x='37.5' y='37.5' width='925' height='925'/%3E%3Crect x='50' y='50' width='900' height='900'/%3E%3Crect x='62.5' y='62.5' width='875' height='875'/%3E%3Crect x='75' y='75' width='850' height='850'/%3E%3Crect x='87.5' y='87.5' width='825' height='825'/%3E%3Crect x='100' y='100' width='800' height='800'/%3E%3Crect x='112.5' y='112.5' width='775' height='775'/%3E%3Crect x='125' y='125' width='750' height='750'/%3E%3Crect x='137.5' y='137.5' width='725' height='725'/%3E%3Crect x='150' y='150' width='700' height='700'/%3E%3Crect x='162.5' y='162.5' width='675' height='675'/%3E%3Crect x='175' y='175' width='650' height='650'/%3E%3Crect x='187.5' y='187.5' width='625' height='625'/%3E%3Crect x='200' y='200' width='600' height='600'/%3E%3Crect x='212.5' y='212.5' width='575' height='575'/%3E%3Crect x='225' y='225' width='550' height='550'/%3E%3Crect x='237.5' y='237.5' width='525' height='525'/%3E%3Crect x='250' y='250' width='500' height='500'/%3E%3Crect x='262.5' y='262.5' width='475' height='475'/%3E%3Crect x='275' y='275' width='450' height='450'/%3E%3Crect x='287.5' y='287.5' width='425' height='425'/%3E%3Crect x='300' y='300' width='400' height='400'/%3E%3Crect x='312.5' y='312.5' width='375' height='375'/%3E%3Crect x='325' y='325' width='350' height='350'/%3E%3Crect x='337.5' y='337.5' width='325' height='325'/%3E%3Crect x='350' y='350' width='300' height='300'/%3E%3Crect x='362.5' y='362.5' width='275' height='275'/%3E%3Crect x='375' y='375' width='250' height='250'/%3E%3Crect x='387.5' y='387.5' width='225' height='225'/%3E%3Crect x='400' y='400' width='200' height='200'/%3E%3Crect x='412.5' y='412.5' width='175' height='175'/%3E%3Crect x='425' y='425' width='150' height='150'/%3E%3Crect x='437.5' y='437.5' width='125' height='125'/%3E%3Crect x='450' y='450' width='100' height='100'/%3E%3Crect x='462.5' y='462.5' width='75' height='75'/%3E%3Crect x='475' y='475' width='50' height='50'/%3E%3Crect x='487.5' y='487.5' width='25' height='25'/%3E%3C/g%3E%3Crect fill-opacity='.3' fill='url(%23b)' width='1000' height='1000'/%3E %3C/svg%3E"
                      }
                      alt="Channel Image"
                      className="carousel__image"
                      style={{
                        background: `linear-gradient(${
                          channel.gradient && channel.gradient.start
                        }, ${channel.gradient && channel.gradient.end})`,
                      }}
                    />
                    <p>{channel.title}</p>
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* <button class="carousel__button carousel__button--right">{">"}</button> */}
      </div>
    </div>
  );
};

export default Section;
