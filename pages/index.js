import { CreationCard } from "components/CreationCard/CreationCard";
import FacebookIcon from "components/FacebookIcon/FacebookIcon";
import InstagramIcon from "components/InstagramIcon/InstagramIcon";
import Link from "components/Link/Link";
import Logo from "components/Logo/Logo";
import NavigationBar from "components/NavigationBar/NavigationBar";
import OutlinedButton from "components/OutlinedButton/OutlinedButton";
import PinterestIcon from "components/PinterestIcon/PinterestIcon";
import { SVGLink } from "components/SVGLink/SVGLink";
import TwitterIcon from "components/TwitterIcon/TwitterIcon";
import Head from "next/head";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import homeStyles from "styles/Home.module.scss";
const BASE_URL = "https://loopstudio-nu.vercel.app/api";
export async function getStaticProps() {
  const creationCardsRes = await fetch(`${BASE_URL}/creation-cards`);
  const creationCards = await creationCardsRes.json();

  const pageLinksRes = await fetch(`${BASE_URL}/page-links`);
  const pageLinks = await pageLinksRes.json();

  const socialMediaRes = await fetch(`${BASE_URL}/social-media`);
  const socialMedia = await socialMediaRes.json();
  return {
    props: {
      pageLinks,
      creationCards,
      socialMedia,
    },
  };
}

export default function Home({
  pageLinks = [],
  creationCards = [],
  socialMedia = {},
}) {
  const { ref: heroObserverRef, entry } = useInView({
    threshold: 0.75,
    rootMargin: "0px 0px 0px 0px",
    initialInView: true,
  });
  const { facebook, twitter, instagram, pinterest } = socialMedia;
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={homeStyles["nav-header"]}>
        <NavigationBar inContrastMode={!entry?.isIntersecting}>
          {pageLinks.map((link) => {
            return (
              <Link href={link?.href || "#"} key={link?.text || ""}>
                {link?.text || ""}
              </Link>
            );
          })}
        </NavigationBar>
      </header>
      <section className={homeStyles["hero"]} ref={heroObserverRef}>
        <Image
          src="/desktop/image-hero.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="50%"
          className="hero__img"
          quality={80}
        />
        <div className={homeStyles["hero__content"]}>
          <h1>Immersive experiences that Deliver</h1>
        </div>
      </section>
      <main>
        <section className={homeStyles["interactive-vr"]}>
          <Image
            src="/desktop/image-interactive.jpg"
            layout="responsive"
            width="731"
            height="500"
          />
          <div className={homeStyles["content"]}>
            <h2>The Leader in Interactive VR</h2>
            <p>
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </section>

        <section className={homeStyles["our-creations"]}>
          <header>
            <h2>Our Creations</h2>
            <OutlinedButton
              href="#"
              className={homeStyles["header__see-all-btn"]}
            >
              See All
            </OutlinedButton>
          </header>
          <div className={homeStyles["cards"]}>
            {creationCards.map((card) => {
              return (
                <li key={card.title}>
                  <CreationCard
                    title={card.title}
                    src={card.src}
                    objectPosition={card.objectPosition}
                    key={card.title}
                  />
                </li>
              );
            })}
          </div>
          <footer className={homeStyles["our-creations__footer"]}>
            <OutlinedButton
              href="#"
              className={homeStyles["footer__see-all-btn"]}
            >
              See All
            </OutlinedButton>
          </footer>
        </section>
      </main>
      <footer className={homeStyles["page__footer"]}>
        <Logo className={homeStyles["logo"]} />
        <ul className={homeStyles["pages"]}>
          {pageLinks.map((link) => {
            return (
              <li key={link.text}>
                <Link
                  href={link.href}
                  className={homeStyles["pages-list__link"]}
                >
                  {link.text}
                </Link>
              </li>
            );
          })}
        </ul>

        <ul className={homeStyles["social-list"]}>
          <li className="social-list__item">
            <SVGLink
              href={facebook?.href || "#"}
              svgElement={<FacebookIcon />}
            />
          </li>
          <li className="social-list__item">
            <SVGLink
              href={instagram?.href || "#"}
              svgElement={<InstagramIcon />}
            />
          </li>
          <li className="social-list__item">
            <SVGLink
              href={pinterest?.href || "#"}
              svgElement={<PinterestIcon />}
            />
          </li>
          <li className="social-list__item">
            <SVGLink href={twitter?.href || "#"} svgElement={<TwitterIcon />} />
          </li>
        </ul>
        <div className={homeStyles["copyright"]}>
          2021 Loopstudios. All rights reserved
        </div>
      </footer>
    </div>
  );
}
