
import { CheckCircle, Lock, Clock, Award, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useCallback, memo, useRef, useMemo, useEffect } from 'react';

// Optimized background image with immediate paint
const BACKGROUND_IMAGE = 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80&fm=webp';
const VIDEO_POSTER = 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80&fm=webp';

// Memoized trust indicators to prevent re-renders
const TrustIndicator = memo(({ icon: Icon, text }: { icon: any, text: string }) => (
  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-all duration-200">
    <Icon className="h-6 w-6 text-emerald-400 mx-auto mb-2" />
    <p className="text-white font-medium text-sm leading-tight">{text}</p>
  </div>
));

const HeroSection = () => {
  const [videoState, setVideoState] = useState({
    hasSound: false,
    showPlayButton: true,
    isReady: false
  });
  const videoRef = useRef<HTMLVideoElement>(null);

  // Aggressive video optimization for fast loading and smooth playback
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Force hardware acceleration and GPU rendering
      video.style.willChange = 'transform';
      video.style.backfaceVisibility = 'hidden';
      video.style.transform = 'translateZ(0)';
      video.style.webkitTransform = 'translateZ(0)';
      
      // Optimize for fast loading
      video.style.objectFit = 'cover';
      video.style.objectPosition = 'center';
      
      // Set optimal playback and loading settings
      video.playbackRate = 1.0;
      video.defaultPlaybackRate = 1.0;
      video.defaultMuted = true;
      
      // Aggressive preloading for instant playback
      video.preload = 'auto';
      video.load(); // Force immediate loading
      
      // Connection-aware quality optimization
      const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
      if (connection) {
        // Adjust video quality based on connection speed
        if (connection.effectiveType === '4g' || connection.downlink > 10) {
          video.style.filter = 'none'; // Full quality for fast connections
        } else if (connection.effectiveType === '3g') {
          video.style.filter = 'brightness(1.05)'; // Slight enhancement for slower connections
        }
      }
      
      // Enhanced event handling for faster loading
      const handleLoadStart = () => {
        console.log('Video loading started');
      };

      const handleCanPlay = () => {
        if (video.muted && video.paused) {
          setVideoState(prev => ({ ...prev, isReady: true }));
          video.play().catch(() => {
            // Silently handle autoplay restrictions
          });
        }
      };

      const handleCanPlayThrough = () => {
        // Video is fully loaded and can play without buffering
        setVideoState(prev => ({ ...prev, isReady: true, showPlayButton: false }));
        if (video.muted && video.paused) {
          video.play().catch(() => {
            // Silently handle autoplay restrictions
          });
        }
      };

      const handleLoadedData = () => {
        // First frame is loaded
        setVideoState(prev => ({ ...prev, isReady: true }));
      };

      const handleProgress = () => {
        // Video is loading progressively
        if (video.buffered.length > 0) {
          const buffered = video.buffered.end(0) / video.duration;
          if (buffered > 0.25) { // 25% buffered is enough to start
            setVideoState(prev => ({ ...prev, showPlayButton: false }));
          }
        }
      };

      // Add all event listeners for comprehensive loading optimization
      video.addEventListener('loadstart', handleLoadStart);
      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('canplaythrough', handleCanPlayThrough);
      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('progress', handleProgress);

      return () => {
        video.removeEventListener('loadstart', handleLoadStart);
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('canplaythrough', handleCanPlayThrough);
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('progress', handleProgress);
      };
    }
  }, []);

  const scrollToForm = useCallback(() => {
    // First, trigger the form section to load by scrolling to its container
    const formContainer = document.querySelector('[data-section="form"]');
    if (formContainer) {
      formContainer.scrollIntoView({ behavior: 'smooth' });
      
      // Wait a bit for the component to load, then try to find the actual form
      setTimeout(() => {
        const form = document.getElementById('consultation-form') || 
                    document.querySelector('form') || 
                    formContainer;
        if (form) {
          form.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
  }, []);

  const handleVideoClick = useCallback((event: React.MouseEvent<HTMLVideoElement>) => {
    event.preventDefault();
    const video = event.currentTarget;
    
    if (video.paused) {
      video.currentTime = 0;
      video.muted = false;
      setVideoState(prev => ({ ...prev, hasSound: true, showPlayButton: false }));
      video.play().catch((error) => {
        console.log('Video play failed:', error);
      });
    } else if (videoState.hasSound) {
      video.pause();
    }
  }, [videoState.hasSound]);

  const handlePlayButtonClick = useCallback((event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.muted = false;
      setVideoState(prev => ({ ...prev, hasSound: true, showPlayButton: false }));
      videoRef.current.play().catch((error) => {
        console.log('Video play failed:', error);
      });
    }
  }, []);

  // Memoize trust indicators to prevent re-creation
  const trustIndicators = useMemo(() => [
    { icon: CheckCircle, text: "Licensed Legal Professionals" },
    { icon: Lock, text: "Confidential Consultation" },
    { icon: Clock, text: "24hr Response Time" },
    { icon: Award, text: "15+ Years Experience" }
  ], []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden pt-12">
      {/* Optimized Background with CSS */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url(${BACKGROUND_IMAGE})`,
          willChange: 'auto'
        }}
      />
      <div className="absolute inset-0 bg-slate-900/70" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-3 py-3 text-center max-w-5xl mt-10">
        {/* Free Consultation Callout */}

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
          <span className="block">Victim of Online Fraud?</span>
          <span className="block text-emerald-400 mt-1">Get Your Money Back !</span>
        </h1>

        {/* Optimized Video Section with Auto-play */}
        <div className="mb-6 w-[90%] md:w-[75%] mx-auto">
          <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden mx-auto max-w-4xl">
            <div className="relative w-full aspect-video">
              {/* Video element with auto-play muted */}
              <video 
                ref={videoRef}
                autoPlay
                muted
                loop
                controls={videoState.hasSound}
                playsInline
                preload="auto"
                onClick={handleVideoClick}
                onLoadedData={() => setVideoState(prev => ({ ...prev, isReady: true }))}
                onCanPlay={() => setVideoState(prev => ({ ...prev, isReady: true }))}
                onCanPlayThrough={() => setVideoState(prev => ({ ...prev, isReady: true }))}
                className="absolute top-0 left-0 w-full h-full object-cover cursor-pointer rounded-xl"
                poster={VIDEO_POSTER}
                controlsList="nodownload"
                disablePictureInPicture
                crossOrigin="anonymous"
                style={{
                  willChange: 'auto',
                  backfaceVisibility: 'hidden',
                  transform: 'translateZ(0)'
                }}
              >
                {/* Multiple formats for optimal loading and quality */}
                <source 
                  src="https://erbzkennjnczwjomcvld.supabase.co/storage/v1/object/public/videos/David%20Video%20(1).mp4" 
                  type="video/mp4" 
                />
                {/* Fallback with cache optimization */}
                <p className="text-white text-center">Your browser does not support video playback.</p>
              </video>

              {/* Play Button Overlay */}
              {(videoState.showPlayButton || !videoState.hasSound) && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-xl">
                  <div 
                    className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg hover:bg-white transition-all duration-200 cursor-pointer group"
                    onClick={handlePlayButtonClick}
                  >
                    <Play className="h-8 w-8 text-slate-900 ml-1 group-hover:scale-110 transition-transform duration-200" fill="currentColor" />
                  </div>
                </div>
              )}

              {/* Video loading indicator */}
              {!videoState.isReady && (
                <div className="absolute inset-0 bg-slate-700 rounded-xl flex items-center justify-center">
                  <div className="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
            </div>

            <div className="p-3 bg-slate-800/40 backdrop-blur-sm">
              <p className="text-white/90 text-sm font-medium">
                {videoState.hasSound ? 'Playing with sound' : 'Playing silently - Click to enable sound'}
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col gap-4 justify-center mb-6">
          <Button 
            onClick={scrollToForm}
            size="lg"
            className="group w-full sm:w-auto bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700 hover:from-emerald-600 hover:via-emerald-700 hover:to-emerald-800 text-white px-12 py-6 sm:px-10 sm:py-5 rounded-2xl text-xl sm:text-lg font-bold shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/40 transition-all duration-300 transform hover:scale-[1.03] hover:-translate-y-1 border border-emerald-400/20 backdrop-blur-sm relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10 flex items-center justify-center gap-2">
              Get Free Consultation
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </span>
          </Button>
          
          <Button 
            onClick={scrollToForm}
            size="lg"
            variant="outline"
            className="group w-full sm:w-auto border-2 border-amber-400/60 bg-gradient-to-r from-amber-400/10 to-orange-400/10 text-black hover:bg-gradient-to-r hover:from-amber-400 hover:to-orange-400 hover:text-slate-900 px-12 py-6 sm:px-10 sm:py-5 rounded-2xl text-xl sm:text-lg font-bold backdrop-blur-sm transition-all duration-300 transform hover:scale-[1.03] hover:-translate-y-1 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Learn About Your Rights
              <div className="w-1.5 h-1.5 bg-current rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
            </span>
          </Button>
        </div>

        {/* Enhanced Professional Subheading - moved here */}
        <div className="mb-8 max-w-3xl mx-auto">
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-4 border border-slate-700/30">
            <p className="text-lg text-slate-100 leading-relaxed">
              <span className="text-white font-bold text-xl block mb-2">Elite Legal Defense Against Financial Predators</span>
              <span className="block mb-2 text-slate-200">
                Our specialized legal team has successfully recovered 
                <span className="text-emerald-400 font-bold mx-1">over $211 million</span> 
                from fraud operations worldwide.
              </span>
              <span className="block text-amber-300 font-semibold">
                <span className="text-red-400 font-bold">Time is critical</span>
              </span>
            </p>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {trustIndicators.map((item, index) => (
            <TrustIndicator key={index} icon={item.icon} text={item.text} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(HeroSection);
