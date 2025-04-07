import  { useEffect, useRef, useState } from "react";
import { projectsData } from "../assets/assets";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

function Certificate() {
  const [cardsToShow, setCardsToShow] = useState(1);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(Math.min(projectsData.length, 3));
      } else if (window.innerWidth >= 768) {
        setCardsToShow(2);
      } else {
        setCardsToShow(1);
      }
    };
    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const container = scrollContainerRef.current;
      if (container) {
        const scrollPosition = container.scrollLeft;
        const cardWidth = container.offsetWidth / cardsToShow;
        const newIndex = Math.round(scrollPosition / cardWidth);
        setActiveIndex(newIndex);
      }
    };

    const container = scrollContainerRef.current;
    container?.addEventListener("scroll", handleScroll);
    return () => container?.removeEventListener("scroll", handleScroll);
  }, [cardsToShow]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
    const container = scrollContainerRef.current;
    if (container) {
      const cardWidth = container.offsetWidth / cardsToShow;
      container.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.section
      id="certification"
      className="relative py-12 px-4 sm:px-6 w-full bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-8"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Certifications
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            My professional achievements and qualifications
          </p>
        </motion.div>

        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto flex gap-4 pb-4 scrollbar-hide"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {projectsData.map((project, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 bg-gray-800/50 rounded-lg p-4 border border-gray-700/50 hover:border-blue-400/30 transition-all"
                style={{
                  flex: `0 0 ${Math.min(100, 100 / cardsToShow)}%`,
                  scrollSnapAlign: "start",
                  maxWidth: "400px",
                }}
                whileHover={{ y: -5 }}
              >
                <div className="flex flex-col h-full">
                  <img
                    className="w-full h-40 object-contain mb-4 rounded"
                    src={project.image}
                    alt={project.title}
                  />
                  <h3 className="text-lg font-medium text-white mb-2">
                    {project.title}
                  </h3>
                  <motion.a
                    href={project.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                    whileHover={{ x: 3 }}
                  >
                    <FiExternalLink />
                    <span>View Certificate</span>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-4">
            {projectsData.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`mx-1 w-2 h-2 rounded-full transition-colors ${
                  activeIndex === index ? "bg-blue-500 w-4" : "bg-gray-600"
                }`}
                aria-label={`Go to certificate ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Certificate;