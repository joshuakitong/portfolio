import { Code, AudioLines, Gamepad2, Sparkles } from 'lucide-react';

export const summaries = [
  {
    name: 'Web Development',
    id: 'web',
    icon: <Code size={48} />,
    summary: (
    <>
      I graduated with a Bachelor of Science in <strong>Information Technology</strong>, majoring in <strong>Software Development</strong>, in 2017.<br /><br />

      In 2018, I worked as a <strong>Front-End Web Developer</strong> at Qualis Consulting Inc., developing web-based systems for U.S. utility cooperatives 
       using <strong>ASP.NET (C#)</strong>, <strong>AngularJS</strong>, <strong>HTML</strong>, <strong>CSS</strong>, and <strong>Kendo UI</strong>. I also trained 
       in <strong>Angular</strong> and gained some back-end experience with <strong>PL/SQL</strong>.<br /><br />

      In 2021, I shifted to pursuing my creative careers full-time and paused my developer career. In mid-2025, I decided to return to development and have been catching up 
       on newer technologies — mainly <strong>React</strong>, <strong>Angular</strong>, and <strong>Python</strong> — through hands-on projects.
    </>
    ),
    link: "/webdev",
  },
  {
    name: 'Music Production',
    id: 'music',
    icon: <AudioLines size={48} />,
    summary: (
    <>
      My creative journey began during the early stages of the pandemic in 2020, when I rediscovered my passion for music. Around that time, my brother and his friends 
       launched a record label and collective called BOX84, and I’ve been involved in the full production process ever since.<br /><br />

      I’ve learned to <strong>make beats</strong>, <strong>write and arrange songs</strong>, <strong>mix and master tracks</strong>, <strong>edit videos and graphics</strong>
       , <strong>release music across various platforms</strong>, and <strong>manage artists and social media pages</strong>. I primarily use <strong>FL Studio</strong>
       , <strong>Adobe Premiere Pro</strong>, and <strong>Photoshop</strong>.<br /><br />

      Since then, I’ve produced over a hundred tracks, generating over a million total streams across various platforms.
    </>
    ),
    link: "/music",
  },
  {
    name: 'Gaming & Streaming',
    id: 'gaming',
    icon: <Gamepad2 size={48} />,
    summary: (
    <>
      I’ve been a gamer for as long as I can remember — it’s something I’ve always loved and dreamt of turning into a career. It’s also where I first began developing 
       my <strong>problem-solving</strong> and <strong>critical thinking skills</strong>.<br /><br />

      In 2021, when NFT gaming surged during the altcoin season, I didn’t hesitate. I pursued my creative careers full-time, became 
       a <strong>competitive Axie Infinity player</strong>, and a <strong>coach</strong> and <strong>manager</strong> to a few scholars.<br /><br />

      A year later, as the NFT hype faded, I transitioned into being a <strong>Twitch streamer</strong> and <strong>content creator</strong> as Kits2g. I built a following 
       of thousands, consistently streamed to hundreds per session, and regularly hosted community events, marathon streams, and giveaways.
    </>
    ),
    link: "/gaming",
  },
  {
    name: 'Others',
    id: 'others',
    icon: <Sparkles size={48} />,
    summary: (
    <>
      Other roles I’ve taken on include <strong>yarn producer</strong> for our family's yarn business, <strong>sound technician</strong> for our family’s sound system 
       business, <strong>graphic designer</strong> for small organizations like GDG Baguio, <strong>transcriptionist</strong> for 
       Insight Asia, <strong>teacher</strong> and <strong>coach</strong> in both gaming and music, and a <strong>cryptocurrency trader</strong> too.<br/><br/>

      Outside of work, I enjoy a wide range of hobbies — from reading book and watching shows to playing games — continually fueling my creativity and curiosity.
    </>
    ),
    link: "/others",
  },
];