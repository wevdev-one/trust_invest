import { Helmet, HelmetProvider } from "react-helmet-async";

const HelmetLayout = ({ children, name, title, description }) => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Trust Invest · {name}</title>
                <meta name="title" content={title} />
                <meta property="og:title" content={title} />
                <meta property="twitter:title" content={title} />

                <meta name="description" content={description} />
                <meta property="og:description" content={description} />
                <meta property="twitter:description" content={description} />

                <meta property="og:image" content="preview.png" />
                <meta property="og:type" content="website" />
                <meta property="twitter:image" content="preview.png" />
                <meta property="twitter:card" content="summary_large_image" />
            </Helmet>
            {children}
        </HelmetProvider>
    );
};

export default HelmetLayout;