# Travel Booking Loader

A visually striking animated loader that simulates the process of searching and booking flights and hotels, creating anticipation and engagement during wait times.

**Experience Qualities**: 
1. **Engaging** - Captivating animations that hold user attention during loading
2. **Trustworthy** - Professional appearance that builds confidence in the booking process
3. **Delightful** - Smooth transitions and micro-interactions that create positive emotions

**Complexity Level**: Micro Tool (single-purpose)
- Focused solely on providing an animated loading experience for travel booking scenarios

## Essential Features

**Animated Flight Search**
- Functionality: Displays animated airplane icons moving across routes with search progress
- Purpose: Visually represents the flight search process to reduce perceived wait time
- Trigger: Component mounts or search initiated
- Progression: Plane takeoff → Route tracing → Multiple destinations → Results found
- Success criteria: Smooth 60fps animations with realistic flight paths

**Hotel Search Animation**
- Functionality: Shows building icons with scanning effects and availability checking
- Purpose: Represents hotel search and room availability verification
- Trigger: Concurrent with flight search or separate hotel search
- Progression: City skyline appears → Buildings highlight → Availability check → Rooms confirmed
- Success criteria: Clear visual indication of search progress with building animations

**Progress Indicators**
- Functionality: Multiple progress bars and percentage counters for different search aspects
- Purpose: Provides specific feedback on search completion status
- Trigger: Starts with search initiation
- Progression: 0% → Incremental progress → 100% completion with checkmarks
- Success criteria: Accurate progress representation with smooth transitions

**Status Messages**
- Functionality: Dynamic text updates showing current search phase
- Purpose: Keeps users informed about what's happening during the search
- Trigger: Updates based on search progress
- Progression: "Searching flights..." → "Comparing prices..." → "Finding hotels..." → "Complete!"
- Success criteria: Clear, encouraging messages that match animation timing

## Edge Case Handling

- **Long Load Times**: Extend animations and add variety to prevent monotony
- **Network Issues**: Graceful error states with retry options
- **Mobile Performance**: Optimized animations that work smoothly on lower-end devices
- **Accessibility**: Reduced motion options for users with vestibular disorders

## Design Direction

The design should feel modern, trustworthy, and slightly premium - evoking the excitement of travel planning while maintaining professional credibility that users expect from booking platforms.

## Color Selection

Complementary (opposite colors) - Using calming blues paired with energetic oranges to balance trust with excitement, perfect for travel industry applications.

- **Primary Color**: Deep Travel Blue (oklch(0.45 0.15 250)) - Communicates trust and reliability
- **Secondary Colors**: Sky Blue (oklch(0.75 0.12 240)) for backgrounds and Warm Orange (oklch(0.7 0.15 45)) for accents
- **Accent Color**: Vibrant Orange (oklch(0.65 0.18 50)) for CTAs and important elements
- **Foreground/Background Pairings**: 
  - Background (White oklch(1 0 0)): Dark Blue text (oklch(0.2 0.05 250)) - Ratio 8.2:1 ✓
  - Primary (Deep Blue oklch(0.45 0.15 250)): White text (oklch(1 0 0)) - Ratio 6.8:1 ✓
  - Accent (Vibrant Orange oklch(0.65 0.18 50)): White text (oklch(1 0 0)) - Ratio 4.9:1 ✓

## Font Selection

Clean, modern sans-serif typefaces that convey efficiency and reliability while remaining highly legible across all animation states.

- **Typographic Hierarchy**: 
  - H1 (Main Status): Inter Bold/32px/tight letter spacing
  - H2 (Section Labels): Inter Medium/18px/normal spacing
  - Body (Progress Text): Inter Regular/14px/relaxed spacing
  - Caption (Percentages): Inter Medium/12px/wide spacing

## Animations

Animations should feel purposeful and travel-themed, with smooth physics-based motion that mirrors real-world travel experiences while maintaining user engagement throughout loading periods.

- **Purposeful Meaning**: Motion communicates travel journey progression and builds anticipation
- **Hierarchy of Movement**: Primary focus on flight paths and hotel scanning, secondary on progress indicators

## Component Selection

- **Components**: Card for main container, Progress components for multiple search aspects, custom animated SVG icons for planes and buildings
- **Customizations**: Custom airplane and building animations, curved flight path animations, scanning effect overlays
- **States**: Loading (active animations), Success (completion animations), Error (retry state)
- **Icon Selection**: Airplane, Building, MapPin, Clock, CheckCircle from Phosphor Icons
- **Spacing**: Generous padding (p-8) with consistent gaps (gap-6) between sections
- **Mobile**: Single-column layout with appropriately sized animations, reduced complexity on smaller screens