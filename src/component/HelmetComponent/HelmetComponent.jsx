import React from 'react'
import { Helmet } from 'react-helmet'

function HelmetComponent({ title, canonical }) {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="keywords" content="ICCSCT, International Conference on Computational Systems and Cloud Technologies, Computational Systems, Cloud Technologies, Cloud Computing, Distributed Computing, High-Performance Computing, Edge Computing, Cloud Infrastructure, Computational Intelligence, Virtualization, Cloud Security, Scalable Systems, Grid Computing, Cloud Applications, System Architecture, Cloud Services, Emerging Technologies, International Conference 2025, Cloud Engineering, Data Centers, Smart Computing" />
            <meta name="description" content="The International Conference on Computational Systems and Cloud Technologies 2025 brings together researchers, practitioners, and industry experts to explore advancements in cloud computing, scalable systems, and intelligent computational technologies." />
            <meta name="author" content="ICCSCT Editorial Team" />
            <meta name="robots" content="index, follow" />

            <meta property="og:type" content="website" />
            <meta property="og:title" content="International Conference on Computational Systems and Cloud Technologies" />
            <meta property="og:description" content="The International Conference on Computational Systems and Cloud Technologies 2025 brings together researchers, practitioners, and industry experts to explore advancements in cloud computing, scalable systems, and intelligent computational technologies." />
            <meta property="og:url" content="https://iccsct.com/" />
            <meta property="og:image" content="https://iccsct.com/assets/images/ICCSCT.png" />
            <link rel="canonical" href={canonical} />
            <link rel="icon" type="image/png" href="https://iccsct.com/assets/images/Fav.png" />

        </Helmet>
    )
}

export default HelmetComponent