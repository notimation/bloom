'use client';
import Image from "next/image";
import styles from "./page.module.css";
import { FaLinkedinIn, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { useState } from 'react';
import { useTranslations } from '../hooks/useTranslations';

export default function Home() {
  const [showVideo, setShowVideo] = useState(false);
  const { t, locale, getImageSrc } = useTranslations();

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
              width={203}
              height={73}
              priority
            />
          </div>
          
          {/* Botón CTA */}
          <button className={styles.headerButton}>
            {t.header.cta}
          </button>
        </div>
      </header>

      {/* 1. Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroIllustration}>
          <Image
            src="/illustrations/hero.png"
            alt="Hero illustration"
            width={635}
            height={636}
            priority
          />
        </div>
        <div className={styles.heroContentContainer}>
            <h1 className={styles.heroTitle}>
              {t.hero.title.launch} <span className={styles.primaryColor}>{t.hero.title.fast}</span> {t.hero.title.and} <span className={styles.secondaryColor}>{t.hero.title.confidently}</span>
            </h1>
            <h2 className={styles.heroSubtitle}>{t.hero.subtitle1}</h2>
            <h2 className={styles.heroSubtitle}>
              {t.hero.subtitle2} <span className={styles.fontPrimaryColor}>{t.hero.subtitle2_handle} <span className={styles.primaryColor}>{t.hero.subtitle2_rest}</span></span>
            </h2>
            <p className={styles.heroDescription}>
              <span className={styles.primaryBold}>{t.hero.bloom_ai}</span> {t.hero.description} <span className={styles.boldText}>{t.hero.description_mentored}</span>{t.hero.description_middle} <span className={styles.boldText}>{t.hero.description_ecommerce}</span> {t.hero.description_end} <span className={styles.secondaryBold}>{t.hero.description_free}</span>
            </p>
            <button className={styles.heroButton}>
              {t.hero.cta}
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
              src={getImageSrc("/video_thumnail")}
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
            src={getImageSrc("/onboarding_roadmap")}
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
            <h3 className={styles.ctaTitle}>{t.cta_section.title}</h3>
            <h5 className={styles.ctaSubtitle}>{t.cta_section.subtitle}</h5>
          </div>
          
          <div className={styles.ctaButtonContainer}>
            <button className={styles.ctaButton}>
              {t.cta_section.button}
            </button>
            <p className={styles.ctaDisclaimer}>{t.cta_section.disclaimer}</p>
          </div>
        </div>
      </section>

      {/* 5. Bloomit Platforms Section */}
      <section className={styles.bloomitPlatforms}>
        <div className={styles.platformsContent}>
          <div className={styles.platformsContentText}>
            <h1 className={styles.platformsTitle}>
              <span className={styles.secondaryColor}>{t.platforms.mobile}</span>{' '}
              <span className={styles.primaryColor}>{t.platforms.mentor}</span>{' '}
              <span className={styles.secondaryColor}>{t.platforms.app}</span>
            </h1>
            
            <h4 className={styles.platformsSubtitle}>{t.platforms.subtitle}</h4>
          </div>
          <div className={styles.platformsImageContainer}>
            <Image
              src={getImageSrc("/platform_mobile")}
              alt="Bloomit Platforms Features"
              width={2520}
              height={1626}
              className={styles.platformsImage}
            />
          </div>
        </div>
      </section>

      {/* 6. Desktools Section */}
      <section className={styles.desktoolsSection}>
        <div className={styles.desktoolsContent}>
          <h1 className={styles.desktoolsTitle}>{t.desktools.title} <span className={styles.secondaryColor}>{t.desktools.ecommerce}</span></h1>
          
          <div className={styles.desktoolsImageContainer}>
            <Image
              src={getImageSrc("/desktools")}
              alt="Desktools Features"
              width={2762}
              height={2128}
              className={styles.desktoolsImage}
            />
          </div>
        </div>
      </section>

      {/* 7. All-in-One Business Platform Section */}
      <section className={styles.allInOneSection}>
        <div className={styles.allInOneContent}>
          <h1 className={styles.allInOneTitle}>
            <span className={styles.primaryColor}>{t.all_in_one.title}</span>{' '}
            <span className={styles.secondaryColor}>{t.all_in_one.rest}</span>
          </h1>
          
          <div className={styles.allInOneImageContainer}>
            <Image
              src={getImageSrc("/platforms")}
              alt="All-in-One Business Platform"
              width={2465}
              height={1479}
              className={styles.allInOneImage}
            />
          </div>
        </div>
      </section>

      {/* 8. Footer Section */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          {/* Logo y redes sociales */}
          <div className={styles.footerBrand}>
            <Image
              src="/logotipo_horizontal.png"
              alt="Bloomit Logo"
              width={203}
              height={73}
              className={styles.footerLogo}
            />
            <div className={styles.socialSection}>
              <p className={styles.followText}>{t.footer.follow}</p>
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
              <h4 className={styles.columnTitle}>{t.footer.services.title}</h4>
              <ul className={styles.columnLinks}>
                <li><a href="#">{t.footer.services.online_store}</a></li>
                <li><a href="#">{t.footer.services.digital_management}</a></li>
                <li><a href="#">{t.footer.services.digital_marketing}</a></li>
              </ul>
            </div>

            <div className={styles.footerColumn}>
              <h4 className={styles.columnTitle}>{t.footer.company.title}</h4>
              <ul className={styles.columnLinks}>
                <li><a href="#">{t.footer.company.about}</a></li>
                <li><a href="#">{t.footer.company.blog}</a></li>
                <li><a href="#">{t.footer.company.contact}</a></li>
              </ul>
            </div>

            <div className={styles.footerColumn}>
              <h4 className={styles.columnTitle}>{t.footer.legal.title}</h4>
              <ul className={styles.columnLinks}>
                <li><a href="#">{t.footer.legal.terms}</a></li>
                <li><a href="#">{t.footer.legal.privacy}</a></li>
                <li><a href="#">{t.footer.legal.cookies}</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className={styles.footerDivider}></div>

        {/* Copyright */}
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>{t.footer.copyright}</p>
        </div>
      </footer>
    </div>
  );
}
