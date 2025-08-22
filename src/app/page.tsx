import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Header flotante */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          {/* Logotipo */}
          <div className={styles.logo}>
            <Image
              src="/logotipo_horizontal.png"
              alt="Bloomit"
              width={236}
              height={100}
              priority
            />
          </div>
          
          {/* Botón CTA */}
          <button className={styles.headerButton}>
            LAUNCH TODAY!
          </button>
        </div>
      </header>

      {/* 1. Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroIllustration}>
          <Image
            src="/illustrations/hero.png"
            alt="Hero illustration"
            width={640}
            height={640}
            priority
          />
        </div>
        <div className={styles.heroContentContainer}>
            <h1 className={styles.heroTitle}>
              Launch <span className={styles.primaryColor}>quickly</span> and <span className={styles.secondaryColor}>Confidently</span>
            </h1>
            <h2 className={styles.heroSubtitle}>Focus on what you do best,</h2>
            <h2 className={styles.heroSubtitle}>
              we <span className={styles.fontPrimaryColor}>handle the rest</span>
            </h2>
            <p className={styles.heroDescription}>
              <span className={styles.primaryBold}>Bloomit AI</span> creates your personalized marketing plan, strategy, brand identity, and content workflow — and gives you a <span className={styles.boldText}>mentored video recording app</span> to produce content and sell directly through a customized eCommerce store with dashboard. All of this, <span className={styles.secondaryBold}>completely free.</span>
            </p>
            <button className={styles.heroButton}>
              LAUNCH YOUR BUSINESS TODAY!
            </button>
        </div>
      </section>

      {/* 2. VSL Video Section */}
      <section className={styles.vslVideo}>
        {/* Ilustración izquierda */}
        <div className={styles.vslLeftIllustration}>
          <Image
            src="/illustrations/video_left.png"
            alt="Video left illustration"
            width={385}
            height={540}
          />
        </div>
        
        {/* Ilustración derecha */}
        <div className={styles.vslRightIllustration}>
          <Image
            src="/illustrations/video_right.png"
            alt="Video right illustration"
            width={421}
            height={540}
          />
        </div>
        
        {/* Video thumbnail centrado */}
        <div className={styles.vslVideoContainer}>
          <Image
            src="/video_thumnail.png"
            alt="Video thumbnail"
            width={1056}
            height={594}
            className={styles.vslVideoThumbnail}
          />
        </div>
      </section>

      {/* 3. Onboarding Roadmap Section */}
      <section className={styles.onboardingRoadmap}>
        <div className={styles.roadmapImageContainer}>
          <Image
            src="/onboarding_roadmap.png"
            alt="Onboarding Roadmap"
            width={1440}
            height={1641}
            className={styles.roadmapImage}
          />
        </div>
      </section>

      {/* 4. CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <div className={styles.ctaTextContainer}>
            <h3 className={styles.ctaTitle}>Ready to launch your business?</h3>
            <h5 className={styles.ctaSubtitle}>Start your journey to a new life today</h5>
          </div>
          
          <div className={styles.ctaButtonContainer}>
            <button className={styles.ctaButton}>
              START TODAY!
            </button>
            <p className={styles.ctaDisclaimer}>No commitment • Support included</p>
          </div>
          
          
        </div>
      </section>

      {/* 5. Bloomit Platforms Section */}
      <section className={styles.bloomitPlatforms}>
        {/* Bloomit platforms content will go here */}
      </section>

      {/* 6. Desktools Section */}
      <section className={styles.desktools}>
        {/* Desktools content will go here */}
      </section>

      {/* 7. Footer */}
      <footer className={styles.footer}>
        {/* Footer content will go here */}
      </footer>
    </div>
  );
}
