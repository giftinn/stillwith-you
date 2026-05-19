import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SecretLetterPageProps {
  onBackToStart?: () => void;
}

const SecretLetterPage: React.FC<SecretLetterPageProps> = ({ onBackToStart }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [showFinalMessage, setShowFinalMessage] = useState(false);

  const fullText = `halooo halooo jerii sayanggg :p

jujur aku masih suka ngga nyangka kalau ternyata hubungan kita bisa ada sampai sekarang. padahal kita udah kenal lumayan lama bahkan sempat asing, but somehow tiba-tiba kita malah jalanin hubungan ini. and honestly, i’m really happy about that.

selama sama kamu aku ngerasa belajar banyak hal. kamu ngajarin aku gimana rasanya dicintai dengan tulus, diperhatiin, dan selalu punya someone to rely on. every time i’m with you, aku selalu ngerasa nyaman dan tenang banget.

aku bahagia banget punya kamu di hidup aku, dan obviously aku bangga banget sama kamu. ngga ada alasan buat aku stop loving you, because every single day kamu selalu bikin aku makin sayang sama kamu.

i always want you in my future. aku mau kita tetep bareng, tetep saling nemenin, dan jalanin semuanya sama-sama. karena sejujurnya, kamu itu tempat aku pulang, my safest place, tempat dimana aku bisa ngerasa aman dan jadi diri sendiri.

jadi please stay with me yaa? aku mau kita tetep kaya gini terus, saling sayang dan saling punya satu sama lain.

i loveee youu to the moon and back sayangkuu ❤️
  `;

  useEffect(() => {
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setShowFinalMessage(true);
        }, 2000);
      }
    }, 30);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="text-center space-y-6 max-w-5xl mx-auto px-4">

      {/* LETTER BOX */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="p-6 sm:p-10 bg-gradient-to-br from-white/90 to-blue-50/90 rounded-3xl border-2 border-blue-200 backdrop-blur-lg shadow-2xl relative overflow-hidden">

          {/* corners */}
          <div className="absolute top-2 left-2 w-4 h-4 bg-blue-300 rounded-full"/>
          <div className="absolute top-2 right-2 w-3 h-3 bg-blue-300 rotate-45"/>
          <div className="absolute bottom-2 left-2 w-4 h-4 border-2 border-blue-300 rounded-full"/>
          <div className="absolute bottom-2 right-2 w-3 h-3 bg-gradient-to-br from-blue-300 to-cyan-300 rounded-lg"/>

          {/* TEXT */}
          <div className="text-left">
            <div className="text-sm sm:text-base text-blue-900 whitespace-pre-wrap leading-relaxed font-medium">
              {displayedText}
              {displayedText.length < fullText.length && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="inline-block w-2 h-4 bg-blue-400 ml-1"
                />
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* BUTTON AFTER TYPING FINISH */}
      <AnimatePresence>
        {showFinalMessage && onBackToStart && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="pt-6"
          >
            <button
              onClick={onBackToStart}
              className="px-5 py-2 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition"
            >
              Back to Start
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default SecretLetterPage;
