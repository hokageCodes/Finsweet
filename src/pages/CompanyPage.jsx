import CompanyHero from "../components/companyHero/CompanyHero";
import Expertise from "../components/expertise/Expertise";
import Newsletter from "../components/newsletter/Newsletter";
import OurVision from "../components/vision/OurVision";

export default function CompanyPage() {
    return (
        <div>
            <CompanyHero />
            <Expertise />
            <OurVision />
            <Newsletter />
        </div>
    )
}
