import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { useLanguage } from '@/shared/contexts/LanguageContext';

const Reviews: React.FC = () => {
  const {  } = useLanguage();
  
  const reviews = [
    {
      name: "Dimash Yntyqbay",
      title: "NFactorial Incubator",
      avatar: "https://res-console.cloudinary.com/dq2pbzrtu/thumbnails/v1/image/upload/v1749808016/cGhvdG9fMjAyNS0wNi0wMV8xMS01OS00OF93bmJ1ZG8=/drilldown",
      quote: "Raven has completely revolutionized how we approach business meetings. The real-time transcription is incredibly accurate, and the AI summaries save us hours every week. This platform is the future of meeting productivity.",
      rating: 5,
      date: "2024-06-15"
    },
    {
      name: "Artyqbay Arnur",
      title: "NFactorial Incubator",
      avatar: "https://res-console.cloudinary.com/dq2pbzrtu/thumbnails/v1/image/upload/v1749808168/YXJudXJfdHNrYnVy/drilldown",
      quote: "Raven is more than just a platform; it's a complete ecosystem for modern teams. From tracking action items to managing follow-ups, it handles everything seamlessly.",
      rating: 5,
      date: "2024-06-15"
    },
    {
      name: "Yerdaulet Damir",
      title: "Managing Director, Global Textiles Ltd.",
      avatar: "https://res-console.cloudinary.com/dq2pbzrtu/thumbnails/v1/image/upload/v1749808016/cGhvdG9fMjAyMy0xMi0xM18xOS01OC00MV92ZW0zd3I=/drilldown",
      quote: "The search feature on Raven is exceptional. It allows us to find any discussion or decision from past meetings instantly. Game changer for our team.",
      rating: 5,
      date: "2024-06-15"
    },
    {
      name: "Raihan Karim",
      title: "Founder, Karim Solutions",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
      quote: "The AI analysis feature is outstanding. It simplifies the entire process of extracting key insights from our meetings and creates professional summaries.",
      rating: 5,
      date: "2024-06-15"
    },
    {
      name: "Rafiul Islam",
      title: "CEO of Apex Technologies",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&fit=crop&crop=face",
      quote: "Raven has revolutionized how we approach team collaboration. The integration capabilities are seamless and the user experience is top-notch.",
      rating: 5,
      date: "2024-06-15"
    }
  ];

  const topAvatars = [
    "https://res-console.cloudinary.com/dq2pbzrtu/thumbnails/v1/image/upload/v1749808016/cGhvdG9fMjAyNS0wNi0wMV8xMS01OS00OF93bmJ1ZG8=/drilldown",
    "https://res-console.cloudinary.com/dq2pbzrtu/thumbnails/v1/image/upload/v1749808168/YXJudXJfdHNrYnVy/drilldown",
    "https://res-console.cloudinary.com/dq2pbzrtu/thumbnails/v1/image/upload/v1749808016/cGhvdG9fMjAyMy0xMi0xM18xOS01OC00MV92ZW0zd3I=/drilldown",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&fit=crop&crop=face"
  ];

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex space-x-1 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );

  return (
    <section className="bg-gray-900 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gray-800 rounded-3xl p-12 shadow-sm border border-gray-700">
          {/* Header Section */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Avatar Stack */}
            <div className="flex justify-center mb-6">
              <div className="flex -space-x-2">
                {topAvatars.map((avatar, index) => (
                  <img
                    key={index}
                    src={avatar}
                    alt={`User ${index + 1}`}
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-8 mb-6">
              <div className="text-center">
                <div 
                  className="text-5xl font-bold text-white mb-2"
                  style={{ fontFamily: 'Gilroy, sans-serif' }}
                >
                  550+
                </div>
                <div 
                  className="text-lg font-semibold text-gray-200"
                  style={{ fontFamily: 'Gilroy, sans-serif' }}
                >
                  Reviews from Industry Leaders
                </div>
              </div>
              <div className="text-center">
                <div 
                  className="text-3xl font-bold text-white mb-2"
                  style={{ fontFamily: 'Gilroy, sans-serif' }}
                >
                  10,000+
                </div>
                <div 
                  className="text-lg text-gray-300"
                  style={{ fontFamily: 'Gilroy, sans-serif' }}
                >
                  users already using Raven
                </div>
              </div>
            </div>
            
            <div className="flex justify-center gap-4">
              <motion.button 
                className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                style={{ fontFamily: 'Gilroy, sans-serif' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Get a free trial →
              </motion.button>
              <motion.button 
                className="border-2 border-gray-300 text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm hover:shadow-lg transform hover:-translate-y-1"
                style={{ fontFamily: 'Gilroy, sans-serif' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Read more reviews →
              </motion.button>
            </div>
          </motion.div>

          {/* Reviews Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {reviews.slice(0, 5).map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={index === 0 ? "md:col-span-2 lg:col-span-1 lg:row-span-2" : ""}
              >
                <Card className="h-full bg-white border border-gray-200 hover:shadow-xl hover:border-gray-300 transition-all duration-300 rounded-2xl transform hover:-translate-y-2 hover:scale-[1.02]">
                  <CardContent className="p-6">
                    {/* Rating and Date */}
                    <div className="flex justify-between items-start mb-4">
                      <StarRating rating={review.rating} />
                      <span 
                        className="text-sm text-gray-400"
                        style={{ fontFamily: 'Gilroy, sans-serif' }}
                      >
                        {review.date}
                      </span>
                    </div>
                    
                    {/* Quote */}
                    <p 
                      className="text-gray-700 leading-relaxed mb-6 text-sm"
                      style={{ fontFamily: 'Gilroy, sans-serif' }}
                    >
                      "{review.quote}"
                    </p>
                    
                    {/* Author Info */}
                    <div className="flex items-center space-x-3">
                      <motion.img
                        src={review.avatar}
                        alt={`${review.name} avatar`}
                        className="w-12 h-12 rounded-full object-cover border-2 border-gray-100"
                        loading="lazy"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      />
                      <div>
                        <h4 
                          className="font-semibold text-gray-900 text-sm"
                          style={{ fontFamily: 'Gilroy, sans-serif' }}
                        >
                          {review.name}
                        </h4>
                        <p 
                          className="text-xs text-gray-500"
                          style={{ fontFamily: 'Gilroy, sans-serif' }}
                        >
                          {review.title}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;