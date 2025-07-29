'use client';
import React, { JSX } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { FileText, ArrowLeft } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' as const },
  },
};

export default function FileNotUploaded(): JSX.Element {
  return (
    <div className="min-h-screen overflow-hidden flex items-center justify-center text-[#1A522A] bg-white/60 backdrop-blur-xl relative px-6">
      {/* Background Wave */}
      <motion.div
        className="absolute w-[150vw] h-[150vh] -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-[120px] opacity-80"
        style={{
          background: 'radial-gradient(circle at 60% 40%, #D6EEF8 0%, #E0F3F9 25%, #E6FFE6 50%, #F0E6F7 75%, #F8E0DE 100%)',
        }}
        animate={{ x: ['-10%', '10%', '-10%'], y: ['-10%', '10%', '-10%'], rotate: [0, 3, -3, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Content Box */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="bg-white/70 border border-white/20 backdrop-blur-lg rounded-3xl p-10 max-w-lg w-full shadow-2xl text-center"
      >
        <div className="mx-auto mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-[#1A522A] to-[#2E8B57] rounded-full flex items-center justify-center shadow-lg mx-auto">
            <FileText className="w-10 h-10 text-white" />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-[#1A522A] mb-4">File Not Uploaded</h1>
        <p className="text-gray-700 mb-6 text-lg">
          The file you&apos;re looking for hasn&apos;t been uploaded yet.
          Please check back later.
        </p>

        <Link href="/">
          <Button className="bg-gradient-to-r from-[#1A522A] to-[#2E8B57] text-white px-6 py-3 rounded-full shadow hover:shadow-md transition-all duration-300">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Home
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}
