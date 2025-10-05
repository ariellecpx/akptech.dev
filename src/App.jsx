import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Star, Code, Gamepad2, Zap, Users, BookOpen, Trophy, Sparkles } from 'lucide-react'
import './App.css'
import liquidGlassBg from './assets/liquid-glass-bg.jpg'
import potionVial from './assets/potion-vial.jpg'

function App() {
  const [hoveredCard, setHoveredCard] = useState(null)

  const resources = [
    {
      id: 1,
      title: "Scratch Programming Adventures",
      description: "Visual programming made fun with drag-and-drop coding blocks",
      category: "Coding",
      difficulty: "Beginner",
      icon: <Code className="w-6 h-6" />,
      rating: 4.9
    },
    {
      id: 2,
      title: "Unity Game Development for Kids",
      description: "Create your first 3D games with kid-friendly tutorials",
      category: "Game Dev",
      difficulty: "Intermediate",
      icon: <Gamepad2 className="w-6 h-6" />,
      rating: 4.8
    },
    {
      id: 3,
      title: "Python Coding Quests",
      description: "Learn Python through interactive storytelling and challenges",
      category: "Coding",
      difficulty: "Beginner",
      icon: <Zap className="w-6 h-6" />,
      rating: 4.9
    },
    {
      id: 4,
      title: "Roblox Studio Mastery",
      description: "Build and publish your own Roblox games and experiences",
      category: "Game Dev",
      difficulty: "Intermediate",
      icon: <Trophy className="w-6 h-6" />,
      rating: 4.7
    }
  ]

  const stats = [
    { label: "Young Coders", value: "15K+", icon: <Users className="w-8 h-8" /> },
    { label: "Learning Adventures", value: "500+", icon: <BookOpen className="w-8 h-8" /> },
    { label: "Games Created", value: "2.3K+", icon: <Gamepad2 className="w-8 h-8" /> },
    { label: "Success Rate", value: "98%", icon: <Trophy className="w-8 h-8" /> }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-400 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-pink-400 rounded-full blur-lg animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-blue-400 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-cyan-400 rounded-full blur-xl animate-bounce"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 p-6 backdrop-blur-sm bg-black/20 border-b border-purple-500/30">
        {/* Desktop Layout */}
        <div className="hidden md:flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="/akptech-logo.png" 
              alt="AKP Tech Logo" 
              className="h-28 lg:h-32 xl:h-36 w-auto object-contain hover:scale-105 transition-transform duration-300"
              loading="lazy"
              width="144"
              height="144"
            />
          </div>
          
          <div className="flex space-x-8 text-white gaming-font text-sm">
            <a href="/contact" className="hover:text-purple-300 transition-colors">CONTACT</a>
          </div>
        </div>

        {/* Mobile/Tablet Layout - Centered Logo */}
        <div className="md:hidden flex justify-center items-center">
          <img 
            src="/akptech-logo.png" 
            alt="AKP Tech Logo" 
            className="h-24 sm:h-28 w-auto object-contain hover:scale-105 transition-transform duration-300"
            loading="lazy"
            width="112"
            height="112"
          />
        </div>

        {/* Mobile Contact Link */}
        <div className="md:hidden flex justify-center mt-4">
          <a href="/contact" className="text-white gaming-font text-sm hover:text-purple-300 transition-colors">CONTACT</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20 text-center">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-6">
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-cyan-400 shadow-2xl shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300">
                <img 
                  src="/akp-profile.JPG" 
                  alt="AKP Tech" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-2xl">👋</span>
              </div>
              <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-xl">💻</span>
              </div>
            </div>
            
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight" style={{fontFamily: "'Press Start 2P', monospace"}}>
                hi, i'm
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
                  akp tech
                </span>
              </h1>
            </div>
          </div>
          
          <div className="text-lg sm:text-xl md:text-2xl text-purple-200 mb-12 max-w-4xl mx-auto leading-relaxed text-center px-4">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent font-bold animate-pulse">AKP Tech</span>
              <span className="text-white hidden sm:inline">|</span>
              <div className="flex items-center space-x-1">
                <span className="text-cyan-400 font-bold">Age:</span>
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-bold animate-bounce">9</span>
                <span className="text-2xl animate-spin">🎂</span>
              </div>
            </div>
            
            <div className="mb-4">
              <span className="text-white font-bold">Interests: </span>
              <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3">
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent font-bold hover:scale-110 transition-transform cursor-pointer">💻 Coding</span>
                <span className="text-white hidden sm:inline">|</span>
                <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent font-bold hover:scale-110 transition-transform cursor-pointer">💪 Fitness</span>
                <span className="text-white hidden sm:inline">|</span>
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent font-bold hover:scale-110 transition-transform cursor-pointer">🎮 Gaming</span>
                <span className="text-white hidden sm:inline">|</span>
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent font-bold hover:scale-110 transition-transform cursor-pointer">🎹 Piano</span>
              </div>
            </div>
            
            <div className="relative">
              <p className="text-white">
                I share 
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent font-bold mx-2 animate-pulse">
                  Minecraft Tutorials
                </span>
                on YouTube, check them out 
                <a 
                  href="https://www.youtube.com/@AKPTech10" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full font-bold hover:scale-110 transition-all duration-300 shadow-lg shadow-red-500/25 border-2 border-red-400/50 inline-flex items-center space-x-2 mx-2 animate-bounce"
                  style={{animationDelay: '0.5s'}}
                >
                  <span>HERE</span>
                  <span className="text-xl">🚀</span>
                </a>
              </p>
              
              {/* Floating emojis */}
              <div className="absolute -top-8 -left-4 text-2xl animate-bounce" style={{animationDelay: '0.2s'}}>⭐</div>
              <div className="absolute -top-6 -right-6 text-2xl animate-pulse" style={{animationDelay: '1s'}}>💖</div>
              <div className="absolute -bottom-4 left-1/4 text-2xl animate-bounce" style={{animationDelay: '0.8s'}}>🎵</div>
              <div className="absolute -bottom-6 right-1/3 text-2xl animate-spin" style={{animationDelay: '1.5s'}}>⚡</div>
            </div>
            
            {/* Book Section */}
            <div className="mt-12 p-8 bg-gradient-to-r from-purple-900/40 to-indigo-900/40 backdrop-blur-sm border border-purple-500/30 rounded-3xl shadow-2xl shadow-purple-500/20">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative">
                  {/* Glowing border animation */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-green-500 rounded-2xl blur opacity-60 animate-pulse"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-cyan-500 to-blue-500 rounded-2xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  
                  {/* Book cover */}
                  <div className="relative w-48 h-64 md:w-56 md:h-72 rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300">
                    <img 
                      src="/automations for minecraft.jpeg" 
                      alt="Automations for Minecraft - Book Cover"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Coming Soon badge */}
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full font-bold text-sm animate-bounce shadow-lg">
                    COMING SOON! 📚
                  </div>
                  
                  {/* Floating sparkles around book */}
                  <div className="absolute -top-2 -left-2 text-xl animate-spin" style={{animationDelay: '0.3s'}}>✨</div>
                  <div className="absolute top-1/4 -right-3 text-lg animate-bounce" style={{animationDelay: '0.7s'}}>⚡</div>
                  <div className="absolute bottom-1/4 -left-3 text-lg animate-pulse" style={{animationDelay: '1.2s'}}>🔮</div>
                  <div className="absolute -bottom-2 -right-2 text-xl animate-spin" style={{animationDelay: '1.8s'}}>🌟</div>
                </div>
                
                <div className="flex-1 text-left">
                  <p className="text-white text-xl leading-relaxed">
                    Right now, I am working on a book all about 
                    <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent font-bold mx-1 animate-pulse">
                      Minecraft Automations
                    </span>
                    for kids. I find automation fascinating and since I learnt the idea can be applied to Minecraft, I've been coming up with automation ideas ever since! So you can also learn about it while making your 
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-bold mx-1">
                      gaming experience
                    </span>
                    on Minecraft even better!
                  </p>
                  
                  {/* Animated book emojis */}
                  <div className="flex items-center justify-center md:justify-start space-x-4 mt-6">
                    <span className="text-3xl animate-bounce">📖</span>
                    <span className="text-3xl animate-pulse" style={{animationDelay: '0.3s'}}>🤖</span>
                    <span className="text-3xl animate-bounce" style={{animationDelay: '0.6s'}}>⚙️</span>
                    <span className="text-3xl animate-pulse" style={{animationDelay: '0.9s'}}>🎮</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* Latest Videos Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-900/80 to-indigo-900/80 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-12 shadow-2xl shadow-purple-500/20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-6" style={{fontFamily: "'Press Start 2P', monospace"}}>
              CHECK OUT MY
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                LATEST VIDEOS! 🎬
              </span>
            </h2>
            
            <p className="text-xl text-purple-200 mb-12">
              Watch my newest coding adventures and game development tutorials on YouTube! 
              <br />
              New videos every week! 🚀
            </p>

            {/* Video Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {/* Video 1 */}
              <a href="https://www.youtube.com/watch?v=SFWSRL_EcYE" target="_blank" rel="noopener noreferrer" className="block bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-2xl p-4 border-2 border-pink-400/30 hover:border-pink-400/60 transition-all duration-300 transform hover:scale-105 hover:rotate-1 cursor-pointer">
                <div className="aspect-video rounded-xl mb-4 relative overflow-hidden">
                  <img 
                    src="https://img.youtube.com/vi/SFWSRL_EcYE/hqdefault.jpg" 
                    alt="how to make obsidian in MINECRAFT (2025)"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "https://img.youtube.com/vi/SFWSRL_EcYE/mqdefault.jpg";
                    }}
                  />
                  <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-600/80 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-red-600 transition-all duration-300">
                      <div className="w-0 h-0 border-l-[16px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                </div>
                <h3 className="text-white gaming-font text-sm mb-2 line-clamp-2">🎮 how to make obsidian in MINECRAFT (2025)</h3>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-pink-300">👀 Tutorial</span>
                  <span className="text-purple-300">🕒 Today</span>
                </div>
              </a>

              {/* Video 2 */}
              <a href="https://www.youtube.com/watch?v=OtXOgqWMz2E" target="_blank" rel="noopener noreferrer" className="block bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl p-4 border-2 border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 transform hover:scale-105 hover:-rotate-1 cursor-pointer">
                <div className="aspect-video rounded-xl mb-4 relative overflow-hidden">
                  <img 
                    src="https://img.youtube.com/vi/OtXOgqWMz2E/hqdefault.jpg" 
                    alt="how to make custom skins for MINECRAFT using TYNKER"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "https://img.youtube.com/vi/OtXOgqWMz2E/mqdefault.jpg";
                    }}
                  />
                  <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-600/80 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-red-600 transition-all duration-300">
                      <div className="w-0 h-0 border-l-[16px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                </div>
                <h3 className="text-white gaming-font text-sm mb-2 line-clamp-2">💻 how to make custom skins for MINECRAFT using TYNKER</h3>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-cyan-300">👀 Tutorial</span>
                  <span className="text-blue-300">🕒 Yesterday</span>
                </div>
              </a>

              {/* Video 3 */}
              <a href="https://www.youtube.com/watch?v=qDBHimv8cAw" target="_blank" rel="noopener noreferrer" className="block bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl p-4 border-2 border-green-400/30 hover:border-green-400/60 transition-all duration-300 transform hover:scale-105 hover:rotate-1 cursor-pointer">
                <div className="aspect-video rounded-xl mb-4 relative overflow-hidden">
                  <img 
                    src="https://img.youtube.com/vi/qDBHimv8cAw/hqdefault.jpg" 
                    alt="how to craft a door in minecraft (2025)"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "https://img.youtube.com/vi/qDBHimv8cAw/mqdefault.jpg";
                    }}
                  />
                  <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-600/80 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-red-600 transition-all duration-300">
                      <div className="w-0 h-0 border-l-[16px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                </div>
                <h3 className="text-white gaming-font text-sm mb-2 line-clamp-2">🕹️ how to craft a door in minecraft (2025)</h3>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-green-300">👀 Tutorial</span>
                  <span className="text-emerald-300">🕒 2 days ago</span>
                </div>
              </a>
            </div>

            {/* Fun decorative elements */}
            <div className="flex justify-center items-center space-x-4 mb-8">
              <div className="w-8 h-8 bg-yellow-400 rounded-full animate-bounce flex items-center justify-center">
                <span className="text-lg">⭐</span>
              </div>
              <div className="w-6 h-6 bg-pink-400 rounded-full animate-pulse flex items-center justify-center">
                <span className="text-sm">💖</span>
              </div>
              <div className="w-10 h-10 bg-purple-400 rounded-full animate-bounce flex items-center justify-center" style={{animationDelay: '0.2s'}}>
                <span className="text-xl">🚀</span>
              </div>
              <div className="w-6 h-6 bg-cyan-400 rounded-full animate-pulse flex items-center justify-center" style={{animationDelay: '0.4s'}}>
                <span className="text-sm">⚡</span>
              </div>
              <div className="w-8 h-8 bg-orange-400 rounded-full animate-bounce flex items-center justify-center" style={{animationDelay: '0.6s'}}>
                <span className="text-lg">🎮</span>
              </div>
            </div>

            <a 
              href="https://www.youtube.com/@AKPTech10" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block w-full sm:w-auto"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl gaming-font transform hover:scale-110 transition-all duration-200 shadow-lg shadow-red-500/25 border-2 border-red-400/50 w-full sm:w-auto"
              >
                🎬 WATCH ON YOUTUBE!
              </Button>
            </a>
            
            <p className="text-purple-300 gaming-font text-sm mt-4">
              Don't forget to LIKE & SUBSCRIBE! 🔔
            </p>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="relative z-10 px-6 py-20" style={{marginTop: '30px'}}>
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-6" style={{fontFamily: "'Press Start 2P', monospace"}}>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                TOOLS I USE TO LEARN
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                CODING, ROBOTICS & GAME DEV
              </span>
            </h2>
          </div>

          {/* 3x3 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tynker */}
            <a 
              href="https://www.tynker.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-2xl border-2 border-pink-500/80 bg-black/60 backdrop-blur-sm p-6 shadow-2xl shadow-pink-500/25 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-500/40"
            >
              <div className="flex h-20 items-center justify-center mb-4">
                <img
                  src="https://www.tynker.com/images/tynker-logos/tynker-registered.png"
                  alt="Tynker logo"
                  className="max-h-16 w-auto object-contain drop-shadow-lg"
                />
              </div>
              <h3 className="text-white gaming-font text-sm mb-2">Tynker</h3>
              <div className="text-xs text-pink-300 mb-3 font-bold">CODING • GAMES</div>
              <p className="text-sm text-purple-200 mb-4 line-clamp-3">
                Loads of games, puzzles, and projects to learn coding at your own pace.
              </p>
              <div className="flex items-center justify-between">
                <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                  $10–$28/month
                </span>
                <span className="gaming-font text-xs text-pink-300 group-hover:text-pink-200">
                  TRY IT →
                </span>
              </div>
            </a>

            {/* Minecraft Education */}
            <a 
              href="https://education.minecraft.net" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-2xl border-2 border-green-500/80 bg-black/60 backdrop-blur-sm p-6 shadow-2xl shadow-green-500/25 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/40"
            >
              <div className="flex h-20 items-center justify-center mb-4">
                <img
                  src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/RE5fBrs-834x470?wid=517&hei=291&fit=crop"
                  alt="Minecraft Education logo"
                  className="max-h-16 w-auto object-contain drop-shadow-lg rounded"
                />
              </div>
              <h3 className="text-white gaming-font text-sm mb-2">Minecraft Education</h3>
              <div className="text-xs text-green-300 mb-3 font-bold">CODING • STEM • CREATIVE</div>
              <p className="text-sm text-purple-200 mb-4 line-clamp-3">
                Play-and-learn adventures for building, coding, and even robotics.
              </p>
              <div className="flex items-center justify-between">
                <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                  £10/year
                </span>
                <span className="gaming-font text-xs text-green-300 group-hover:text-green-200">
                  TRY IT →
                </span>
              </div>
            </a>

            {/* Code.org */}
            <a 
              href="https://code.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-2xl border-2 border-blue-500/80 bg-black/60 backdrop-blur-sm p-6 shadow-2xl shadow-blue-500/25 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/40"
            >
              <div className="flex h-20 items-center justify-center mb-4">
                <img
                  src="https://code.org/_next/static/media/cdo-logo-inverse.062eac04.svg"
                  alt="Code.org logo"
                  className="max-h-16 w-auto object-contain drop-shadow-lg"
                />
              </div>
              <h3 className="text-white gaming-font text-sm mb-2">Code.org</h3>
              <div className="text-xs text-blue-300 mb-3 font-bold">FREE • CURRICULUM</div>
              <p className="text-sm text-purple-200 mb-4 line-clamp-3">
                Free challenges, creative projects, and lessons for absolute beginners.
              </p>
              <div className="flex items-center justify-between">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                  Free
                </span>
                <span className="gaming-font text-xs text-blue-300 group-hover:text-blue-200">
                  TRY IT →
                </span>
              </div>
            </a>

            {/* Scratch */}
            <a 
              href="https://scratch.mit.edu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-2xl border-2 border-orange-500/80 bg-black/60 backdrop-blur-sm p-6 shadow-2xl shadow-orange-500/25 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/40"
            >
              <div className="flex h-20 items-center justify-center mb-4">
                <img
                  src="https://i0.wp.com/sip.scratch.mit.edu/wp-content/uploads/2019/04/Scratch-Logo.png?w=640&ssl=1"
                  alt="Scratch logo"
                  className="max-h-16 w-auto object-contain drop-shadow-lg"
                />
              </div>
              <h3 className="text-white gaming-font text-sm mb-2">Scratch</h3>
              <div className="text-xs text-orange-300 mb-3 font-bold">BLOCK CODING • CREATIVE</div>
              <p className="text-sm text-purple-200 mb-4 line-clamp-3">
                Make games, animations, and stories by snapping code blocks together.
              </p>
              <div className="flex items-center justify-between">
                <span className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                  Free
                </span>
                <span className="gaming-font text-xs text-orange-300 group-hover:text-orange-200">
                  TRY IT →
                </span>
              </div>
            </a>

            {/* Lego Education */}
            <a 
              href="https://education.lego.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-2xl border-2 border-red-500/80 bg-black/60 backdrop-blur-sm p-6 shadow-2xl shadow-red-500/25 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-500/40"
            >
              <div className="flex h-20 items-center justify-center mb-4">
                <img
                  src="https://assets.education.lego.com/v3/assets/blt293eea581807678a/bltfd621d3446b2239d/62a71ead2680af59223340f2/LEGO-Education.png?bg-color=ffffff&locale=en-us"
                  alt="Lego Education logo"
                  className="max-h-16 w-auto object-contain drop-shadow-lg"
                />
              </div>
              <h3 className="text-white gaming-font text-sm mb-2">Lego Education</h3>
              <div className="text-xs text-red-300 mb-3 font-bold">ROBOTICS • HARDWARE</div>
              <p className="text-sm text-purple-200 mb-4 line-clamp-3">
                Build robots with LEGO and control them with simple code.
              </p>
              <div className="flex items-center justify-between">
                <span className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                  £154.99–£359.99
                </span>
                <span className="gaming-font text-xs text-red-300 group-hover:text-red-200">
                  TRY IT →
                </span>
              </div>
            </a>

            {/* MakeCode Arcade */}
            <a 
              href="https://arcade.makecode.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-2xl border-2 border-purple-500/80 bg-black/60 backdrop-blur-sm p-6 shadow-2xl shadow-purple-500/25 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/40"
            >
              <div className="flex h-20 items-center justify-center mb-4">
                <img
                  src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/RWOYCd-arcade-tile-animated?wid=517&hei=291&fit=crop"
                  alt="MakeCode Arcade logo"
                  className="max-h-16 w-auto object-contain drop-shadow-lg rounded"
                />
              </div>
              <h3 className="text-white gaming-font text-sm mb-2">MakeCode Arcade</h3>
              <div className="text-xs text-purple-300 mb-3 font-bold">GAMES • JAVASCRIPT</div>
              <p className="text-sm text-purple-200 mb-4 line-clamp-3">
                Create retro-style games with blocks or JavaScript, right in the browser.
              </p>
              <div className="flex items-center justify-between">
                <span className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                  Free
                </span>
                <span className="gaming-font text-xs text-purple-300 group-hover:text-purple-200">
                  TRY IT →
                </span>
              </div>
            </a>

            {/* MeowBit */}
            <a 
              href="https://kittenbot.cc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-2xl border-2 border-yellow-500/80 bg-black/60 backdrop-blur-sm p-6 shadow-2xl shadow-yellow-500/25 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-500/40"
            >
              <div className="flex h-20 items-center justify-center mb-4">
                <img
                  src="https://www.kittenbot.cc/cdn/shop/files/480p.png?v=1690451118&width=200"
                  alt="MeowBit logo"
                  className="max-h-16 w-auto object-contain drop-shadow-lg"
                />
              </div>
              <h3 className="text-white gaming-font text-sm mb-2">MeowBit</h3>
              <div className="text-xs text-yellow-300 mb-3 font-bold">HARDWARE • CONSOLE</div>
              <p className="text-sm text-purple-200 mb-4 line-clamp-3">
                Handheld console for playing your MakeCode Arcade creations on real hardware.
              </p>
              <div className="flex items-center justify-between">
                <span className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                  $48–$60
                </span>
                <span className="gaming-font text-xs text-yellow-300 group-hover:text-yellow-200">
                  TRY IT →
                </span>
              </div>
            </a>

            {/* Rosebud AI */}
            <a 
              href="https://rosebud.ai/?via=apx" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-2xl border-2 border-cyan-500/80 bg-black/60 backdrop-blur-sm p-6 shadow-2xl shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/40"
            >
              <div className="flex h-20 items-center justify-center mb-4">
                <img
                  src="https://rosebud.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frosebud-icon.c85b2e50.png&w=64&q=75"
                  alt="Rosebud AI logo"
                  className="max-h-16 w-auto object-contain drop-shadow-lg"
                />
              </div>
              <h3 className="text-white gaming-font text-sm mb-2">Rosebud AI</h3>
              <div className="text-xs text-cyan-300 mb-3 font-bold">AI • CREATIVE</div>
              <p className="text-sm text-purple-200 mb-4 line-clamp-3">
                Create animated stories, characters, and interactive games with AI.
              </p>
              <div className="flex items-center justify-between">
                <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                  $13/month
                </span>
                <span className="gaming-font text-xs text-cyan-300 group-hover:text-cyan-200">
                  TRY IT →
                </span>
              </div>
            </a>

            {/* CodeCombat */}
            <a 
              href="https://codecombat.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-2xl border-2 border-emerald-500/80 bg-black/60 backdrop-blur-sm p-6 shadow-2xl shadow-emerald-500/25 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/40"
            >
              <div className="flex h-20 items-center justify-center mb-4">
                <img
                  src="https://codecombat.com/images/pages/base/logo.webp"
                  alt="CodeCombat logo"
                  className="max-h-16 w-auto object-contain drop-shadow-lg"
                />
              </div>
              <h3 className="text-white gaming-font text-sm mb-2">CodeCombat</h3>
              <div className="text-xs text-emerald-300 mb-3 font-bold">PYTHON • JAVASCRIPT • GAME</div>
              <p className="text-sm text-purple-200 mb-4 line-clamp-3">
                Fantasy game where you write real code to move, cast, and win battles.
              </p>
              <div className="flex items-center justify-between">
                <span className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                  $10/month
                </span>
                <span className="gaming-font text-xs text-emerald-300 group-hover:text-emerald-200">
                  TRY IT →
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 border-t border-cyan-500/30 backdrop-blur-sm bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="text-center">
              <h4 className="text-white gaming-font mb-4 text-lg">FOLLOW AKP TECH</h4>
              <div className="flex space-x-6 justify-center">
                <a 
                  href="https://www.tiktok.com/@akptech.dev" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-cyan-500/40 hover:to-blue-500/40 transition-all duration-300 cursor-pointer border border-cyan-400/30 hover:border-cyan-400/60"
                >
                  <span className="text-cyan-200 text-sm font-bold">TT</span>
                </a>
                <a 
                  href="https://www.youtube.com/@AKPTech10" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-red-500/40 hover:to-pink-500/40 transition-all duration-300 cursor-pointer border border-red-400/30 hover:border-red-400/60"
                >
                  <span className="text-red-200 text-sm font-bold">YT</span>
                </a>
              </div>
            </div>
            
            <div className="border-t border-cyan-500/30 pt-6 text-center">
              <p className="text-cyan-300 gaming-font text-sm">
                Copyright © 2025 AKP Tech. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

