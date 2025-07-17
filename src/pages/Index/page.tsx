import ChevronRightSVG from '@assets/icons/chevron-right.svg?react';
import QuoteClose from '@assets/icons/quote_close.svg?react';
import QuoteOpen from '@assets/icons/quote_open.svg?react';
import AI1PNG from '@assets/landing/ai/ai_1.png';
import AI2PNG from '@assets/landing/ai/ai_2.png';
import AI3PNG from '@assets/landing/ai/ai_3.png';
import AI4PNG from '@assets/landing/ai/ai_4.png';
import AI5PNG from '@assets/landing/ai/ai_5.png';
import AI6PNG from '@assets/landing/ai/ai_6.png';
import AI7PNG from '@assets/landing/ai/ai_7.png';
import Image1PNG from '@assets/landing/images/image_1.png';
import Image2PNG from '@assets/landing/images/image_2.png';
import Reviewer1PNG from '@assets/landing/reviewer/reviewer_1.png';
import Reviewer2PNG from '@assets/landing/reviewer/reviewer_2.png';
import Reviewer3PNG from '@assets/landing/reviewer/reviewer_3.png';
import Reviewer4PNG from '@assets/landing/reviewer/reviewer_4.png';
import Reviewer5PNG from '@assets/landing/reviewer/reviewer_5.png';
import Reviewer6PNG from '@assets/landing/reviewer/reviewer_6.png';
import IndexVido from '@assets/landing/video.mp4';
import styles from './page.module.css';

const handleClickPreRegistration = () => {
  window.open('https://forms.gle/L62vmyWkw22iodBa6', '_blank');
};

const IndexPageComponent1 = () => {
  return (
    <div className={styles.heroSection}>
      <span className={styles.heroBg} />
      <div className={styles.heroContent}>
        <div className={styles.heroTitleWrap}>
          <p className={styles.heroTitle1}>
            Think and Create,
            <br />
            Make your own item
          </p>
          <p className={styles.heroTitle2}>With Ai-Co</p>
        </div>
        <p className={styles.heroDesc}>Just type in one line - the best AI team handles the rest.</p>
        <button className={styles.heroButton} onClick={handleClickPreRegistration}>
          Sign Up for Pre-Registration
          <ChevronRightSVG className={styles.heroButtonIcon} />
        </button>
      </div>
    </div>
  );
};

const IndexPageComponent2 = () => {
  const images = [
    {
      img: Image1PNG,
      alt: 'The best team members collaborate on their own',
    },
    {
      img: Image2PNG,
      alt: 'Check out the deliverables immediately and communicate in chat!',
    },
  ];
  return (
    <div className={styles.section2}>
      <p className={styles.section2Title}>
        Expensive outsourcing? Complex AI tools?
        <br />
        Now, just Ai-Co
      </p>
      <div className={styles.section2Grid}>
        {images.map((e, i) => (
          <div className={styles.section2Card} key={i}>
            <img src={e.img} className={styles.section2Img} />
            <p className={styles.section2ImgDesc}>{e.alt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const IndexPageComponent3 = () => {
  return (
    <div className={styles.section3}>
      <p className={styles.section3Title}>
        Expensive outsourcing? Complex AI tools?
        <br />
        Now, just Ai-Co
      </p>
      <video muted autoPlay loop className={styles.section3Video}>
        <source src={IndexVido} type="video/mp4" />
      </video>
    </div>
  );
};

const IndexPageComponent4 = () => {
  const images = [AI1PNG, AI2PNG, AI3PNG, AI4PNG, AI5PNG, AI6PNG, AI7PNG];
  return (
    <div className={styles.section4}>
      <p className={styles.section4Title}>We provide the optimal AI Agent for your item</p>
      <div className={styles.section4CarouselWrap}>
        <div className={styles.section4CarouselLeft} />
        <div className={styles.section4CarouselRight} />
        <div className={styles.section4CarouselTrack}>
          {[...images, ...images].map((e, i) => (
            <img src={e} className={styles.section4CarouselImg} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

const IndexPageComponent5 = () => {
  const reviews = [
    {
      text: 'I was able to use the Ai-co trial and produce much higher results.',
      image: Reviewer1PNG,
      reviewer: 'Social Media Marketers, A',
    },
    {
      text: "It's an innovative item. It was like working with people, not AI.",
      image: Reviewer2PNG,
      reviewer: 'Content creator, K.',
    },
    {
      text: "I didn't have a designer or a planner, but I feel like I have a team. Now I think anyone can become a CEO.",
      image: Reviewer3PNG,
      reviewer: 'Not-for-profit coordinator, L.',
    },
    {
      text: 'My professor asked me how many days the assignment took. I made it with Ai-co in 10 minutes!',
      image: Reviewer4PNG,
      reviewer: 'Student planner, D',
    },
    {
      text: 'When I really typed in just one line, I got goosebumps when I saw AI working with AI.',
      image: Reviewer5PNG,
      reviewer: 'Freelance trainer, R.',
    },
    {
      text: "It's a great item. I don't think I need to hire anyone anymore",
      image: Reviewer6PNG,
      reviewer: 'A solo entrepreneur, E.',
    },
  ];
  return (
    <div className={styles.section5}>
      <div className={styles.section5Track}>
        {[...reviews, ...reviews].map((e, i) => (
          <div className={styles.section5Card} key={i}>
            <div className={styles.section5CardContent}>
              <QuoteOpen className={styles.section5QuoteOpen} />
              <p className={styles.section5Text}>{e.text}</p>
              <QuoteClose className={styles.section5QuoteClose} />
            </div>
            <div className={styles.section5Reviewer}>
              <img src={e.image} className={styles.section5ReviewerImg} />
              {e.reviewer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const IndexPageComponent6 = () => {
  return (
    <div className={styles.section6}>
      <div className={styles.section6TitleWrap}>
        <p className={styles.section6Title1}>Be the first to join the huge wave that creates the future.</p>
        <p className={styles.section6Title2}>Change the world with Ai-Co</p>
      </div>
      <button className={styles.section6Button} onClick={handleClickPreRegistration}>
        Sign Up for Pre-Registration
        <ChevronRightSVG className={styles.section6ButtonIcon} />
      </button>
      <p className={styles.section6ButtonDesc}>
        If you pre-register, you can use it first
        <br />
        after the product is released
      </p>
    </div>
  );
};

const IndexPage = () => {
  return (
    <div className={styles.indexPage}>
      <div className={styles.indexPageWrap}>
        <IndexPageComponent1 />
        <IndexPageComponent2 />
        <IndexPageComponent4 />
        <IndexPageComponent3 />
        <IndexPageComponent5 />
        <IndexPageComponent6 />
      </div>
      <div className={styles.section7}>
        <p className={styles.section7Text}>copyright 2025 Ai-Co. All rights reserved.</p>
        <p className={styles.section7Text}>contact us: apsxhtm0625@gmail.com</p>
      </div>
    </div>
  );
};

export default IndexPage;
