import React, { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { FlightPath, HotelScanner, ProgressStep } from '@/components/BookingAnimations'
import { Airplane, Buildings, MapPin, Clock } from '@phosphor-icons/react'

interface SearchPhase {
  id: string
  label: string
  icon: React.ReactNode
  duration: number
  message: string
}

const SEARCH_PHASES: SearchPhase[] = [
  {
    id: 'flights',
    label: 'Searching Flights',
    icon: <Airplane size={16} weight="fill" />,
    duration: 3000,
    message: 'Scanning thousands of flight options...'
  },
  {
    id: 'prices',
    label: 'Comparing Prices',
    icon: <Clock size={16} weight="fill" />,
    duration: 2500,
    message: 'Finding the best deals for you...'
  },
  {
    id: 'hotels',
    label: 'Finding Hotels',
    icon: <Buildings size={16} weight="fill" />,
    duration: 2000,
    message: 'Checking room availability...'
  },
  {
    id: 'locations',
    label: 'Matching Locations',
    icon: <MapPin size={16} weight="fill" />,
    duration: 1500,
    message: 'Optimizing your travel experience...'
  }
]

const CITIES = ['NYC', 'LON', 'TKY', 'PAR']
const HOTELS = ['Grand Hotel', 'City Center', 'Resort Paradise', 'Business Inn', 'Luxury Suite', 'Budget Stay']

export const BookingLoader: React.FC = () => {
  const [currentPhase, setCurrentPhase] = useState(0)
  const [phaseProgress, setPhaseProgress] = useState<Record<string, number>>({})
  const [currentMessage, setCurrentMessage] = useState(SEARCH_PHASES[0].message)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (currentPhase >= SEARCH_PHASES.length) {
      setIsComplete(true)
      setCurrentMessage('🎉 Your booking options are ready!')
      return
    }

    const phase = SEARCH_PHASES[currentPhase]
    setCurrentMessage(phase.message)
    
    let progress = 0
    const interval = setInterval(() => {
      progress += Math.random() * 15 + 5
      if (progress >= 100) {
        progress = 100
        clearInterval(interval)
        setTimeout(() => {
          setCurrentPhase(prev => prev + 1)
        }, 500)
      }
      
      setPhaseProgress(prev => ({
        ...prev,
        [phase.id]: Math.min(progress, 100)
      }))
    }, phase.duration / 20)

    return () => clearInterval(interval)
  }, [currentPhase])

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/10 to-accent/10 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl p-8 space-y-8 bg-card/80 backdrop-blur-sm border-border/50 shadow-2xl">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-foreground tracking-tight">
            Finding Your Perfect Trip
          </h1>
          <p className="text-muted-foreground font-medium">
            {currentMessage}
          </p>
        </div>

        {/* Flight Animation */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <Airplane size={20} className="text-primary" weight="fill" />
            Flight Routes
          </h2>
          <FlightPath cities={CITIES} />
        </div>

        {/* Hotel Scanner */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <Buildings size={20} className="text-secondary" weight="fill" />
            Available Hotels
          </h2>
          <HotelScanner hotels={HOTELS} />
        </div>

        {/* Progress Steps */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Search Progress</h2>
          <div className="space-y-4">
            {SEARCH_PHASES.map((phase, index) => (
              <ProgressStep
                key={phase.id}
                label={phase.label}
                progress={phaseProgress[phase.id] || 0}
                icon={phase.icon}
                isActive={index <= currentPhase}
              />
            ))}
          </div>
        </div>

        {/* Completion State */}
        {isComplete && (
          <div className="text-center p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20">
            <div className="text-4xl mb-2">✈️ 🏨</div>
            <p className="text-primary font-semibold text-lg">
              All done! Your travel options are ready to view.
            </p>
            <p className="text-muted-foreground text-sm mt-1">
              Found {Math.floor(Math.random() * 50) + 20} flights and {Math.floor(Math.random() * 30) + 15} hotels
            </p>
          </div>
        )}
      </Card>
    </div>
  )
}