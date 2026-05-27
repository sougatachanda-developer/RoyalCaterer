'use client';
import { Button } from "@/components/ui/Button";
import { motion } from "motion/react";
import Link from "next/link";
import { FaCrown } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";

export default function NotFound() {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-black via-[var(--royal-maroon)]/20 to-black">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <FaCrown className="w-24 h-24 text-[var(--royal-gold)] mx-auto mb-8 animate-pulse" />
          <h1 className="text-9xl font-bold bg-gradient-to-r from-[var(--royal-gold)] to-[var(--royal-gold-dark)] bg-clip-text text-transparent mb-4">
            404
          </h1>
          <h2 className="text-3xl font-semibold text-foreground mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved to a new location.
          </p>
          <Link href="/">
            <Button variant="secondary" size="lg">
                <IoMdHome className="w-6 h-6 -mt-1 mr-1" />
                Back to Home
            </Button>
          </Link>
        </motion.div>
      </div>
    );
  }