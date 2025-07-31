import React from 'react'
import { Airplane, Buildings, MapPin, Clock, CheckCircle } from '@phosphor-icons/react'

interface AnimatedPlaneProps {
  delay?: number
}

export const AnimatedPlane: React.FC<AnimatedPlaneProps> = ({ delay = 0 }) => {
  return (
    <div 
      className="absolute top-1/2 left-0 plane-animation"
      style={{ animationDelay: `${delay}s` }}
    >
      <Airplane size={24} className="text-primary" weight="fill" />
    </div>
  )
}

interface FlightPathProps {
  cities: string[]
}

export const FlightPath: React.FC<FlightPathProps> = ({ cities }) => {
  return (
    <div className="relative h-24 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-lg overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-between px-6">
        {cities.map((city, index) => (
          <div key={city} className="flex flex-col items-center">
            <div className="w-3 h-3 bg-primary rounded-full pulse-dot" 
                 style={{ animationDelay: `${index * 0.5}s` }} />
            <span className="text-xs text-muted-foreground mt-1 font-medium">{city}</span>
          </div>
        ))}
      </div>
      <AnimatedPlane delay={0} />
      <AnimatedPlane delay={1.5} />
    </div>
  )
}

interface HotelScannerProps {
  hotels: string[]
}

export const HotelScanner: React.FC<HotelScannerProps> = ({ hotels }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {hotels.map((hotel, index) => (
        <div
          key={hotel}
          className="flex flex-col items-center p-3 bg-card rounded-lg building-scan"
          style={{ animationDelay: `${index * 0.3}s` }}
        >
          <Buildings size={28} className="text-secondary mb-2" weight="fill" />
          <span className="text-xs text-center text-card-foreground font-medium leading-tight">
            {hotel}
          </span>
        </div>
      ))}
    </div>
  )
}

interface ProgressStepProps {
  label: string
  progress: number
  icon: React.ReactNode
  isActive: boolean
}

export const ProgressStep: React.FC<ProgressStepProps> = ({ 
  label, 
  progress, 
  icon, 
  isActive 
}) => {
  return (
    <div className="flex items-center gap-3">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
        isActive ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
      }`}>
        {progress === 100 ? <CheckCircle size={18} weight="fill" /> : icon}
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-center mb-1">
          <span className={`text-sm font-medium ${
            isActive ? 'text-foreground' : 'text-muted-foreground'
          }`}>
            {label}
          </span>
          <span className={`text-xs font-bold ${
            isActive ? 'text-primary' : 'text-muted-foreground'
          }`}>
            {progress}%
          </span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all duration-500 ${
              isActive ? 'bg-primary progress-glow' : 'bg-muted-foreground/30'
            }`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  )
}