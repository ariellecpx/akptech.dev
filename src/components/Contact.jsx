import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Sparkles, Mail, ArrowLeft } from 'lucide-react'

function Contact() {
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
      <nav className="relative z-10 p-6 flex justify-between items-center backdrop-blur-sm bg-black/20 border-b border-purple-500/30">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white gaming-font">AKP TECH</h1>
        </div>
        
        <a href="/" className="flex items-center space-x-2 text-white hover:text-purple-300 transition-colors gaming-font text-sm">
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO HOME</span>
        </a>
      </nav>

      {/* Contact Section */}
      <section className="relative z-10 px-6 py-20 flex items-center justify-center min-h-[80vh]">
        <div className="max-w-2xl mx-auto">
          <Card className="bg-black/40 border-purple-500/30 backdrop-blur-sm shadow-2xl shadow-purple-500/20">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/25">
                  <Mail className="w-10 h-10 text-white" />
                </div>
              </div>
              <CardTitle className="text-white text-4xl mb-4" style={{fontFamily: "'Press Start 2P', monospace"}}>
                CONTACT
              </CardTitle>
              <div className="flex justify-center space-x-4 mb-6">
                <div className="w-8 h-8 bg-yellow-400 rounded-full animate-bounce flex items-center justify-center">
                  <span className="text-lg">📧</span>
                </div>
                <div className="w-6 h-6 bg-pink-400 rounded-full animate-pulse flex items-center justify-center">
                  <span className="text-sm">💼</span>
                </div>
                <div className="w-10 h-10 bg-purple-400 rounded-full animate-bounce flex items-center justify-center" style={{animationDelay: '0.2s'}}>
                  <span className="text-xl">✨</span>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="text-center">
              <p className="text-xl text-purple-200 mb-8 leading-relaxed">
                For 
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent font-bold mx-2">
                  business inquiries
                </span>
                and
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent font-bold mx-2">
                  sponsorships
                </span>
                contact me here:
              </p>

              <a 
                href="mailto:message@ariellephoenix.com?subject=AKPTech%20Site"
                className="inline-block"
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-12 py-6 text-xl gaming-font transform hover:scale-110 transition-all duration-200 shadow-lg shadow-purple-500/25 border-2 border-purple-400/50"
                >
                  <Mail className="w-6 h-6 mr-3" />
                  SEND EMAIL
                </Button>
              </a>

              <p className="text-purple-300 gaming-font text-sm mt-6">
                Professional inquiries only • Response within 24-48 hours
              </p>

              {/* Decorative elements */}
              <div className="flex justify-center items-center space-x-6 mt-8">
                <span className="text-2xl animate-bounce">💻</span>
                <span className="text-2xl animate-pulse" style={{animationDelay: '0.3s'}}>🤝</span>
                <span className="text-2xl animate-bounce" style={{animationDelay: '0.6s'}}>📈</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-8 border-t border-purple-500/30 backdrop-blur-sm bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-purple-300 gaming-font text-sm">
            Copyright © 2025 AKP Tech. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Contact