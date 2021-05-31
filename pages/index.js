import { CreationCard } from "components/CreationCard/CreationCard";
import Link from "components/Link/Link";
import Logo from "components/Logo/Logo";
import NavigationBar from "components/NavigationBar/NavigationBar";
import OutlinedButton from "components/OutlinedButton/OutlinedButton";
import Head from "next/head";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import styles from "../styles/Home.module.scss";

export async function getStaticProps() {
  const creationCardsRes = await fetch(
    `http://localhost:3000/data/creationCards.json`
  );
  const creationCards = await creationCardsRes.json();
  const pageLinksRes = await fetch(`http://localhost:3000/data/pageLinks.json`);
  const pageLinks = await pageLinksRes.json();
  return {
    props: {
      pageLinks,
      creationCards,
    },
  };
}

export default function Home({ pageLinks, creationCards }) {
  const { ref: heroObserverRef, entry } = useInView({
    threshold: 0.75,
    rootMargin: "0px 0px 0px 0px",
    initialInView: true,
  });
  console.log(creationCards);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <NavigationBar inContrastMode={!entry?.isIntersecting}>
          {pageLinks.map((link) => {
            return (
              <a href={link.href} key={link.text}>
                {link.text}
              </a>
            );
          })}
        </NavigationBar>
      </header>
      <section className="hero" ref={heroObserverRef}>
        <Image
          src="/desktop/image-hero.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="50%"
          className="hero__img"
          quality={80}
        />
        <div className="hero__content">
          <h1>Immersive experiences that Deliver</h1>
        </div>
      </section>
      <main>
        <section className="interactive-vr">
          <Image
            src="/desktop/image-interactive.jpg"
            layout="responsive"
            width="731"
            height="500"
          />
          <div className="content">
            <h2>The Leader in Interactive VR</h2>
            <p>
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </section>

        <section className="our-creations">
          <h2>Our Creations</h2>
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
          <OutlinedButton>See All</OutlinedButton>
        </section>
      </main>
      <footer>
        <Logo />

        <ul className="pages-list">
          {pageLinks.map((link) => {
            return (
              <li key={link.text}>
                <Link href={link.href} className="pages-list__link">
                  {link.text}
                </Link>
              </li>
            );
          })}
        </ul>
        {/* <ul className="social-list">
          <li className="social-list__item">
            <a href="#" className="social-list__link">
              About
            </a>
          </li>
          <li className="social-list__item">
            <a href="#" className="social-list__link">
              Careers
            </a>
          </li>
          <li className="social-list__item">
            <a href="#" className="social-list__link">
              Events
            </a>
          </li>
          <li className="social-list__item">
            <a href="#" className="social-list__link">
              Products
            </a>
          </li>
          <li className="social-list__item">
            <a href="#" className="social-list__link">
              Support
            </a>
          </li>
        </ul> */}
        <div className="copyright">2021 Loopstudios. All rights reserved</div>
      </footer>
    </div>
  );
}
