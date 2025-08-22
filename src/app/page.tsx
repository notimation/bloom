'use client';
import Image from "next/image";
import styles from "./page.module.css";
import { FaLinkedinIn, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { useState } from 'react';

export default function Home() {
  const [showVideo, setShowVideo] = useState(false);

  const handleVideoClick = () => {
    setShowVideo(true);
  };

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
        
        {/* Video thumbnail centrado o iframe de Vimeo */}
        <div className={styles.vslVideoContainer}>
          {!showVideo ? (
            <Image
              src="/video_thumnail.png"
              alt="Video thumbnail"
              width={1056}
              height={594}
              className={styles.vslVideoThumbnail}
              onClick={handleVideoClick}
            />
          ) : (
            <iframe
              src="https://player.vimeo.com/video/1110327162?autoplay=1&title=0&byline=0&portrait=0"
              width="1056"
              height="594"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className={styles.vslVideoPlayer}
            ></iframe>
          )}
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
        <div className={styles.platformsContent}>
          <div className={styles.platformsContentText}>
            <h1 className={styles.platformsTitle}>
              <span className={styles.primaryColor}>Bloomit</span>{' '}
              <span className={styles.secondaryColor}>Platforms</span>
            </h1>
            
            <h4 className={styles.platformsSubtitle}>¿What features does it offer?</h4>
          </div>
          <div className={styles.platformsImageContainer}>
            <Image
              src="/platform_mobile.png"
              alt="Bloomit Platforms Features"
              width={2336}
              height={2068}
              className={styles.platformsImage}
            />
          </div>
        </div>
      </section>

      {/* 6. Desktools Section */}
      <section className={styles.desktoolsSection}>
        <div className={styles.desktoolsContent}>
          <h1 className={styles.desktoolsTitle}>Desktools</h1>
          
          <div className={styles.desktoolsImageContainer}>
            <Image
              src="/desktools.png"
              alt="Desktools Features"
              width={2692}
              height={2051}
              className={styles.desktoolsImage}
            />
          </div>
        </div>
      </section>

      {/* 7. Footer Section */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          {/* Logo y redes sociales */}
          <div className={styles.footerBrand}>
            <Image
              src="/logotipo_horizontal.png"
              alt="Bloomit Logo"
              width={236}
              height={100}
              className={styles.footerLogo}
            />
            <div className={styles.socialSection}>
              <p className={styles.followText}>Follow us on:</p>
              <div className={styles.socialIcons}>
                <a href="#" className={styles.socialIcon}>
                  <FaLinkedinIn />
                </a>
                <a href="#" className={styles.socialIcon}>
                  <FaXTwitter />
                </a>
                <a href="#" className={styles.socialIcon}>
                  <FaInstagram />
                </a>
                <a href="#" className={styles.socialIcon}>
                  <FaTiktok />
                </a>
                <a href="#" className={styles.socialIcon}>
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>

          {/* Columnas de enlaces */}
          <div className={styles.footerColumns}>
            <div className={styles.footerColumn}>
              <h4 className={styles.columnTitle}>Services</h4>
              <ul className={styles.columnLinks}>
                <li><a href="#">Online Store</a></li>
                <li><a href="#">Digital Management</a></li>
                <li><a href="#">Digital Marketing</a></li>
              </ul>
            </div>

            <div className={styles.footerColumn}>
              <h4 className={styles.columnTitle}>Company</h4>
              <ul className={styles.columnLinks}>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>

            <div className={styles.footerColumn}>
              <h4 className={styles.columnTitle}>Legal</h4>
              <ul className={styles.columnLinks}>
                <li><a href="#">Terms of Use</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Cookies</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className={styles.footerDivider}></div>

        {/* Copyright */}
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>© 2025 Bloomit. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
