'use client';
import { motion } from 'framer-motion';
import { BackgroundGradient } from "./ui/background-gradient";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const Contact = () => {
  const contactText = "We'd love to hear from you! Reach out for inquiries, partnerships, or demos.";

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
        >
          Contact Us
        </motion.h2>
        <TextGenerateEffect words={contactText} />
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          {[
            {
              title: "Email",
              value: "contact@thevrestate.com",
              icon: "📧",
              link: "mailto:contact@thevrestate.com"
            },
            {
              title: "Phone",
              value: "+91-XXXX-XXXXXX",
              icon: "📱",
              link: "tel:+91XXXXXXXXXX"
            },
            {
              title: "Office",
              value: "[Your Location]",
              icon: "🏢",
              link: "https://maps.google.com"
            }
          ].map((item, index) => (
            <BackgroundGradient key={index} className="rounded-xl p-6 bg-black">
              <motion.a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                className="flex items-start space-x-4"
              >
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.value}</p>
                </div>
              </motion.a>
            </BackgroundGradient>
          ))}
          <BackgroundGradient className="rounded-xl p-6 bg-black mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Services We Offer</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "3D Property Models",
                    description: "High-quality, detailed virtual replicas of properties."
                  },
                  {
                    title: "Virtual Reality Tours",
                    description: "Immersive experiences that allow clients to walk through properties from anywhere."
                  },
                  {
                    title: "Custom VR Solutions",
                    description: "Tailored packages for real estate professionals to meet specific needs."
                  },
                  {
                    title: "Interactive Click-Through Models",
                    description: "Engage buyers with user-friendly, interactive features."
                  }
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border-l-2 border-blue-500 pl-4"
                  >
                    <h4 className="text-white font-semibold mb-1">{service.title}</h4>
                    <p className="text-gray-400 text-sm">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </BackgroundGradient>
        </div>

        <BackgroundGradient className="rounded-xl p-6 bg-black">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
                  placeholder="Your email"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-400 mb-2">Subject</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
                placeholder="Subject"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-2">Message</label>
              <textarea
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500 h-32"
                placeholder="Your message"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold"
            >
              Send Message
            </motion.button>
          </motion.form>
        </BackgroundGradient>
      </div>
    </div>
  );
};

export default Contact;