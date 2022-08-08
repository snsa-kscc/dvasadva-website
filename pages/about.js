import { motion } from "framer-motion";

const content = {
  animate: {
    transition: { staggerChildren: 0.1 },
  },
};

const title = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const inputs = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const ContactPage = () => {
  return (
    <motion.section exit={{ opacity: 0 }} className="relative text-gray-700 body-font">
      <motion.div variants={content} animate="animate" initial="initial" className="container px-5 py-24 mx-auto">
        <motion.div variants={title} className="flex flex-col w-full mb-12">
          <h1 className="mb-4 text-2xl font-medium text-gray-900 sm:text-3xl title-font text-center">About Us</h1>
          <p className="mx-auto my-3 text-base leading-relaxed lg:w-2/3">
            Ok, we all know how it goes. You land on a website of some random business on the Internet run by some random gals and guys and immediately you are
            slapped by fancy marketing gibberish buzz words such as <i>experiences, rich & digital</i> and of course given the fact we live in 2022
            <i> machine learning & blazingly fast</i> has to be involved, right?
          </p>
          <p className="mx-auto my-3 text-base leading-relaxed lg:w-2/3">
            Hell, I would have thought exactly the same & I really strive to live by the principle of finding niceties in most of situations. At least I'm
            trying, I'm trying <i>Ringo to be the good shepherd.</i>
          </p>
          <p className="mx-auto my-3 text-base leading-relaxed lg:w-2/3">
            Let's be honest, by now I've already lost 95% of you and to be really honest I would have lost most of you anyway no matter what I write, so in a
            manner of good scientist I'm gonna propose a hypothesis which goes something like this:
          </p>
          <p className="mx-auto my-3 text-base leading-relaxed lg:w-2/3">
            <i>In order to be concise, one has to employ certain level of abstraction.</i>
          </p>
          <p className="mx-auto my-3 text-base leading-relaxed lg:w-2/3">
            Outlandish? Of course not. But, allow me to explain. Look, we are here in a software development business, so nothing here is a rocket science. We
            build web apps and web sites, period. You know, apps, these things you interact through your screen with. Or sites, these things you look at, again
            with the agency of your screen. And I expect you to have certain expectations. At least I have. It has to be fast, it has to get the job done. It
            has to be different, but not too different. It has to be perhaps <i>beautiful?</i> Your stakeholders have to be satisfied with the solution, heck,
            even Karen in HR has to be little less pissed off while using products we make. And we all know she is pissed off by default just by the fact she
            has to show up to work every day. And now you tell me how to convey all that jazz in a three letter flashy slogan on the website cover. Tricky,
            right?
          </p>
          <p className="mx-auto my-3 text-base leading-relaxed lg:w-2/3">
            We have to generalize and we have to differentiate. Not to compare and stuff, but if Bob and Alice (sincerely, kudos to Bob and Alice) are doing
            their solutions in PHP or in god forbid .Net, we have to try better. Not for the sake of technology per se, because if I loathe one thing biblically
            & wholeheartedly that is technology/IDE/OS tribalism. But for the sake of you, the consumer. You as a consumer require simply put mission critical
            solutions that work & scale well if need be and I need platforms which my team and I can deliver that promise on. That is why in most cases I'm
            going to propose technologies built upon Node.js stack utilizing Jamstack approach and leveraging microservice architecture. Consequently, you are
            going to get fast page loads, better SEO, seamless scalability and constant possibility of portability and I am going to have great developer
            experience across my team. Let's not forget I have to juggle between the role of an engineer and the manager role. And even though I enjoy af to
            nerd out and try new technologies instantly as they become available not in a single moment am I losing sight from the big picture and I always know
            which role is unfortunately more important. All of this in order to make solutions which are better, <i>richer</i> and the journey while using it is
            pleasant. You know, nice <i>vibe and experience</i>. Right? All of this is an aesthetic in itself.
          </p>
          <p className="mx-auto my-3 text-base leading-relaxed lg:w-2/3">
            However, all of this is nice but we must not get complacent. So after some time maybe I'm going to propose to level up. To utilize power of natural
            language processing to sort out the mess you probably have in your corporate help desk records in order to be more efficient. Or just simple chatbot
            for your web shop to "boost that sweet conversion numbers, bro". That is why we need <i>machine learning and neural nets.</i>
          </p>
          <p className="mx-auto my-3 text-base leading-relaxed lg:w-2/3">
            In all honesty, we all know how it works, you pay, we work. Simple as that. No need to uphold meaningless corpo bs. But we genuinely want you to
            succeed using our solutions and we take great pride in what we do, that is for sure. Sceptic? Legitimately so. You can always consult with some of
            the stated businesses on the home page on our performance and ultimately were they satisfied with us. Maybe it will make you nudge your mind a bit.
            Regardless, mad love, peace out, y'all.
          </p>
          <p className="mx-auto my-3 text-base leading-relaxed lg:w-2/3">Siniša Košćec</p>
          <p className="mx-auto my-3 text-base leading-relaxed lg:w-2/3">Founder and CEO</p>
        </motion.div>
        <motion.div variants={inputs} className="mx-auto lg:w-1/2 md:w-2/3">
          <div className="flex flex-wrap -m-2">
            <div className="w-full p-2 pt-8 mt-8 text-center border-t border-gray-200">
              <a className="text-red-500">office@dvasadva.com</a>
              <p className="my-5 leading-normal">
                Zagrebačka 15
                <br />
                Varaždin, Croatia
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ContactPage;
