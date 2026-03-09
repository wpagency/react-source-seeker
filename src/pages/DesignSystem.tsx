import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DocumentHead } from '@/components/DocumentHead';
import Layout from '@/components/Layout';
import { Section } from '@/components/ui/section';
import { Card3D, DepthStack, ParallaxLayers } from '@/components/ui/dimensional';
import { RippleButton, ShimmerButton, HoverCard } from '@/components/ui/micro-interactions';
import { 
  StorySection, 
  StoryReveal, 
  MagneticElement, 
  ParallaxContainer,
  FloatingElement,
  InteractiveStory
} from '@/components/ui/interactive-story';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Code, 
  Layers, 
  MousePointer, 
  Sparkles, 
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';

const DesignSystem = () => {
  const [activeTab, setActiveTab] = useState('story');
  
  return (
    <Layout>
      <DocumentHead
        title="Design System - Interactive Elements"
        description="Explore our cohesive design system with interactive storytelling, dimensional depth, and micro-interactions."
      />
      
      {/* Navigation Tabs */}
      <div className="fixed top-24 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex overflow-x-auto gap-4">
          {[
            { id: 'story', label: 'Interactive Story', icon: <Sparkles className="w-4 h-4" /> },
            { id: 'depth', label: 'Dimensional Depth', icon: <Layers className="w-4 h-4" /> },
            { id: 'micro', label: 'Micro-interactions', icon: <MousePointer className="w-4 h-4" /> },
            { id: 'system', label: 'Design System', icon: <Code className="w-4 h-4" /> }
          ].map(tab => (
            <button
              key={tab.id}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all ${
                activeTab === tab.id 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                  : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
      
      {/* Content based on active tab */}
      <div className="pt-24">
        {activeTab === 'story' && (
          <InteractiveStory>
            <StorySection index={0} id="intro">
              <div className="max-w-4xl mx-auto px-6 text-center">
                <StoryReveal>
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Interactive Storytelling
                  </h1>
                </StoryReveal>
                
                <StoryReveal delay={0.2}>
                  <p className="text-xl text-white/70 mb-12 max-w-3xl mx-auto">
                    Guide users through a narrative journey that unfolds as they scroll, creating an immersive and memorable experience.
                  </p>
                </StoryReveal>
                
                <StoryReveal delay={0.4}>
                  <div className="flex justify-center gap-4">
                    <FloatingElement distance={5} duration={3}>
                      <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center">
                        <Sparkles className="w-8 h-8 text-blue-400" />
                      </div>
                    </FloatingElement>
                    
                    <FloatingElement distance={5} duration={3.5} delay={0.5}>
                      <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center">
                        <Zap className="w-8 h-8 text-purple-400" />
                      </div>
                    </FloatingElement>
                    
                    <FloatingElement distance={5} duration={4} delay={1}>
                      <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center">
                        <CheckCircle className="w-8 h-8 text-green-400" />
                      </div>
                    </FloatingElement>
                  </div>
                </StoryReveal>
              </div>
            </StorySection>
            
            <StorySection index={1} id="features">
              <div className="max-w-6xl mx-auto px-6">
                <StoryReveal>
                  <h2 className="text-4xl font-bold text-white mb-12 text-center">
                    Key Features
                  </h2>
                </StoryReveal>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      title: "Progressive Reveal",
                      description: "Content appears as users scroll, creating a sense of discovery and engagement.",
                      icon: <Sparkles className="w-6 h-6 text-blue-400" />
                    },
                    {
                      title: "Visual Storytelling",
                      description: "Guide users through a narrative that unfolds naturally as they explore your site.",
                      icon: <Layers className="w-6 h-6 text-purple-400" />
                    },
                    {
                      title: "Contextual Navigation",
                      description: "Help users understand where they are in the journey with subtle visual cues.",
                      icon: <MousePointer className="w-6 h-6 text-green-400" />
                    }
                  ].map((feature, index) => (
                    <StoryReveal key={index} delay={0.2 * index} direction="up">
                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full">
                        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                          {feature.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                        <p className="text-white/70">{feature.description}</p>
                      </div>
                    </StoryReveal>
                  ))}
                </div>
              </div>
            </StorySection>
            
            <StorySection index={2} id="benefits">
              <div className="max-w-4xl mx-auto px-6 text-center">
                <StoryReveal>
                  <h2 className="text-4xl font-bold text-white mb-6">
                    Why Interactive Storytelling Works
                  </h2>
                </StoryReveal>
                
                <StoryReveal delay={0.2}>
                  <p className="text-xl text-white/70 mb-12">
                    Interactive storytelling creates a more engaging, memorable experience that keeps users invested in your content.
                  </p>
                </StoryReveal>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                  <StoryReveal delay={0.3} direction="left">
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                      <h3 className="text-xl font-bold text-white mb-4">Increased Engagement</h3>
                      <p className="text-white/70">Users spend 3x longer on sites with interactive storytelling elements compared to static pages.</p>
                    </div>
                  </StoryReveal>
                  
                  <StoryReveal delay={0.4} direction="right">
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                      <h3 className="text-xl font-bold text-white mb-4">Better Retention</h3>
                      <p className="text-white/70">Information presented through interactive stories is remembered 70% better than static content.</p>
                    </div>
                  </StoryReveal>
                </div>
              </div>
            </StorySection>
          </InteractiveStory>
        )}
        
        {activeTab === 'depth' && (
          <Section className="py-24">
            <div className="max-w-6xl mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Dimensional Depth
                </h2>
                <p className="text-xl text-white/70 max-w-3xl mx-auto">
                  Create a sense of depth and space that breaks the flatness of typical websites.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">3D Card Effect</h3>
                  <Card3D className="bg-white/5 border border-white/10 rounded-2xl p-8">
                    <h4 className="text-xl font-bold text-white mb-4">Hover over me</h4>
                    <p className="text-white/70 mb-6">This card uses 3D transformation to create a realistic depth effect that responds to mouse movement.</p>
                    <div className="flex justify-between items-center">
                      <span className="text-white/50 text-sm">Interactive element</span>
                      <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                        <Zap className="w-5 h-5 text-blue-400" />
                      </div>
                    </div>
                  </Card3D>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Depth Stack</h3>
                  <DepthStack
                    gap={15}
                    className="h-[250px] w-full"
                  >
                    {[
                      <div key="layer1" className="w-full h-full bg-blue-500/10 rounded-2xl border border-blue-500/20 flex items-center justify-center">
                        <span className="text-blue-400 font-medium">Layer 1</span>
                      </div>,
                      <div key="layer2" className="w-[90%] h-[90%] mx-auto bg-purple-500/10 rounded-2xl border border-purple-500/20 flex items-center justify-center">
                        <span className="text-purple-400 font-medium">Layer 2</span>
                      </div>,
                      <div key="layer3" className="w-[80%] h-[80%] mx-auto bg-green-500/10 rounded-2xl border border-green-500/20 flex items-center justify-center">
                        <span className="text-green-400 font-medium">Layer 3</span>
                      </div>
                    ]}
                  </DepthStack>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Parallax Layers</h3>
                <div className="h-[400px] overflow-hidden rounded-2xl border border-white/10">
                  <ParallaxLayers
                    baseSpeed={0.5}
                    speedMultipliers={[1, 0.7, 0.4]}
                    className="h-full"
                  >
                    {[
                      <div key="bg" className="w-full h-full bg-gradient-to-br from-blue-900/50 to-purple-900/50" />,
                      <div key="mid" className="w-full h-full flex items-center justify-center">
                        <div className="w-64 h-64 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 flex items-center justify-center">
                          <Sparkles className="w-16 h-16 text-white/30" />
                        </div>
                      </div>,
                      <div key="front" className="w-full h-full flex items-center justify-center">
                        <div className="text-3xl font-bold text-white">Scroll to see effect</div>
                      </div>
                    ]}
                  </ParallaxLayers>
                </div>
              </div>
            </div>
          </Section>
        )}
        
        {activeTab === 'micro' && (
          <Section className="py-24">
            <div className="max-w-6xl mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Micro-interactions
                </h2>
                <p className="text-xl text-white/70 max-w-3xl mx-auto">
                  Small, delightful interactions that provide feedback and enhance the user experience.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 flex flex-col items-center">
                  <h3 className="text-xl font-bold text-white mb-6">Ripple Effect</h3>
                  <RippleButton
                    className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium"
                    rippleColor="rgba(255, 255, 255, 0.7)"
                  >
                    Click Me
                  </RippleButton>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 flex flex-col items-center">
                  <h3 className="text-xl font-bold text-white mb-6">Shimmer Effect</h3>
                  <ShimmerButton
                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-medium"
                    autoShimmer={true}
                  >
                    Hover Me
                  </ShimmerButton>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 flex flex-col items-center">
                  <h3 className="text-xl font-bold text-white mb-6">Magnetic Effect</h3>
                  <MagneticElement>
                    <button className="px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-xl font-medium">
                      Move Near Me
                    </button>
                  </MagneticElement>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Hover Cards</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <HoverCard
                      className="bg-white/5 border border-white/10 rounded-xl p-6"
                      glowColor="rgba(59, 130, 246, 0.3)"
                    >
                      <h4 className="text-lg font-bold text-white mb-2">Subtle Lift</h4>
                      <p className="text-white/70 text-sm">Hover to see a subtle lift effect with glow.</p>
                    </HoverCard>
                    
                    <HoverCard
                      className="bg-white/5 border border-white/10 rounded-xl p-6"
                      hoverScale={1.05}
                      hoverY={-8}
                      glowColor="rgba(217, 70, 239, 0.3)"
                      borderGlow={true}
                    >
                      <h4 className="text-lg font-bold text-white mb-2">Prominent Lift</h4>
                      <p className="text-white/70 text-sm">Hover to see a more dramatic lift with border glow.</p>
                    </HoverCard>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Floating Elements</h3>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-6 h-full flex items-center justify-center">
                    <div className="flex gap-6">
                      <FloatingElement distance={10} duration={3}>
                        <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center">
                          <Star className="w-8 h-8 text-blue-400" />
                        </div>
                      </FloatingElement>
                      
                      <FloatingElement distance={15} duration={4} delay={0.5}>
                        <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center">
                          <Star className="w-8 h-8 text-purple-400" />
                        </div>
                      </FloatingElement>
                      
                      <FloatingElement distance={8} duration={3.5} delay={1}>
                        <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center">
                          <Star className="w-8 h-8 text-green-400" />
                        </div>
                      </FloatingElement>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        )}
        
        {activeTab === 'system' && (
          <Section className="py-24">
            <div className="max-w-6xl mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Cohesive Design System
                </h2>
                <p className="text-xl text-white/70 max-w-3xl mx-auto">
                  A unified approach that integrates all creative elements into a cohesive experience.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Implementation Strategy</h3>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                    <ol className="space-y-6">
                      <li className="flex gap-4">
                        <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-blue-400 font-bold">1</span>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white mb-2">Foundation First</h4>
                          <p className="text-white/70">Start with core design system elements: colors, typography, spacing, and shadows.</p>
                        </div>
                      </li>
                      
                      <li className="flex gap-4">
                        <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-purple-400 font-bold">2</span>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white mb-2">Component Library</h4>
                          <p className="text-white/70">Build reusable components that incorporate interactive elements consistently.</p>
                        </div>
                      </li>
                      
                      <li className="flex gap-4">
                        <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-green-400 font-bold">3</span>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white mb-2">Progressive Enhancement</h4>
                          <p className="text-white/70">Implement basic functionality first, then enhance with interactive elements.</p>
                        </div>
                      </li>
                      
                      <li className="flex gap-4">
                        <div className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-yellow-400 font-bold">4</span>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white mb-2">Performance Monitoring</h4>
                          <p className="text-white/70">Continuously test and optimize for performance across devices.</p>
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Prioritization Framework</h3>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-bold text-white mb-2">High Impact, Low Effort</h4>
                        <ul className="list-disc list-inside text-white/70 space-y-2">
                          <li>Micro-interactions on buttons and forms</li>
                          <li>Hover effects on cards and links</li>
                          <li>Simple parallax on hero sections</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-bold text-white mb-2">High Impact, High Effort</h4>
                        <ul className="list-disc list-inside text-white/70 space-y-2">
                          <li>Interactive storytelling for key pages</li>
                          <li>3D elements for featured products/services</li>
                          <li>Custom cursor effects</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-bold text-white mb-2">Performance Considerations</h4>
                        <ul className="list-disc list-inside text-white/70 space-y-2">
                          <li>Lazy load off-screen animations</li>
                          <li>Reduce effects for low-end devices</li>
                          <li>Respect reduced motion preferences</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-6">Ready to Implement?</h3>
                <p className="text-white/70 mb-8 max-w-3xl mx-auto">
                  Our design system components are ready to use and fully customizable to match your brand's unique identity.
                </p>
                <Link to="/contact">
                  <ShimmerButton
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg"
                    autoShimmer={true}
                  >
                    <span className="flex items-center gap-2">
                      Start Your Project
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </ShimmerButton>
                </Link>
              </div>
            </div>
          </Section>
        )}
      </div>
    </Layout>
  );
};

export default DesignSystem;

