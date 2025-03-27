import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { CalendarIcon, TicketIcon, SearchIcon } from 'lucide-react';

const RLandingPage = () => {
  return (
    <div className="min-h-screen bg-[#f2f2f2] text-[#2a2a2a]">
      {/* Hero Section */}
      <div
        className="relative h-[80vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#003366]/70 flex flex-col items-center justify-center text-center p-6">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Experience Movies Like Never Before
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl text-white mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Find theatres, showtimes, and buy tickets in seconds.
          </motion.p>
          <div className="w-full max-w-xl flex flex-col sm:flex-row gap-2">
            <Input
              placeholder="Search for movies or locations"
              className="flex-1"
            />
            <Button className="bg-[#0077cc] hover:bg-[#005fa3] text-white">
              <SearchIcon className="mr-2" />
              Search
            </Button>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="py-12 px-4 sm:px-6 md:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="bg-white text-[#2a2a2a] shadow-md">
          <CardContent className="p-6">
            <TicketIcon className="w-8 h-8 mb-4 text-[#005fa3]" />
            <h3 className="text-xl font-semibold mb-2">Buy Tickets Online</h3>
            <p>Skip the lines and reserve your seat with just a few clicks.</p>
          </CardContent>
        </Card>
        <Card className="bg-white text-[#2a2a2a] shadow-md">
          <CardContent className="p-6">
            <CalendarIcon className="w-8 h-8 mb-4 text-[#005fa3]" />
            <h3 className="text-xl font-semibold mb-2">Upcoming Releases</h3>
            <p>
              Stay ahead of the crowd with early access to blockbuster releases.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-white text-[#2a2a2a] shadow-md">
          <CardContent className="p-6">
            <img
              src="/images/snacks.png"
              alt="Snacks"
              className="w-8 h-8 mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Order Snacks Ahead</h3>
            <p>
              Get your favorite movie snacks ready before the movie even starts.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="bg-[#003366] text-white py-8 text-center">
        <p>&copy; 2025 CineHub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default RLandingPage;
