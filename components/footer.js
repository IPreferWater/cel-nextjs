import FooterList from './footer-list'

function Footer() {
    const followLinks = [
        { label: "Facebook", url: "google.fr" },
        { label: "Instagram", url: "google.fr" },
        { label: "Twitter", url: "google.fr" },
        { label: "Linkedin", url: "google.fr" }]

    const routeLinks = [
        { label: "Tenant", url: "/tenant" },
        { label: "Landlord", url: "/landlord" },
        { label: "About Us", url: "/about" },
        { label: "Linkedin", url: "/contact" }]
    return (
        <footer className="bg-blue-700">
            <nav className="flex justify-between max-w-4xl p-4 mx-auto text-sm md:p-8">
                <FooterList title="follow" data={followLinks} external={true}></FooterList>
                <FooterList title="navigation" data={routeLinks} external={false}></FooterList>
            </nav>
        </footer>
    )
}

export default Footer;