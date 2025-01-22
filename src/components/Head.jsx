import React from "react";
import { Helmet } from "react-helmet-async";

function Head() {
  return (
    <Helmet>
      <title>Milan- Frontend Developer & SEO Specialist</title>
      <meta
        name="Full stack developer with a proper knowlege of frontend and backend with seo basics."
        content="Portfolio of milan man sing khadka, a frontend developer and SEO specialist with 5 years of experience in creating responsive, user-friendly websites."
      />
      <meta name="keywords" content="frontend developer, SEO specialist, web design, React, JavaScript" />
      <meta name="author" content="Milan khadka" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="John Doe - Frontend Developer & SEO Specialist" />
      <meta
        property="og:description"
        content="Portfolio of John Doe, a frontend developer and SEO specialist with 5 years of experience in creating responsive, user-friendly websites."
      />
      <meta property="og:image" content="/og-image.jpg" />
      <meta property="og:url" content="https://www.johndoe.com" />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href="https://www.johndoe.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
}

export default Head;
