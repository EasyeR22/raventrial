import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { useLanguage } from '@/shared/contexts/LanguageContext';

const Reviews: React.FC = () => {
  const { t } = useLanguage();
  
  const reviews = [
    {
      name: "Sarah Chen",
      company: "TechCorp",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face",
      quote: "This tool completely transformed how our team handles meeting follow-ups. No more missed action items or unclear decisions.",
      rating: 5
    },
    {
      name: "Marcus Johnson",
      company: "StartupXYZ",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
      quote: "The AI summaries are incredibly accurate. It's like having a dedicated note-taker in every meeting without the cost.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "Design Studio",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
      quote: "Finally, a solution that actually works. The integration with our existing tools was seamless and the results immediate.",
      rating: 5
    },
    {
      name: "David Kim",
      company: "Global Inc",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
      quote: "Our productivity increased by 40% since implementing this. The time saved on manual note-taking is incredible.",
      rating: 5
    },
    {
      name: "Lisa Thompson",
      company: "Consulting Pro",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&fit=crop&crop=face",
      quote: "The search functionality is a game-changer. Finding specific discussions from months ago takes seconds instead of hours.",
      rating: 5
    },
    {
      name: "Alex Morgan",
      company: "Innovation Labs",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=face",
      quote: "Best investment we've made for our remote team. Everyone stays aligned and nothing falls through the cracks anymore.",
      rating: 5
    }
  ];

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex space-x-1">
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
    <section className="bg-white py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 
            className="text-4xl md:text-5xl font-bold text-black mb-6"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {t('reviews.title')}
          </h2>
          <p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {t('reviews.subtitle')}
          </p>
        </motion.div>

        <div className="relative">
          <div 
            className="flex space-x-6 animate-scroll"
            style={{
              width: 'calc(400px * 12)', // 6 reviews * 2 for seamless loop
            }}
          >
            {/* First set of reviews */}
            {reviews.map((review, index) => (
              <Card 
                key={`first-${index}`}
                className="flex-shrink-0 w-96 border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={review.avatar}
                      alt={`${review.name} avatar`}
                      className="w-12 h-12 rounded-full object-cover"
                      loading="lazy"
                    />
                    <div>
                      <h4 
                        className="font-semibold text-black"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {review.name}
                      </h4>
                      <p 
                        className="text-sm text-gray-600"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {review.company}
                      </p>
                    </div>
                  </div>
                  
                  <StarRating rating={review.rating} />
                  
                  <p 
                    className="text-gray-700 mt-4 leading-relaxed"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    "{review.quote}"
                  </p>
                </CardContent>
              </Card>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {reviews.map((review, index) => (
              <Card 
                key={`second-${index}`}
                className="flex-shrink-0 w-96 border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={review.avatar}
                      alt={`${review.name} avatar`}
                      className="w-12 h-12 rounded-full object-cover"
                      loading="lazy"
                    />
                    <div>
                      <h4 
                        className="font-semibold text-black"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {review.name}
                      </h4>
                      <p 
                        className="text-sm text-gray-600"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {review.company}
                      </p>
                    </div>
                  </div>
                  
                  <StarRating rating={review.rating} />
                  
                  <p 
                    className="text-gray-700 mt-4 leading-relaxed"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    "{review.quote}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-400px * 6));
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Reviews; 