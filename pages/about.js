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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere urna nec
            tincidunt praesent semper feugiat nibh sed pulvinar. Orci dapibus ultrices in iaculis. Lorem ipsum dolor sit amet consectetur adipiscing elit ut.
            Dictum varius duis at consectetur lorem donec massa sapien faucibus. Massa tempor nec feugiat nisl pretium fusce. Sed arcu non odio euismod lacinia
            at quis. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra.
            Id faucibus nisl tincidunt eget nullam non nisi est sit. Donec massa sapien faucibus et molestie ac feugiat. Nunc vel risus commodo viverra maecenas
            accumsan lacus. Arcu bibendum at varius vel pharetra vel turpis. Ultrices gravida dictum fusce ut placerat orci nulla. Habitant morbi tristique
            senectus et netus. Sed tempus urna et pharetra pharetra massa massa ultricies mi. Vel fringilla est ullamcorper eget nulla facilisi. Felis eget
            velit aliquet sagittis id consectetur purus ut faucibus. Enim diam vulputate ut pharetra sit amet. Pulvinar proin gravida hendrerit lectus. Lectus
            vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Morbi quis commodo odio aenean sed adipiscing diam donec adipiscing. Convallis
            posuere morbi leo urna molestie at elementum eu. Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Fames ac turpis egestas sed
            tempus urna et pharetra. Ullamcorper a lacus vestibulum sed. Malesuada bibendum arcu vitae elementum curabitur vitae nunc. Sapien eget mi proin sed
            libero. Viverra aliquet eget sit amet tellus cras adipiscing enim. Augue eget arcu dictum varius duis. Donec ultrices tincidunt arcu non sodales
            neque sodales ut etiam. Mauris augue neque gravida in fermentum et sollicitudin ac orci. Nunc eget lorem dolor sed. Iaculis eu non diam phasellus
            vestibulum lorem sed risus. Tincidunt tortor aliquam nulla facilisi cras fermentum. Hac habitasse platea dictumst vestibulum rhoncus. Accumsan lacus
            vel facilisis volutpat. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Nibh ipsum consequat nisl vel. Congue quisque
            egestas diam in arcu cursus euismod quis viverra. Amet luctus venenatis lectus magna fringilla urna. Porta non pulvinar neque laoreet suspendisse
            interdum. Sit amet justo donec enim diam vulputate ut pharetra sit. Mauris commodo quis imperdiet massa tincidunt. Consequat interdum varius sit
            amet. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. In nibh mauris cursus mattis. Cras semper auctor neque vitae tempus. Vitae
            suscipit tellus mauris a diam maecenas. Libero justo laoreet sit amet. Adipiscing diam donec adipiscing tristique risus nec feugiat in. Etiam sit
            amet nisl purus in. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Ornare aenean euismod elementum nisi quis eleifend quam
            adipiscing. Magna ac placerat vestibulum lectus. Convallis convallis tellus id interdum velit. Malesuada proin libero nunc consequat interdum. Erat
            pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu dictum varius duis at consectetur lorem. Sodales ut etiam sit amet nisl
            purus in mollis nunc. Aliquet eget sit amet tellus cras adipiscing. Amet mattis vulputate enim nulla aliquet porttitor. Eros donec ac odio tempor
            orci dapibus. Id porta nibh venenatis cras sed felis eget velit aliquet. Nulla pharetra diam sit amet nisl suscipit. Risus sed vulputate odio ut
            enim blandit volutpat. Elementum integer enim neque volutpat ac tincidunt. Auctor neque vitae tempus quam pellentesque nec nam. In iaculis nunc sed
            augue lacus viverra vitae congue eu.
          </p>
          <p className="mx-auto my-3 text-base leading-relaxed lg:w-2/3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere urna nec
            tincidunt praesent semper feugiat nibh sed pulvinar. Orci dapibus ultrices in iaculis. Lorem ipsum dolor sit amet consectetur adipiscing elit ut.
            Dictum varius duis at consectetur lorem donec massa sapien faucibus. Massa tempor nec feugiat nisl pretium fusce. Sed arcu non odio euismod lacinia
            at quis. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra.
            Id faucibus nisl tincidunt eget nullam non nisi est sit. Donec massa sapien faucibus et molestie ac feugiat. Nunc vel risus commodo viverra maecenas
            accumsan lacus. Arcu bibendum at varius vel pharetra vel turpis. Ultrices gravida dictum fusce ut placerat orci nulla. Habitant morbi tristique
            senectus et netus. Sed tempus urna et pharetra pharetra massa massa ultricies mi. Vel fringilla est ullamcorper eget nulla facilisi. Felis eget
            velit aliquet sagittis id consectetur purus ut faucibus. Enim diam vulputate ut pharetra sit amet. Pulvinar proin gravida hendrerit lectus. Lectus
            vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Morbi quis commodo odio aenean sed adipiscing diam donec adipiscing. Convallis
            posuere morbi leo urna molestie at elementum eu. Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Fames ac turpis egestas sed
            tempus urna et pharetra. Ullamcorper a lacus vestibulum sed. Malesuada bibendum arcu vitae elementum curabitur vitae nunc. Sapien eget mi proin sed
            libero. Viverra aliquet eget sit amet tellus cras adipiscing enim. Augue eget arcu dictum varius duis. Donec ultrices tincidunt arcu non sodales
            neque sodales ut etiam. Mauris augue neque gravida in fermentum et sollicitudin ac orci. Nunc eget lorem dolor sed. Iaculis eu non diam phasellus
            vestibulum lorem sed risus. Tincidunt tortor aliquam nulla facilisi cras fermentum. Hac habitasse platea dictumst vestibulum rhoncus. Accumsan lacus
            vel facilisis volutpat. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Nibh ipsum consequat nisl vel. Congue quisque
            egestas diam in arcu cursus euismod quis viverra. Amet luctus venenatis lectus magna fringilla urna. Porta non pulvinar neque laoreet suspendisse
            interdum. Sit amet justo donec enim diam vulputate ut pharetra sit. Mauris commodo quis imperdiet massa tincidunt. Consequat interdum varius sit
            amet. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. In nibh mauris cursus mattis. Cras semper auctor neque vitae tempus. Vitae
            suscipit tellus mauris a diam maecenas. Libero justo laoreet sit amet. Adipiscing diam donec adipiscing tristique risus nec feugiat in. Etiam sit
            amet nisl purus in. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Ornare aenean euismod elementum nisi quis eleifend quam
            adipiscing. Magna ac placerat vestibulum lectus. Convallis convallis tellus id interdum velit. Malesuada proin libero nunc consequat interdum. Erat
            pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu dictum varius duis at consectetur lorem. Sodales ut etiam sit amet nisl
            purus in mollis nunc. Aliquet eget sit amet tellus cras adipiscing. Amet mattis vulputate enim nulla aliquet porttitor. Eros donec ac odio tempor
            orci dapibus. Id porta nibh venenatis cras sed felis eget velit aliquet. Nulla pharetra diam sit amet nisl suscipit. Risus sed vulputate odio ut
            enim blandit volutpat. Elementum integer enim neque volutpat ac tincidunt. Auctor neque vitae tempus quam pellentesque nec nam. In iaculis nunc sed
            augue lacus viverra vitae congue eu.
          </p>
          <p className="mx-auto my-3 text-base leading-relaxed lg:w-2/3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere urna nec
            tincidunt praesent semper feugiat nibh sed pulvinar. Orci dapibus ultrices in iaculis. Lorem ipsum dolor sit amet consectetur adipiscing elit ut.
            Dictum varius duis at consectetur lorem donec massa sapien faucibus. Massa tempor nec feugiat nisl pretium fusce. Sed arcu non odio euismod lacinia
            at quis. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra.
            Id faucibus nisl tincidunt eget nullam non nisi est sit. Donec massa sapien faucibus et molestie ac feugiat. Nunc vel risus commodo viverra maecenas
            accumsan lacus. Arcu bibendum at varius vel pharetra vel turpis. Ultrices gravida dictum fusce ut placerat orci nulla. Habitant morbi tristique
            senectus et netus. Sed tempus urna et pharetra pharetra massa massa ultricies mi. Vel fringilla est ullamcorper eget nulla facilisi. Felis eget
            velit aliquet sagittis id consectetur purus ut faucibus. Enim diam vulputate ut pharetra sit amet. Pulvinar proin gravida hendrerit lectus. Lectus
            vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Morbi quis commodo odio aenean sed adipiscing diam donec adipiscing. Convallis
            posuere morbi leo urna molestie at elementum eu. Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Fames ac turpis egestas sed
            tempus urna et pharetra. Ullamcorper a lacus vestibulum sed. Malesuada bibendum arcu vitae elementum curabitur vitae nunc. Sapien eget mi proin sed
            libero. Viverra aliquet eget sit amet tellus cras adipiscing enim. Augue eget arcu dictum varius duis. Donec ultrices tincidunt arcu non sodales
            neque sodales ut etiam. Mauris augue neque gravida in fermentum et sollicitudin ac orci. Nunc eget lorem dolor sed. Iaculis eu non diam phasellus
            vestibulum lorem sed risus. Tincidunt tortor aliquam nulla facilisi cras fermentum. Hac habitasse platea dictumst vestibulum rhoncus. Accumsan lacus
            vel facilisis volutpat. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Nibh ipsum consequat nisl vel. Congue quisque
            egestas diam in arcu cursus euismod quis viverra. Amet luctus venenatis lectus magna fringilla urna. Porta non pulvinar neque laoreet suspendisse
            interdum. Sit amet justo donec enim diam vulputate ut pharetra sit. Mauris commodo quis imperdiet massa tincidunt. Consequat interdum varius sit
            amet. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. In nibh mauris cursus mattis. Cras semper auctor neque vitae tempus. Vitae
            suscipit tellus mauris a diam maecenas. Libero justo laoreet sit amet. Adipiscing diam donec adipiscing tristique risus nec feugiat in. Etiam sit
            amet nisl purus in. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Ornare aenean euismod elementum nisi quis eleifend quam
            adipiscing. Magna ac placerat vestibulum lectus. Convallis convallis tellus id interdum velit. Malesuada proin libero nunc consequat interdum. Erat
            pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu dictum varius duis at consectetur lorem. Sodales ut etiam sit amet nisl
            purus in mollis nunc. Aliquet eget sit amet tellus cras adipiscing. Amet mattis vulputate enim nulla aliquet porttitor. Eros donec ac odio tempor
            orci dapibus. Id porta nibh venenatis cras sed felis eget velit aliquet. Nulla pharetra diam sit amet nisl suscipit. Risus sed vulputate odio ut
            enim blandit volutpat. Elementum integer enim neque volutpat ac tincidunt. Auctor neque vitae tempus quam pellentesque nec nam. In iaculis nunc sed
            augue lacus viverra vitae congue eu.
          </p>
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
