import PropTypes from "prop-types";
import Header from "./header";
import Footer from "./footer"

function Layout({ children }) {

    return (
        <div className="flex flex-col min-h-screen font-ces text-gray-900">
            <Header   rel="preload"
            href="/fonts/Railey-PersonalUse.ttf"
            as="font"
            crossOrigin="" />

            <main className="flex-1 w-full  px-2 py-4 mx-auto  md:py-16">
                {children}
            </main>

            <Footer />
        </div>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
