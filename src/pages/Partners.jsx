import CopyUrl from "../components/Partners/CopyUrl";
import PartnersInfo from "../components/Partners/PartnersInfo";
import PartnersTitle from "../components/Partners/PartnersTitle";
import Star from "../components/UI/Star";
import Title from "../components/UI/Title";
import PartnersList from "../components/Partners/PartnersList";

export default function Partners() {
  return (
    <section className="h-full">
      <Title />
      <CopyUrl />
      <Star />
      <PartnersInfo />
      <PartnersTitle />
      <PartnersList />
    </section>
  );
}
