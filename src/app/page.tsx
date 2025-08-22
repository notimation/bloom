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
        {/* Hero content will go here */}
      </section>

      {/* 2. VSL Video Section */}
      <section className={styles.vslVideo}>
        {/* VSL video content will go here */}
      </section>

      {/* 3. Onboarding Roadmap Section */}
      <section className={styles.onboardingRoadmap}>
        {/* Onboarding roadmap content will go here */}
      </section>

      {/* 4. CTA Section */}
      <section className={styles.ctaSection}>
        {/* CTA content will go here */}
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
